import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';

function Navigation() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav className=" bg-gray-900 flex justify-between p-3 max-w-screen-xl flex-wrap items-center">
            <button onClick={toggleNavbar} className="sm:hidden flex items-center">
                {isNavbarOpen ? (
                    <XMarkIcon className="h-6 w-6 text-gray-200" />
                ) : (
                    <Bars3Icon className="h-6 w-6 text-gray-200" />
                )}
            </button>
            <div className="sm:flex">
                <Link to="/" className="flex">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" />
                    <span className="text-gray-100 text-2xl whitespace-nowrap font-semibold hidden sm:block">
                        Page Name
                    </span>
                </Link>
            </div>
            <div className="sm:hidden"></div>
            <ul className="sm:flex hidden">
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2 relative inline-block group">
                    <Link to="/about">About</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full ease-in-out"></span>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2 relative inline-block group">
                    <Link to="/experience">Experience</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full ease-in-out"></span>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2 relative inline-block group">
                    <Link to="/work">Work</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full ease-in-out"></span>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2 relative inline-block group">
                    <Link to="/blog">Blog</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full ease-in-out"></span>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2 relative inline-block group">
                    <Link to="/contact">Contact</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-200 group-hover:w-full ease-in-out"></span>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
