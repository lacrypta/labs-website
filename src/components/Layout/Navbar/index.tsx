import { useTranslations } from 'next-intl'
import { StoreIcon } from 'lucide-react'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const TALLY_ID = process.env.TALLY || ''

export default function Component() {
  const t = useTranslations('navbar')

  return (
    <div className="fixed z-30 top-0 lef-0 flex align-center w-full h-[60px] bg-background border border-input">
      <div className="relative flex items-center justify-between gap-4 w-full max-w-[900px] mx-auto px-4">
        {/* <Flex> */}
        <Logo size="medium" />

        <div className="flex gap-2">
          {!!TALLY_ID && (
            <Button
              data-tally-open={TALLY_ID}
              data-tally-overlay="1"
              data-tally-width="380"
              data-tally-align-left="1"
              data-tally-auto-close="4000"
            >
              {t('cta')}
            </Button>
          )}
          <Button variant="secondary" asChild>
            <Link href="https://shop.lacrypta.ar/" target="_blank">
              <StoreIcon className="w-4 h-4" />
              <span className="hidden md:flex">Shop</span>
            </Link>
          </Button>
        </div>
        {/* </Flex> */}
        {/* <ul className="hidden gap-2">
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
        </ul> */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
