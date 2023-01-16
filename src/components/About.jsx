
import React from "react";
import Redes from "./Redes";
import oliver from "../images/oliver.jpeg";
import cv from "../cv OLIVER.pdf"
export default function About() {
  // ./coding.svg
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-10 md:pt-20 pb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Oliver Torres
            <br />
            Me encanta construir aplicaciones web
          </h1>
          <p className="mb-8 leading-relaxed px-4 sm:px-0">
          Soy un Joven de 25 Años dedicado y apasionado por la programación web. Me especializo como desarrollador Laravel con conocimientos en React Js. Actualmente estoy cursando mi Penúltimo semestre de Ingeniería en Informática. Si quieres conocerme un poco más te invito a descargar mi CV o seguirme en mis redes sociales.</p>
          <div className="flex justify-center">
            <a download={cv}
            href={cv}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
              CV
            </a>
           <Redes />
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Proyectos
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-30">
          <img
            className="object-cover object-center rounded-lg border-collapse"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}