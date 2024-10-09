import ImageNext from 'next/image'

import { cn } from '@/lib/utils'

interface ComponentProps {
  data: {
    name: string
    animal: string
    color: string
    rol: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <div className="overflow-hidden flex-1 rounded-3xl bg-border">
      <div
        className={`relative overflow-hidden w-full h-96 border border-border rounded-3xl bg-background shadow-2xl`}
      >
        <div className={cn('absolute top-4 left-4 p-2 rounded-full')}>
          <ImageNext
            className="mx-auto"
            src={`/img/animal/${data.animal.toLowerCase()}.png`}
            width={48}
            height={48}
            alt={`${data.name}, ${data.animal}`}
          />
        </div>
      </div>
      <div className="py-4 px-8">
        <h4 className="font-bold text-xl">
          {data.name}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            {data.animal.charAt(0).toUpperCase() + data.animal.slice(1)}
          </span>
        </h4>
        <p>{data.rol}</p>
      </div>
    </div>
  )
}
