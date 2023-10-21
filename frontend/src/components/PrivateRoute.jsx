import { useSelector } from "react-redux";
import { Navigate, Outlet ,} from "react-router-dom";


const PrivateRoute = () => {
    const { userInfo} = useSelector((state) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to='login' replace />;
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute

