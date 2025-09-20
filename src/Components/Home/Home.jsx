import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
	const navigate = useNavigate();

	const userName = JSON.parse(localStorage.getItem("user"));
	const handleLogout = () => {
		localStorage.removeItem("loggedIn");

		navigate("/login");
	};
	return (
		<div className="container d-flex justify-content-center align-items-center vh-100 login-container">
			<div className=" home-page">
				<h3 className="text-center mb-4">Home</h3>
				<h1 className="mb-4 text-center">
					Welcome : <span className="text-danger">{userName?.name}</span>
				</h1>
				<button className="btn btn-success w-100 " onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Home;
