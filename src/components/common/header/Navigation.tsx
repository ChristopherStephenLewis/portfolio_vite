import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className=" bg-gray-900 flex sm:justify-between justify-center p-3 max-w-screen-xl flex-wrap items-center">
            <div className="sm:flex">
                <Link to="/" className="flex">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" />
                    <span className="text-gray-100 text-2xl whitespace-nowrap font-semibold hidden sm:block">
                        Page Name
                    </span>
                </Link>
            </div>
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
