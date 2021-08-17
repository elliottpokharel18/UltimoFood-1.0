import Tick from "../assets/tick.png";
import Image from "next/image";

function CradWrapper(image) {
  return (
    <div className="md:flex md:justify-center md:space-x-8 md:px-14 mb-80 ">
      <div className="mt-16 py-4 px-4 h-64 w-72 bg-white rounded-xl shadow-card hover:bg-yellow-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Tick} alt="order" />
            <h1 className="text-xl font-bold mt-10">Order</h1>
            <p className="mt-4 text-gray-600">
              Select and order your favorites food.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card  hover:bg-yellow-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Tick} alt="order" />
            <h1 className="text-xl font-bold mt-10">Receive</h1>
            <p className="mt-4 text-gray-600">
              Receive your favorite foods on your doorstep.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-card hover:bg-yellow-100 hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div className="w-sm mx-auto">
          <div className="mt-4 text-primary text-center">
            <Image className="w-24" src={Tick} alt="order" />
            <h1 className="text-xl font-bold mt-10">Serve</h1>
            <p className="mt-4 text-gray-600">
              We serve all kind of Food and Grocery Item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CradWrapper;
