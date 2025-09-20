import { Route, Routes } from "react-router-dom";
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
						<h1 style={{ color: "red", textAlign: "center" }}>
							Page Not Found :(
						</h1>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
