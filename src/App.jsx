import { useStore } from "effector-react";
import { useEffect } from "react";
import { $pizza, getItems } from "./store/items";

function App() {
	useEffect(()=>{
		getItems();
	},[]);
	const pizza = useStore($pizza);
	return (
		
		<div>
			{pizza.map((el,i)=>{
				return <div key={i}>{el.title}</div>;
			})}
		</div>
	);
}

export default App;
