'use client'

import React from 'react'
import { Container } from '@/components/container'

function getUpcomingTuesdays(count: number): Date[] {
  const tuesdays: Date[] = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const d = new Date(today)
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

const SPECIAL_EVENTS = [
  {
    date: new Date('2026-03-27T21:00:00-03:00'),
    title: 'OpenClaw Meetup 2',
    tag: '🎉 Presencial',
    tagColor: 'bg-[#2563eb]/20 text-[#2563eb]',
    highlight: true,
    time: '21:00 hs',
    location: 'Buenos Aires'
  }
]

export default function EventsSection() {
  const upcomingTuesdays = getUpcomingTuesdays(6)
  const now = new Date()

  // Merge y ordenar todos los eventos
  const regularEvents = upcomingTuesdays.map(date => ({
    date,
    title: 'Community Call',
    tag: '🌐 Online',
    tagColor: 'bg-muted text-muted-foreground',
    highlight: false,
    time: '18:00 hs',
    location: 'Discord',
    special: false
  }))

  const specialEvents = SPECIAL_EVENTS.filter(e => e.date >= now).map(e => ({
    ...e,
    special: true
  }))

  const allEvents = [...regularEvents, ...specialEvents].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  )

  const nextIdx = allEvents.findIndex(e => e.date >= now)

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

          {/* Lista de eventos */}
          <div className="flex flex-col gap-3">
            {allEvents.map((event, i) => {
              const isNext = i === nextIdx
              const isSpecial = event.special

              return (
                <div
                  key={i}
                  className={`group flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-colors duration-200
                    ${
                      isSpecial
                        ? 'border-[#2563eb]/50 bg-[#2563eb]/5 hover:border-[#2563eb]/70'
                        : isNext
                          ? 'border-[#ff8c00]/60 bg-[#ff8c00]/5'
                          : 'border-border bg-card hover:border-[#ff8c00]/30 hover:bg-[#ff8c00]/5'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex flex-col items-center justify-center w-10 h-10 rounded-lg font-mono font-bold text-sm shrink-0
                        ${
                          isSpecial
                            ? 'bg-[#2563eb] text-white'
                            : isNext
                              ? 'bg-[#ff8c00] text-black'
                              : 'bg-muted text-muted-foreground group-hover:bg-[#ff8c00]/20 group-hover:text-[#ff8c00]'
                        }`}
                    >
                      <span>{event.date.getDate()}</span>
                    </div>
                    <div>
                      <p className="font-semibold capitalize flex items-center gap-2 flex-wrap">
                        {event.title}
                        {isNext && !isSpecial && (
                          <span className="text-xs font-mono text-[#ff8c00] uppercase">
                            próximo
                          </span>
                        )}
                        {isSpecial && (
                          <span className="text-xs font-mono text-[#2563eb] uppercase">
                            ★ especial
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground">
                      {event.time}
                    </span>
                    <span
                      className={`hidden sm:inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${event.tagColor}`}
                    >
                      {event.tag}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground text-center">
            Community Call · todos los martes · 18:00 hs (GMT-3) · Online
          </p>
        </div>
      </Container>
    </section>
  )
}
