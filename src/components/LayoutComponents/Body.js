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

const getDrinks = async () => {
	return (await axios.get("http://localhost:3000/drinks")).data;
};

const getSnacks = async () => {
	return (await axios.get("http://localhost:3000/snacks")).data;
};

const getCombo = async () => {
	return (await axios.get("http://localhost:3000/combo")).data;
};

const getDesserts = async () => {
	return (await axios.get("http://localhost:3000/desserts")).data;
};

const getSauces = async () => {
	return (await axios.get("http://localhost:3000/sauces")).data;
};


export const BodyComponent = () => {
	const [pizzas, setPizzasItem] = useState([]);
	const [sushi, setSushiItem] = useState([])
	const [drinks, setDrinksItem] = useState([])
	const [snacks, setSnacksItem] = useState([])
	const [combo, setComboItem] = useState([])
	const [desserts, setDessertsItem] = useState([])
	const [sauces, setSaucesItem] = useState([])

	useEffect(() => {
		getPizzas().then(d => setPizzasItem(d));
	}, []);
	useEffect(() => {
		getSushi().then(d => setSushiItem(d));
	}, []);
	useEffect(() => {
		getDrinks().then(d => setDrinksItem(d));
	}, []);
	useEffect(() => {
		getSnacks().then(d => setSnacksItem(d));
	}, []);
	useEffect(() => {
		getCombo().then(d => setComboItem(d));
	}, []);
	useEffect(() => {
		getDesserts().then(d => setDessertsItem(d));
	}, []);
	useEffect(() => {
		getSauces().then(d => setSaucesItem(d));
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
	);
};

