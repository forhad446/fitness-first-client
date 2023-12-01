import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddClass = () => {
    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const short_description = form.short_description.value;
        const day = form.day.value;

        const data = { title, short_description, day }
        

        const MySwal = withReactContent(Swal)
        const showSwalWithLink = () => {
            MySwal.fire({
                position: 'center',
                icon: 'success',
                title: 'Class Added Successfully done',
                showConfirmButton: false,
                timer: 1500
            })
        }

        if (title && short_description && day) {
            axios.post('https://fitness-first-server.vercel.app/class', data)
                .then(res => {
                    showSwalWithLink()
                    // form.reset()
                })
                .catch(error => {})
        }
    }
    return (
        <div>
            <form onSubmit={handleAddClass}>
                <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                        <div className="relative mt-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300">
                                </div>
                            </div>
                            <div className="relative flex justify-center text-sm leading-5">
                                <span className="px-2 text-gray-500 bg-white">
                                    New Class Adding Now
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="w-full space-y-6">
                                <div className="w-full">
                                    <div className=" relative ">
                                        <label For="title">Title</label>
                                        <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Title " name="title" required />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className=" relative ">
                                        <label For="short">Short Description</label>
                                        <textarea type="text" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Short Description" name="short_description" required />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className=" relative ">
                                        <label For="short">Select Day</label>
                                        <select name="day" id="" className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <span className="block w-full rounded-md shadow-sm">
                                        <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Update Now
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                        <p className="text-xs leading-5 text-gray-500">
                            This data are display for information and can change
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddClass;