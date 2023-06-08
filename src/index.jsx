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

// https://www.figma.com/file/5Up611L8QTVThfzfi9fwI8/%D0%9A%D1%83%D0%B4%D0%B0-%D0%9F%D0%B8%D1%86%D1%86%D0%B0-(Copy)-(Copy)?type=design&t=jOMbmStDRmNqJjxE-6
reportWebVitals();
