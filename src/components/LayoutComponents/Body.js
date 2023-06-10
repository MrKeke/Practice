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

const getItems = async () => {
	return (await axios.get("http://localhost:3000/pizza")).data;
};

export const BodyComponent = ({ children }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems().then(d => setItems(d));
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
				<div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto my-0">
						{items.map(el => <Product {...el}/>)}
				</div>
			</div>
			{children}
		</Content>
	);
};

