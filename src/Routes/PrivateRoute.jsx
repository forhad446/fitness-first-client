import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    } else if (user?.email) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;