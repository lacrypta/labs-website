'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  ArrowRight,
  Cpu,
  Github,
  Layers3,
  Radio,
  Server,
  Workflow,
  Zap
} from 'lucide-react'

import Logo from '@/components/Logo'
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'

const publicStack = [
  {
    key: 'bitcoin',
    icon: Server
  },
  {
    key: 'lightning',
    icon: Zap
  },
  {
    key: 'nostr',
    icon: Radio
  },
  {
    key: 'blossom',
    icon: Layers3
  }
] as const

const pillars = [
  {
    key: 'learn',
    icon: Workflow
  },
  {
    key: 'build',
    icon: Github
  },
  {
    key: 'ship',
    icon: Cpu
  }
] as const

export default function CryptoLabsLanding() {
  const t = useTranslations('cryptoLabs')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,249,80,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(179,249,80,0.14),transparent_22%),linear-gradient(180deg,rgba(179,249,80,0.08),transparent_30%)]" />
        <Container className="relative py-8 sm:py-10">
          <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <Logo size="medium" />
              <div className="hidden h-5 w-px bg-white/10 sm:block" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary sm:text-sm">
                Crypto Labs
              </span>
            </div>
            <Button asChild size="sm" className="h-10 px-4">
              <a href="#newsletter">{t('navCta')}</a>
            </Button>
          </div>
        </Container>

        <Container className="relative flex flex-col gap-14 py-10 sm:py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t('eyebrow')}
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
              <div>
                <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                  {t('title')}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl">
                  {t('subtitle')}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-w-[220px]">
                    <a href="#newsletter">
                      {t('primaryCta')}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-w-[220px] border-white/15 bg-white/5 hover:bg-white/10"
                  >
                    <a href="#stack">{t('secondaryCta')}</a>
                  </Button>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  {t('highlight.label')}
                </p>
                <div className="mt-5 space-y-4 text-sm text-white/70">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-bold text-white">
                      {t('highlight.hackathonsTitle')}
                    </p>
                    <p className="mt-2 leading-relaxed">
                      {t('highlight.hackathonsDescription')}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-bold text-white">
                      {t('highlight.reposTitle')}
                    </p>
                    <p className="mt-2 leading-relaxed">
                      {t('highlight.reposDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">
                  {t(`pillars.${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {t(`pillars.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <section id="about">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary">
                {t('mission.eyebrow')}
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                {t('mission.title')}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
                {t('mission.description')}
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-primary/10 to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
                {t('mission.boxLabel')}
              </p>
              <ul className="mt-6 space-y-4 text-base text-white/80">
                <li>{t('mission.points.one')}</li>
                <li>{t('mission.points.two')}</li>
                <li>{t('mission.points.three')}</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="stack" className="border-y border-white/10 bg-white/[0.02]">
        <Container className="py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-primary">
              {t('stack.eyebrow')}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              {t('stack.title')}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/72">
              {t('stack.description')}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {publicStack.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="group rounded-[30px] border border-white/10 bg-black/20 p-6 transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary transition-colors group-hover:bg-primary group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45">
                    {t(`stack.items.${key}.tag`)}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {t(`stack.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {t(`stack.items.${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {t('programs.eyebrow')}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
              {t('programs.title')}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/72">
              {t('programs.description')}
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-lg font-bold text-white">
                  {t('programs.hackathonsTitle')}
                </p>
                <p className="mt-2 text-white/70">
                  {t('programs.hackathonsDescription')}
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <p className="text-lg font-bold text-white">
                  {t('programs.opensourceTitle')}
                </p>
                <p className="mt-2 text-white/70">
                  {t('programs.opensourceDescription')}
                </p>
              </div>
            </div>
          </div>

          <div
            id="newsletter"
            className="rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary/16 via-primary/6 to-transparent p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              {t('newsletter.eyebrow')}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
              {t('newsletter.title')}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/72">
              {t('newsletter.description')}
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/25 p-6">
              <p className="text-sm leading-relaxed text-white/70">
                {t('newsletter.placeholder')}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="sm:min-w-[220px]">
                  <Link href="https://lacrypta.ar" target="_blank">
                    {t('newsletter.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 hover:bg-white/10"
                >
                  <Link href="https://github.com/lacrypta" target="_blank">
                    {t('newsletter.secondaryCta')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
