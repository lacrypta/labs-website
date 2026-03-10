'use client'

import React from 'react'
import { Container } from '@/components/container'

// Genera los próximos N martes desde hoy
function getUpcomingTuesdays(count: number): Date[] {
  const tuesdays: Date[] = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const d = new Date(today)
  // Avanzar al próximo martes (o hoy si ya es martes)
  while (d.getDay() !== 2) {
    d.setDate(d.getDate() + 1)
  }

  for (let i = 0; i < count; i++) {
    tuesdays.push(new Date(d))
    d.setDate(d.getDate() + 7)
  }

  return tuesdays
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })
}

export default function EventsSection() {
  const upcomingTuesdays = getUpcomingTuesdays(6)

  return (
    <section className="w-full py-24 bg-background">
      <Container>
        <div className="flex flex-col gap-12 max-w-[860px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" />
              <span className="text-sm font-mono text-[#ff8c00] uppercase tracking-widest">
                Eventos
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold">Calendario</h2>
            <p className="text-muted-foreground text-lg max-w-[520px]">
              Encontranos cada semana. Sin excusas.
            </p>
          </div>

          {/* Community Call recurrente */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Recurrente
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {upcomingTuesdays.map((date, i) => (
              <div
                key={i}
                className={`group flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-colors duration-200
                  ${
                    i === 0
                      ? 'border-[#ff8c00]/60 bg-[#ff8c00]/5'
                      : 'border-border bg-card hover:border-[#ff8c00]/30 hover:bg-[#ff8c00]/5'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex flex-col items-center justify-center w-10 h-10 rounded-lg font-mono font-bold text-sm
                    ${i === 0 ? 'bg-[#ff8c00] text-black' : 'bg-muted text-muted-foreground group-hover:bg-[#ff8c00]/20 group-hover:text-[#ff8c00]'}`}
                  >
                    <span>{date.getDate()}</span>
                  </div>
                  <div>
                    <p
                      className={`font-semibold capitalize ${i === 0 ? 'text-white' : ''}`}
                    >
                      Community Call
                      {i === 0 && (
                        <span className="ml-2 text-xs font-mono text-[#ff8c00] uppercase">
                          próximo
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {formatDate(date)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-muted-foreground">
                    18:00 hs
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    ⚡ Online + Presencial BA
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground text-center">
            Todos los martes · 18:00 hs (GMT-3) · Discord + La Crypta, Buenos
            Aires
          </p>
        </div>
      </Container>
    </section>
  )
}
