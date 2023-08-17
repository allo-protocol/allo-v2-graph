import { Address, ByteArray, Bytes, crypto } from "@graphprotocol/graph-ts";
import {
  Account,
  Allo,
  Metadata,
  Role,
  RoleAccount,
} from "../generated/schema";

/**
 * Returns keccak256 of array after elements are joined by '-'
 * @param Array<string>
 * @returns keccak256
 */
export function _generateID(array: Array<string>): string {
  return crypto.keccak256(ByteArray.fromUTF8(array.join("-"))).toBase58();
}

export function _upsertMetadata(protocol: i32, pointer: string): string {
  const metadataId = _generateID([protocol.toString(), pointer.toString()]);
  const metadataEntity = new Metadata(metadataId);
  metadataEntity.protocol = protocol;
  metadataEntity.pointer = pointer;
  metadataEntity.save();

  return metadataId;
}

/**
 * Checks if Account exists, if not creates new Account
 * @param id string
 * @returns string
 */
export function _upsertAccount(id: Bytes): Bytes {
  let accountEntity = Account.load(id);
  if (accountEntity == null) {
    accountEntity = new Account(id);
    accountEntity.save();
  }
  return id;
}

/**
 * Checks if Role exists, if not creates new Role
 * @param id string
 * @returns string
 */
export function _upsertRole(id: Bytes): Bytes {
  let roleEntity = Role.load(id);
  if (roleEntity == null) {
    roleEntity = new Role(id);
    roleEntity.save();
  }
  return id;
}

/**
 * Checks if RoleAccount exists, if not creates new RoleAccount
 * @param roldId string
 * @param accountId string
 * @returns RoleAccount
 */
export function _upsertRoleAccount(roleParam: Bytes, accountParam: Address): RoleAccount {
 
  // Upsert role and account
  const roleId = _upsertRole(roleParam);
  const accountId = _upsertAccount(accountParam);
 
  const id = `${roleId}-${accountId.toHexString()}`;

  let roleAccountEntity = RoleAccount.load(id);
  if (roleAccountEntity == null) {
    roleAccountEntity = new RoleAccount(id);
    roleAccountEntity.role = roleId;
    roleAccountEntity.account = accountId;
    roleAccountEntity.id = id;
    roleAccountEntity.save();
  }
  return roleAccountEntity;
}

// // TODO: Finish this function
// export function _upsertAdminRole(roleParam: Bytes, accountParam: Address): RoleAccount {
//   const roleAccountEntity = _upsertRoleAccount(roleParam, accountParam);

//   return roleAccountEntity;
// }

/**
 * Checks if Allo exists, if not creates new Allo
 * @returns Allo
 */
export function _upsertAllo(): Allo {
  let alloEntity = Allo.load("0");
  if (alloEntity == null) {
    alloEntity = new Allo("0");
  }
  return alloEntity;
}
