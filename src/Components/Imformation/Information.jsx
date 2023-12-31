import React, { Component } from 'react'
import BtnComponents from '../btnComponents';
import './information.scss'
import image from '../../assets/image/informatsiya.png'

export class Information extends Component {
  render() {
    return (
      <div className="information">
        <div
          className="container"
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2>
            Получить подробную <span>информацию</span>
          </h2>
          <p>
            Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
            время
          </p>
          <form>
            <div className="name">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="tell">
              <i class="fa-solid fa-phone"></i>
              <input type="text" placeholder="+375 (29) 0000000" />
            </div>
            <textarea name="" id="" cols="60" rows="10"></textarea>
            <BtnComponents>Получить информацию</BtnComponents>
          </form>
        </div>
      </div>
    );
  }
}

export default Information