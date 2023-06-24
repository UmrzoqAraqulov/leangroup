import React from "react";
import img from "../../assets/image/worker_1.png";
import img2 from "../../assets/image/worker2.png";
import img3 from "../../assets/image/worker3.png";
import img4 from "../../assets/image/worker4.png";
import img5 from "../../assets/image/worker5.png";
import './comanda.scss'

import BtnComponents from "../btnComponents";
import CardComanda from "./CardComanda";

const Comanda = () => {
  const Data = [
    {
      img: img,
      name: "Войнич Дарья",
      info: "Заместитель директора по продажам",
      tel: "+375 (17) 270-53-77 (317)",
      email: "k.melnichenko@leangroup.by",
    },
    {
      img: img2,
      name: "Мисько Екатерина",
      info: "Начальник отдела сопровождения",
      tel: "+375 (17) 270-53-77 (115)",
      email: "k.melnichenko@leangroup.by",
    },
    {
      img: img3,
      name: "Дмитроченко Дмитрий",
      info: "Начальник отдела допечатной подготовки",
      tel: "+375 (17) 270-53-77 (333)",
      email: "dmitrochenko@leangroup.by",
    },
    {
      img: img4,
      name: "Антух Евгений",
      info: "j.antuh@leangroup.by",
      tel: "+375 (17) 270-53-77 (317)",
      email: "j.antuh@leangroup.by",
    },
    {
      img: img5,
      name: " Мисник Елена",
      info: "Специалист по работе с клиентами",
      tel: "+375 (17) 270-53-77 (317)",
      email: "e.misnik@leangroup.by",
    },
  ];

  return (
    <section id="team" className="team">
      <h2>
        Наша <span>команда</span>
      </h2>
      <div className="container card_wrapper">
        {Data.map((card) => (
          <CardComanda {...card}/>
        ))}
      </div>
      <div className="see_wrapper">
        <BtnComponents>Наша команда</BtnComponents>
      </div>
    </section>
  );
};

export default Comanda;
