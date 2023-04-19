import { HiOutlineUsers } from "react-icons/hi2";
import { RxQuestionMark } from "react-icons/rx";
import { FaHandHoldingHeart,  } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";

const OurWork = () => {
  return (
    <section className="my-12" id="our-work">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto   lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-4xl text-teal-500">
            How we are making a difference
          </h1>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row items-center">
              <span className="bg-teal-100 p-2 rounded-full mr-2">
                <HiOutlineUsers className="h-6 w-6 text-orange-500" />{" "}
              </span>
              <p>WHO WE SERVE- Young kids between the ages of 7-19.</p>
            </div>
            <div className="flex flex-row items-center">
              <span className="bg-neon-carrot-100 p-2 rounded-full mr-2">
                <RxQuestionMark className="h-6 w-6 text-neon-carrot-500" />{" "}
              </span>
              <p>
                THE PROBLEM WE ARE SOLVING- Social ills, behaviour challenges
                that range from gangsterism, drugs, fights, cyber bullying etc .
              </p>
            </div>
            <div className="flex flex-row items-center">
              <span className="bg-teal-100 p-2 rounded-full mr-2">
                <FaHandHoldingHeart className="h-6 w-6 text-teal-500" />{" "}
              </span>
              <p>
              WHAT WE OFFER- Professional football coaching and other programs that will keep them busy, impact their lives
              </p>
            </div>
            <div className="flex flex-row items-center">
              <span className="bg-neon-carrot-100 p-2 rounded-full mr-2">
                <RiCommunityLine className="h-6 w-6 text-neon-carrot-500" />{" "}
              </span>
              <p>
              HOW THE COMMUNITY BENEFITS-  They can impact their own communities by giving back in either skills or contribute financially to the growth of their communities, 
              They become role models to the other young kids in their communities and when playing football professionally become responsible tax paying citizens
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:mt-0 md:col-span-5 md:flex">
          <img src="/img/banner.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
