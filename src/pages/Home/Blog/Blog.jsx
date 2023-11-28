import useBlog from "../../../hook/useBlog";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Blog = () => {

    const [blog] = useBlog();
    console.log(blog);

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  my-4">
            <div>
                <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center py-10 mb-5">
                    Wellness Wisdom: Explore Our Community
                </h1>
            </div>
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    blog.map(item =>
                        <div className="overflow-hidden hover:scale-[1.05] transition duration-300 bg-white rounded ">
                            <div>
                                <img
                                    src={item.img}
                                    className="object-cover w-full h-64 rounded"
                                    alt=""
                                />
                            </div>
                            <div className="py-5">
                                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                    {item.datetime}
                                </p>
                                <div
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">
                                        {item.title.slice(0, 50)}
                                    </p>
                                </div>
                                <p className="mb-4 text-gray-700">
                                    {item.content.slice(0, 100)}
                                </p>
                                <div className="flex space-x-4">
                                    <div
                                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                    >
                                        <div className="mr-2 hover:scale-150 transition duration-300">
                                            <AiOutlineLike size='23px' />
                                        </div>
                                        <p className="font-semibold">
                                            {item.like}
                                        </p>
                                    </div>
                                    <div
                                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                    >
                                        <div className="mr-2 hover:scale-150 transition duration-300">
                                            <AiOutlineDislike className="" size='23px' />
                                        </div>
                                        <p className="font-semibold">
                                            {item.dislike}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Blog;