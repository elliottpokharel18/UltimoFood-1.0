import Image from "next/image";
import Logo from "../assets/logo.png";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="lg:flex lg:sticky shadow-lg cursor-pointer md:mx-auto  items-center justify-evenly h-32">
      <div className="relative  object-top cursor-pointer lg:w-72 h-12 ">
        <Image
          className="transition duration-300 ease-in-out transform hover:-translate-y-0.25 hover:scale-95 w-72 sm:laptop"
          src={Logo}
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
        <HeaderItem />
     
    </header>
  );
}

export default Header;
