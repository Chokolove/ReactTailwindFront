import { StaticImageData } from "next/image"
import Link from "next/link"
import Button from "../Button"

interface Props {
  title: string
  body: string
  link: string
  image: StaticImageData
  titleClassName?: string
  bodyClassName?: string
  buttonClassName?: string
}

function HighlightBanner({ title, body, link, image, titleClassName, bodyClassName, buttonClassName }: Props) {
  return (
    <div className="w-full h-96 relative overflow-hidden">
      <div
        style={{ backgroundImage: `url(${image.src})` }}
        className="flex-shrink-0 w-full h-96 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white gap-4">
        <h1 className={`text-6xl font-krona font-bold text-center ${titleClassName}`}>{title}</h1>
        <p className={`text-center text-gray-500 ${bodyClassName}`}>{body}</p>
        {link && (
          <Link href={link}>
            <Button className={buttonClassName} text="Learn More" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default HighlightBanner
