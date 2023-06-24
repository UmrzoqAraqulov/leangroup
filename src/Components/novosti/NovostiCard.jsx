import React, { Component } from "react";
import "./novosti.scss";

export class NovostiCard extends Component {
  render() {
    const { img, data, info } = this.props;
    return (
      <div className="card_new">
        <img src={img} alt="" />
        <p className="data">{data}</p>
        <p className="info">{info}</p>
      </div>
    );
  }
}

export default NovostiCard;
