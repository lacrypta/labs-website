'use client'

import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/components/Logo'
import { Twitter, Discord, Instagram, Github } from '@/components/Icons'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { MapPinHouse } from 'lucide-react'

export default function Component() {
  const t = useTranslations('footer')
  return (
    <div className="w-full py-32 bg-black">
      <div className="flex flex-col gap-8 w-full max-w-[900px] mx-auto px-4">
        <div className="flex-1 flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
            <Logo size="small" />
            <div className="flex items-center">
              <div className="relative w-4 h-4 mr-1">
                <Image src="/img/mate.png" alt="Mate icon" fill />
              </div>
              <p className="text-sm text-white/70">
                {'Minado bloque'} <span>#666.666</span>
              </p>
            </div>
          </div>
          {/* <div>
            <ul>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Comunidad</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Proyectos</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Qué hacemos</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Team</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Tienda</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="lg" asChild>
                  <Link href="#">Blog</Link>
                </Button>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex gap-1 items-center">
            <MapPinHouse className="w-4 h-4" />
            <p className="text-lg">Villanueva 1367, Belgrano, CABA</p>
          </div>
          <ul className="flex gap-2">
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link href="" title="Nostr" target="_blank">
                  <Image
                    src="/img/icon_nostr.png"
                    alt="Nostr icon"
                    width={18}
                    height={18}
                  />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://twitter.com/LaCryptaOk"
                  title="Twitter"
                  target="_blank"
                >
                  <Twitter />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/lacryptaok/"
                  title="Instagram"
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/lacrypta"
                  title="Github"
                  target="_blank"
                >
                  <Github />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://discord.gg/QESv76truh"
                  title="Discord"
                  target="_blank"
                >
                  <Discord />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
