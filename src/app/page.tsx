import Container from "@/components/Container";
import DishCard from "@/components/DishCard";
import HeroWithCTA from "@/components/HeroWithCTA";

import img1 from "@/assets/images/home/img1.jpg";
import img2 from "@/assets/images/home/img2.jpg";
import img3 from "@/assets/images/home/img3.jpg";

const HeroWithCTATitle = "Delight in Every Bite!"
const HeroWithCTABody = "Discover the perfect blend of fresh ingredients and authentic flavors. Whether you're here for a quick bite or a hearty meal, every dish is crafted to satisfy your cravings and leave you wanting more."

const dishBody1 = "Indulge in our expertly grilled dishes, where every bite brings the rich, smoky essence of the barbecue straight to your plate. Perfect for meat lovers!"
const dishBody2 = "Savor our succulent chicken dishes, marinated to perfection and cooked just right. From classic favorites to unique creations, there's something for everyone!"
const dishBody3 = "Treat yourself to our creamy, delicious shakes made with premium ingredients. Whether you prefer fruity or indulgent, our shakes are the perfect way to cool down and satisfy your cravings."

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroWithCTA title={HeroWithCTATitle} body={HeroWithCTABody} />
      <Container className="flex gap-9 w-full justify-center items-center">
        <DishCard title={"Grill"} body={dishBody1} image={img1} subtitle="Smoky Flavors Await" link="/dishes" topBorderColor="#f5261f"/>
        <DishCard title={"Chickem"} body={dishBody2} image={img2} subtitle="Cluckin’ Good Choices" link="/dishes" topBorderColor="#facc5c"/>
        <DishCard title={"Shakes"} body={dishBody3} image={img3} subtitle="Sweet Refreshment" link="/dishes" topBorderColor="#abda1e"/>
      </Container>
    </div>
  )
}