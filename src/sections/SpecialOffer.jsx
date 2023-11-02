import Button from "../components/Button"
import {offer} from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-containe w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart</p>
          <p className="mt-6 lg:max-w-lg info-text">Navigate a realm og possibilities designed to fulfill your unique desire, surparssing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className="flex flex-wrap gap-4 mt-11">
            <Button label="Shop now" iconURL={arrowRight}/>
            <Button 
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray" 
            />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer