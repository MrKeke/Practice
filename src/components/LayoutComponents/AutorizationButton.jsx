import React from "react";
import AutorizationForm from "./AutorizationForm";
import {UserOutlined} from "@ant-design/icons";
import {Button} from "antd";

class AutorizationButton extends React.Component {

	render() {
		return (
			<div>
				<Button className='bg-orange-400 text-gray-50 ml-3' onClick={() => { this.openPopup(); this.closePopup(); }}><UserOutlined />Зарегистрироваться</Button>
				<AutorizationForm />   
			</div>
		);
	}

	openPopup() {
		document.querySelector(".popup-bg").classList.add("opacity-100", "pointer-events-auto");
		document.querySelector(".popup").classList.add("opacity-100", "pointer-events-auto");
	}

	closePopup() {
		const popupBG = document.querySelector(".popup-bg");
		const popup = document.querySelector(".popup");

		document.addEventListener("click", (e) => {

			if(e.target === popupBG) {
				popupBG.classList.remove("opacity-100", "pointer-events-auto");
				popup.classList.remove("opacity-100", "pointer-events-auto");
			} 
			else if(e.target === document.querySelector(".registration")) {
				popupBG.classList.remove("opacity-100", "pointer-events-auto");
				popup.classList.remove("opacity-100", "pointer-events-auto");
			}

		});
	}

}

export default AutorizationButton;