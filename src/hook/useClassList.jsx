import { useEffect, useState } from "react";

const useClassList = () => {
    const [classList, setClassList] = useState([])

    useEffect(() => {
        fetch('https://fitness-first-server.vercel.app/class')
            .then(res => res.json())
            .then(data => setClassList(data))
    }, [])
    return classList;
};

export default useClassList;