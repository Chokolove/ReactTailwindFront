import Link from "next/link"

interface Props {
  title?: string
  body?: string
}

function HeroWithCTA({ title, body }: Props) {
  return (
    <div className="flex flex-col justify-center items-center py-14 bg-lightGray w-full">
      <h1 className="text-7xl text-gray-700 mb-4 font-krona uppercase font-normal">{title}</h1>
      <p className="text-center text-gray-500 text-lg mb-12 max-w-7xl">{body}</p>
      <Link href="/about">
        <button className="bg-gray-700 text-white py-2 px-4 rounded-sm">About Us</button>
      </Link>
    </div>
  )
}
export default HeroWithCTA