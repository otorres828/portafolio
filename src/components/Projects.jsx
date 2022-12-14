// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Estos son algunos de los proyectos que he construido con laravel 9. Estan en su version oficial y Demo
          </p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {projects.map((project) => (
            <div key={project.id}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative min-h-80 md:h-80">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-center"
                  src={project.image}
                />
                <div className="select-none px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed pb-4">{project.description}</p>
                  <a href={project.link} className="rounded-lg p-2 text-white bg-green-600">Ver Mas</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

