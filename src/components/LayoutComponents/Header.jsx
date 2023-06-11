import React from "react";
import {Button, Layout} from "antd";
import AutorizationButton from "./AutorizationButton";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useScrollDirection} from "../handlers/ScrollHandler";
import CitiesSelect from "../CitiesSelect";

export const HeaderComponent = () => {
	const scrollDirection = useScrollDirection();
	return(
		<div className={`bg-white sticky top-0 h-20 z-20 w-full ${ scrollDirection === "down" ? "-top-20" : "top-0"}`}>
			<div>
				<div className="mx-16 h-8 flex flex-row items-center flex-nowrap">
					<CitiesSelect />
					<p className='ml-5'>Среднее время доставки:  45 минут</p>
				</div>
				<div className="border-b-2 w-full mb-2"/>
				<div>
					<div className="mx-20 flex flex-row items-center flex-nowrap">
						<p className='text-black font-bold grow'>Hexlet Pizza</p>
						<Button className="bg-orange-400 text-gray-50"><ShoppingCartOutlined></ShoppingCartOutlined>Корзина</Button>
						<AutorizationButton></AutorizationButton>
					</div>
				</div>
			</div>
		</div>
	);
};
