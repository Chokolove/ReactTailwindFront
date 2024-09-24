import Link from "next/link"
import SocialButton from "../SocialButton"
import Container from "../Container"

function FooterContact() {
  return (
    <Container className="w-full flex justify-around gap-20 py-14">
      <div className="flex flex-col gap-1.5 justify-center">
        <Link href="/about">
          <h2 className="text-4xl font-krona uppercase">Ocean & Flame</h2>
        </Link>
        <p className="text-center text-base">© 2024</p>
      </div>
      <div className="flex gap-1.5">
        <SocialButton href="https://www.facebook.com/" icon="ri-facebook-fill" />
        <SocialButton href="https://www.twitter.com/" icon="ri-twitter-x-fill" />
        <SocialButton href="https://www.google.com/" icon="ri-google-fill" />
        <SocialButton href="https://www.pinterest.com/" icon="ri-pinterest-line" />
        <SocialButton href="https://www.instagram.com/" icon="ri-instagram-line" />
      </div>
      <div>
        <h3 className="text-2xl">Ocean & Flame</h3>
        <p className="text-base text-gray-500">
          5678 Seaside Boulevard <br />
          Harborview, FL 33139 <br />
          United States
        </p>
      </div>
    </Container>
  )
}

export default FooterContact
