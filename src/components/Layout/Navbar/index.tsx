'use client'

import Container from '../Container'

import Logo from '@/components/Logo'

import { useTranslations } from 'next-intl'
import { Navbar } from './styles'
import { getBlocks, getBtcPrice } from '@/lib/utils/bitcoin'
import { useEffect, useState } from 'react'

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
    <Navbar>
      <Container>
        {/* <Flex> */}
        <Logo size="medium" />
        {/* <LocaleSwitcher /> */}
        {/* </Flex> */}
        <ul>
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
        <div>
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
      </Container>
    </Navbar>
  )
}
