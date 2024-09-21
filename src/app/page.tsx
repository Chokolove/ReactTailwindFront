import HeroWithCTA from "@/components/HeroWithCTA";

const HeroWithCTATitle = "Delight in Every Bite!"
const HeroWithCTABody = "Discover the perfect blend of fresh ingredients and authentic flavors. Whether you're here for a quick bite or a hearty meal, every dish is crafted to satisfy your cravings and leave you wanting more."

export default function Page() {
  return (<div className="flex flex-col justify-center items-center">
    <HeroWithCTA title={HeroWithCTATitle} body={HeroWithCTABody} />
  </div>)
}