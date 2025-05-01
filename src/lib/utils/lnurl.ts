export function generateLUD06(
  pubkey: string,
  gatewayUrl: string = 'https://api.lacrypta.ar',
  nostrPubkey: string = 'e17feb5f2cf83546bcf7fd9c8237b05275be958bd521543c2285ffc6c2d654b3'
) {
  return {
    status: 'OK',
    tag: 'payRequest',
    commentAllowed: 255,
    callback: `${gatewayUrl}/lnurlp/${pubkey}/callback`,
    metadata: '[["text/plain", "lawallet"]]',
    minSendable: 1000,
    maxSendable: 10000000000,
    payerData: {
      name: { mandatory: false },
      email: { mandatory: false },
      pubkey: { mandatory: false }
    },
    nostrPubkey,
    allowsNostr: true,
    federationId: 'lawallet.ar',
    accountPubKey: pubkey
  }
}
