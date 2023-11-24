import icon1 from './../../../assets/icon/icon 1.png'
import icon2 from './../../../assets/icon/Trainers Recommendations.png'
import icon3 from './../../../assets/icon/Popular Workouts.png'
import icon4 from './../../../assets/icon/Wellness Essentials.png'
import icon5 from './../../../assets/icon/Nutrition Must-Haves.png'
import icon6 from './../../../assets/icon/Gear & Gadgets.png'

const Featured = () => {
    return (
        <>
            <div className="container my-10 p-6 px-6 mx-auto bg-white dark:bg-gray-800">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                        Features
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Top Picks for Your Fitness Journey
                    </p>
                </div>
                <div className="flex flex-wrap my-12 text-center">
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div className="flex flex-col items-center justify-center mb-6">
                            <img src={icon1} alt="" />
                            <div className="ml-4 text-center text-xl">
                                Fitness Innovations
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Explore cutting-edge Fitness Innovations revolutionizing workouts, from high-tech equipment to groundbreaking training methodologies, redefining how you achieve peak performance.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex flex-col items-center mb-6">
                            <img src={icon2} alt="" />
                            <div className="ml-4 text-xl">
                                Trainer's Recommendations
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Expert-approved routines and exercises curated by top fitness professionals to help you achieve your goals efficiently and effectively.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                        <div className="flex flex-col items-center mb-6">
                            <img src={icon3} alt="" />
                            <div className="ml-4 text-xl">
                                Popular Workouts
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Explore our curated selection of trending and effective workouts designed to elevate your fitness routine. From high-intensity sessions to mindful practices, discover workouts that suit every fitness level and goal.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                        <div className="flex flex-col items-center mb-6">
                            <img src={icon4} alt="" />
                            <div className="ml-4 text-xl">
                                Wellness Essentials
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Explore our curated selection of wellness essentials, designed to optimize your health and vitality. From supplements to mindfulness tools, discover everything you need for a balanced and thriving lifestyle.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                        <div className="flex flex-col items-center mb-6">
                            <img src={icon5} alt="" />
                            <div className="ml-4 text-xl">
                                Nutrition Must-Haves
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Discover the essential fuel for your body - explore our curated selection of top-quality supplements, superfoods, and balanced meal options that power your fitness journey and nourish your well-being.
                        </p>
                    </div>
                    <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                        <div className="flex flex-col items-center mb-6">
                            <img src={icon6} alt="" />
                            <div className="ml-4 text-xl">
                                Gear & Gadgets
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Discover the latest in fitness technology and essential gear to elevate your workouts. From smart devices to performance-enhancing equipment, explore our curated selection designed to maximize your fitness potential.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Featured;