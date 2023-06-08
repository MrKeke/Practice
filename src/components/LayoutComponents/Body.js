import React from "react";
import {NavGen} from "../NavGen";
import pizzaIcon from "../../Pictures/pizza.jpg";
import sushiIcon from "../../Pictures/sushi.jpg";
import drinkIcon from "../../Pictures/drink.jpg";
import snackIcon from "../../Pictures/snack.jpg";
import comboIcon from "../../Pictures/combo.jpg";
import dessertIcon from "../../Pictures/dessert.jpg";
import sauceIcon from "../../Pictures/sauce.jpg";
import {Layout} from "antd";
const {Content} = Layout


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
export const BodyComponent = ({children}) => {
  return(
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
          <NavGen navLinks={navLinks}/>
        </div>
      </div>
      {children}
    </Content>
  )
}
