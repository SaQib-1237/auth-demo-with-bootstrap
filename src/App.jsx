import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/register";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<ProtectedRoute />}>
					<Route path="/" element={<Home />} />
				</Route>

				<Route element={<PublicRoute />}>
					<Route path="/register" element={<Register />} />

					<Route path="/login" element={<Login />} />
				</Route>

				<Route
					path="*"
					element={
						<div className="text-center p-3">
							<h1 style={{ color: "red", textAlign: "center" }}>
								Page Not Found :(
							</h1>

							<Link to="/">
								<button className="btn btn-success">Back to home</button>
							</Link>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
