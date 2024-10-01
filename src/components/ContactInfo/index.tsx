const ContactItem = ({ icon, children }: { icon?: string, children?: React.ReactNode }) => {
  return (
    <div className="flex gap-4 text-3xl">
      <i className={`${icon} text-yellow-500`} />
      <div>
        {children}
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <ContactItem icon={"ri-map-pin-fill"}>
        <h3 className="text-2xl">Address:</h3>
        <p className="text-base text-gray-500">
          5678 Seaside Boulevard<br />
          Harborview, FL 33139
        </p>
      </ContactItem>
      <ContactItem icon={"ri-time-fill"}>
        <h3 className="text-2xl">Time of Service:</h3>
        <p className="text-base text-gray-500">
          <strong>Monday - Friday:</strong>11:00 AM - 10:00 PM<br />
          <strong>Saturday - Sunday:</strong> 12:00 PM - 11:00 PM
        </p>
      </ContactItem>
      <ContactItem icon={"ri-mail-fill"}>
        <h3 className="text-2xl">Email:</h3>
        <p className="text-base text-gray-500">
          contact@oceanandflame.com
        </p>
      </ContactItem>
    </div>
  )
}

export default ContactInfo