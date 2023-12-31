import { Helmet } from "react-helmet-async";
import PageTitle from "../Shared/PageTitle/PageTitle";
import useTrainer from "../../hook/useTrainer";
import SocialLink from "../Shared/SocialLink";
import { Link } from "react-router-dom";

const Trainer = () => {
    const trainer = useTrainer();
    
    return (
        <div className="mb-10">
            <Helmet>
                <title>Fitness First | Trainer </title>
            </Helmet>
            <PageTitle title='Trainer'></PageTitle>
            <div className="flex justify-center my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                    {
                        trainer.map(item => <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="flex-1"><img src={item?.img} alt="Profile" /></figure>
                            <div className="card-body flex-1">
                                <h2 className="card-title">
                                    {item?.fullName}
                                </h2>
                                <div className="my-3">
                                    <p className="pb-2">Years of Experience : 2 years</p>
                                    <p>Available time slot : 2 hours</p>
                                </div>
                                <div className="flex justify-evenly border-t-2 border-green-500 py-4">
                                    <SocialLink></SocialLink>
                                </div>
                                <Link to={`/trainerDetails/${item._id}`}>
                                    <button className="px-4 py-2 text-gray-100 bg-blue-500 rounded  hover:bg-blue-600 w-full">Know more</button>
                                </Link>
                            </div>
                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Trainer;