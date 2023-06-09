import React from "react";
import {Button, Layout} from "antd";
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
const {Header} = Layout

export const HeaderComponent = () => {
  return(
    <Header
      className="bg-white sticky top-0 h-16 z-20 w-full ">
        <div className="flex flex-row items-center flex-nowrap">
          <p className=''>Города</p>
          <p className='ml-5'>Среднее время доставки:  30:00</p>
          <p className='text-black font-bold grow text-center'>Hexlet Pizza</p>
          <div className="">
              <Button className="bg-orange-400 text-gray-50 "><ShoppingCartOutlined className='' />Корзина</Button>
              <Button className='bg-orange-400 text-gray-50 ml-3'><UserOutlined className='' /></Button>
          </div>
        </div>
    </Header>
  )
}
