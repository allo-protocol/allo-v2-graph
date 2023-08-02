import { crypto} from '@graphprotocol/graph-ts'
import { ByteArray } from '@graphprotocol/graph-ts';
import {
  Account,
  Metadata,
  Role,
  RoleAccount,
  Allo
} from '../generated/schema';

/**
 * Returns keccak256 of array after elements are joined by '-'
 * @param Array<string>
 * @returns keccak256
 */
export function _generateID(array: Array<string>): string {
  return crypto.keccak256(
    ByteArray.fromUTF8(array.join('-'))
  ).toBase58();
}

export function _upsertMetadata(
  metadataParam: any
): string {

  const protocol = metadataParam[0].toI32()
  const pointer = metadataParam[1].toString()

  const metadataId = _generateID([
    protocol.toString(),
    pointer.toString()
  ])
  const metadataEntity = new Metadata(metadataId)
  metadataEntity.protocol = protocol
  metadataEntity.pointer = pointer
  metadataEntity.save()

  return metadataId;
}

/**
 * Checks if Account exists, if not creates new Account
 * @param id string
 * @returns string
 */
export function _upsertAccount(id: string): string {
  let accountEntity = Account.load(id)
  if (accountEntity == null) {
    accountEntity = new Account(id)
    accountEntity.save()
  }
  return id;
}

/**
 * Checks if Role exists, if not creates new Role
 * @param id string
 * @returns string
 */
export function _upsertRole(id: string): string {
  let roleEntity = Role.load(id)
  if (roleEntity == null) {
    roleEntity = new Role(id)
    roleEntity.save()
  }
  return id;
}


/**
 * Checks if RoleAccount exists, if not creates new RoleAccount
 * @param roldId string
 * @param accountId string
 * @returns string
 */
export function _upsertRoleAccount(roleId: string, accountId: string): string {
  const id = `${roleId}-${accountId}`
  let roleAccountEntity = RoleAccount.load(id)
  if (roleAccountEntity == null) {
    roleAccountEntity = new Role(id)
    roleAccountEntity.save()
  }
  return id;
}

/**
 * Checks if Allo exists, if not creates new Allo
 * @returns Allo
 */
export function _upsertAllo(): Allo {
  let alloEntity = Allo.load('0')
  if (alloEntity == null) {
    alloEntity = new Allo('0')
  }
  return alloEntity;
}