import React, { useEffect, useState } from "react";
import { NavGen } from "../NavGen";
import { Layout } from "antd";
import { Product } from "../product/Product";
import axios from "axios";
import ModalHandler from "../handlers/ModalHandler";
const { Content } = Layout;


const navLinks = [
	{
		name: "Пицца",
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

const getPizzas = async () => {
	return (await axios.get("http://localhost:3000/pizza")).data;
};

const getSushi = async () => {
	return (await axios.get("http://localhost:3000/sushi")).data;
};


export const BodyComponent = () => {
	const [pizzas, setPizzasItem] = useState([]);
	const [sushi, setSushiItem] = useState([])

	useEffect(() => {
		getPizzas().then(d => setPizzasItem(d));
	}, []);
	useEffect(() => {
		getSushi().then(d => setSushiItem(d));
	}, []);

	return (
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

				<div className="mx-auto max-w-[1200px]">
					<h1 className="pb-6 text-3xl font-bold font-dosis">Пиццы</h1>
					<div className="grid grid-cols-4 gap-8">
						{pizzas.map(el => <Product {...el}/>)}
					</div>
				</div>

				<div className="mx-auto max-w-[1200px]">
					<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Суши</h1>
					<div className="grid grid-cols-4 gap-8">
						{sushi.map(el => <Product {...el}/>)}
					</div>
				</div>
			</div>
		</Content>
	);
};

