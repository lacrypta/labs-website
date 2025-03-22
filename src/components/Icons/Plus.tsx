import { SVGProps } from 'react'

export default function Component(
  props: SVGProps<SVGSVGElement> = { color: 'currentColor' }
) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.00002L9 17"
        stroke="#C2F76C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 8.99999L0.999999 9.00003"
        stroke="#C2F76C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
