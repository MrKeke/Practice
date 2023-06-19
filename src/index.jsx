import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {LayoutComponent} from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<App /> 
		<LayoutComponent />
	</>
);

reportWebVitals();
