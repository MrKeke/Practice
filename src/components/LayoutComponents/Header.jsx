import React from "react";
import {Button, Layout} from "antd";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
const {Header} = Layout
import {useScrollDirection} from "../handlers/ScrollHandler"

export const HeaderComponent = () => {
  const scrollDirection = useScrollDirection();
  return(
    <Header
      className={`bg-white sticky top-0 h-16 z-20 w-full ${ scrollDirection === "down" ? "-top-16" : "top-0"}`}>
        <div className="flex flex-row items-center flex-nowrap">
        <p>Города</p>
        <p className='ml-5'>Среднее время доставки:  45 минут</p>
        <div className="border-b-gray-50"> </div>
        <p className='text-black font-bold grow text-center'>Hexlet Pizza</p>
        <div className=" items-center">
        <Button className="bg-orange-400 text-gray-50"><ShoppingCartOutlined></ShoppingCartOutlined>Корзина</Button>
        <Button className='bg-orange-400 text-gray-50 ml-3'><UserOutlined></UserOutlined></Button>
        </div>
        </div>
    </Header>
  )
}
