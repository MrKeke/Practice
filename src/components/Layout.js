
import { UploadOutlined, UserOutlined, VideoCameraOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import telega from "../Pictures/Vector.svg"
import { Layout, Menu, Breadcrumb, Button, Image } from 'antd';
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

        className="bg-white m-auto flex justify-around"
        >
        <h1>Куда пицца</h1>
        <Button className="bg-orange-400 text-gray-50"><ShoppingCartOutlined className='text-lg absolute left-1 bottom-1'></ShoppingCartOutlined>Корзина</Button>
        <p>Время работы : с 11:30 до 23:00</p>
      <div> Города</div>
      <div>Войти в аккаунт</div>
      <div>Hexlet Pizza</div>
    </Header>
  <Content
    className="site-layout"
    style={{
      padding: '0 50px',
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
        background: "white",
      }}
    >
      <div>{children}</div>
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
