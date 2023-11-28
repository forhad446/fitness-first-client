import { useEffect, useState } from "react";

const useClassList = () => {
    const [classList, setClassList] = useState([])

    useEffect(() => {
        fetch('./ClassList.json')
            .then(res => res.json())
            .then(data => setClassList(data))
    }, [])
    return [classList];
};

export default useClassList;