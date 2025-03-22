import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import ArrowTopRight from '@/components/Icons/ArrowTopRight'
import { useTranslations } from 'next-intl'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Component(props: { data: any; className: string }) {
  const { data, className } = props

  const t = useTranslations('projects')

  return (
    <div className={className}>
      <div className=" h-full">
        <Image
          className="rounded-xl"
          width={375}
          height={375}
          alt={data?.title}
          src={data?.image}
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 justify-center md:px-8">
        <div className="flex flex-col gap-4">
          {!data?.url && (
            <div>
              <Badge>Soon</Badge>
            </div>
          )}
          <h3 className="text-2xl lg:text-5xl font-semibold">{data?.title}</h3>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
          {/* <ul className="flex flex-col gap-4 m-0 mt-4 p-0">
            {data?.features.map((feature: any, index: number) => (
              <li key={index}>
                <div>
                  <span>{feature.icon}</span>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
        {data?.url && (
          <div>
            <Button size="lg" variant="outline" asChild>
              <Link target="_blank" href={data?.url}>
                {t('cta')}
                <ArrowTopRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
