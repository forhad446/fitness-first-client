import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user, loader } = useAuth();

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const dbAdmin = data.filter(data => data.role === 'admin')
                setAdmin(dbAdmin)
            })
            .catch(error => console.log(error.message))
    }, [])

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!user?.role) {
        return admin;
    }



};

export default useAdmin;