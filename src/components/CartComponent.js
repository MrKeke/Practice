import {Button, Modal} from "antd";
import {useEffect, useState} from 'react';
import axios from "axios";

// const getData = async () => {
//
//   return response
// }

const CartComponent = () => {
  const [values, setValues] = useState([])

  useEffect(() => {
    async () => {
     const response = await axios.get("http://localhost:3000/selectedItems")
     response.then(el => setValues([...values,...el.data]))
    }
  },[])

  console.log(values)

  return (
    <div className="">
      {values.map(el => {
        return(
          <div key={el.id}>
            <img className="w-20" src={el.img} alt="none"/>
            <div>{el.name}</div>
          </div>
        )
      })}
    </div>
  )
}


export default CartComponent