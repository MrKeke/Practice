import React from "react";
import {Layout} from "antd";
const {Footer} = Layout

export const FooterComponent = ({text}) => {
  return(
    <Footer
      className="text-center"
    >
      {text}
    </Footer>
  )
}

