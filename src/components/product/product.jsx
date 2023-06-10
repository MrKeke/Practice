import React from "react";

export const Product = ({ id, price, name, ingridients,img }) => {
	console.log(__dirname+img)
	return (
		<div key={id} className="relative p-3 bg-white h-[500px] text-base rounded flex flex-col gap-6 hover:cursor-pointer">
			<div className="">
				<img src={img} alt={name + "-Фото"} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" />
				<h6 className="font-semibold">{name}</h6>
				<p>{ingridients}</p>
			</div>
			<div className="absolute flex text-end bottom-3 right-3 flex-auto">
				<div className="text-[#FF7010] pt-3 pr-4 text-left font-semibold">от {price} ₽</div>
				<button className="bg-[#FF7010] px-5 py-2.5 text-white text-base rounded ">Выбрать</button>
			</div>
		</div>
	);
};
