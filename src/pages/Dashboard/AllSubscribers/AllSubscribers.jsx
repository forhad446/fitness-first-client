import useDBAllUser from "../../../hook/useDBAllUser";

const AllSubscribers = () => {

    // all dbUsers 
    const dbUsers = useDBAllUser();

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
                                            Role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dbUsers.map(item => <tr key={item._id}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0">
                                                        <a href="#" className="relative block">
                                                            <img alt="profil" src={item?.photoUrl} className="mx-auto object-cover rounded-full h-10 w-10 " />
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
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                {item?.role}
                                                </p>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllSubscribers;