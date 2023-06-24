import React, { Component } from 'react'
import './novosti.scss'

import img from "../../assets/image/langGroup.png";
import img1 from "../../assets/image/apple.png";
import img3 from "../../assets/image/krem.png";
import BtnComponents from '../btnComponents';
import NovostiCard from './NovostiCard';

export class Novosti extends Component {
  render() {
    const Data = [
      {
        img: img,
        data: "28.01.2022",
        info: '"ЛеанГрупп" серебряный призер EcoVadis!',
      },
      {
        img: img1,
        data: "21.01.2022",
        info: '"ЛеанГрупп" серебряный призер EcoVadis!',
      },
      {
        img: img3,
        data: "16.12.2021",
        info: "Туба, как вид упаковки",
      },
    ];

    return (
      <section id="new" className="news">
        <div className="container">
          <h1 className="title">Новости</h1>
          <div className="card_wrapper">
            {Data.map((card) => (
              <NovostiCard {...card}/>
            ))}
          </div>
          <div className="see_all">
            <BtnComponents>Все новости</BtnComponents>
          </div>
        </div>
      </section>
    );
  }
}

export default Novosti
