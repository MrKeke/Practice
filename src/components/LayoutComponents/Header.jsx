import React, {useState} from "react";
import {Button, Layout, Modal} from "antd";
import AutorizationButton from "./AutorizationButton";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useScrollDirection} from "../handlers/ScrollHandler";
import CitiesSelect from "../CitiesSelect";
import BusketComponent from "../BasketComponent";

export const HeaderComponent = () => {
	const scrollDirection = useScrollDirection();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

	return(
		<div className={`bg-white sticky top-0 h-20 z-20 w-full ${ scrollDirection === "down" ? "-top-20" : "top-0"}`}>
        <div>
          <div className={`mx-16 h-8 flex flex-row items-center flex-nowrap  `}>
              <CitiesSelect />
              <p className='ml-5 hidden sm:block'>Среднее время доставки: 45 минут</p>
          </div>

          <div>
            <div className="border-t-2 w-full mb-2"/>
            <div className="mx-20 flex flex-row items-center flex-nowrap">
              <p className='text-black font-bold grow'>Hexlet Pizza</p>
              <Button onClick={showModal} type="text" className="bg-orange-400 text-gray-50 hover:bg-orange-400" icon={<ShoppingCartOutlined />}>Корзина</Button>
              <AutorizationButton></AutorizationButton>
                <Modal className="mr-0" title="Корзина" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                       footer={[
                         <Button type="text" className="bg-orange-400 text-white" key="submit" onClick={handleOk}>
                           Перейти к оплате
                         </Button>
                       ]}>
                  <BusketComponent />
                </Modal>

            </div>
          </div>
        </div>
    </div>
	);
};
