import React, { Component } from 'react'
import './header.scss'
import logo from '../../assets/image/logo.png'

export class Header extends Component {
  render() {
    const openBar = ()=>{
      document.body.classList.toggle("open-bar")
    }
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-menu">
            <li className="item">
              <a href="#item">Продукция</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">Сертификаты</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">Наша команда</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">О нас</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">Новости</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">Вакансии</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <li className="item">
              <a href="#item">Контакты</a>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="#drItemm">Ламинатные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Экструзионные</a>
                </li>
                <li className="dropdown-item">
                  <a href="#drItemm">Другая</a>
                </li>
              </ul>
            </li>
            <label className="close" onClick={openBar}>
              <i class="fa-solid fa-x"></i>
            </label>
          </ul>
          <div className="language">
            <span>RU</span>
            <span>UZ</span>
            <label className="open" onClick={openBar}>
              <i class="fa-solid fa-bars"></i>
            </label>
          </div>
        </div>
      </header>
    );
  }
}

export default Header