import ImageNext from 'next/image'
import LinkNext from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Twitter, Instagram, Link } from '@/components/Icons'

interface ComponentProps {
  data: {
    name: string
    animal: string
    color: string
    rol: string
    image: string
    links: any[]
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
            'absolute bottom-0 right-0 flex items-end justify-between w-full h-full pl-6 pr-2 py-2 bg-gradient-to-b from-transparent from-80% to-background/50 rounded-b-xl'
          )}
        >
          <ImageNext
            src={`/img/animal/${data.animal.toLowerCase()}.png`}
            width={48}
            height={48}
            alt={`${data.name}, ${data.animal}`}
          />
          {data?.links.length > 0 && (
            <div className="flex gap-1">
              {data?.links?.map(link => (
                <>
                  {link.type === 'twitter' && (
                    <Button variant="outline" size="icon" asChild>
                      <LinkNext href={link.url} target="_blank">
                        <Twitter />
                      </LinkNext>
                    </Button>
                  )}
                  {link.type === 'instagram' && (
                    <Button variant="outline" size="icon" asChild>
                      <LinkNext href={link.url} target="_blank">
                        <Instagram />
                      </LinkNext>
                    </Button>
                  )}
                  {link.type === 'website' && (
                    <Button variant="outline" size="icon" asChild>
                      <LinkNext href={link.url} target="_blank">
                        <Link className="w-6 h-6" />
                      </LinkNext>
                    </Button>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="py-4 px-6">
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
