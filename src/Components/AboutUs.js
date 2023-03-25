import React from "react";
import Carousel from "../Components/Carousel";

function AboutUs() {
  return (
    <div className="bg-gray-100 pt-20 pb-20">
      <div className="mx-auto max-w-3xl mb-10">
        <h1 className="text-5xl font-medium text-center">¿Quiénes somos?</h1>
        <h1 className="text-2xl font-light text-center mt-1">
          ¡Hola! Somos una empresa que se dedica a la venta de componentes y
          recambios para consolas retro.
        </h1>
      </div>
      <div className="w-11/12 mx-auto lg:w-full">
        <Carousel />
      </div>
    </div>
  );
}

export default AboutUs;
