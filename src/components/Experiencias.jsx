import React from 'react';
import { Accordion, AccordionItem } from "@heroui/accordion";
import useIsMobile from '../hooks/useMediaQuery';

export const Experiencias = () => {
    const isMobile = useIsMobile();

    const contentMobileExperiencias = (
        <Accordion className='text-white'>
            <AccordionItem  key="1" aria-label="Desarrollador Full Stack Web(Inventario de Insumos)" title="Desarrollador Full Stack Web (Inventario de Insumos)" startContent={<i className="w-10 h-10 pi pi-briefcase" style={{ color: '#F29F05' }} />}>
                <div className="text-gray-400 text-start text-sm">Enero 2025 - Presente</div>
                <h4 className="text-white font-medium text-start pt-2 text-xl">Becario de Programación en Oficialía Mayor de Hidalgo</h4>
                <p className="text-gray-300 mt-2 text-justify">Participe en el desarollo de una aplicación web para Oficialia Mayor de Hidalgo, donde se desarrolló una aplicación web de gestión de inventarios. Este sistema tiene como objetivo centralizar, automatizar y optimizar el control de insumos, mejorando la transparencia, trazabilidad y eficiencia en la administración de recursos públicos. Para ello, utilizo tecnologías como React.js, Express.js, PostgreSQL, JWT y cookies parser.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Desarrollador Full Stack Web (Curso de Verano)" title="Desarrollador Full Stack Web (Curso de Verano)" startContent={<i className="w-10 h-10 pi pi-briefcase" style={{ color: '#F29F05' }} />}>
                <div className="text-gray-400 text-start text-sm">Enero 2024 - Abril 2024</div>
                <h4 className="text-white font-medium text-start pt-2 text-xl">Becario de Programación en Oficialía Mayor de Hidalgo</h4>
                <p className="text-gray-300 mt-2 text-justify">Desarrollé una app en Symfony y PostgreSQL para gestionar inscripciones a cursos de verano, validando CURP y permitiendo control administrativo completo. La solución validaba la identidad de cada menor mediante su CURP, lo que optimizó el proceso de registro.</p>
            </AccordionItem>
        </Accordion>
    );

    const contentMobileEstudio = (
        <Accordion>
            <AccordionItem key="1" aria-label="Tecnologías de la Información (Último Año)" title="Tecnologías de la Información (Último Año)" startContent={<i className="w-10 h-10 pi pi-graduation-cap" style={{ color: '#005BC4' }} />}>
                <div className="text-gray-400 text-start text-sm">Septiembre 2021 - Presente</div>
                <h4 className="text-white font-medium text-start pt-2 text-xl">Universidad Politécnica Metropolitana de Hidalgo</h4>
                <p className="text-gray-300 mt-2 text-justify">Durante mi estancia en la universidad, aprendí las bases de la programación, trabajando con lenguajes como Java, JavaScript, PHP y C#. También adquirí conocimientos en la creación y gestión de bases de datos, utilizando herramientas como SQL Server, MySQL y MariaDB. Además, me familiaricé con metodologías ágiles como SCRUM, Cascada y Kanban, y comprendí la importancia de seguir aprendiendo de manera autodidacta.</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="COBAEH (TIC)" title="COBAEH (TIC)" startContent={<i className="w-10 h-10 pi pi-graduation-cap" style={{ color: '#005BC4' }} />}>
                <div className="text-gray-400 text-start text-sm">2018 - 2021</div>
                <h4 className="text-white font-medium text-start pt-2 text-xl">Colegio de Bachilleres COBAEH</h4>
                <p className="text-gray-300 mt-2 text-justify">Durante mi estancia en la preparatoria aprendi lo basico como el manejo de un sistema Linux por CMD, bases teoricas de programación y desarrolle habilidades ofimatica con Microsoft Office.</p>
            </AccordionItem>
        </Accordion>
    );

    return (
        <div className="lg:mt-24 sm:mt-12 md:mt-12" id="Experiencias" style={{marginTop: '60px'}}>
            <h2 className="text-3xl text-warning sm:mt-12">Experiencias</h2>

            {isMobile ? (
                <>
                    {contentMobileExperiencias}
                    <div className="mt-8">{contentMobileEstudio}</div>
                </>
            ) : (
                <>
                    <div className="lg:flex lg:justify-center">
                        {/* Experiencia escritorio */}
                        <div className="flex lg:flex-row lg:w-2/5 md:w-1/2 sm:w-full p-4 mt-6">
                            <div className="bg-[#1e1e1ed4] shadow-lg rounded-lg p-6">
                                <div className="flex items-center space-x-4 mb-6">
                                    <i className="w-10 h-10 pi pi-briefcase" style={{ color: '#F29F05' }} />
                                    <h2 className="text-3xl font-thin text-white">Experiencia</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-warning-500 pl-4">
                                        <h3 className="text-xl font-medium text-start text-warning">Desarrollador Web Jr</h3>
                                        <div className="text-gray-400 text-start text-sm">Abril 2025 - Presente</div>
                                        <h4 className="text-white font-medium text-start pt-2 text-xl">Consorcio de Desarrollo Web IMOVS</h4>
                                        <p className="text-gray-300 mt-2 text-justify">
                                            Responsable del sistema de gestión de guías de envío y solicitudes. 
                                            Uso de principios SOLID, arquitectura MVC y hexagonal
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-warning-500 pl-4">
                                        <h3 className="text-xl font-medium text-start text-warning">Desarrollador Full Stack Web (Inventario de Insumos)</h3>
                                        <div className="text-gray-400 text-start text-sm">Enero 2025 - Abril 2025</div>
                                        <h4 className="text-white font-medium text-start pt-2 text-xl">Oficialía Mayor de Hidalgo</h4>
                                        <p className="text-gray-300 mt-2 text-justify">Participe en el desarollo de una aplicación web para Oficialia Mayor de Hidalgo, donde se desarrolló una aplicación web de gestión de inventarios. Este sistema tiene como objetivo centralizar, automatizar y optimizar el control de insumos, mejorando la transparencia, trazabilidad y eficiencia en la administración de recursos públicos. Para ello, utilizo tecnologías como React.js, Express.js, PostgreSQL, JWT y cookies parser.</p>
                                    </div>
                                    <div className="border-l-4 border-warning-500 pl-4">
                                        <h3 className="text-xl font-medium text-start text-warning">Desarrollador Full Stack Web (Curso de Verano)</h3>
                                        <div className="text-gray-400 text-start text-sm">Enero 2024 - Abril 2024</div>
                                        <h4 className="text-white font-medium text-start pt-2 text-xl">Oficialía Mayor de Hidalgo</h4>
                                        <p className="text-gray-300 mt-2 text-justify">Desarrollé una app en Symfony y PostgreSQL para gestionar inscripciones a cursos de verano, validando CURP y permitiendo control administrativo completo. La solución validaba la identidad de cada menor mediante su CURP, lo que optimizó el proceso de registro.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Educación escritorio */}
                        <div className="flex lg:w-2/5 md:w-1/2 sm:w-full p-4 mt-6">
                            <div className="bg-[#1e1e1ed4] shadow-lg rounded-lg p-6">
                                <div className="flex items-center space-x-4 mb-6">
                                    <i className="w-10 h-10 pi pi-graduation-cap" style={{ color: '#005BC4' }} />
                                    <h2 className="text-3xl font-thin text-white">Educación</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-[#005BC4] pl-4">
                                        <h3 className="text-xl font-medium text-start text-primary">Tecnologías de la Información (Título en trámite)</h3>
                                        <div className="text-gray-400 text-start text-sm">Septiembre 2021 - Abril 2025</div>
                                        <h4 className="text-white font-medium text-start pt-2 text-xl">Universidad Politécnica Metropolitana de Hidalgo</h4>
                                        <p className="text-gray-300 mt-2 text-justify">Durante mi estancia en la universidad, aprendí las bases de la programación, trabajando con lenguajes como Java, JavaScript, PHP y C#. También adquirí conocimientos en la creación y gestión de bases de datos, utilizando herramientas como SQL Server, MySQL y MariaDB. Además, me familiaricé con metodologías ágiles como SCRUM, Cascada y Kanban, y comprendí la importancia de seguir aprendiendo de manera autodidacta.</p>
                                    </div>
                                    <div className="border-l-4 border-[#005BC4] pl-4">
                                        <h3 className="text-xl font-medium text-start text-primary">COBAEH (TIC)</h3>
                                        <div className="text-gray-400 text-start text-sm">2018 - 2021</div>
                                        <h4 className="text-white font-medium text-start pt-2 text-xl">Colegio de Bachilleres COBAEH</h4>
                                        <p className="text-gray-300 mt-2 text-justify">Durante mi estancia en la preparatoria aprendi lo basico como el manejo de un sistema Linux por CMD, bases teoricas de programación y desarrolle habilidades ofimatica con Microsoft Office.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
