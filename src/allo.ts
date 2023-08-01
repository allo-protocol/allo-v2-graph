import { BigInt } from "@graphprotocol/graph-ts"
import {
  Allo,
  BaseFeePaid,
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
import { ExampleEntity } from "../generated/schema"

export function handleBaseFeePaid(event: BaseFeePaid): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.poolId = event.params.poolId
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.FEE_DENOMINATOR(...)
  // - contract.NATIVE(...)
  // - contract.batchRegisterRecipient(...)
  // - contract.getBaseFee(...)
  // - contract.getFeePercentage(...)
  // - contract.getPool(...)
  // - contract.getRegistry(...)
  // - contract.getRoleAdmin(...)
  // - contract.getStrategy(...)
  // - contract.getTreasury(...)
  // - contract.hasRole(...)
  // - contract.isCloneableStrategy(...)
  // - contract.isPoolAdmin(...)
  // - contract.isPoolManager(...)
  // - contract.owner(...)
  // - contract.ownershipHandoverExpiresAt(...)
  // - contract.supportsInterface(...)
}

export function handleBaseFeeUpdated(event: BaseFeeUpdated): void {}

export function handleFeePercentageUpdated(event: FeePercentageUpdated): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipHandoverCanceled(
  event: OwnershipHandoverCanceled
): void {}

export function handleOwnershipHandoverRequested(
  event: OwnershipHandoverRequested
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePoolCreated(event: PoolCreated): void {}

export function handlePoolFunded(event: PoolFunded): void {}

export function handlePoolMetadataUpdated(event: PoolMetadataUpdated): void {}

export function handleRegistryUpdated(event: RegistryUpdated): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleStrategyApproved(event: StrategyApproved): void {}

export function handleStrategyRemoved(event: StrategyRemoved): void {}

export function handleTreasuryUpdated(event: TreasuryUpdated): void {}
