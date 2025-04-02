import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import fotoperfil from '../../public/imgs/1734581065969.jpg';
import fotoNatural from '../../public/imgs/b62254fc-a2da-41a4-8576-b0d945e865af.jpg';
import { Skills } from '../components/skills.jsx';
import { Portfolio } from '../components/portfolio.jsx';
import { Button, CardFooter } from "@heroui/react";
import { Card, CardHeader, CardBody } from '@heroui/react';
import '../../src/output.css';
import 'primeicons/primeicons.css';
import { Divider } from "@heroui/react";
import { Image } from "@heroui/image";
import ParticlesBackground from '../components/Background.jsx';
import Footer from '../components/Footer.jsx';
import { Experiencias } from '../components/experiencias.jsx';
import { Logros } from '../components/Logros.jsx';

const Home = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/Curriculum_CV_Sanchez_Benitez_Kevin_Isaac_programacion.pdf";
    link.download = "Curriculum_CV_Sanchez_Benitez_Kevin_Isaac_programacion.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen">
      <ParticlesBackground />
      {/* Contenedor general con fondo semitransparente y márgenes responsivos */}
      <div className="bg-[#161616b5] pt-24 pb-16 mx-5 md:mx-10 lg:mx-20" id='Inicio'>
        {/* Sección de información personal: en columna para móviles y en fila para dispositivos medianos */}
        <div className="flex  md:flex-row items-center justify-around lg:flex-row flex-col-reverse mx-4 md:mx-12 lg:mx-20">
          <div className="mb-8 md:mb-0">
            <div className="mb-4 justify-items-center md:mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white m-4 group relative w-max">
                Hola<strong className="text-accent">, Soy Kevin</strong>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarybg group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
              </h1>
            </div>
            <div className="mb-4">
              <h4 className="text-xl md:text-2xl text-white m-2 group relative w-max">
                Programador Junior - Desarrollador Web
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
              </h4>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/kisb03" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-linkedin hover:scale-125 transition"></i>
              </a>
              <a href="https://github.com/IsaackMD" target="_blank" rel="noopener noreferrer">
                <i className="pi pi-github hover:scale-125 transition ml-4"></i>
              </a>
            </div>
          </div>
          <div>
            <Image
              color="warning"
              src={fotoperfil}
              isBlurred
              shadow="md"
              radius="full"
              width={350}
              className="hover:scale-110 transition duration-300 img-skills"
            />
          </div>
        </div>

        {/* Tarjeta de presentación */}
        <div className="lg:mt-24 lg:pb-12 text-center sm:mx-2 md:mx-12 lg:mx-20 flex space-between items-center flex-col sm:flex-row lg:flex-col mx-11 justify-center align-items-start sm:mb-2">
          <div className='text-warning text-3xl lg:text-4xl m-6'><h2>Acerca de mí</h2></div>
          <Card className="lg:p-6 text-center shadow-2xl bg-[#1e1e1ed4] lg:hover:scale-105 transition lg:w-full sm:max-w-lg lg:max-w-full lg:my-4 sm:my-4">
            <CardBody className="overflow-visible py-2 flex lg:flex-row sm:flex-col items-center text-center px-4 ">
              <div className='lg:m-6 px-6'>
                <div className=''><h2 className='text-white text-2xl lg:text-3xl font-light text-start'>Hola, Soy Kevin Isaac Sanchez Benitez</h2></div>
                <div className='my-4'><h3 className='text-warning-500 lg:text-2xl font-light text-start'>Programador Junior y Desarrollador Web</h3></div>
                <p className="text-lg md:text-tiny  text-white text-start font-thin" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
                  Actualmente Estoy Por Terminar Mis Practicas Profesionales, Estoy En Busca De Un Trabajo En El Cual Pueda Poner En Practica Mis Conocimientos Tecnológicos, Enfocado En La Creación De Aplicaciones Web o De Escritorio, También Incursionando En Conocimientos En La Nube, Machine Learning, Data Analytic.
                </p>
                <p className="text-xs md:text-tiny mt-6 text-white font-thin text-start" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
                  Me gusta profundizar en la resolución de problemáticas, en el manejo de datos, enfocándome principalmente en el backend y base de datos, es uno de mis puntos fuertes, además también me gusta ejercitarme y cuidarme, facilidad de conexión con gente nueva.
                </p>
              </div>
              <div>
                <Image
                  color="warning"
                  src={fotoNatural}
                  isBlurred
                  shadow="sm"
                  className=" duration-300 img-skills lg:w-full lg:h-full sm:w-12 sm:h-12" />
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button color="success" variant="shadow" className="m-auto mt-6" onClick={downloadCV}>
                Descargar CV
                <i className="pi pi-download" style={{ color: 'black', fontSize: '20px' }}></i>
              </Button>
            </CardFooter>
          </Card>
          <Experiencias></Experiencias>
        </div>
        <Portfolio />
        <Skills />
        <Logros></Logros>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
