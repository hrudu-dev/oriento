import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = "h-6 w-6", width = 24, height = 24 }: LogoProps) {
  // Since we're using light theme only, always use the dark icon
  return (
    <Image
      src="/icons/icon-dark.png"
      alt="Oriento"
      width={width}
      height={height}
      className={className}
    />
  )
}