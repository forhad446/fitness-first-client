import { useEffect, useState } from "react";

const useTrainer = () => {
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(data => setTrainer(data))
    }, [])

    return [trainer]
};

export default useTrainer;