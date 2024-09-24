import Link from "next/link"

interface Props{
  href: string
  icon: string
}

function SocialButton ({href, icon}: Props) {
  return (
    <Link href={href}>
      <div className="w-9 h-9 border rounded-full flex justify-center items-center">
        <i className={`${icon}`}></i>
      </div>
    </Link>
  )
}
export default SocialButton
