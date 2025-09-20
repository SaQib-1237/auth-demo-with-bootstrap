import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const isAute = localStorage.getItem("loggedIn");

	return isAute ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
