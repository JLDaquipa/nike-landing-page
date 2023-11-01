import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer