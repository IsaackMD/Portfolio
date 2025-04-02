import React from 'react';
import 'primeicons/primeicons.css';
import '../styles/ProjectItem.css';
import { Image } from "@heroui/image";
import { Tag } from 'primereact/tag';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons

// Ruta base para las imágenes


const ProjectItem = ({ project, icons = 'pi pi-github', urlImg='../../public/imgs/projects/', text='Tecnologías:' }) => {
    return (
        <div className="project-container p-4">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg shadow-xl">
                <Image
                    isBlurred
                    shadow="lg"
                    src={`${urlImg}/${project.image}`}
                    alt={project.image}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    removeWrapper={true}
                    style={{
                        position: 'absolute',
                        inset: 0,
                    }}
                />
                {/* Contenedor de información */}
                <div className="content absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white shadow-lg">
                    <h3 className="font-bold lg:text-base md:text-sm sm:text-xs">{project.name}</h3>
                    <p className="text-sm lg:text-sm md:text-xs sm:text-xs">{project.description}</p>
                    <p className="text-xs">
                        <strong className="text-primarybg">{text}</strong>
                        {project.tech.map((tech, index) => (
                            <Tag key={index} className="text-xs m-2 text-black" value={tech}style={{background:'#F2CB05'}} rounded></Tag>
                        ))}
                    </p>
                </div>
                <div className="icons">
                    {project.rep &&
                        <a href={project.rep} target="_blank"><i className={icons}> </i></a>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
