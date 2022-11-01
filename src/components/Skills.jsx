import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import {skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades y Tecnologías
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A continuacion aparece mi stack de tecnologias y habilidades dominadas
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="sm:w-1/2   w-full p-2 md:w-1/2 select-none	 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95  duration-30">
              <div className="hover:bg-gray-600 bg-gray-800  rounded flex p-4 h-full items-center ">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}