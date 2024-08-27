import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "bootstrap/dist/css/bootstrap.css";
import "instantsearch.css/themes/satellite.css";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
