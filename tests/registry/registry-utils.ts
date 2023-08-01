import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  IdentityCreated,
  IdentityMetadataUpdated,
  IdentityNameUpdated,
  IdentityOwnerUpdated,
  IdentityPendingOwnerUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/Registry/Registry"

export function createIdentityCreatedEvent(
  identityId: Bytes,
  nonce: BigInt,
  name: string,
  metadata: ethereum.Tuple,
  owner: Address,
  anchor: Address
): IdentityCreated {
  let identityCreatedEvent = changetype<IdentityCreated>(newMockEvent())

  identityCreatedEvent.parameters = new Array()

  identityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  identityCreatedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  identityCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  identityCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  )
  identityCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  identityCreatedEvent.parameters.push(
    new ethereum.EventParam("anchor", ethereum.Value.fromAddress(anchor))
  )

  return identityCreatedEvent
}

export function createIdentityMetadataUpdatedEvent(
  identityId: Bytes,
  metadata: ethereum.Tuple
): IdentityMetadataUpdated {
  let identityMetadataUpdatedEvent = changetype<IdentityMetadataUpdated>(
    newMockEvent()
  )

  identityMetadataUpdatedEvent.parameters = new Array()

  identityMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  identityMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  )

  return identityMetadataUpdatedEvent
}

export function createIdentityNameUpdatedEvent(
  identityId: Bytes,
  name: string,
  anchor: Address
): IdentityNameUpdated {
  let identityNameUpdatedEvent = changetype<IdentityNameUpdated>(newMockEvent())

  identityNameUpdatedEvent.parameters = new Array()

  identityNameUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  identityNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  identityNameUpdatedEvent.parameters.push(
    new ethereum.EventParam("anchor", ethereum.Value.fromAddress(anchor))
  )

  return identityNameUpdatedEvent
}

export function createIdentityOwnerUpdatedEvent(
  identityId: Bytes,
  owner: Address
): IdentityOwnerUpdated {
  let identityOwnerUpdatedEvent = changetype<IdentityOwnerUpdated>(
    newMockEvent()
  )

  identityOwnerUpdatedEvent.parameters = new Array()

  identityOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  identityOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return identityOwnerUpdatedEvent
}

export function createIdentityPendingOwnerUpdatedEvent(
  identityId: Bytes,
  pendingOwner: Address
): IdentityPendingOwnerUpdated {
  let identityPendingOwnerUpdatedEvent = changetype<
    IdentityPendingOwnerUpdated
  >(newMockEvent())

  identityPendingOwnerUpdatedEvent.parameters = new Array()

  identityPendingOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "identityId",
      ethereum.Value.fromFixedBytes(identityId)
    )
  )
  identityPendingOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return identityPendingOwnerUpdatedEvent
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
