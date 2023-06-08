import React from "react";
import { NavGen } from "../NavGen";
import pizzaIcon from "../../Pictures/pizza.jpg";
import sushiIcon from "../../Pictures/sushi.jpg";
import drinkIcon from "../../Pictures/drink.jpg";
import snackIcon from "../../Pictures/snack.jpg";
import comboIcon from "../../Pictures/combo.jpg";
import pizzaMedia from "../../Pictures/Rectangle 4.svg";
import dessertIcon from "../../Pictures/dessert.jpg";
import sauceIcon from "../../Pictures/sauce.jpg";
import { Layout } from "antd";
import { Product } from "../product/product";
const { Content } = Layout;

const navLinks = [
	{
		name: "Пицца",
		icon: pizzaIcon,
	},
	{
		name: "Суши",
		icon: sushiIcon,
	},
	{
		name: "Напитки",
		icon: drinkIcon,
	},
	{
		name: "Снэки",
		icon: snackIcon,
	},
	{
		name: "Комбо",
		icon: comboIcon,
	},
	{
		name: "Десерты",
		icon: dessertIcon,
	},
	{
		name: "Соусы",
		icon: sauceIcon,
	},
];
export const BodyComponent = ({ children }) => {
	const items = new Array(10).fill({
		media: pizzaMedia,
		name: "pizza1",
		ingredients:
      "lodcdslcmdj njknjdsknckdjs cjdskcndsjkcndskj cjdskncdsjkcndskj cjdsncsjdkc dksj cjdsncjsdnc lkjsd n",
		price: 907,
	});
	return (
		<Content
			className="site-layout"
			style={{
				padding: "0 50px",
				background: "white",
			}}
		>
			<div
				style={{
					padding: 24,
					minHeight: 380,
					backgroundColor: "#f9f9f9",
				}}
			>
				<div className="flex justify-between pb-8 mx-auto max-w-[1200px] my-0">
					<NavGen navLinks={navLinks} />
				</div>
				<div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto my-0">
					{items.map((item) => (
						<Product {...item} />
					))}
				</div>
			</div>
			{children}
		</Content>
	);
};
