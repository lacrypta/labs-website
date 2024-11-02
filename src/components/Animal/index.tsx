import ImageNext from 'next/image'

import { cn } from '@/lib/utils'

interface ComponentProps {
  data: {
    name: string
    animal: string
    color: string
    rol: string
    image: string
  }
}

export default function Component(props: ComponentProps) {
  const { data } = props

  return (
    <div className="overflow-hidden flex-1 rounded-3xl bg-border">
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className={`w-full h-96 border border-border shadow-2xl bg-cover bg-no-repeat bg-center grayscale`}
          style={{
            backgroundImage: `url(/img/team/${data?.image}.webp)`
          }}
        ></div>
        <div
          className={cn(
            'absolute bottom-0 right-0 flex items-end justify-start w-full h-full px-8 py-2 bg-gradient-to-b from-transparent from-80% to-background/50 rounded-b-xl'
          )}
        >
          <ImageNext
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
