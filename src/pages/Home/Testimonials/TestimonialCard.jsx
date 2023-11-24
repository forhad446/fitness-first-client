import icon from './../../../assets/logo.png'

const TestimonialCard = ({ item }) => {
    const { img, comment, userName } = item;
    console.log(item);
    return (
        <>
            <div className="flex items-center justify-center px-5 py-5 my-10">
                <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 rounded-lg ">
                    <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                        <a href="#" class="relative block">
                            <img alt="profile" src={img} class="mx-auto object-cover rounded-full h-20 w-20 " />
                        </a>
                    </div>
                    <div className="w-full mb-10">
                        <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
                            “
                        </div>
                        <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                            {comment}
                        </p>
                        <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                            ”
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-center text-indigo-500 text-md">
                            {userName}
                        </p>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-300">
                            @thom.hardy
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TestimonialCard;