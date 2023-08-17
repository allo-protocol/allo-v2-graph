/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
import {
  ProfileCreated,
  ProfileMetadataUpdated,
  ProfileNameUpdated,
  ProfileOwnerUpdated,
  ProfilePendingOwnerUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
} from "../../generated/Registry/Registry";

export function createProfileCreatedEvent(
  profileId: Bytes,
  nonce: BigInt,
  name: string,
  metadata: ethereum.Tuple,
  owner: Address,
  anchor: Address
): ProfileCreated {
  const profileCreatedEvent = changetype<ProfileCreated>(newMockEvent());

  // profileCreatedEvent.parameters = new Array();
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "profileId",
  //     ethereum.Value.fromFixedBytes(profileId)
  //   )
  // );
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  // );
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam("name", ethereum.Value.fromString(name))
  // );
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  // );
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  // );
  // profileCreatedEvent.parameters.push(
  //   new ethereum.EventParam("anchor", ethereum.Value.fromAddress(anchor))
  // );

  return profileCreatedEvent;
}

export function createProfileMetadataUpdatedEvent(
  profileId: Bytes,
  metadata: ethereum.Tuple
): ProfileMetadataUpdated {
  const profileMetadataUpdatedEvent = changetype<ProfileMetadataUpdated>(
    newMockEvent()
  );

  // profileMetadataUpdatedEvent.parameters = new Array();

  // profileMetadataUpdatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "profileId",
  //     ethereum.Value.fromFixedBytes(profileId)
  //   )
  // );
  // profileMetadataUpdatedEvent.parameters.push(
  //   new ethereum.EventParam("metadata", ethereum.Value.fromTuple(metadata))
  // );

  return profileMetadataUpdatedEvent;
}

export function createProfileNameUpdatedEvent(
  profileId: Bytes,
  name: string,
  anchor: Address
): ProfileNameUpdated {
  const profileNameUpdatedEvent = changetype<ProfileNameUpdated>(
    newMockEvent()
  );

  // profileNameUpdatedEvent.parameters = new Array();

  // profileNameUpdatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "profileId",
  //     ethereum.Value.fromFixedBytes(profileId)
  //   )
  // );
  // profileNameUpdatedEvent.parameters.push(
  //   new ethereum.EventParam("name", ethereum.Value.fromString(name))
  // );
  // profileNameUpdatedEvent.parameters.push(
  //   new ethereum.EventParam("anchor", ethereum.Value.fromAddress(anchor))
  // );

  return profileNameUpdatedEvent;
}

export function createProfileOwnerUpdatedEvent(
  profileId: Bytes,
  owner: Address
): ProfileOwnerUpdated {
  const profileOwnerUpdatedEvent = changetype<ProfileOwnerUpdated>(
    newMockEvent()
  );

  // profileOwnerUpdatedEvent.parameters = new Array();

  // profileOwnerUpdatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "profileId",
  //     ethereum.Value.fromFixedBytes(profileId)
  //   )
  // );
  // profileOwnerUpdatedEvent.parameters.push(
  //   new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  // );

  return profileOwnerUpdatedEvent;
}

export function createProfilePendingOwnerUpdatedEvent(
  profileId: Bytes,
  pendingOwner: Address
): ProfilePendingOwnerUpdated {
  const profilePendingOwnerUpdatedEvent =
    changetype<ProfilePendingOwnerUpdated>(newMockEvent());

  // profilePendingOwnerUpdatedEvent.parameters = new Array();

  // profilePendingOwnerUpdatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "profileId",
  //     ethereum.Value.fromFixedBytes(profileId)
  //   )
  // );
  // profilePendingOwnerUpdatedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "pendingOwner",
  //     ethereum.Value.fromAddress(pendingOwner)
  //   )
  // );

  return profilePendingOwnerUpdatedEvent;
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  const roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent());

  // roleAdminChangedEvent.parameters = new Array();

  // roleAdminChangedEvent.parameters.push(
  //   new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  // );
  // roleAdminChangedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "previousAdminRole",
  //     ethereum.Value.fromFixedBytes(previousAdminRole)
  //   )
  // );
  // roleAdminChangedEvent.parameters.push(
  //   new ethereum.EventParam(
  //     "newAdminRole",
  //     ethereum.Value.fromFixedBytes(newAdminRole)
  //   )
  // );

  return roleAdminChangedEvent;
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  const roleGrantedEvent = changetype<RoleGranted>(newMockEvent());

  // roleGrantedEvent.parameters = new Array();

  // roleGrantedEvent.parameters.push(
  //   new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  // );
  // roleGrantedEvent.parameters.push(
  //   new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  // );
  // roleGrantedEvent.parameters.push(
  //   new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  // );

  return roleGrantedEvent;
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  const roleRevokedEvent = changetype<RoleRevoked>(newMockEvent());

  // roleRevokedEvent.parameters = new Array();

  // roleRevokedEvent.parameters.push(
  //   new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  // );
  // roleRevokedEvent.parameters.push(
  //   new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  // );
  // roleRevokedEvent.parameters.push(
  //   new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  // );

  return roleRevokedEvent;
}
