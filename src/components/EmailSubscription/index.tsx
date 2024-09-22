import Container from "../Container"

function EmailSubscription () {
  return (
    <div className="w-full bg-lightGray">
      <Container className="flex gap-9 justify-center items-center">
        <h2 className="text-2xl text-gray-700">Stay Updated with Our Latest Offers</h2>
        <input type="text" placeholder="Enter your email" className="border border-gray-200 py-2 px-4 rounded-sm w-full max-w-80" />
        <button className="bg-gray-700 text-white py-2 px-4 rounded-sm hover:opacity-80 transition duration-300 ease-in-out w-80">Subscribe Now</button>
      </Container>
    </div>
  )
}

export default EmailSubscription