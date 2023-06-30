import React from "react";
import axios from "axios";

class AutorizationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			firstNameDirty: false,
			firstNameError: "Это поле не может быть пустым",

			lastName: "",
			lastNameDirty: false,
			lastNameError: "Это поле не может быть пустым",

			mail: "",
			mailDirty: false,
			mailError: "Это поле не может быть пустым",

			address: "",
			addressDirty: false,
			addressError: "Это поле не может быть пустым",

			password: 0,
			passwordDirty: false,
			passwordError: "Это поле не может быть пустым",

			formValid: false
		};

	}

	render() {
		return (
			<div className="popup-bg fixed w-full h-screen top-0 left-0 bg-gray-500/50 opacity-0 pointer-events-none">
				<form className="popup absolute top-1/2 left-1/2 w-6/12 p-6 bg-white translate-x-[-50%] translate-y-[-50%] rounded-xl opacity-0 pointer-events-none" ref={(el) => this.myForm = el}>
					
					<label className="w-full mb-6 flex flex-col-reverse">

						{(this.state.firstNameDirty && this.state.firstNameError) && <div style={{color: "red"}}>{this.state.firstNameError}</div>}
						<input onBlur={e => this.blurHandler(e)} className="pointer-events-all h-9 text-lg outline-none border-b-orange-400 border-b color-black" type="text" name="firstName" onChange={e => this.firstNameHandler(e)}></input>
						<div className="text-sm uppercase font-medium mb-1.5">Ваше имя:</div>

					</label>

					<label className="w-full mb-6 flex flex-col-reverse">

						{(this.state.lastNameDirty && this.state.lastNameError) && <div style={{color: "red"}}>{this.state.lastNameError}</div>}
						<input onBlur={e => this.blurHandler(e)} className="pointer-events-all h-9 text-lg outline-none border-b-orange-400 border-b color-black" type="text" name="lastName" onChange={e => this.lastNameHandler(e)}></input>
						<div className="text-sm uppercase font-medium mb-1.5">Ваша фамилия:</div>

					</label>

					<label className="w-full mb-6 flex flex-col-reverse">

						{(this.state.mailDirty && this.state.mailError) && <div style={{color: "red"}}>{this.state.mailError}</div>}
						<input onBlur={e => this.blurHandler(e)} className="pointer-events-all h-9 text-lg outline-none border-b-orange-400 border-b color-black" type="text" name="email" onChange={e => this.emailHandler(e)}></input>
						<div className="text-sm uppercase font-medium mb-1.5">Ваша почта:</div>

					</label>

					<label className="w-full mb-6 flex flex-col-reverse">

						{(this.state.addressDirty && this.state.addressError) && <div style={{color: "red"}}>{this.state.addressError}</div>}
						<input onBlur={e => this.blurHandler(e)} className="pointer-events-all h-9 text-lg outline-none border-b-orange-400 border-b color-black" type="text" name="address" onChange={e => this.addressHandler(e)}></input>
						<div className="text-sm uppercase font-medium mb-1.5">Ваш адрес:</div>

					</label>

					<label className="w-full mb-6 flex flex-col-reverse">

						{(this.state.passwordDirty && this.state.passwordError) && <div style={{color: "red"}}>{this.state.passwordError}</div>}
						<input onBlur={e => this.blurHandler(e)} className="pointer-events-all h-9 text-lg outline-none border-b-orange-400 border-b color-black" type="text" name="password" onChange={e => this.passwordHandler(e)} />
						<div className="text-sm uppercase font-medium mb-1.5">Ваш пароль:</div>

					</label>

					<button disabled={this.state.formValid} className="registration w-full h-11 flex items-center justify-center border-solid border cursor-pointer uppercase border-grey-400 bg-orange-400 rounded-md"
						type="submit" 
						onClick={(e) => {
							this.postUserData(e);
							this.myForm.reset();
						}}>Зарегистрироваться</button>
				</form>
			</div>
		);
	}

	postUserData(e) {
		e.preventDefault();

		const firstName = this.state.firstNameError === "" ? true : false;
		const lastName = this.state.lastNameError === "" ? true : false;
		const mail = this.state.mailError === "" ? true : false;
		const address = this.state.addressError === "" ? true : false;
		const password = this.state.passwordError === "" ? true : false;

		if(firstName && lastName && mail && address && password) {
			axios({
				method: "POST",
				url: "http://localhost:3000/users",
				data: {
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					mail: this.state.mail,
					address: this.state.address,
					password: this.state.password,
				}
	
			}).then((resp) => console.log(resp.data));
			console.log("userData posted");
			console.log(this.state);
			alert("Вы успешно зарегестрировались!");
		} else {
			alert("Некорректный ввод, попробуйте еще раз!");
		}
		
	}

	blurHandler = (e) => {
		switch(e.target.name) {

			case "firstName":
				this.setState({firstNameDirty: true});
				break;

			case "lastName":
				this.setState({lastNameDirty: true});
				break;
				
			case "email":
				this.setState({ mailDirty: true});
				break;

			case "address":
				this.setState({addressDirty: true});
				break;

			case "password":
				this.setState({passwordDirty: true});
				break;
		}
	};

	firstNameHandler(e) {
		const value = e.target.value;

		this.setState({ firstName: value});
		if(value.length > 0) {
			this.setState({firstNameError: ""});
		}
	};

	lastNameHandler(e) {
		const value = e.target.value;

		this.setState({ lastName: value});
		if(value.length > 0) {
			this.setState({lastNameError: ""});
		}
	};

	emailHandler(e) {
		const value = e.target.value;
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		this.setState({ mail: value});
		if(!re.test(String(value).toLowerCase())) {
			this.setState({mailError: "Некорректный адрес электронной почты"});
		} else {
			this.setState({mailError: ""});
		}
	};

	addressHandler(e) {
		const value = e.target.value;

		this.setState({ address: value});
		if(value.length > 0) {
			this.setState({addressError: ""});
		}
	};

	passwordHandler(e) {
		const value = e.target.value;

		this.setState({ password: value});
		if(value.length < 8 || value.length > 15) {
			this.setState({passwordError: "Пароль должен иметь больше 8 и меньше 15 символов"});
			if(!value) {
				this.setState({passwordError: "Это поле не может быть пустым"});
			}
		} else {
			this.setState({passwordError: ""});
		
		}
	};

	// validate() {
		// const firstName = this.state.firstNameError === "" ? true : false;
		// const lastName = this.state.lastNameError === "" ? true : false;
		// const mail = this.state.mailError === "" ? true : false;
		// const address = this.state.addressError === "" ? true : false;
		// const password = this.state.passwordError === "" ? true : false;

		// if(firstName && lastName && mail && address && password) {
		// 	this.setState({formValid: false});
		// 	console.log('valid')
		// } else {
		// 	this.setState({formValid: true});
		// 	console.log('nevalid')
		// }
	// }

}

export default AutorizationForm;