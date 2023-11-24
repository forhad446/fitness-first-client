import { NavLink } from "react-router-dom";
import logo from './../../../assets/logo.png'
import profile from './../../../assets/img/avatar.png'

const NavBar = () => {
    const navItem = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 underline" : ""
            } aria-current="page">Home</NavLink>
        </li>
        <li>
            <NavLink to='/gallery' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Gallery</NavLink>
        </li>
        <li>
            <NavLink to='/trainer' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Trainer</NavLink>
        </li>
        <li>
            <NavLink to='/classes' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Classes</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/community' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Community</NavLink>
        </li>
        <li>
            <NavLink to='/login' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Login</NavLink>
        </li>
        <li>
            <NavLink to='/register' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
            }>Register</NavLink>
        </li>
    </>
    return (
        <div className="  ">
            <nav className="bg-stone-100 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Fitness First" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Fitness First</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={profile} alt="user photo" />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow " id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 ">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate ">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            {navItem}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;