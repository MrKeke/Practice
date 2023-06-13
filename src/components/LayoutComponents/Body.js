import React, { useEffect, useState, useRef } from "react";
import { NavGen } from "../NavGen";
import { Layout, message } from "antd";
import { Product } from "../product/Product";
import axios from "axios";
import ModalHandler from "../handlers/ModalHandler";
const { Content } = Layout;


const navLinks = [
	{
		name: "Пиццы",
		icon: '/nav/pizza.jpg',
	},
	{
		name: "Суши",
		icon: '/nav/sushi.jpg',
	},
	{
		name: "Напитки",
		icon: "/nav/drink.jpg",
	},
	{
		name: "Снэки",
		icon: "/nav/snack.jpg",
	},
	{
		name: "Комбо",
		icon: "/nav/combo.jpg",
	},
	{
		name: "Десерты",
		icon: "/nav/dessert.jpg",
	},
	{
		name: "Соусы",
		icon: "/nav/sauce.jpg",
	},
];

const getData = async () => {
	const pizzasData = (await axios.get("http://localhost:3000/pizza")).data;
	const sushiData = (await axios.get("http://localhost:3000/sushi")).data;
	const drinksData = (await axios.get("http://localhost:3000/drinks")).data;
	const dessertsData = (await axios.get("http://localhost:3000/desserts")).data;
	const comboData = (await axios.get("http://localhost:3000/combo")).data;
	const snacksData = (await axios.get("http://localhost:3000/snacks")).data;
	const saucesData = (await axios.get("http://localhost:3000/sauces")).data;
	return {pizzasData, sushiData, drinksData, dessertsData, comboData, snacksData, saucesData}
}

export const BodyComponent = () => {

	const [pizzas, setPizzasItem] = useState([]);
	const [sushi, setSushiItem] = useState([])
	const [drinks, setDrinksItem] = useState([])
	const [snacks, setSnacksItem] = useState([])
	const [combo, setComboItem] = useState([])
	const [desserts, setDessertsItem] = useState([])
	const [sauces, setSaucesItem] = useState([])

	useEffect(() => {
		getData().then(e => {
			setPizzasItem(e.pizzasData)
			setSaucesItem(e.saucesData)
			setSushiItem(e.sushiData)
			setDessertsItem(e.dessertsData)
			setComboItem(e.comboData)
			setDrinksItem(e.drinksData)
			setSnacksItem(e.snacksData)
		})
	}, []);

	return (
		<>
			<Content
				className="site-layout"
				style={{
					padding: "0 50px",
				}}
			>
				<div
					style={{
						padding: 24,
						minHeight: 380,
					}}
				>
					<div className="flex justify-between pb-8 mx-auto max-w-[1200px] my-0">
						<NavGen navLinks={navLinks} />
					</div>


					<div className="mx-auto max-w-[1200px]" >
						<h1 className="pb-6 text-3xl font-bold font-dosis">Пиццы</h1>
						<div className="grid grid-cols-4 gap-8">
							{pizzas.map(el => <Product {...el} />)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px]">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Суши</h1>
						<div className="grid grid-cols-4 gap-8">
							{sushi.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Напитки</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{drinks.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Снэки</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{snacks.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Комбо</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{combo.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Десерты</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{desserts.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Соусы</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{sauces.map(el => <Product {...el}/>)}
						</div>
					</div>
				</div>
			</Content>
		</>
	);
};

