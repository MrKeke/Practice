import React from "react";
import axios from "axios";


export const Product = ({ id, price, name, ingridients,img }) => {


	const dbNameValidator = fieldName => {
		let dbValidName = ""
		switch (fieldName){
			case "Пиццы":
				dbValidName = "pizza"
				break
			case "Суши":
				dbValidName = "sushi"
				break
			case "Напитки":
				dbValidName = "drinks"
				break
			case "Снэки":
				dbValidName = "snacks"
				break
			case "Комбо":
				dbValidName = "combo"
				break
			case "Десерты":
				dbValidName = "desserts"
				break
			case "Соусы":
				dbValidName = "sauces"
				break
		}
		return dbValidName
	}

	// const selectedItemsChecker = async (id) => {
	// 		const resp = await axios.get("http://localhost:3000/selectedItems").then(el => el.data.map(el => el.id === id))
	// 		resp.then()
	// }

 	const idFinder = async (id, e) => {

		console.log(id)
		const fieldName = e.target.parentNode.parentNode.parentNode.parentNode.firstChild.textContent
		const validName = dbNameValidator(fieldName)
		const selectedItemsList = axios.get("http://localhost:3000/selectedItems").then(el => console.log(el.data))
		const getReq = await axios.get(`http://localhost:3000/${validName}`).then(e => e.data.map(el => {
			if(id === el.id ){
					axios.post("http://localhost:3000/selectedItems", el)
			}
		}))
		console.log(selectedItemsList)
	}


	return (
			<div id={id} key={id} className="relative p-3 bg-white h-[500px] text-base rounded flex flex-col gap-6 hover:cursor-pointer">
				<div >
					<div className="h-64">
						<img src={img} alt={name + "-Фото"} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" />
					</div>
					<h6 className="font-semibold ">{name}</h6>
					<p>{ingridients}</p>
				</div>
				<div className="absolute flex text-end bottom-3 right-3 flex-auto">
					<div className="text-[#FF7010] pt-3 pr-4 text-left font-semibold ">от {price} ₽</div>
					<button onClick={(e) => idFinder(id, e)} className="bg-[#FF7010] px-5 py-1 text-white text-base rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">Выбрать</button>
				</div>
			</div>
	);
};