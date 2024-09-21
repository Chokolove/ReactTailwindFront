import Link from "next/link"
import Container from "../Container"

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
            <button className="bg-gray-700 text-white py-2 px-4 rounded-sm">About Us</button>
          </Link>
      </Container>
    </div>
  )
}
export default HeroWithCTA