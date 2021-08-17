import Quality from "../assets/quality.png";
import Image from "next/image";
import Food from "../assets/food.png";
import Care from "../assets/care.png";
import Choice from "../assets/choice.png";

function ServiceCardWrapper(image) {
  return (
    <div className="md:flex md:justify-center md:space-x-6 md:px-14 mb-60 ">
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card  hover:bg-red-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary flex flex-wrap justify-center text-center">
            <Image className=" w-24" src={Food} alt="order" />
            <h1 className="text-xl font-bold mt-10">Fresh service</h1>
            <p className="mt-4 text-gray-600">
              Select and order your favorites food.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card  hover:bg-red-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Care} alt="order" />
            <h1 className="text-xl font-bold mt-10">24/7 Support </h1>
            <p className="mt-4 text-gray-600">
              Receive your favorite foods on your doorstep.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card hover:bg-red-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Choice} alt="order" />
            <h1 className="text-xl font-bold mt-10">Unlimited choices</h1>
            <p className="mt-4 text-gray-600">
              We serve all kind of Food and Grocery Item.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card hover:bg-red-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Quality} alt="order" />
            <h1 className="text-xl font-bold mt-10">Quality </h1>
            <p className="mt-4 text-gray-600">
              We serve all kind of Food and Grocery Item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardWrapper;
