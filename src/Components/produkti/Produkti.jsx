import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./produkti.scss";
import tab1 from "../../assets/image/product_1.png";
import tab2 from "../../assets/image/product_2.png";
import tab3 from "../../assets/image/product_3.png";
import tab4 from "../../assets/image/product_4.png";
import tab5 from "../../assets/image/product_5.png";
import BtnComponents from "../btnComponents";

const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <h1>
          Наша <span>продукция</span>
        </h1>
        <Tabs>
          <TabList>
            <Tab>Ламинатные тубы</Tab>
            <Tab>Экструзионные тубы</Tab>
            <Tab>TДругая упаковка</Tab>
          </TabList>

          <TabPanel>
            <img src={tab1} alt="" />
            <img src={tab2} alt="" />
            <img src={tab3} alt="" />
            <img src={tab4} alt="" />
            <img src={tab5} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={tab2} alt="" />
            <img src={tab1} alt="" />
            <img src={tab5} alt="" />
            <img src={tab4} alt="" />
            <img src={tab3} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={tab5} alt="" />
            <img src={tab3} alt="" />
            <img src={tab4} alt="" />
            <img src={tab2} alt="" />
            <img src={tab1} alt="" />
          </TabPanel>
        </Tabs>
        <div className="wrap_btn">
          <BtnComponents>Перейти в каталог</BtnComponents>
        </div>
      </div>
    </section>
  );
};

export default Products;
