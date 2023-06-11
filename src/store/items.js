import { createEffect, createStore } from "effector";
import axios from "axios";
export const getItems = createEffect(()=>{
	return axios.get("http://localhost:3001/items").then((e)=>{
		return e.data;
	});
});
export const $pizza = createStore([])
	.on(getItems.doneData,(data,newdata)=>{ //listen
		return [...data,...newdata];
	});