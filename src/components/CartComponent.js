import {Button, Modal} from "antd";
import {useEffect, useState} from 'react';
import axios from "axios";
import { LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import _ from "lodash"
import { Spin } from 'antd';

const getData = async () => {
  return await axios.get("http://localhost:3000/selectedItems")
}

const CartComponent = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const [values, setValues] = useState([])


  useEffect(() => {
    setTimeout(() => {
      getData().then(el => setValues([...el.data]))
    }, 1000)
    }, [values])

  const remover = id => {
    const removeItems = values.filter(item => item.id !== id)
    const idsItems = getData().then(el => el.map(e => e.id))
    // axios.delete("http://localhost:3000/selectedItems", )
    console.log(idsItems)
    setValues([...removeItems])
  }

  return (
    <>
      {/*доделаю загрузку либо переделаю секундный запрос*/}
      <div className="">
        {values.length < 1 ? <div>Тут пока пусто</div> : null}
        {values.map(el => {
          return(
            <div key={el.id} id={el.id} className="flex border-b-2 mb-2 relative py-3.5">
              <img className="w-20" src={el.img} alt="none"/>
              <div className="pl-2">{el.name}</div>
              <div className="absolute bottom-0 right-0 font-bold">{el.price} ₽</div>
              <button className="absolute top-0 right-0" onClick={() => remover(el.id)}><CloseOutlined /></button>
            </div>

          )
        })}

      </div>
    </>
  )
}


export default CartComponent