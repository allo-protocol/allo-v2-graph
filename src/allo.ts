import { store} from '@graphprotocol/graph-ts'
import {
  Allo,
  BaseFeeUpdated,
  FeePercentageUpdated,
  Initialized,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  PoolCreated,
  PoolFunded,
  PoolMetadataUpdated,
  RegistryUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StrategyApproved,
  StrategyRemoved,
  TreasuryUpdated
} from "../generated/Allo/Allo"
import { Allo, Pool } from "../generated/schema"
import { _upsertAccount, _upsertAllo, _upsertMetadata, _upsertRole, _upsertRoleAccount } from "./utils"


export function handleRegistryUpdated(event: RegistryUpdated): void {
  const allo = _upsertAllo()
  allo.registry = event.params.registry
  allo.save()
}

export function handleTreasuryUpdated(event: TreasuryUpdated): void {
  const allo = _upsertAllo()
  allo.treasury = event.params.treasury
  allo.save()
}

export function handleBaseFeeUpdated(event: BaseFeeUpdated): void {
  const allo = _upsertAllo()
  allo.baseFee = event.params.baseFee
  allo.save()
}

export function handleFeePercentageUpdated(event: FeePercentageUpdated): void {
  const allo = _upsertAllo()
  allo.feePercentage = event.params.feePercentage
  allo.save()
}

export function handleStrategyApproved(event: StrategyApproved): void {
  const allo = _upsertAllo()
  allo.cloneableStrategies.push(event.params.strategy)
  allo.save()
}

export function handleStrategyRemoved(event: StrategyRemoved): void {
  const allo = _upsertAllo()
  for(let i = 0; i < allo.cloneableStrategies.length; i++) {
    if (allo.cloneableStrategies[i] == event.params.strategy) {
      allo.cloneableStrategies.splice(i, 1)
      allo.save()
      return
    }
  }
}

export function handlePoolCreated(event: PoolCreated): void {

  // create new MetaPtr entity
  const metadataId = _upsertMetadata(event.params.metadata)
  const poolId = event.params.poolId

  const pool = new Pool(poolId)
  pool.allo = _upsertAllo().id
  pool.strategy = event.params.strategy
  pool.metadata = metadataId
  pool.token = event.params.token
  pool.amount = event.params.amount

  // TODO: fix the roles / fetch from contract directly
  pool.adminRole = poolId // bytes32(poolId)
  pool.managerRole = poolId// keccak256(abi.encodePacked(poolId, "admin"))

  pool.createdAt = event.block.timestamp
  pool.updatedAt = event.block.timestamp

  pool.save()
}

export function handlePoolFunded(event: PoolFunded): void {
  const pool = Pool.load(event.params.poolId)
  if (pool == null) {
    return
  }
  pool.amount += event.params.amount
  pool.updatedAt = event.block.timestamp
  pool.save()
}

export function handlePoolMetadataUpdated(event: PoolMetadataUpdated): void {
  const pool = Pool.load(event.params.poolId)
  if (pool == null) {
    return
  }

  // create new MetaPtr entity
  const metadataId = _upsertMetadata(event.params.metadata);

  pool.metadata = metadataId
  pool.updatedAt = event.block.timestamp
  pool.save()
}


export function handleRoleAdminChanged(event: RoleAdminChanged): void {
  // TODO: check if this is needed cause this ideally wouldn't change
}

// TODO: figure out how to track who the Pool admin is set / changed
export function handleRoleGranted(event: RoleGranted): void {
  const roleParam = event.params.role
  const accountParam = event.params.account

  // upsert entities
  const roleId = _upsertRole(roleParam)
  const accountId = _upsertAccount(accountParam)
  // create join entity
  const roleAccountId = _upsertRoleAccount(roleId, accountId)
}

export function handleRoleRevoked(event: RoleRevoked): void {
  const roleParam = event.params.role
  const accountParam = event.params.account

  const roleAccountId = _upsertRoleAccount(roleParam, accountParam)
  store.remove('RoleAccount', roleAccountId)
}

