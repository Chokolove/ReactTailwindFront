import { StaticImageData } from "next/image"

interface Props {
  children?: React.ReactNode
  image: StaticImageData
}

function HighlightBanner({ children, image }: Props) {
  return (
    <div className="w-full h-96 relative overflow-hidden">
      <div
        style={{ backgroundImage: `url(${image.src})` }}
        className="flex-shrink-0 w-full h-96 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white gap-4">
        {children}
      </div>
    </div>
  )
}

export default HighlightBanner
