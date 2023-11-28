import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";

const BeATrainer = () => {
    const { user } = useContext(AuthContext);

    // // Available Time in a week
    const [checkedItems, setCheckedItems] = useState({
        Saturday: false,
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };

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

        const data = { fullName, email, age, img, weekendTime }

        console.log(data);
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
                                <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="fullName" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="email" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="email" value={user?.email} readonly />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="age" placeholder="Your Age" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type="text" className=" rounded-lg  flex-1 appearance-none border border-gray-500 w-full py-2 px-4  text-gray-700  shadow-sm text-base " name="img" placeholder="Profile Image Link" />
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
                                        checked={checkedItems.Sunday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Sunday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Monday"
                                        checked={checkedItems.Monday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Monday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Tuesday"
                                        checked={checkedItems.Tuesday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Tuesday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Wednesday"
                                        checked={checkedItems.Wednesday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Wednesday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Thursday"
                                        checked={checkedItems.Thursday}
                                        onChange={handleCheckboxChange}
                                    />
                                    Thursday
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <input
                                        type="checkbox"
                                        name="Friday"
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
                                    <span className="label-text">6:00-8:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">7:00-9:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">6:00-7:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">7:00-8:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">8:00-10:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">8:00-9:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">9:00-11:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">10:00-12:00 am</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">1:00-3:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">2:00-4:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">4:00-6:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">6:00-8:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">8:00-10:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">7:00-8:00 pm</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <h1 className="mt-2 py-2 text-xl font-medium  text-gray-900   text-center  ">
                                Your Skills
                            </h1>
                            <div className="grid md:grid-cols-3 gap-2">
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Communication</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Adaptability</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Motivational</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Nutrition Knowledge</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Problem-solving</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                <label className="label cursor-pointer border-2 rounded-lg px-2">
                                    <span className="label-text">Empathy and Patience</span>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit" className="px-4 py-2 text-gray-100 bg-blue-500 rounded  hover:bg-blue-600 w-full">
                                Applied
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BeATrainer;