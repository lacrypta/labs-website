import { ReactNode } from 'react'

const Container = (props: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4">{props.children}</div>
  )
}

export { Container }
