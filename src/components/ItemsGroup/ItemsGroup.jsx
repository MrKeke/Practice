import { forwardRef } from "react";
import { Product } from "../product/Product";

export const ItemsGroup = forwardRef(({ items, title }, reference) => {
	console.log(items, title);
	return (
		<div ref={reference} className="mx-auto max-w-[1200px]">
			<h1 className="pb-6 text-3xl font-bold font-dosis">{title}</h1>
			<div className="grid grid-cols-4 gap-8">
				{items.map((el) => (
					<Product {...el} />
				))}
			</div>
		</div>
	);
});

ItemsGroup.displayName = "ItemsGroup";
