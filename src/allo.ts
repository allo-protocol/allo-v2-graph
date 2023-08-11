import { Bytes, ByteArray, crypto, store } from '@graphprotocol/graph-ts';
import {
  BaseFeeUpdated,
  FeePercentageUpdated,
  PoolCreated,
  PoolFunded,
  PoolMetadataUpdated,
  RegistryUpdated,
  // RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StrategyApproved,
  StrategyRemoved,
  TreasuryUpdated
} from "../generated/Allo/Allo";
import { Pool } from "../generated/schema";
import {
  _upsertAllo,
  _upsertMetadata,
  _upsertRoleAccount
} from "./utils";


export function handleRegistryUpdated(event: RegistryUpdated): void {
  const allo = _upsertAllo();
  allo.registry = event.params.registry;
  allo.save();
}

export function handleTreasuryUpdated(event: TreasuryUpdated): void {
  const allo = _upsertAllo();
  allo.treasury = event.params.treasury;
  allo.save();
}

export function handleBaseFeeUpdated(event: BaseFeeUpdated): void {
  const allo = _upsertAllo();
  allo.baseFee = event.params.baseFee;
  allo.save();
}

export function handleFeePercentageUpdated(event: FeePercentageUpdated): void {
  const allo = _upsertAllo();
  allo.feePercentage = event.params.feePercentage;
  allo.save();
}

export function handleStrategyApproved(event: StrategyApproved): void {
  const allo = _upsertAllo();
  allo.cloneableStrategies.push(event.params.strategy);
  allo.save();
}

export function handleStrategyRemoved(event: StrategyRemoved): void {
  const allo = _upsertAllo();
  for (let i = 0; i < allo.cloneableStrategies.length; i++) {
    if (allo.cloneableStrategies[i] == event.params.strategy) {
      allo.cloneableStrategies.splice(i, 1);
      allo.save();
      return ;
    }
  }
}

export function handlePoolCreated(event: PoolCreated): void {

  // create new MetaPtr entity
  const protocol = event.params.metadata[0].toI32();
  const pointer = event.params.metadata[1].toString();
  const metadataId = _upsertMetadata(protocol, pointer);
  const poolId = event.params.poolId;

  const pool = new Pool(poolId.toString());
  pool.allo = _upsertAllo().id;
  pool.strategy = event.params.strategy;
  pool.metadata = metadataId;
  pool.token = event.params.token;
  pool.amount = event.params.amount;

  // TODO: fix the roles / fetch from contract directly
  pool.adminRole = Bytes.fromBigInt(poolId); // bytes32(poolId)
  pool.managerRole = crypto.keccak256(ByteArray.fromUTF8(poolId, "admin")); // keccak256(abi.encodePacked(poolId, "admin"))

  pool.createdAt = event.block.timestamp;
  pool.updatedAt = event.block.timestamp;

  pool.save();
}

export function handlePoolFunded(event: PoolFunded): void {
  const pool = Pool.load(event.params.poolId.toString());
  if (pool == null) {
    return ;
  }
  pool.amount.plus(event.params.amount);
  pool.updatedAt = event.block.timestamp;
  pool.save();
}

export function handlePoolMetadataUpdated(event: PoolMetadataUpdated): void {
  const pool = Pool.load(event.params.poolId.toString());
  if (pool == null) {
    return ;
  }

  // create new MetaPtr entity
  const protocol = event.params.metadata[0].toI32();
  const pointer = event.params.metadata[1].toString();
  const metadataId = _upsertMetadata(protocol, pointer);

  pool.metadata = metadataId;
  pool.updatedAt = event.block.timestamp;
  pool.save();
}


// export function handleRoleAdminChanged(event: RoleAdminChanged): void {
//   // TODO: check if this is needed cause this ideally wouldn't change
// }

// TODO: figure out how to track who the Pool admin is set / changed
export function handleRoleGranted(event: RoleGranted): void {
  const roleParam = event.params.role;
  const accountParam = event.params.account;

  // create role and account entity
  _upsertRoleAccount(roleParam, accountParam);
}

export function handleRoleRevoked(event: RoleRevoked): void {
  const roleParam = event.params.role;
  const accountParam = event.params.account;

  const roleAccountEntity = _upsertRoleAccount(roleParam, accountParam);
  store.remove('RoleAccount', roleAccountEntity.id);
}

