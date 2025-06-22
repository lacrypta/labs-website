// src/components/LocaleSwitcher.tsx

'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  if (!pathname) return null

  const onSelectChange = (nextLocale: string) => {
    const newPath = pathname.startsWith(`/${locale}`)
      ? pathname.substring(`/${locale}`.length) || '/'
      : pathname

    const finalUrl = `/${nextLocale}${newPath}`

    startTransition(() => {
      router.replace(finalUrl)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" disabled={isPending}>
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => onSelectChange('en')}
        >
          <span>English</span>
          <span>🇺🇸</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => onSelectChange('es')}
        >
          <span>Español</span>
          <span>🇦🇷</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
