import { StaticImageData } from "next/image";
import InfoCard from "@/components/InfoCard";
import Container from "@/components/Container";
import HeroWithCTA from "@/components/HeroWithCTA";
import FeatureSection from "@/components/FeatureSection";
import HighlightBanner from "@/components/HighlightBanner";
import EmailSubscription from "@/components/EmailSubscription";
import FooterContact from "@/components/FooterContact";

import img1 from "@/assets/images/home/img1.jpg";
import img2 from "@/assets/images/home/img2.jpg";
import img3 from "@/assets/images/home/img3.jpg";
import bg from "@/assets/images/home/bg.jpg"
import Button from "@/components/Button";
import Link from "next/link";


const HeroWithCTATitle = "Delight in Every Bite!"
const HeroWithCTABody = "Discover the perfect blend of fresh ingredients and authentic flavors. Whether you're here for a quick bite or a hearty meal, every dish is crafted to satisfy your cravings and leave you wanting more."

const dishcards: { title: string, image?: StaticImageData, subtitle?: string, body: string, topBorderColor?: string, link?: string }[] = [
  {
    title: "Grill",
    image: img1,
    subtitle: "Smoky Flavors Await",
    body: "Indulge in our expertly grilled dishes, where every bite brings the rich, smoky essence of the barbecue straight to your plate. Perfect for meat lovers!",
    topBorderColor: "#f5261f",
    link: "/dishes",
  },
  {
    title: "Chicken",
    image: img2,
    subtitle: "Smoky Flavors Await",
    body: "Savor our succulent chicken dishes, marinated to perfection and cooked just right. From classic favorites to unique creations, there's something for everyone!",
    topBorderColor: "#facc5c",
    link: "/dishes",
  },
  {
    title: "Shakes",
    image: img3,
    subtitle: "Sweet Refreshment",
    body: "Treat yourself to our creamy, delicious shakes made with premium ingredients. Whether you prefer fruity or indulgent, our shakes are the perfect way to cool down and satisfy your cravings.",
    topBorderColor: "#abda1e",
    link: "/dishes",
  },
]

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <HeroWithCTA title={HeroWithCTATitle} body={HeroWithCTABody} />
      <Container className="flex gap-9 w-full justify-center items-center">
        {dishcards.map((card, index) => (
          <InfoCard key={index} {...card} >
            <p className="text-gray-500 max-h-24 overflow-auto">{card.body}</p>
          </InfoCard>
        ))}
      </Container>
      <EmailSubscription />
      <FeatureSection />
      <HighlightBanner
        image={bg}
      >
        <h1 className="text-6xl font-krona font-bold text-center">Chef`s Special Creations</h1>
        <p className="text-center text-white max-w-3xl">Indulge in our most celebrated plates, crafted with care and bursting with flavor. From traditional favorites to unique gourmet dishes, these meals are guaranteed to impress.</p>
        <Link href="/dishes">
          <Button className="bg-transparent text-white border border-white uppercase font-bold" text="Learn More" />
        </Link>
      </HighlightBanner>
      <FooterContact />
    </div>
  )
}