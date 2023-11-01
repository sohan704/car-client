import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
 
  if(loading){
    return <div className="text-red-400 text-8xl font-semibold">Loading</div>
  }
  
  if(user?.email){
    return children;
  }

  return <Navigate state={location.pathname}  to='/login'></Navigate>
};

export default PrivateRoute;