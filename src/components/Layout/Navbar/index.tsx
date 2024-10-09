'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { getBlocks, getBtcPrice } from '@/lib/utils/bitcoin'

import Logo from '@/components/Logo'

export default function Component() {
  const t = useTranslations('navbar')

  const [btcPrice, setBtcPrice] = useState<number | null>(null)
  const [lastBlock, setLastBlock] = useState<number | null>(null)

  useEffect(() => {
    async function fetchData() {
      const price = await getBtcPrice()
      setBtcPrice(price)

      const block = await getBlocks()
      setLastBlock(block)
    }

    fetchData()
  }, [])

  return (
    <div className="fixed z-20 top-0 lef-0 flex align-center w-full h-[60px] bg-red-300">
      <div className="relative flex items-center w-full max-w-[900px] mx-auto px-4">
        {/* <Flex> */}
        <Logo size="medium" />
        {/* <LocaleSwitcher /> */}
        {/* </Flex> */}
        <ul className="hidden gap-2">
          <li>
            <a href="#">{t('HOME')}</a>
          </li>
          <li>
            <a href="#">{t('ABOUT_US')}</a>
          </li>
          <li>
            <a href="#">{t('PROJECTS')}</a>
          </li>
          <li>
            <a href="#">{t('VALUES')}</a>
          </li>
        </ul>
        <div className="hidden">
          <p>
            <strong>{t('bitcoin_price')}</strong>
            <span style={{ textAlign: 'left', display: 'inline-block' }}>
              {btcPrice !== null ? btcPrice : t('loading')}
            </span>
          </p>
          <p>
            <strong>{t('last_block')}</strong>
            <span style={{ textAlign: 'left', display: 'inline-block' }}>
              {lastBlock !== null ? lastBlock : t('loading')}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
