'use client'

import React from 'react'

export default function HackathonsSection() {
  return (
    <section className="w-full py-20 px-4">
      <a
        href="https://hackaton.lacrypta.ar"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[860px] mx-auto px-8 py-8 rounded-2xl border border-[#ff8c00]/40 bg-[#ff8c00]/5 hover:bg-[#ff8c00]/10 hover:border-[#ff8c00]/70 transition-all duration-300"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" />
            <span className="text-xs font-mono text-[#ff8c00] uppercase tracking-widest">
              2026 · 8 meses · 16M sats
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold">
            ⚡ Lightning Hackathons 2026
          </h3>
          <p className="text-muted-foreground">
            Aprendé haciendo. Construí sobre Bitcoin y ganás sats reales.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff8c00] text-black font-bold text-sm group-hover:bg-[#ff8c00]/90 transition-colors whitespace-nowrap">
          Ver hackathons ↗
        </div>
      </a>
    </section>
  )
}
