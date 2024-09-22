import Image, { StaticImageData } from "next/image"
import Link from "next/link"

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
    <div className="border-t-8 flex flex-col gap-4 py-6" style={{ borderColor: topBorderColor }}>
      <h2 className="text-4xl text-gray-700">{title}</h2>
      {image && <img src={image?.src ?? ""} alt={title} width={image?.width} height={image?.height} style={{ maxHeight: "215px" }} />}
      {subtitle && <h3>{subtitle}</h3>}
      <p className="text-gray-500">{body}</p>
      {
        link &&
        <Link href={link}>
          <button className="text-white py-2 px-4 rounded-sm" style={{ backgroundColor: topBorderColor }}>
            View More
          </button>
        </Link>
      }
    </div>
  )
}
export default DishCard;