import HeroWithImg from "@/components/HeroWithImg";
import CorePrinciples from "@/components/CorePrinciples";
import MemberShowcase from "@/components/MemberShowcase";
import HighlightBanner from "@/components/HighlightBanner";
import FooterContact from "@/components/FooterContact";

import img1 from "@/assets/images/nosotros/img1.jpg";
import bg from "@/assets/images/nosotros/testimonio-bg.jpg";
import Container from "@/components/Container";

const HeroWithImgBody = [
  "At Ocean & Flame, our passion for food runs deep. We take pride in bringing you the best of both worlds—perfectly grilled meats and fresh seafood, all crafted with care and the finest ingredients. Whether you're here for a casual bite or a special occasion, we aim to create an unforgettable dining experience.",
  "From the moment you walk through our doors, you're not just a guest but part of the Ocean & Flame family. Our chefs draw inspiration from global flavors and local ingredients, bringing dishes to life that celebrate the art of grilling and the bounty of the sea.",
  "From our kitchen to your table, we believe in quality, flavor, and the joy of sharing great food with great people. Every plate we serve is a reflection of our dedication to excellence and our commitment to making your dining experience special. Thank you for being a part of our journey!"
];

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <HeroWithImg title={"A Word from Us"} subtitle="Where Grills Meet the Ocean" message={HeroWithImgBody} image={img1} />
      <CorePrinciples />
      <MemberShowcase />
      <HighlightBanner image={bg}>
        <Container className="flex flex-col justify-center items-center">
          <p className="text-center text-white max-w-3xl">{"\"At Ocean & Flame, we believe that food is more than just a meal—it's an experience that brings people together. We’re dedicated to serving the freshest ingredients with a passion for flavor, ensuring every visit feels like coming home.\""}</p>
          <p className="ml-auto">- Marcus Delaney, Owner</p>
        </Container>
      </HighlightBanner>
      <FooterContact />
    </div>
  )
}