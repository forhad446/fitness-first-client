import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useTrainer from "../../hook/useTrainer";
import { CgProfile } from "react-icons/cg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const TrainerDetails = () => {
    const [trainers, setTrainers] = useState([])
    const { id } = useParams()
    const trainer = useTrainer();
    
    const isExit = trainer.find(item => item._id === id)
    console.log(isExit);
    useEffect(() => {
        fetch('http://localhost:5000/trainers')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [id])
    return (
        <div>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center py-10 ">
                        Your Trainer's Hourly Availability
                    </h1>
                    <p className="text-base text-gray-700 md:text-lg">
                        Explore your trainer's daily schedule broken down into hourly availability slots. This page offers a detailed view of when your trainer is free, allowing you to plan and book sessions conveniently.
                    </p>
                </div>
                <div className="lg:max-w-screen-md sm:mx-auto">
                    <div className="  p-5 bg-white border rounded shadow-sm">
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-6 border-b">
                                <div>
                                    <p className="text-sm font-bold tracking-wider uppercase">
                                        {isExit?.fullName}
                                    </p>
                                    <p className="text-3xl font-extrabold">Trainer</p>
                                </div>
                                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                                    <CgProfile />
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-bold tracking-wide">
                                    6 slot available
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            7:00-9:00 Monday/Wednesday
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            10:00-12:00 Monday/Wednesday
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            12:30-14:00 Friday/Saturday
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            7:00-9:00 Monday/Wednesday
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            7:00-9:00 Monday/Wednesday
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-2">
                                            <IoCheckmarkCircleOutline />
                                        </div>
                                        <p className="font-medium text-gray-800">
                                            7:00-9:00 Monday/Wednesday
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <Link
                                to="/beATrainer"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-gray-100 bg-blue-500 rounded  hover:bg-blue-600 transition duration-200 shadow-md"
                            >
                                Become a Trainer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;