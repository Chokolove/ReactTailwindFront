import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Button from "../Button"

interface Props {
  title: string
  image?: StaticImageData
  subtitle?: string
  body: string
  topBorderColor?: string
  link?: string
}

function DishCard({ title, image, subtitle, body, topBorderColor, link }: Props) {
  return (
    <div className="border-t-8 flex flex-col gap-4 py-6 max-w-80" style={{ borderColor: topBorderColor }}>
      <h2 className="text-4xl text-gray-700">{title}</h2>
      {image && <img src={image?.src ?? ""} alt={title} width={image?.width} height={image?.height} style={{ maxWidth:"320px" ,maxHeight: "215px" }} />}
      {subtitle && <h3>{subtitle}</h3>}
      <div className="max-h-24 overflow-auto">

      <p className="text-gray-500">{body}</p>
      </div>
      {
        link &&
        <Link href={link}>
          <Button text="View More" style={{ backgroundColor: topBorderColor }} />
        </Link>
      }
    </div>
  )
}
export default DishCard;