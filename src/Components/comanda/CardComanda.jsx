import React, { Component } from 'react'

export class CardComanda extends Component {
  render() {
    const { img, name, info, tel, email } = this.props;
    return (
      <div className="card_comanda">
        <img className="user" src={img} alt="" />
        <p className="name">{name}</p>
        <p className="user_info">{info}</p>
        <p className="phone">{tel}</p>
        <p className="email">{email}</p>
      </div>
    );
  }
}

export default CardComanda
