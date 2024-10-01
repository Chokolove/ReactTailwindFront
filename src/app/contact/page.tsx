import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Container from "@/components/Container";
import FooterContact from "@/components/FooterContact";
import MapLocation from "@/components/MapLocation";

export default function Page() {
  return (
    <>
      <div>
        <Container className="flex justify-evenly bg-lightGray">
          <ContactInfo />
          <ContactForm />
        </Container>
      </div>
      <MapLocation />
      <FooterContact />
    </>
  )
}