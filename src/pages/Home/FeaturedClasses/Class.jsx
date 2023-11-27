import useClass from "../../../hook/useClass";

const Class = () => {
    const [item] = useClass();

    return (
        <>

            <div className="my-10 ">
                <div className="mb-10">
                    <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:text-4xl text-center">
                        Class Spotlight <br /> Unleash Your Potential
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        item.map(item =>
                            // 
                            <div key={item.id} className="flex flex-col transition duration-300 rounded hover:scale-95">
                                <div className="relative w-full h-48">
                                    <img src={item.img} className="object-cover w-full h-full rounded-t" alt="Plan" />
                                </div>
                                <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                                    <div>
                                        <div className="text-lg font-semibold">
                                            {item.title}
                                        </div>
                                        <p className="text-sm text-gray-900">
                                            {item.short_description}
                                        </p>
                                        <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                                            {item.price}
                                        </div>
                                    </div>
                                    <a
                                        href="/"
                                        className="px-4 py-2 text-gray-100 bg-blue-500 rounded text-center hover:bg-blue-600"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            // 
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default Class;