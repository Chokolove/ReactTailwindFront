import { StaticImageData } from "next/image"

interface Props {
  name: string
  description: string
  portrait?: StaticImageData
}
function MemberCard({ name, description, portrait }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center">
      {portrait && <div className="w-56 h-56">
        <img className="rounded-full" src={portrait.src} alt={name} />
      </div>}
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

export default MemberCard