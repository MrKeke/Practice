
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

export function LayoutComponent({children, headerContent}){

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
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
    </Breadcrumb>
    <div
      style={{
        padding: 24,
        minHeight: 380,
        backgroundColor:'#f9f9f9'
      }}
    >
      <div className='flex'>
        <div className='bg-white w-36 ml-52 items-center pl-10 rounded-md'>
          <img src={pizzaIcon} className='h-16 w-16'/>
          <p className='ml-2 font-bold'>Пицца</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={sushiIcon} className='h-16 w-16'/>
          <p className='ml-4 font-bold'>Суши</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={drinkIcon} className='h-16 w-16'/>
          <p className='ml-1 font-bold'>Напитки</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={snackIcon} className='h-16 w-16'/>
          <p className='ml-2.5 font-bold'>Снэки</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={comboIcon} className='h-16 w-16'/>
          <p className='ml-2.5 font-bold'>Комбо</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={dessertIcon} className='h-16 w-16'/>
          <p className='ml-1 font-bold'>Десерты</p>
        </div>
        <div className='bg-white w-36 ml-10 items-center pl-10 rounded-md'>
          <img src={sauceIcon} className='h-16 w-16'/>
          <p className='ml-1 font-bold'>Соусы</p>
        </div>
      </div>
    </div>
  </Content>
  <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Ant Design ©2023 Created by Ant UED
  </Footer>
</Layout>
);
};
