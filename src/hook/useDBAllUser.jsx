import { useEffect, useState } from "react";

const useDBAllUser = () => {

    const [dbUsers, setDbUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setDbUsers(data))
            .catch(error => console.log(error.message))
    }, [])

    return dbUsers
};

export default useDBAllUser;