import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";

const AdminRoute = ({ children }) => {

    const { user, loader } = useAuth();
    const [admin] = useAdmin();
    console.log(admin);

    if (loader || !admin?.email) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user?.email && user?.email === admin?.email && admin.role === 'admin') {
        console.log('admin route',admin);
        console.log('admin route',user);
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default AdminRoute;