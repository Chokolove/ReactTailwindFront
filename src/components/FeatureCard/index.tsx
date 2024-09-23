import { StaticImageData } from "next/image"
import Button from "../Button"

interface Props {
  title: string,
  body: string,
  buttonText: string,
  image: StaticImageData,
}

function FeatureCard({ title, body, buttonText, image }: Props) {
  return (
    <div className="flex gap-9">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="text-4xl text-gray-700">{title}</h2>
        <p className="h-24 overflow-auto">{body}</p>
        <Button text={buttonText} />
      </div>
      <img src={image.src} alt={title} className="w-40 h-40 rounded-full" />
    </div>
  )
}

export default FeatureCard
