import Container from "@/components/Container";
import InfoCard from "@/components/InfoCard";
import FooterContact from "@/components/FooterContact";

import image1 from "@/assets/images/platos/plato1.jpg";
import image2 from "@/assets/images/platos/plato2.jpg";
import image3 from "@/assets/images/platos/plato3.jpg";
import image4 from "@/assets/images/platos/plato4.jpg";
import image5 from "@/assets/images/platos/plato5.jpg";
import image6 from "@/assets/images/platos/plato6.jpg";



const dishes = [
  {
    title: "Pollo a la Brasa",
    description: "Juicy, tender chicken marinated in a secret blend of spices, roasted to perfection over an open flame. A classic Peruvian dish, served with crispy fries and a fresh, vibrant salad.",
    image: image1
  },
  {
    title: "Filete a la Plancha",
    description: "A perfectly grilled filet of beef, seasoned with a mix of herbs and spices to enhance the natural flavors of the meat. Served with sautéed vegetables and your choice of side.",
    image: image2
  },
  {
    title: "Churrasco a lo Pobre",
    description: "A hearty, flavorful dish featuring a succulent grilled steak served with crispy fried plantains, a fried egg, and golden fries. A classic comfort dish that hits all the right notes.",
    image: image3
  },
  {
    title: "Ceviche Mixto",
    description: "Fresh, tangy, and bold. This ceviche is a mix of the freshest seafood, marinated in zesty lime juice, cilantro, and a touch of heat from aji peppers. Served with sweet potato and corn for a perfect balance of flavors.",
    image: image4
  },
  {
    title: "Pan con Chicharrón",
    description: "Crispy, tender pork belly sandwiched in a soft roll with tangy pickled onions and sweet potato slices. A traditional Peruvian sandwich that’s full of flavor and crunch in every bite.",
    image: image5
  },
  {
    title: "Anticuchos",
    description: "Skewers of marinated beef heart, grilled to perfection and bursting with rich, smoky flavor. Served with a side of Peruvian corn and potatoes, this dish is a true street food classic.",
    image: image6
  }
];


export default function Page() {
    return (
      <>
        <Container className="bg-lightGray">
          <h1 className="text-4xl font-krona text-center">Our Signature Dishes</h1>
          <div className="flex flex-wrap justify-center gap-9">
            {dishes.map((dish, index) => (
              <InfoCard key={index} title={""} image={dish.image}>
                <h3 className="text-lg text-center">{dish.title}</h3>
                <p className="text-gray-500 text-center max-h-24 overflow-auto">{dish.description}</p>
              </InfoCard>
            ))}
          </div>
        </Container>
        <FooterContact />
      </>
    )
  }