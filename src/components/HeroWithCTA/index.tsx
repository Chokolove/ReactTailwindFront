import Link from "next/link"
import Container from "../Container"
import Button from "../Button"

interface Props {
  title?: string
  body?: string
}

function HeroWithCTA({ title, body }: Props) {
  return (
    <div className="bg-lightGray w-full">
      <Container className="flex flex-col justify-center items-center">
          <h1 className="text-7xl text-gray-700 mb-4 font-krona uppercase font-normal">{title}</h1>
          <p className="text-center text-gray-500 text-lg mb-12">{body}</p>
          <Link href="/about">
            <Button text="About Us" />
          </Link>
      </Container>
    </div>
  )
}
export default HeroWithCTA