import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ClassList = ({ title, id, description }) => {
    
    return (
        <Card className="max-w-sm transition-transform duration-300 ease-in-out hover:scale-[1.09] relative bg-white backdrop-blur-[25px] backdrop-saturate-[200%] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 my-2">
                {description}
            </p>
            <Link to={`/classes/classDetails/${id}`}  
                class="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-600 py-3 px-6 text-base font-medium text-white shadow-xl shadow-slate-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" >
                    Know Details
            </Link>
        </Card>
    );
};

export default ClassList;