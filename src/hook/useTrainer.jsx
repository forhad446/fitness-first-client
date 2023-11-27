import { useEffect, useState } from "react";

const useTrainer = () => {
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        fetch('./Trainer.json')
        .then(res => res.json())
        .then(data => setTrainer(data))
    }, [])

    return [trainer]
};

export default useTrainer;