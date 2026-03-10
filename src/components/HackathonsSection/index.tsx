'use client'

import React from 'react'
import { Container } from '@/components/container'

const hackathons = [
  {
    month: 'MAR',
    emoji: '⚡',
    name: 'FOUNDATIONS',
    subtitle: 'Lightning Payments Basics',
    level: 1
  },
  {
    month: 'ABR',
    emoji: '🔐',
    name: 'IDENTITY',
    subtitle: 'Nostr Identity & Social',
    level: 1
  },
  {
    month: 'MAY',
    emoji: '💜',
    name: 'ZAPS',
    subtitle: 'Lightning + Nostr Integration',
    level: 2
  },
  {
    month: 'JUN',
    emoji: '🛒',
    name: 'COMMERCE',
    subtitle: 'Lightning Stores & Checkout',
    level: 2
  },
  {
    month: 'JUL',
    emoji: '📸',
    name: 'MEDIA',
    subtitle: 'Decentralized Storage',
    level: 3
  },
  {
    month: 'AGO',
    emoji: '🤖',
    name: 'AI AGENTS',
    subtitle: 'Bots & Automation',
    level: 3
  },
  {
    month: 'SEP',
    emoji: '🏗️',
    name: 'INFRASTRUCTURE',
    subtitle: 'Nodes, Routing, Liquidity',
    level: 4
  },
  {
    month: 'OCT',
    emoji: '🌐',
    name: 'INTEGRATION',
    subtitle: 'Full-Stack Production Apps',
    level: 4
  }
]

function LevelDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-[#ff8c00]' : 'bg-border'}`}
        />
      ))}
    </div>
  )
}

export default function HackathonsSection() {
  return (
    <section className="w-full py-24 bg-card/30">
      <Container>
        <div className="flex flex-col gap-12 max-w-[860px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff8c00]" />
                <span className="text-sm font-mono text-[#ff8c00] uppercase tracking-widest">
                  Aprendé haciendo
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold">
                Lightning Hackathons
                <br />
                2026
              </h2>
              <p className="text-muted-foreground text-lg max-w-[480px]">
                8 meses. 8 desafíos. Jurado 100% AI. 16M sats en premios pagados
                en Bitcoin vía Lightning Network.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-mono text-[#ff8c00]">
                  16M
                </span>
                <span className="text-muted-foreground font-mono">sats</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ~$9,600 USD en premios
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Gratis · Open Source · Global
              </span>
            </div>
          </div>

          {/* Roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hackathons.map((h, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-border bg-background hover:border-[#ff8c00]/40 transition-colors duration-200"
              >
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-muted font-mono text-xs font-bold text-muted-foreground shrink-0 group-hover:bg-[#ff8c00]/10 group-hover:text-[#ff8c00] transition-colors">
                  {h.month}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">{h.emoji}</span>
                    <span className="font-mono font-bold text-xs tracking-wide truncate">
                      {h.name}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {h.subtitle}
                  </p>
                  <LevelDots level={h.level} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-[#ff8c00]/30 bg-[#ff8c00]/5">
            <div>
              <p className="font-bold">Primer hackathon: Marzo 2026</p>
              <p className="text-sm text-muted-foreground">
                Gratuito · Presencial BA + Remoto · Tu código es tuyo
              </p>
            </div>
            <a
              href="https://hackaton.lacrypta.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff8c00] text-black font-bold text-sm hover:bg-[#ff8c00]/90 transition-colors"
            >
              Registrate ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
