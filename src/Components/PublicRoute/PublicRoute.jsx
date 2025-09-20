import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
	const isAute = localStorage.getItem("loggedIn");

	return !isAute ? <Outlet /> : <Navigate to={"/"} />;
};

export default PublicRoute;
