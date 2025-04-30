import { NostrEvent } from 'nostr-tools'

export function validateSchema(event: NostrEvent): boolean {
  if (1112 !== event.kind!) {
    throw new Error(`Invalid kind ${event.kind!} for event ${event.id!}`)
  }
  const subKindTags = event.tags.filter(t => 't' === t[0]!)
  if (1 !== subKindTags.length) {
    throw new Error(`Event must have exactly one subkind`)
  }
  const subkind = subKindTags[0]![1]
  switch (subkind) {
    case 'create-nonce':
    case 'create-identity':
    case 'query-voucher':
    case 'identity-transfer':
      return true
    default:
      throw new Error(`Invalid subkind for ${subkind}`)
  }
}
