import React from "react";
import Carousel from '../Components/Carousel';

function AboutUs() {
  return (
    <div className="bg-gray-100 pt-20 pb-20 my-20">
      <div className="mx-56">
        <h1 className="text-5xl font-medium text-center">¿Quienes somos?</h1>
        <h1 className="text-2xl font-light text-center mt-1">
          ¡Hola! Somos una empresa que se dedica a la venta de componentes y
          recambios para consolas retro.
        </h1>
      </div>
      <Carousel />
    </div>
  );
}

export default AboutUs;
