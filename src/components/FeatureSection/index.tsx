
import img4 from "@/assets/images/home/img4.jpg";
import img5 from "@/assets/images/home/img5.jpg";
import FeatureCard from "../FeatureCard";
import Container from "../Container";

const cards = [
  {
    title: "Customer Favorites",
    body: "Discover the dishes our customers can’t get enough of! From mouthwatering grilled meals to refreshing shakes, these are the top picks that keep them coming back.",
    buttonText: "Explore Popular Dishes",
    image: img4,
  },
  {
    title: "Exclusive Deals",
    body: "Enjoy amazing discounts on some of our best dishes! These limited-time offers make it easier to indulge in your favorite meals without breaking the bank.",
    buttonText: "Grab the Deal",
    image: img5,
  },
]

function FeatureSection(){
  return (
    <div className="w-full">
      <Container className="flex gap-9">
        {cards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </Container>
    </div>
  )
}

export default FeatureSection;
