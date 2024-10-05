import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function App() {
	const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
	console.log({ user });
	return (
		<div className="App">
			{isAuthenticated ? (
				<>
					<p>Welcome {user?.name}</p>
					<button
						onClick={() =>
							logout({ logoutParams: { returnTo: window.location.origin } })
						}
					>Logout</button>
				</>
			) : (
				<button onClick={() => loginWithRedirect()}>Login</button>
			)}
		</div>
	);
}

export default App;
