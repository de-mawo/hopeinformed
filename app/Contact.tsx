import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="py-8 px-4 mx-auto mb-12 max-w-screen-xl lg:py-16 lg:px-6 " id="contact">
     
      <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-teal-500 ">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
       We would like to hear from you!
      </p>
      <div className="grid gap-8 mb-12 lg:mb-16 md:grid-cols-2 shadow-lg p-4 rounded-md">
        <section className="flex flex-col space-y-5">
          <div className="flex flex-row items-center text-sm md:text-base">
          <span className="bg-teal-100 p-2 rounded-full mr-2">   <HiOutlineEnvelope className="h-6 w-6 text-teal-500" />  </span> <p>info@hopeinformedfoundation.org</p>
          </div>
          <div className="flex flex-row items-center text-sm md:text-base">
          <span className="bg-teal-100 p-2 rounded-full mr-2">   <HiOutlinePhone className="h-6 w-6 text-teal-500"  /> </span> <p>(+27) 67 109 1283</p>
          </div>
          <div className="flex flex-row items-center text-sm md:text-base">
          <span className="bg-teal-100 p-2 rounded-full mr-2">   <HiOutlineMapPin className="h-6 w-6 text-teal-500" /> </span>
            <p>5 Regent Road, Parklands, 7441, Cape Town, South Africa</p>
          </div>
        </section>
        <ContactForm />
      </div>
     
    </div>
  );
};

export default Contact;
