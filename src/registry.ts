import { BigInt } from "@graphprotocol/graph-ts"
import {
  Registry,
  IdentityCreated,
  IdentityMetadataUpdated,
  IdentityNameUpdated,
  IdentityOwnerUpdated,
  IdentityPendingOwnerUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/Registry/Registry"
import { Profile } from "../generated/schema"
import { _upsertAccount } from "./utils"

export function handleIdentityCreated(event: IdentityCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  // create new Metadata entity
  const _metadata = event.params.metadata
  const metadataId = event.transaction.hash
  const metadata = new Metadata(metadataId)
  metadata.protocol = _metadata[0].toI32()
  metadata.pointer = _metadata[1].toString()
  metadata.save()

  // upsert new account
  const accountId = _upsertAccount(event.params.owner)

  // create new Profile entity
  const profileEntity = new Profile(event.transaction.from)
  profileEntity.identityId = event.params.identityId
  profileEntity.nonce = event.params.nonce
  profileEntity.owner = accountId
  profileEntity.metadata = metadataId

  profileEntity.save()
}

export function handleIdentityMetadataUpdated(
  event: IdentityMetadataUpdated
): void {
  const profileId = event.transaction.from
  const profile = Profile.load(profileId)
  if (profile == null) {
    return
  }
  
  // create new MetaPtr entity
  const metadataId = event.transaction.hash
  const _metadata = event.params.metadata
  const metadata = new Metadata(metadataId)
  metadata.protocol = _metadata[0].toI32()
  metadata.pointer = _metadata[1].toString()
  metadata.save()

  profile.metadata = metadataId
  profile.save()
}

export function handleIdentityNameUpdated(event: IdentityNameUpdated): void {
  const identityId = event.params.identityId
  const profile = Profile.load(identityId)
  if (profile == null) {
    return
  }
  profile.name = event.params.name
  profile.anchor = event.params.anchor
  profile.save()
}

export function handleIdentityOwnerUpdated(event: IdentityOwnerUpdated): void {
  const identityId = event.params.identityId
  const profile = Profile.load(identityId)
  if (profile == null) {
    return
  }
  profile.owner = event.params.owner
  profile.save()
}

export function handleRoleGranted(event: RoleGranted): void {
  // const id = event.params.role

  // const accountId = _upsertAccount(id)
  // const profile = Profile.load(id)
  // if (!profile) {
  //   return
  // }

  // profile.members.push(accountId)
  // TODO
}

export function handleRoleRevoked(event: RoleRevoked): void {
  // const id = event.params.role

  // const accountId = _upsertAccount(id)
  // const profile = Profile.load(id)
  // if (!profile) {
  //   return
  // }
  // TODO
}
