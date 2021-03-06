import Logo from "../assets/logo.png";
import Image from "next/image";


function Footer() {
    return (
             <footer className="footer bg-white relative pt-1 border-b-2 border-primary">
                 <div className="flex items-center border border-primary px-8 py-4 justify-center">
                   <div className="relative object-top cursor-pointer lg:w-60 h-12 ">
                    <Image
                    className="transition duration-300 ease-in-out transform hover:-translate-y-0.25 hover:scale-95 w-72 sm:laptop"
                    src={Logo}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                    />
                 </div>
                 <div className="flex-grow ">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 sm:space-x-8 flex flex-col md:flex-row lg:space-x-48 ml-4">
                        <div className="flex flex-col ">
                    <span className="font-bold text-gray-700 uppercase mb-2">Special Course</span>
                <span className="my-2"><a href="#" className="text-primary  text-md hover:text-secondary ">Wedding Foods</a></span>
                <span className="my-2"><a href="#" className="text-primary  text-md hover:text-secondary ">Healthy and Muscle</a></span>
                <span className="my-2"><a href="#" className="text-primary  text-md hover:text-secondary ">Office Food Daily</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mb-2">Follow us On</span>
                <span className="my-2"><a href="https://www.facebook.com/ultimodealonline" className="text-primary  text-md hover:text-secondary ">Facebook</a></span>
                <span className="my-2"><a href="https://www.instagram.com/ultimodeal/" className="text-primary  text-md hover:text-secondary ">Instagram</a></span>
                <span className="my-2"><a href="https://www.youtube.com/channel/UCbFmckWeqRgBUh-7gL0aBdw" className="text-primary  text-md hover:text-secondary ">Youtube</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Company</span>
                <span className="my-2"><a href="#" className="text-primary text-md hover:text-secondary ">API Developer</a></span>
                <span className="my-2"><a href="#" className="text-primary  text-md hover:text-secondary ">Career</a></span>
                <span className="my-2"><a href="#" className="text-primary text-md hover:text-secondary ">Terms and Condition</a></span>
                <span className="my-2"><a href="#" className="text-primary text-md hover:text-secondary ">Privacy Policy</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-2 md:mt-0 mb-2">Be Our Friend</span>
                <span className="my-2"><a  className="text-primary  text-md hover:text-secondary ">Sital Marga, Baluwatar, Kathmandu</a></span>
                <span className="my-2"><a  className="text-primary  text-md hover:text-secondary ">ultimofood@ultimodeal.com.np</a></span>
                <span className="my-2"><a  className="text-primary  text-md hover:text-secondary ">+977-986-2315-24</a></span>
                </div>
            </div>
        </div>
    </div>
                 </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-primary font-bold mb-2">
                    ?? 2021 By Ultimodeal Online Shopping
                </p>
            </div>
        </div>
    </div>
</footer>
     
    )
}

export default Footer;
