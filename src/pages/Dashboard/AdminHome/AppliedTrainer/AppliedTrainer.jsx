import { useState } from "react";
import useTrainer from "../../../../hook/useTrainer";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const AppliedTrainer = () => {

    const reqTrainers = useTrainer();
    const applyTrainer = reqTrainers.filter(applied => applied.status === 'pending');
    const [selected, setSelected] = useState(null)

    const handleModalData = (id) => {
        const selectedId = reqTrainers.find(item => item._id === id);
        setSelected(selectedId);
        console.log(selected);
        console.log(selected.selectedSlots);

    }

    // handleConfirmTrainer
    const handleConfirmTrainer = (id, email) => {
        axios.put(`http://localhost:5000/trainers/${id}`)
        axios.put(`http://localhost:5000/users/${email}`)
    }

    return (
        <div>
            <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            User
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        applyTrainer.map(item => <tr key={item._id}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <a href="#" className="relative block">
                                                            <img alt="profile" src={item?.img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                        </a>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item?.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item?.email}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <span
                                                    onClick={() => {
                                                        document.getElementById('my_modal_1').showModal()
                                                        handleModalData(item._id)
                                                    }}
                                                    className="cursor-pointer relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                    </span>
                                                    <span className="relative ">
                                                        Make Trainer
                                                    </span>
                                                </span>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-extrabold text-lg">
                                        {selected && selected?.fullName}
                                    </h3>
                                    <p className="py-4">
                                        Email :
                                        {selected && selected?.email}
                                    </p>
                                    <h3 className="font-medium text-md">
                                        Skill :
                                        {selected &&
                                            selected.selectedSkills.map(data => <span className="mr-2 m-1">{data},</span>)
                                        }

                                    </h3>
                                    <h3 className="font-medium text-md">
                                        weekendTime :
                                        {selected &&
                                            selected.weekendTime.map(data => <span className="mr-2 m-1">{data},</span>)
                                        }

                                    </h3>
                                    <h3 className="font-medium text-md">
                                        Time Slots :
                                        {selected &&
                                            selected.selectedSlots.map(data => <span className="mr-2 m-1">{data},</span>)
                                        }

                                    </h3>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <div className="flex gap-5">
                                                <Link to=''>
                                                    <button 
                                                    onClick={() => handleConfirmTrainer(selected && selected?._id, selected?.email)} 
                                                    className="px-4 py-2 text-gray-100 bg-blue-500 rounded  hover:bg-blue-600">
                                                        Confirmation
                                                    </button>
                                                </Link>
                                                <Link to=''>
                                                    <button className="px-4 py-2 text-gray-100 bg-blue-500 rounded  hover:bg-blue-600">
                                                        Reject
                                                    </button>
                                                </Link>
                                            </div>

                                            <div>
                                                <button className="btn absolute top-0 right-0">
                                                    <IoMdClose />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppliedTrainer;