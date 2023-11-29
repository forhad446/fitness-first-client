import { useState } from "react";
import { FaAd, FaBook, FaChalkboardTeacher, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { MdAccountBalanceWallet } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();
    const [isAdmin, setIsAdmin] = useState('null')

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allSubscribers">
                                    <FaUsers></FaUsers>
                                    All subscribers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaChalkboardTeacher></FaChalkboardTeacher>
                                    All Trainers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <VscGitPullRequestNewChanges></VscGitPullRequestNewChanges>
                                    Applied Trainer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <MdAccountBalanceWallet></MdAccountBalanceWallet>
                                    Balance</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <LuActivity></LuActivity>
                                        Activity Log</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <IoMdSettings></IoMdSettings>
                                        Profile Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <SiGoogleclassroom></SiGoogleclassroom>
                                        Recommended Classes Page</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;