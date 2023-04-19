import Link from 'next/link'
import React from 'react'

const OurMission = () => {
  return (
    <section className="bg-white " id='about-us'>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    
        <div className="font-light  sm:text-lg ">
            <Link href='#about-us'>
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-teal-500 ">About Us</h2>
            </Link>
            <h3 className='text-neon-carrot-500 font-light'>OUR VISION</h3>
            <p className="mb-6"> To Empower and impact the lives of  young and girls through sport.We envision a future where every child has access to resources and support  to pursue their passion and reach their full potential not only in sports but also positively impact their educational outcomes.</p>
            <h3 className='text-neon-carrot-500 font-light'>OUR MISSION</h3>
            <p className="mb-6">To  give an opportunity to the less privileged boys and girls by giving them a platform to achieve their dreams of becoming professional athlete. We strive to remove any barriers tht may prevent them from achieving their dreams by fostering a culture of inclusion and positivity..</p>
            <h3 className='text-neon-carrot-500 font-light'>OUR PURPOSE</h3>
            <p className="mb-6">  To get as many young boys and girls out of trouble, streets, drugs and gangsterism.  We aim to inspire and empower kids to be their best selves, both on and off the field. We do not only aim to promote physical activity but to also provide resources to holistically address the challenges that they meet through the various programmes we offer. </p>
            <h3 className='text-neon-carrot-500 font-light'>OUR VALUES</h3>
            <p className="mb-6"> Integrity, Love, Fairness and Honesty, Ubuntu and Courage. </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="/img/kids1.png" alt="Kids Playing"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/img/kids2.png" alt="Kids Playing"/>
        </div>
    </div>
</section>
  )
}

export default OurMission