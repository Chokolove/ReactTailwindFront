import { StaticImageData } from "next/image"
import Container from "../Container"
import Button from "../Button"
import Link from "next/link"

interface Props {
  title: string
  subtitle: string
  message: string[]
  image: StaticImageData
}

function HeroWithImg({ title, subtitle, message, image }: Props) {
  return (
    <div className="w-full bg-lightGray">
      <Container className="text-center">
        <h2 className="text-4xl text-gray-700 font-light mb-12">{title}</h2>
        <div className="flex gap-9 items-center">
          <div className="min-w-96 rounded-sm">
            <img src={image.src} alt={title} />
          </div>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm">{subtitle}</h3>
            {message.map((paragraph, index) => (
              <p className="text-sm text-gray-500" key={index}>{paragraph}</p>
            ))}
            <Link href={"/about"}>
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroWithImg
