import React, { Component } from "react";
import "./cardCarusel.scss";
import insta from "../../../assets/image/insta.jpg";
import face from "../../../assets/image/face.jpg";
import tg from "../../../assets/image/telegram.jpg";
import BtnComponents from "../../btnComponents";

export class CardCarusel extends Component {
  render() {
    const { img, title, desc } = this.props;
    return (
      <div
        className="card"
        style={{
          background: `linear-gradient(90deg,rgba(255, 255, 255,0.9),rgba(255, 255, 255, 0.388), rgba(255, 255, 255, 0.188)),url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="left">
          <h3>LEANGROUP - тубы и этикетки</h3>
          <h1>{title}</h1>
          <p>{desc}</p>
          <BtnComponents>Каталог</BtnComponents>
        </div>
        <div className="right">
          <img src={insta} alt="" />
          <img src={tg} alt="" />
          <img src={face} alt="" />
        </div>
      </div>
    );
  }
}

export default CardCarusel;
