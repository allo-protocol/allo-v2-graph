

export function _upsertAccount(id: string): string {
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
    account.save()
  }
  return id;
}