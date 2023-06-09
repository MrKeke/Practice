export const Product = ({ id, price, name, ingridients,src }) => {
	return (
		<div id={id} className="p-3 bg-white text-base rounded flex flex-col gap-4">
			<img src={src} />
			<h6 className="font-semibold">{name}</h6>
			<p>{ingridients}</p>
			<div className="flex justify-between items-center">
				<button className="bg-[#FF7010] px-5 py-2.5 text-white text-base rounded">Выбрать</button>
				<div className="text-[#FF7010] font-semibold text-base">от {price} $</div>
			</div>
		</div>
	);
};
