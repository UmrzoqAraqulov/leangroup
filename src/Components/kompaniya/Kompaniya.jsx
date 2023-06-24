import React, { Component } from 'react'
import './kompaniya.scss'

export class Kompaniya extends Component {
  render() {
    return (
      <section className='container komp'>
        <h2>
          О компании <span>LEANGROUP</span>
        </h2>
        <div className="info">
          <div className="left">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/m55PTVUrlnA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="right">
            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
            сегодняшний день является ведущей компанией по производству
            ламинатных и экструзионных туб. <br />
            <br /> Имея две технологии – для производства ламинатных и
            длагаем вам широкий спектр возможностей.
            in-line печать в экструзии с возможностью различных дополнительных
            опций декора. Особое внимание уделяется работе с поставщиками для
            контроля и поддержания качества производимой нами продукции.
            <br />
            <br /> С января 2018 года компания стала членом Европейской
            Ассоциации производителей туб (ETMA), что подтверждает сильную
            позицию бренда и на рынке Европы.
          </div>
        </div>
      </section>
    );
  }
}

export default Kompaniya