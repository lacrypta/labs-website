import Link from 'next/link'

import { Button } from '@/components/ui/button'
import ArrowTopRight from '@/components/Icons/ArrowTopRight'

export default function Component(props: { data: any }) {
  const { data } = props

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full p-6 rounded-3xl bg-border">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{data?.title}</h3>
          <p className="text-lg">{data?.description}</p>
          <ul className="flex flex-col gap-4 m-0 mt-4 p-0">
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
          </ul>
        </div>
        {data?.url && (
          <div>
            <Button size="lg" variant="outline" asChild>
              <Link href={data?.url}>
                Conocer más
                <ArrowTopRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
      <div>
        <img className="rounded-xl" src={data?.image} />
      </div>
    </div>
  )
}
