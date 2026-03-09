interface LogoProps {
  size?: number;
  className?: string;
}

export function SuperfanzLogo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Superfanz S logo"
    >
      {/* Outer rounded square background */}
      <rect width="40" height="40" rx="10" fill="currentColor" />
      {/* S letterform — cut out of the fill using a contrasting path */}
      <path
        d="M27.2 13.6C26.2 11.4 24 10 21.2 10C17.4 10 14.4 12.6 14.4 16C14.4 19 16.4 20.8 19.6 21.8L21.6 22.4C23.8 23.1 25 24 25 25.6C25 27.4 23.4 28.6 21.2 28.6C19.2 28.6 17.6 27.6 16.8 26L14 27.4C15.2 29.8 17.8 31.4 21.2 31.4C25.4 31.4 28.2 28.8 28.2 25.4C28.2 22.2 26 20.4 22.6 19.3L20.6 18.7C18.6 18.1 17.6 17.2 17.6 15.8C17.6 14.2 19 13 21.2 13C22.8 13 24.2 13.8 25 15.2L27.2 13.6Z"
        fill="var(--background)"
      />
    </svg>
  );
}
