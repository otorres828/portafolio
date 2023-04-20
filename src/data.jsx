/*TESTIMONIAL */
import luis from "./images/testimonial/luis.jpeg";
import alfonzo from "./images/testimonial/alfonzo.png";
import wilter from "./images/testimonial/wilter.webp"
/*PROJECTS*/
import mansion from "./images/project/mansion.gif"
import ucabline from "./images/project/ucabline.gif"
import ucabrides from "./images/project/ucabrides.png"
import agora from "./images/project/videochat.gif"
import oceeucabgy from "./images/project/oceeucabgy.gif"
import ucabfoms from "./images/project/ucabform.gif"
import chatgpt from "./images/project/chatgpt.png"

export const projects = [
  {
    id:1,
    title: "Mansion de Cristo",
    subtitle: "Sistema de Registro Celular + Blog",
    description:
      "La pagina web de la iglesia internacional Mansion de Cristo; posee distintas secciones publicas y privadas, donde todas son autoadministrables desde un panel, tambien cuenta un sistema de registro y control de sus miembros.",
    image:mansion,
    link: "https://mansiondecristo.com",
  },
  {
    id:2,
    title: "Clone ChatGpt",
    subtitle: "Oliver GPT-3",
    description:
      "Oliver GPT es un clone del chatbot chatgpt-3.",
    image: chatgpt,
    link: "https://oliver-gpt3.vercel.app/",
  },
  {
    id:3,
    title: "Ucab Line",
    subtitle: "Ucab Line - Lineas de Tiempo",
    description:
      "Ucabline es una aplicación web que te permite organizar tus actividades diarias, así como tus eventos importantes, de una manera sencilla y eficiente. Además, te permite llevar un control de tus tareas y proyectos, así como de tus asignaturas.",
    image: ucabline,
    link: "https://ucabline.ml",
  },
  {
    id:4,
    title: "Ucab Rides",
    subtitle: "Pide Cola - Ucab Rides",
    description:
      "Ucab Rides es una app que sigue en desarrollo, tiene el fin de que los estudiantes de una universidad en especifico puedan pedir cola entre ellos mismos.",
    image: ucabrides,
    link: "https://ucabrides.vercel.app/",
  },
  {
    id:5,
    title: "Video Chat",
    subtitle: "Agora - Video Chat",
    description:
      "Video chat es una app sencilla en la cual simula la transmision de audio y video atraves del protocolo VozIP",
    image: agora,
    link: "https://vozip.netlify.app/",
  },
  {
    id:6,
    title: "Cooperacion Economica UCAB Guayana",
    subtitle: "Plataforma de Solicitud y Renovacion del Proceso de Ayuda Economica",
    description:
      "Plataforma dedicada a brindar informacion sobre la solicitud y renovacion del proceso de ayuda economica en la Universidad Catolica Andres Bello - Sede Guayana. Los estudiantes pueden realizar sus solicitudes de renovacion del apoyo en cuestion.",
    image: oceeucabgy,
    link: "https://cooperacion-economica.herokuapp.com/",
  },

  {
    id:7,
    title: "Ucab Form",
    subtitle: "Ucab Form - Encuestas",
    description:
      "Ucab form en terminos sencillos, es una app parecida a google form pero con mayor flexibilidad y funcionalidades. De este proyecto perteneci al equipo documentador.",
    image: ucabfoms,
    link: "https://ucab-forms-db.web.app/",
  },

];

export const testimonials = [
  {
    id:1,
    quote:
      "En terminos simples, Oliver es el compañero que siempre se quiere tener. Apasionado por la programacion y dedicado al trabajo. Muy amable y proactivo. Trabaje con el en el proyecto de Ucab Line, dirigido a la coordinacion de desarrollo estudiantil de la Universidad Catolica Andres Bello.",
    image: wilter,
    name: "Wilter Diaz",
    company: "wilterD",
  },
  {
    id:2,
    quote:
      "Oliver es un gran compañero, es apasionado por la programacion y dedicado al mejoramiento continuo. Trabaje con el en el proyecto de Mansion de Cristo, dirigido a la iglesia internacional Mansion de Cristo.",
    image: alfonzo,
    name: "Jesus Alfonzo",
    company: "alfonzzoj",
  },
  {
    id:3,
    quote:
      "Oliver es un compañero que demuestra cualidades de ingenio, perseverancia y sobre todo compromiso. Trabajar con él fue una experiencia agradable porque, a su lado, sentí la seguridad de tener a un compañero trabajador que está pendiente de todos los detalles del proyecto.",
    image: luis,
    name: "Luis Somoza",
    company: "Lu27656348",
  },
];

export const skills = [
  "Laravel - Componentes de Blade",
  "JavaScript - Php",
  "Eloquen - Mysql - PostgreSql / Procedures - Triggers - Events - View - SubConsultas",
  "Livewire",
  "Git y Github",
  "Bootstrap - Tailwind Css - Alphine Js",
  "React js",
  "Api Rest",
];
