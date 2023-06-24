import React, { Component } from 'react'
import './sertificat.scss'

import Carusel from './carusel';

export class Sertificat extends Component {
  render() {
    return (
      <div className="container sertifikat">
        <h2>
          Качество продукции подтверждают <span>сертификаты</span>
        </h2>
        <div className="slider">
          <Carusel />
        </div>
      </div>
    );
  }
}

export default Sertificat