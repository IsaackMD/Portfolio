import React from 'react'

export const Experiencias = () => {
    return (
        <div className='lg:mt-24 sm:mt-12 md:mt-12 ' id='Experiencias'>
            <h2 className='text-3xl text-warning sm:mt-12'>Experiencias</h2>
            <div className='lg:flex lg:justify-center'>
                <div class="flex lg:flex-row lg:w-2/5 md:w-1/2 sm:w-full p-4 mt-6 ">
                    <div class="bg-[#1e1e1ed4] shadow-lg rounded-lg p-6">
                        <div class="flex items-center space-x-4 mb-6">
                            <i class="w-10 h-10 pi pi-briefcase" style={{ color: '#F29F05' }} ></i>
                            <h2 class="text-3xl font-thin text-white">Experience</h2>
                        </div>
                        <div class="space-y-6">
                            <div class="border-l-4 border-warning-500 pl-4">
                                <h3 class="text-xl font-medium text-start text-warning">Desarrollador Full Stack Web(Inventario de Insumos)</h3>
                                <div class="text-gray-400 text-start text-sm">Enero 2025 - Presente</div>
                                <h4 class="text-white font-medium text-start pt-2 text-xl">Becario de Programación en Oficialia Mayor de Hidalgo</h4>
                                <p class="text-gray-300 mt-2 text-justify">Participe en el desarollo de una aplicación web para Oficialia Mayor de Hidalgo, donde se desarrolló una aplicación web de gestión de inventarios. Este sistema tiene como objetivo centralizar, automatizar y optimizar el control de insumos, mejorando la transparencia, trazabilidad y eficiencia en la administración de recursos públicos. Para ello, utilizo tecnologías como React.js, Express.js, PostgreSQL, JWT y cookies parser.</p>
                            </div>
                            <div class="border-l-4 border-warning-500 pl-4">
                                <h3 class="text-xl font-medium text-start text-warning">Desarrollador Full Stack Web (Curso de Verano)</h3>
                                <div class="text-gray-400 text-start text-sm">Enero 2024 - Abril-204</div>
                                <h4 class="text-white font-medium text-start pt-2 text-xl">Becario de Programación en Oficialia Mayor de Hidalgo</h4>
                                <p class="text-gray-300 mt-2 text-justify">Durante mi estadía profesional, desarrollé una aplicación web utilizando Symfony (framework de PHP) y PostgreSQL para gestionar la inscripción de infantes a un curso de verano. La solución validaba la identidad de cada menor mediante su CURP, lo que optimizó el proceso de registro. Además, el sistema facilitaba la gestión de solicitudes de inscripción, permitiendo aprobar o rechazar registros, asignar grupos por edades y visualizar la información de los solicitantes.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="flex lg:w-2/5 md:w-1/2 sm:w-full  p-4 mt-6">
                    <div class="bg-[#1e1e1ed4] shadow-lg rounded-lg p-6">
                        <div class="flex items-center space-x-4 mb-6">
                            <i class="w-10 h-10 pi pi-graduation-cap" style={{ color: '#005BC4' }} ></i>
                            <h2 class="text-3xl font-thin text-white">Educación</h2>
                        </div>
                        <div class="space-y-6">
                            <div class="border-l-4 border-[#005BC4] pl-4">
                                <h3 class="text-xl font-medium text-start text-primary">Tecnologías de la Información(Ultimo Año)</h3>
                                <div class="text-gray-400 text-start text-sm">Septiembre 2021 - Presente (Practicas Profesionales
                                    Finales)</div>
                                <h4 class="text-white font-medium text-start pt-2 text-xl">Universidad Politécnica Metropolitana de Hidalgo</h4>
                                <p class="text-gray-300 mt-2 text-justify">Durante mi estancia en la universidad, aprendí las bases de la programación, trabajando con lenguajes como Java, JavaScript, PHP y C#. También adquirí conocimientos en la creación y gestión de bases de datos, utilizando herramientas como SQL Server, MySQL y MariaDB. Además, me familiaricé con metodologías ágiles como SCRUM, Cascada y Kanban, y comprendí la importancia de seguir aprendiendo de manera autodidacta.</p>
                            </div>
                            <div class="border-l-4 border-[#005BC4] pl-4">
                                <h3 class="text-xl font-medium text-start text-primary">Colegio de Bachilleres COBAEH (TIC)</h3>
                                <div class="text-gray-400 text-start text-sm">2018-2021</div>
                                <h4 class="text-white font-medium text-start pt-2 text-xl">Universidad Politécnica Metropolitana de Hidalgo</h4>
                                <p class="text-gray-300 mt-2 text-justify">Durante mi estancia en la preparatoria aprendi lo basico como el manejo de un sistema Linux por CMD, bases teoricas de programación y desarrolle habilidades ofimatica con Microsoft Office.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
