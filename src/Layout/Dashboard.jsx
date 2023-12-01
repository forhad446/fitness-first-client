import { useState } from "react";
import { FaAd, FaBook, FaChalkboardTeacher, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCheckToSlot, FaForumbee } from "react-icons/fa6";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { MdAccountBalanceWallet } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useDBAllUser from "../hook/useDBAllUser";
import useAuth from "../hook/useAuth";


const Dashboard = () => {
    const { user } = useAuth();
    const dbUser = useDBAllUser()
    const currentUser = dbUser.find(item => item.email === user.email)

    const [isAdmin, setIsAdmin] = useState(currentUser?.role);
    const role = currentUser?.role;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        currentUser?.role === 'admin' && <>
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
                                <NavLink to="/dashboard/allTrainers">
                                    <FaChalkboardTeacher></FaChalkboardTeacher>
                                    All Trainers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedTrainer">
                                    <VscGitPullRequestNewChanges></VscGitPullRequestNewChanges>
                                    Applied Trainer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/balance">
                                    <MdAccountBalanceWallet></MdAccountBalanceWallet>
                                    Balance</NavLink>
                            </li>
                        </>
                    }
                    {
                        currentUser?.role === 'trainerb' && <>
                            <li>
                                <NavLink to="/dashboard/trainerHome">
                                    <FaHome></FaHome>
                                    Trainer Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageSlot">
                                    <FaCheckToSlot />
                                    Manage Slots</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageMember">
                                    <IoMdSettings></IoMdSettings>
                                    Manage member</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addForum">
                                    <FaForumbee />
                                    Add new Forum</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addClass">
                                    <SiGoogleclassroom></SiGoogleclassroom>
                                    Add new Class</NavLink>
                            </li>
                        </>
                    }
                    {
                        currentUser?.role === 'trainer' && <>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/activity">
                                    <LuActivity></LuActivity>
                                    Activity Log</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/profileSetting">
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