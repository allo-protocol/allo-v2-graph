import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
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

export function createBaseFeePaidEvent(
  poolId: BigInt,
  amount: BigInt
): BaseFeePaid {
  let baseFeePaidEvent = changetype<BaseFeePaid>(newMockEvent())

  baseFeePaidEvent.parameters = new Array()

  baseFeePaidEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  baseFeePaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return baseFeePaidEvent
}

export function createBaseFeeUpdatedEvent(baseFee: BigInt): BaseFeeUpdated {
  let baseFeeUpdatedEvent = changetype<BaseFeeUpdated>(newMockEvent())

  baseFeeUpdatedEvent.parameters = new Array()

  baseFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseFee",
      ethereum.Value.fromUnsignedBigInt(baseFee)
    )
  )

  return baseFeeUpdatedEvent
}

export function createFeePercentageUpdatedEvent(
  feePercentage: BigInt
): FeePercentageUpdated {
  let feePercentageUpdatedEvent = changetype<FeePercentageUpdated>(
    newMockEvent()
  )

  feePercentageUpdatedEvent.parameters = new Array()

  feePercentageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "feePercentage",
      ethereum.Value.fromUnsignedBigInt(feePercentage)
    )
  )

  return feePercentageUpdatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent = changetype<OwnershipHandoverCanceled>(
    newMockEvent()
  )

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent = changetype<OwnershipHandoverRequested>(
    newMockEvent()
  )

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolCreatedEvent(
  poolId: BigInt,
  identityId: Bytes,
  strategy: Address,
  token: Address,
  amount: BigInt,
  metadata: ethereum.Tuple
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  )

  return poolCreatedEvent
}

export function createPoolFundedEvent(
  poolId: BigInt,
  amount: BigInt,
  fee: BigInt
): PoolFunded {
  let poolFundedEvent = changetype<PoolFunded>(newMockEvent())

  poolFundedEvent.parameters = new Array()

  poolFundedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolFundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  poolFundedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return poolFundedEvent
}

export function createPoolMetadataUpdatedEvent(
  poolId: BigInt,
  metadata: ethereum.Tuple
): PoolMetadataUpdated {
  let poolMetadataUpdatedEvent = changetype<PoolMetadataUpdated>(newMockEvent())

  poolMetadataUpdatedEvent.parameters = new Array()

  poolMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  poolMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  )

  return poolMetadataUpdatedEvent
}

export function createRegistryUpdatedEvent(registry: Address): RegistryUpdated {
  let registryUpdatedEvent = changetype<RegistryUpdated>(newMockEvent())

  registryUpdatedEvent.parameters = new Array()

  registryUpdatedEvent.parameters.push(
    new ethereum.EventParam("registry", ethereum.Value.fromAddress(registry))
  )

  return registryUpdatedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createStrategyApprovedEvent(
  strategy: Address
): StrategyApproved {
  let strategyApprovedEvent = changetype<StrategyApproved>(newMockEvent())

  strategyApprovedEvent.parameters = new Array()

  strategyApprovedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return strategyApprovedEvent
}

export function createStrategyRemovedEvent(strategy: Address): StrategyRemoved {
  let strategyRemovedEvent = changetype<StrategyRemoved>(newMockEvent())

  strategyRemovedEvent.parameters = new Array()

  strategyRemovedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return strategyRemovedEvent
}

export function createTreasuryUpdatedEvent(treasury: Address): TreasuryUpdated {
  let treasuryUpdatedEvent = changetype<TreasuryUpdated>(newMockEvent())

  treasuryUpdatedEvent.parameters = new Array()

  treasuryUpdatedEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return treasuryUpdatedEvent
}
