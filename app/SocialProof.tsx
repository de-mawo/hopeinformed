import React from 'react'

const SocialProof = () => {
  return (
    <section className="bg-teal-50 ">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-teal-500 sm:grid-cols-3 ">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">500+</dt>
              <dd className="font-light text-gray-500">Kids Reached</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">20+</dt>
              <dd className="font-light text-gray-500 ">WorkShops</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5+</dt>
              <dd className="font-light text-gray-500 ">Projects Accomplished</dd>
          </div>
      </dl>
  </div>
</section>
  )
}

export default SocialProof