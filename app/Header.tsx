import Link from 'next/link'
import MobileSideBar from './MobileSideBar';

const Header = () => {
  return (
    <header className='sticky top-0 z-10'>
    <nav className="bg-white border-gray-200 px-4 shadow-md lg:px-6 py-6 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" prefetch={false} className="flex items-center">
                <img src="/img/hope.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center text-base md:text-xl font-light whitespace-nowrap lg:hover:text-teal-500">Hope Informed Foundation</span>
            </Link>
          
          <div>
          <MobileSideBar/>
          </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                        <a href="#our-work" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-500 lg:p-0">Our Work </a>
                    </li>
                    <li>
                        <a href="#about-us" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-500 lg:p-0">About Us</a>
                    </li>
                   
                    <li>
                        <a href="#our-team" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-500 lg:p-0">Our Team</a>
                    </li>
                    <li>
                        <a href="#contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-500 lg:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header