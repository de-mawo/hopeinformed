import Link from "next/link";

import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlinePhoneArrowUpRight,
  HiOutlineUser,
} from "react-icons/hi2";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="">
      {/* Footer Mobile Screen */}
      <section className="fixed bottom-0 z-10 w-full  bg-white">
        <div className="flex  justify-between items-center border-t-2 border-neon-carrot-300 px-10 py-5  md:hidden">
          <div className="cursor-pointer">
            <HiOutlineHome className="h-8 w-8  text-neon-carrot-600" />
            <p className="text-sm">Home</p>
          </div>
          <div className="cursor-pointer">
            <HiOutlineMagnifyingGlass className="h-8 w-8 ml-1 text-neon-carrot-600" />
            <p className="text-sm">Search</p>
          </div>

          <div className="cursor-pointer">
            <HiOutlinePhoneArrowUpRight className="h-8 w-8 ml-3 text-neon-carrot-600 " />
            <p className="text-sm">Contact</p>
          </div>
        </div>
      </section>

      {/* Footer Desktop Screen */}
      <section className="hidden md:flex  justify-around items-center  bg-neon-carrot-50 py-12 px-12 ">
        <div className="items-center">
          <Image src="/img/hi-black.png" alt="logo" width={100} height={70} />
        </div>

        <div className=" flex flex-col space-y-2 text-teal-700">
          <h2 className="font-semibold">ABOUT</h2>
          <Link
            href="#contact-us"
            className="hover:scale-105 transition-all duration-200 ease-out "
          >
            Contact Us
          </Link>
          <Link
            href="#faqs"
            className="hover:scale-105 transition-all duration-200 ease-out "
          >
            FAQ
          </Link>
        </div>

        <div className=" flex flex-col  space-y-2 text-teal-700">
          <h4 className=" font-semibold">LEGAL</h4>
          <Link
            href="#terms-of-use"
            className="hover:scale-105 transition-all duration-200 ease-out "
          >
            {" "}
            <span> Terms Of Use</span>{" "}
          </Link>
          <Link
            href="#privacy policy"
            className="hover:scale-105 transition-all duration-200 ease-out "
          >
            Privacy Policy
          </Link>
        </div>
      </section>
      <section className="hidden md:block py-12 px-12 justify-center bg-neon-carrot-50 text-teal-700">
        <div className="flex justify-center my-5 space-x-3">
          <Link href="#">
            <BsFacebook className="h-6 w-6 mr-4  hover:scale-150 transition-all duration-200 ease-out" />
          </Link>
          <Link href="#">
            <BsInstagram className="h-6 w-6 mr-4  hover:scale-150 transition-all duration-200 ease-out" />
          </Link>
          <Link href="#">
            <BsLinkedin className="h-6 w-6 mr-4  hover:scale-150 transition-all duration-200 ease-out" />
          </Link>
        </div>
        <p className=" text-center"> &copy;{Year} Hope Informed Foundation </p>
      </section>
    </footer>
  );
};

export default Footer;
