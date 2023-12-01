import { useEffect, useState } from "react";

const useDBAllUser = () => {

    const [dbUsers, setDbUsers] = useState([]);

    useEffect(() => {
        fetch('https://fitness-first-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setDbUsers(data))
            .catch(error => {})
    }, [])

    return dbUsers
};

export default useDBAllUser;