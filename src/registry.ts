import { store } from "@graphprotocol/graph-ts";

import {
  ProfileCreated,
  ProfileMetadataUpdated,
  ProfileNameUpdated,
  ProfileOwnerUpdated,
  RoleGranted,
  RoleRevoked,
} from "../generated/Registry/Registry";
import { Metadata, Profile } from "../generated/schema";
import {
  _upsertAccount,
  _upsertMetadata,
  _upsertRole,
  _upsertRoleAccount,
} from "./utils";

export function handleProfileCreated(event: ProfileCreated): void {
  // create new Metadata entity
  const _metadata = event.params.metadata;
  const metadataId = event.transaction.hash;
  const metadata = new Metadata(metadataId.toString());
  metadata.protocol = _metadata[0].toI32();
  metadata.pointer = _metadata[1].toString();
  metadata.save();

  const profileId = event.params.profileId;

  // create new account entity for the profile owner
  const ownerAccountEntity = _upsertAccount(event.params.owner);

  // create new role entity which will be assigned to members
  const memberRoleId = _upsertRole(profileId);

  // create new Profile entity
  const profileEntity = new Profile(profileId.toString());
  profileEntity.name = event.params.name;
  profileEntity.metadata = metadataId.toString();
  profileEntity.anchor = event.params.anchor;
  profileEntity.nonce = event.params.nonce;
  profileEntity.owner = ownerAccountEntity;
  profileEntity.memberRole = memberRoleId;

  profileEntity.createdAt = event.block.timestamp;
  profileEntity.updatedAt = event.block.timestamp;

  profileEntity.save();
}

export function handleProfileMetadataUpdated(
  event: ProfileMetadataUpdated
): void {
  const profileId = event.transaction.from;
  const profileEntity = Profile.load(profileId.toString());
  if (profileEntity == null) {
    return;
  }

  // create new MetaPtr entity
  const protocol = event.params.metadata[0].toI32();
  const pointer = event.params.metadata[1].toString();
  const metadataId = _upsertMetadata(protocol, pointer);

  profileEntity.metadata = metadataId;

  profileEntity.updatedAt = event.block.timestamp;

  profileEntity.save();
}

export function handleProfileNameUpdated(event: ProfileNameUpdated): void {
  const profileId = event.params.profileId;
  const profileEntity = Profile.load(profileId.toString());
  if (profileEntity == null) {
    return;
  }
  profileEntity.name = event.params.name;
  profileEntity.anchor = event.params.anchor;
  profileEntity.save();
}

export function handleProfileOwnerUpdated(event: ProfileOwnerUpdated): void {
  const profileId = event.params.profileId;
  const profileEntity = Profile.load(profileId.toString());
  if (profileEntity == null) {
    return;
  }
  profileEntity.owner = event.params.owner;

  profileEntity.updatedAt = event.block.timestamp;

  profileEntity.save();
}

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
