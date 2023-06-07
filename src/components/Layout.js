




import { UploadOutlined, UserOutlined, VideoCameraOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Button, Image } from 'antd';
import pizzaIcon from '../Pictures/pizza.jpg'
import sushiIcon from '../Pictures/sushi.jpg'
import drinkIcon from '../Pictures/drink.jpg'
import snackIcon from '../Pictures/snack.jpg'
import comboIcon from '../Pictures/combo.jpg'
import dessertIcon from '../Pictures/dessert.jpg'
import sauceIcon from '../Pictures/sauce.jpg'

import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
import _ from "lodash"

export function LayoutComponent({children, headerContent}){
  const navLinks = [
    {
      name: "Пицца",
      icon: pizzaIcon
    },
    {
      name: "Суши",
      icon: sushiIcon
    },
    {
      name: "Напитки",
      icon: drinkIcon,
    },
    {
      name: "Снэки",
      icon: snackIcon,
    },
    {
      name: "Комбо",
      icon: comboIcon,
    },
    {
      name: "Десерты",
      icon: dessertIcon,
    },
    {
      name: "Соусы",
      icon: sauceIcon,
    },
  ]

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
        className="bg-white flex"
      >
        <div className='absolute m-auto flex'>
          <div className=''>Города</div>
          <h1 className='ml-7'>Среднее время доставки:  30:00</h1>
          <p className='ml-7'>Время работы : с 11:30 до 23:00</p>
          <div className='ml-72 text-xl text-black font-bold'>Hexlet Pizza</div>
          <Button className="bg-orange-400 text-gray-50 mt-4 ml-[750px]"><ShoppingCartOutlined className='text-lg absolute left-1 bottom-1'></ShoppingCartOutlined>Корзина</Button>
          {/* <div className='ml-10'>Войти в аккаунт</div> */}
          <Button className='bg-orange-400 text-gray-50 mt-4 ml-6'><UserOutlined className='text-lg absolute bottom-[3px] left-[6px]'></UserOutlined></Button>
        </div>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          background: "white"
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            backgroundColor:'#f9f9f9'
          }}
        >
          <div className='flex justify-around'>
            {navLinks.map(({name, icon}) => {
              const id = _.uniqueId()
              return(
                <React.Fragment key={id}>
                    <div className='bg-white w-32 h-24 text-center rounded-xl'>
                      <img src={icon} alt={"#"} className='mx-auto mt-4 h-10 w-10'/>
                      <p className='font-bold'>{name}</p>
                    </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </Content>
      <Footer
        className="text-center"
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};