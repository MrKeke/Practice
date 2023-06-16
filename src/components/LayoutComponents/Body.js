import React, { useEffect, useState,useRef } from "react";
import { NavGen } from "../NavGen";
import { Layout } from "antd";
import { Product } from "../product/Product";
const { Content } = Layout;
import {getData} from "../../utils/requests";




export const BodyComponent = () => {

const pizzaRef = useRef(null)
const sushiRef = useRef(null)
const drinksRef = useRef(null)
const comboRef = useRef(null)
const snackRef = useRef(null)
const dessertRef = useRef(null)
const sauceRef = useRef(null)

const navLinks = [
	{
		name: "Пиццы",
		icon: '/nav/pizza.jpg',
		ref:pizzaRef
	},
	{
		name: "Суши",
		icon: '/nav/sushi.jpg',
		ref:sushiRef
	},
	{
		name: "Напитки",
		icon: "/nav/drink.jpg",
		ref:drinksRef
	},
	{
		name: "Снэки",
		icon: "/nav/snack.jpg",
		ref:snackRef
	},
	{
		name: "Комбо",
		icon: "/nav/combo.jpg",
		ref:comboRef
	},
	{
		name: "Десерты",
		icon: "/nav/dessert.jpg",
		ref:dessertRef
	},
	{
		name: "Соусы",
		icon: "/nav/sauce.jpg",
		ref:sauceRef
	},
];

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


					<div ref={pizzaRef} className="mx-auto max-w-[1200px]" >
						<h1 className="pb-6 text-3xl font-bold font-dosis">Пиццы</h1>
						<div className="grid grid-cols-4 gap-8">
							{pizzas.map(el => <Product {...el} />)}
						</div>
					</div>

					<div ref={sushiRef} className="mx-auto max-w-[1200px]">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Суши</h1>
						<div className="grid grid-cols-4 gap-8">
							{sushi.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div ref={drinksRef} className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Напитки</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{drinks.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div ref={snackRef} className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Снэки</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{snacks.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div ref={comboRef} className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Комбо</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{combo.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div ref={dessertRef} className="mx-auto max-w-[1200px] ">
						<h1 className="pb-6 mt-10 text-3xl font-bold font-dosis">Десерты</h1>
						<div className="grid grid-cols-4 gap-8 text-start">
							{desserts.map(el => <Product {...el}/>)}
						</div>
					</div>

					<div ref={sauceRef} className="mx-auto max-w-[1200px] ">
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

