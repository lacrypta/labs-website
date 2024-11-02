export default function Component(props: { children: any }) {
  const { children } = props

  return (
    <div {...props} className="relative w-full max-w-[900px] mx-auto px-4">
      {children}
    </div>
  )
}
