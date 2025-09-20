import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const [input, setInput] = useState({ email: "", password: "" });

	const handleEmail = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handlePassword = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const loggedinUser = JSON.parse(localStorage.getItem("user"));

		if (
			input?.email === loggedinUser?.email &&
			input?.password === loggedinUser?.password
		) {
			alert("user LoggedIn successfully!");

			localStorage.setItem("loggedIn", true);

			navigate("/");
		} else {
			alert("invalid Credentails!");
		}
	};

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100 login-container">
			<form className=" login-form" onSubmit={handleSubmit}>
				<h3 className="text-center mb-4">Login</h3>

				<div className="form-floating mb-3">
					<input
						name="email"
						value={input.email}
						onChange={handleEmail}
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						required
					/>

					<label htmlFor="floatingInput">Email address</label>
				</div>

				<div className="form-floating mb-3">
					<input
						name="password"
						value={input.password}
						onChange={handlePassword}
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						required
					/>

					<label htmlFor="floatingPassword">Password</label>
				</div>

				<p>
					Don't have an account <Link to={"/register"}>Register</Link>
				</p>
				<button className="btn btn-primary w-100">Login</button>
			</form>
		</div>
	);
};

export default Login;
