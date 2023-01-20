const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center
    bg-[url('/img/banner2.jpg')] md:h-96 sm:h-72 lg:h-[32rem]"
    >
        <div className="backdrop-brightness-100"> 
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto   lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
            We do it for their future.
          </p>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Restoration of Hope
          </h1>
         
          
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* <img
            src="/img/banner.png"
            alt="mockup"
          /> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
