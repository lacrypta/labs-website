export default function Component({ color = 'currentColor' }) {
  return (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.928955 0.857849L7.29292 7.22181C7.68344 7.61233 7.68344 8.2455 7.29292 8.63602L0.928957 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
