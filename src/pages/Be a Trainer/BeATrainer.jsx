import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTrainer from "../../hook/useTrainer";
import { Navigate } from "react-router-dom";


const BeATrainer = () => {
    const { user } = useContext(AuthContext);
    const MySwal = withReactContent(Swal)
    const showSwalWithLink = () => {
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Trainer Request Successfully done',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const [error, setError] = useState('')
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [checkedItems, setCheckedItems] = useState({
        Saturday: false,
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
    });

    const trainer = useTrainer()
    const isExit = trainer.filter(item => item.email === user?.email)


    // toast message
    const notify = () => toast(error);

    // Available Skill
    const handleCheckboxChangeForSkill = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedSkills([...selectedSkills, value]); // Add the selected skill
        } else {
            const updatedSkills = selectedSkills.filter((skill) => skill !== value); // Remove the deselected skill
            setSelectedSkills(updatedSkills);
        }
    };
    // Available Time in a day
    const handleCheckboxChangeForDay = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setSelectedSlots([...selectedSlots, value]); // Add the selected slot
        } else {
            const updatedSlots = selectedSlots.filter((slot) => slot !== value); // Remove the deselected slot
            setSelectedSlots(updatedSlots);
        }
    };
    // Available Time in a week
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };
    // for button submit
    const handleAddApply = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const age = form.age.value;
        const img = form.img.value;
        // Available Time in a week
        const weekendTime = Object.keys(checkedItems).filter(
            (key) => checkedItems[key])

        const data = { fullName, email, age, img, weekendTime, selectedSlots, selectedSkills, status : 'pending' }

        // clear the error state
        setError('')

        if (!/^(ftp|http|https):\/\/[^ "]+$/.test(img)) {
            setError('Image link is invalid');
            return (error && notify());
        }
        else if (!/^[A-Za-z '-]+$/.test(fullName)) {
            setError('FullName is invalid');
            return (error && notify());
        }

        if (data) {
            if (isExit.length === 0) {
                axios.post('http://localhost:5000/trainers', data)
                    .then(res => {
                        showSwalWithLink()
                        form.reset()
                        Navigate('/trainer')
                    })
                    .catch(error => console.log(error.message))
            } else {
                setError('Already Applied For Trainer')
            }
        }
    }

    return (
        <div className="flex justify-center my-6">
            <div className="flex flex-col md:w-9/12  px-4  rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
                <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center mb-4 ">
                    Be a Trainer
                </h1>
                <div className="p-4 ">
                    <form onSubmit={handleAddApply}>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="fullName" placeholder="Full Name" required />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="email" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="email" value={user?.email} readonly />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="number" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="age" placeholder="Your Age" required />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="img" placeholder="Profile Image Link" required />
                            </div>
                        </div>
                        <div>
                            <h1 className="mt-2 py-2 text-xl font-medium  text-gray-900   text-center  ">
                                Available Time in a week
                            </h1>
                            <div className="grid md:grid-cols-3 gap-2">
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        name="Saturday"
                                        checked={checkedItems.Saturday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Saturday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Sunday"
                                        className="checkbox"
                                        checked={checkedItems.Sunday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Sunday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Monday"
                                        className="checkbox"
                                        checked={checkedItems.Monday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Monday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Tuesday"
                                        className="checkbox"
                                        checked={checkedItems.Tuesday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Tuesday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Wednesday"
                                        className="checkbox"
                                        checked={checkedItems.Wednesday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Wednesday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Thursday"
                                        className="checkbox"
                                        checked={checkedItems.Thursday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Thursday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Friday"
                                        className="checkbox"
                                        checked={checkedItems.Friday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Friday
                                </label>
                            </div>
                        </div>
                        <div>
                            <h1 className="mt-2 py-2 text-xl font-medium  text-gray-900   text-center  ">
                                Available Time in a Day
                            </h1>
                            <div className="grid md:grid-cols-3 gap-2">
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="7:00-9:00 am"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    7:00-9:00 am
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="8:00-9:00 am"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    8:00-9:00 am
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="7:00-8:00 am"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    7:00-8:00 am
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="8:00-10:00 am"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    8:00-10:00 am
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="9:00-10:00 am"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    9:00-10:00 am
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="10:00-12:00 pm"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    10:00-11:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="11:00-12:00 pm"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    11:00-12:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="1:00-3:00 pm"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    1:00-3:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value=""
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    2:00-4:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value=""
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    4:00-6:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="6:00-8:00 pm"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    6:00-8:00 pm
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="8:00-10:00 pm"
                                        onChange={handleCheckboxChangeForDay}
                                    />
                                    8:00-10:00 pm
                                </label>
                            </div>
                        </div>
                        <div>
                            <h1 className="mt-2 py-2 text-xl font-medium  text-gray-900   text-center  ">
                                Your Skills
                            </h1>
                            <div className="grid md:grid-cols-3 gap-2">
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Communication"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Communication
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Adaptability"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Adaptability
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Motivational"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Motivational
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Nutrition Knowledge"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Nutrition Knowledge
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Problem Solving"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Problem Solving
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        value="Empathy and Patience"
                                        onChange={handleCheckboxChangeForSkill}
                                    />
                                    Empathy and Patience
                                </label>
                            </div>
                        </div>
                        {
                            isExit.length === 0 ?
                                <>
                                    <div className="flex w-full my-4">
                                        <button type="submit" className="px-4 py-2 text-gray-100 bg-blue-500 rounded  hover:bg-blue-600 w-full">
                                            Applied
                                        </button>
                                    </div>
                                </> :
                                <>
                                    <div className="flex w-full my-4">
                                        <p className="px-4 py-2 text-gray-100 bg-[#339900] rounded  hover:bg-blue-600 w-full text-center">
                                            Already Applied For Trainer
                                        </p>
                                    </div>
                                </>
                        }

                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BeATrainer;