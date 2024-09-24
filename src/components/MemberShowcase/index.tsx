import Container from "../Container";
import MemberCard from "../MemberCard";

import img1 from "@/assets/images/nosotros/teacher1.jpg";
import img2 from "@/assets/images/nosotros/teacher2.jpg";
import img3 from "@/assets/images/nosotros/teacher3.jpg";
import img4 from "@/assets/images/nosotros/teacher4.jpg";

const chefs = [
  {
    name: "Chef Emily Rodriguez",
    description: "A seafood specialist with over 10 years of experience, Chef Emily excels at blending traditional flavors with modern techniques. Her dishes are a true celebration of the ocean’s bounty.",
    portrait: img1
  },
  {
    name: "Chef Ethan James",
    description: "Chef Ethan specializes in farm-to-table cuisine, focusing on seasonal ingredients. His commitment to sustainability shines through in every dish he creates.",
    portrait: img2
  },
  {
    name: "Chef Mia Thompson",
    description: "Chef Mia’s passion for grilling is evident in every dish. Her mastery of flame-kissed flavors brings bold, unforgettable tastes to the table.",
    portrait: img3
  },
  {
    name: "Chef Noah Carter",
    description: "With a flair for international cuisine, Chef Noah brings diverse flavors to the menu. His ability to fuse culinary traditions creates unique dishes that tantalize the taste buds.",
    portrait: img4
  },
];

function MemberShowcase() {
  return (
    <div className="w-full text-center bg-lightGray py-12">
      <h2 className="text-4xl text-gray-700">Meet Our Chefs</h2>
      <Container className="flex gap-9">
        {chefs.map((chef, index) => (
          <MemberCard key={index} {...chef} />
        ))}
      </Container>
    </div>
  )
}

export default MemberShowcase;
