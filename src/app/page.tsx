import Container from "@/components/Container";
import DishCard from "@/components/DishCard";
import HeroWithCTA from "@/components/HeroWithCTA";
import EmailSubscription from "@/components/EmailSubscription";

import img1 from "@/assets/images/home/img1.jpg";
import img2 from "@/assets/images/home/img2.jpg";
import img3 from "@/assets/images/home/img3.jpg";
import { StaticImageData } from "next/image";
import FeatureSection from "@/components/FeatureSection";

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
    <div className="flex flex-col justify-center items-center">
      <HeroWithCTA title={HeroWithCTATitle} body={HeroWithCTABody} />
      <Container className="flex gap-9 w-full justify-center items-center">
        {dishcards.map((card, index) => (
          <DishCard key={index} {...card} />
        ))}
      </Container>
      <EmailSubscription />
      <FeatureSection />
    </div>
  )
}