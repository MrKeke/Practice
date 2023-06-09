import React from "react";
import {Button, Layout} from "antd";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
const {Header} = Layout

export const HeaderComponent = () => {
  return(
    <Header
      className="bg-white flex flex-wrap sticky top-0 z-1 w-full items-center">
      <div className=' fixed flex z-10 m-auto'>
        <div className=''>Города</div>
        <h1 className='ml-7'>Среднее время доставки:  30:00</h1>
        <p className='ml-7'>Время работы : с 11:30 до 23:00</p>
        <div className='ml-72 text-xl text-black font-bold'>Hexlet Pizza</div>
        <Button className="bg-orange-400 text-gray-50 mt-4 ml-[750px]"><ShoppingCartOutlined className='text-lg absolute left-1 bottom-1'></ShoppingCartOutlined>Корзина</Button>
        <Button className='bg-orange-400 text-gray-50 mt-4 ml-6'><UserOutlined className='text-lg absolute bottom-[3px] left-[6px]'></UserOutlined></Button>
      </div>
    </Header>
  )
}
