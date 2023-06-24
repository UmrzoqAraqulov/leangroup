import React, { Component } from "react";
import Slider from "react-slick";
import './carusel.scss';
import CardCarusel from "./CardCarusel";
import image from '../../../assets/image/home_img.jpg'
import image1 from '../../../assets/image/informatsiya.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 6500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const data = [
      {
        img: image,
        title: "Ламинатные тубы",
        desc: "Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
      },
      {
        img: "https://tuba.ru/wp-content/uploads/2021/05/334422.png",
        title: "Ламинатные тубы",
        desc: "Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
      },
      {
        img: image1,
        title: "Ламинатные тубы",
        desc: "Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).",
      },
    ];
    return (
      <div>
        <Slider {...settings}>
          {data.map((el) => (
            <CardCarusel {...el}/>
          ))}
        </Slider>
      </div>
    );
  }
}
