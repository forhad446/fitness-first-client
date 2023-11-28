import { NavLink, Navigate } from "react-router-dom";
import logo from './../../../assets/logo.png'
import profile from './../../../assets/img/avatar.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../authentication/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase.config";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {

    const { user, setLoader } = useContext(AuthContext);
    const [close, setClose] = useState(true)

    console.log(user);
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
        {
            user?.email ?
                <>
                    <li>
                        <NavLink onClick={() => {
                            signOut(auth)
                            setLoader(false)
                            Navigate ('/login')
                        }} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "block py-2 px-3  rounded md:hover:text-blue-700 md:text-blue-700 md:p-0 underline" : ""
                        }>Log Out</NavLink>
                    </li>
                </> :
                <>
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
        }

    </>

    return (
        <div className="  ">
            <nav className="bg-stone-100 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Fitness First" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Fitness First</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={user?.email ? user?.photoURL ? user?.photoURL : profile : profile} alt="user photo" />
                        </button>
                        <button onClick={() => setClose(!close)} className="md:hidden">
                            {
                                close ?
                                    <IoMenu size='40px' /> :
                                    <IoClose size='40px' />
                            }
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            {navItem}
                        </ul>
                    </div>
                    {/* for mobile device */} 
                    {
                        !close &&
                        <div className="md:hidden z-30 min-h-screen absolute right-0 top-16 rounded-lg text-center w-6/12  bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%]  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
                            <ul className="flex flex-col font-medium p-4 gap-2 rtl:space-x-reverse">
                                {navItem}
                            </ul>
                        </div>
                    }
                </div>
            </nav>

        </div>
    );
};

export default NavBar;