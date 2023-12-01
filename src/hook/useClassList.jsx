import { useEffect, useState } from "react";

const useClassList = () => {
    const [classList, setClassList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => setClassList(data))
    }, [])
    return classList;
};

export default useClassList;