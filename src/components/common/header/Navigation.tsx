import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className=" bg-gray-900 flex justify-between p-3 max-w-screen-xl flex-wrap items-center">
            <div className="flex">
                <Link to="/" className="flex">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" />
                    <span className="text-gray-100 text-2xl whitespace-nowrap font-semibold">
                        Page Name
                    </span>
                </Link>
            </div>
            <ul className="flex">
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2">
                    <Link to="/experience">Experience</Link>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2">
                    <Link to="/work">Work</Link>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="text-gray-200 hover:text-yellow-500 pl-3 pr-3 py-2">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
