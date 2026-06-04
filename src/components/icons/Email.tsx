export function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 6.75h16c.69 0 1.25.56 1.25 1.25v8c0 .69-.56 1.25-1.25 1.25H4A1.25 1.25 0 0 1 2.75 16V8c0-.69.56-1.25 1.25-1.25Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="m3.25 7.5 8.1 5.4a1.25 1.25 0 0 0 1.3 0l8.1-5.4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
