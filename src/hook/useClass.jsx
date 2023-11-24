import { useEffect, useState } from "react";

const useClass = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('./featuredClasses.json')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return [item];
};

export default useClass;