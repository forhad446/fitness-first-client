import { useEffect, useState } from "react";

const useTrainer = () => {
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        fetch('https://fitness-first-server.vercel.app/trainers')
        .then(res => res.json())
        .then(data => setTrainer(data))
    }, [])

    return trainer;
};

export default useTrainer;