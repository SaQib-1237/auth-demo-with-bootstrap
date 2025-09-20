import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleName = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleEmail = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handlePassword = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem("user", JSON.stringify(input));

		alert("User register successfully!");

		navigate("/login");
	};

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100 register-container">
			<form className=" register-form" onSubmit={handleSubmit}>
				<h3 className="text-center mb-4">Register</h3>

				<div className="form-floating mb-3">
					<input
						name="name"
						value={input.name}
						onChange={handleName}
						type="text"
						className="form-control"
						id="floatingName"
						placeholder="FullName"
						required
					/>

					<label htmlFor="floatingName">Full Name</label>
				</div>

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
					Already have an account <Link to={"/login"}>Login</Link>
				</p>
				<button className="btn btn-primary w-100">Register</button>
			</form>
		</div>
	);
};

export default Register;
