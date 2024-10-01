import { StaticImageData } from "next/image"
import Link from "next/link"
import Button from "../Button"

interface Props {
  title: string
  image?: StaticImageData
  subtitle?: string
  topBorderColor?: string
  link?: string
  children?: React.ReactNode
}

function InfoCard({ title, image, subtitle, topBorderColor, link, children }: Props) {
  return (
    <div className="flex flex-col gap-4 py-6 w-80" style={{ borderTop: `8px solid ${topBorderColor}` }}>
      <h2 className="text-4xl text-gray-700 max-h-80">{title}</h2>
      {image && <img src={image?.src ?? ""} alt={title} width={image?.width} height={image?.height} style={{ maxWidth: "320px", maxHeight: "215px" }} />}
      {subtitle && <h3>{subtitle}</h3>}
      <div className="overflow-auto">
        {children}
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
export default InfoCard;