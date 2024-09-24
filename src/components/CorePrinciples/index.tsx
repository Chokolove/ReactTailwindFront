import Container from "../Container"
import InfoCard from "../InfoCard"

interface infoCardProps {
  title: string
  subtitle: string
  body: string
  list: string[]
  topBorderColor: string
}

const infocards: infoCardProps[] = [
  {
    title: "Our Mission",
    subtitle: "Our Purpose and Passion",
    body: "To deliver an unforgettable dining experience by serving fresh seafood and perfectly grilled dishes that celebrate the flavors of the ocean and the land.",
    list: [
      "Fresh ingredients from trusted sources",
      "A welcoming atmosphere for all",
      "Uncompromising quality and flavor"
    ],
    topBorderColor: "#f5261f",
  },
  {
    title: "Our Vision",
    subtitle: "Where We See Ourselves Tomorrow",
    body: "To be recognized as the go-to destination for lovers of seafood and grilled dishes, setting a benchmark for quality and culinary creativity in the region.",
    list: [
      "Innovation in our menu offerings",
      "Growth through customer loyalty",
      "Commitment to sustainable practices"
    ],
    topBorderColor: "#facc5c"
  },
  {
    title: "Our Values",
    subtitle: "Principles That Define Us",
    body: "At Ocean & Flame, we hold true to values that guide every dish we prepare and every interaction we have with our guests.",
    list: [
      "Passion for exceptional food",
      "Integrity in sourcing and preparation",
      "Respect for our community and environment"
    ],
    topBorderColor: "#abda1e"
  }
]

function CorePrinciples() {
  return (
    <div className="w-full">
      <Container className="flex gap-9 justify-center">
        {infocards.map((card, index) => (
          <InfoCard key={index} {...card}>
            <p className="text-gray-500 max-h-24 overflow-auto">{card.body}</p>
            <ul className="mt-4 list-disc list-inside">
              {card.list.map((item, index) => (
                <li className="text-gray-500" key={index}>{item}</li>
              ))}
            </ul>
          </InfoCard>  
        ))}
      </Container>
    </div>
  )
}
export default CorePrinciples
