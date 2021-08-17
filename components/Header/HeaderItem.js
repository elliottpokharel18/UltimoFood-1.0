import PlayStore from "../assets/play.png";
import AppStore from "../assets/ios.png";
import Image from "next/image";

function HeaderItem() {
  return (
      <div className="flex md:flex justify-center my-4 lg:my-0">
        <div className=" rounded-full relative w-56 lg:w-80 lg:h-24 h-16 ">
        <Image className="rounded-full" alt="Get" layout="fill"
          objectFit="contain" src={PlayStore} />
        </div>
        <div className=" rounded-full relative w-56 lg:w-80 lg:h-24 h-16">
        <Image className="rounded-full" alt="Get"  layout="fill"
          objectFit="contain" src={AppStore} />
        </div>

      </div>
    
  );
}

export default HeaderItem;
