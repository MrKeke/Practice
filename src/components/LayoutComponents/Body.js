import React, { useEffect, useState, useRef } from "react";
import { NavGen } from "../NavGen";
import { Layout } from "antd";
const { Content } = Layout;
import { getData } from "../../utils/requests";
import { ItemsGroup } from "../ItemsGroup/ItemsGroup";

export const BodyComponent = () => {
	const pizzaRef = useRef(null);
	const sushiRef = useRef(null);
	const drinksRef = useRef(null);
	const comboRef = useRef(null);
	const snackRef = useRef(null);
	const dessertRef = useRef(null);
	const sauceRef = useRef(null);

	const navLinks = [
		{
			name: "Пиццы",
			icon: "/nav/pizza.jpg",
			ref: pizzaRef,
		},
		{
			name: "Суши",
			icon: "/nav/sushi.jpg",
			ref: sushiRef,
		},
		{
			name: "Напитки",
			icon: "/nav/drink.jpg",
			ref: drinksRef,
		},
		{
			name: "Снэки",
			icon: "/nav/snack.jpg",
			ref: snackRef,
		},
		{
			name: "Комбо",
			icon: "/nav/combo.jpg",
			ref: comboRef,
		},
		{
			name: "Десерты",
			icon: "/nav/dessert.jpg",
			ref: dessertRef,
		},
		{
			name: "Соусы",
			icon: "/nav/sauce.jpg",
			ref: sauceRef,
		},
	];

	const [pizzas, setPizzasItem] = useState([]);
	const [sushi, setSushiItem] = useState([]);
	const [drinks, setDrinksItem] = useState([]);
	const [snacks, setSnacksItem] = useState([]);
	const [combo, setComboItem] = useState([]);
	const [desserts, setDessertsItem] = useState([]);
	const [sauces, setSaucesItem] = useState([]);

	useEffect(() => {
		getData().then((e) => {
			setPizzasItem(e.pizzasData);
			setSaucesItem(e.saucesData);
			setSushiItem(e.sushiData);
			setDessertsItem(e.dessertsData);
			setComboItem(e.comboData);
			setDrinksItem(e.drinksData);
			setSnacksItem(e.snacksData);
		});
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

					<ItemsGroup items={pizzas} title={"Пиццы"} reference={pizzaRef} />

					<ItemsGroup items={sushi} title={"Суши"} reference={sushiRef} />

					<ItemsGroup items={drinks} title={"Напитки"} reference={drinksRef} />

					<ItemsGroup items={snacks} title={"Снэки"} reference={snackRef} />

					<ItemsGroup items={combo} title={"Комбо"} reference={comboRef} />

					<ItemsGroup
						items={desserts}
						title={"Десерты"}
						reference={dessertRef}
					/>

					<ItemsGroup items={sauces} title={"Соусы"} reference={sauceRef} />
				</div>
			</Content>
		</>
	);
};
