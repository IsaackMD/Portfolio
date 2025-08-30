import React, { useEffect, useState } from 'react';
import ProjectItem from './projectItem'
// import { ProductService } from '../helpers/ListProjects.js';
import { Carousel } from 'primereact/carousel';
export const Logros = () => {

    const [projects, setProjects] = useState([
        {
            id: '1001',
            code: 'dfjeEE220',
            name: 'Voxy Proficiency Achievement Certificate - High Intermediate',
            description: 'Certificado oficial de Voxy Proficiency Achievement Certificate que demuestra el nivel de inglés (B2 Upper Intermediate).',
            image: 'certificado_ingles_voxy.png',
            tech: ['Ingles'],
            rep: 'https://app.voxy.com/certificates/proficiency-test/67a2becb5d03666da07f8ff3/'
        },
        {
            id: '1002',
            code: 'dfjeEE220',
            name: 'Certificado oficial EF SET 55/100 (B2 Upper Intermediate)',
            description: 'Certificado oficial de EF SET 55/100 (B2 Upper Intermediate).',
            image: 'certificado_ingles_efset.png',
            tech: ['Ingles'],
            rep: 'https://cert.efset.org/HAedfP'
        }
        ,
        {
            id: '1003',
            code: 'dfjeEE220',
            name: 'Generación de Certificados y Diplomas con PHP, MySql y JS',
            description: 'Certificado que Udemy que refuerza mis aprendizaje en el mundo de la programación web.',
            image: 'CertificadoUdemy.jpg',
            tech: ['PHP','MySQL', 'JavaScript', 'AJAX', 'JSON', 'Bootstrap'],
            rep: 'https://www.udemy.com/certificate/UC-31f2f0aa-e1fd-4c3b-a9f5-6f75ea664dcf/'
        },
        {
            id: '1004',
            code: 'dfjeEE220',
            name: 'CSS Avanzado',
            description: 'Certificado de CSS Avanzado de la plataforma desafío latam que refuerza mis aprendizaje en el mundo de la programación web.',
            image: 'certificate-605649226.jpg',
            tech: ['CSS', 'HTML'],
            rep: 'https://cursos.desafiolatam.com/certificates/ednodphp5r'
        },
        {
            id: '1005',
            code: 'dfjeEE220',
            name: 'Build a Secure Google Cloud Network Skill Badge',
            description: 'Complete la insignia de habilidades de redes de Google Cloud de compilación para demostrar habilidades a continuación: construir, escalar y asegurar sus aplicaciones en Google Cloud.',
            image: 'BSGCN.png',
            tech: ['Cloud Security', 'Networking', 'VPC Network'],
            rep: 'https://www.credly.com/badges/70150483-4dd5-43b8-ad30-fe65ffb61b2b/linked_in_profile'
        },
        {
            id: '1006',
            code: 'dfjeEE220',
            name: 'Google Cloud Computing Foundations Certificate',
            description: 'Este programa de certificado ayuda a los alumnos a desarrollar competencia técnica en la computación en la nube. Este certificado es una base ideal para diversas carreras profesionales, incluidas las de infraestructura de TI, ingeniería en la nube y desarrollo de aplicaciones nativas de nubes.',
            image: 'GCC.png',
            tech: ['APIs', 'AppDev', 'BigQuery', 'Cloud Computing', 'Cloud Foundations', 'Cloud Functions','Cloud Storage','Cloud Infrastructures','Compute Engine', 'Data & ML', 'IAM', 'Google Cloud'],
            rep: 'https://www.credly.com/badges/890402d1-0762-4950-b257-53b380c2efc4/linked_in_profile'
        },
        {
            id: '1007',
            code: 'dfjeEE220',
            name: 'Google AI Essentials',
            description: 'Este programa de certificado ayuda a los alumnos a desarrollar competencia técnica en la computación en la nube. Este certificado es una base ideal para diversas carreras profesionales, incluidas las de infraestructura de TI, ingeniería en la nube y desarrollo de aplicaciones nativas de nubes.',
            image: 'CERTIFICATE_AI_Essentials.jpeg',
            tech: ['AI', 'LLMs', 'Prompt Desing', 'Generative AI'],
            rep: 'https://www.coursera.org/account/accomplishments/verify/P5W2P5BCWMH5'
        },
        {
            id: '1008',
            code: 'dfjeEE220',
            name: 'HCIA-Cloud Service V3.5 Course',
            description: 'Capacitar y certificar ingenieros capaces de construir arquitecturas de TI empresariales utilizando servicios de nube comunes, como computación, almacenamiento y servicios de red, y utilizar y administrar servicios de nube.',
            image: 'certificado_huawei.png',
            tech: ['Cloud Computing', 'Cloud Foundations', 'Cloud Functions','Cloud Storage','Cloud Infrastructures','Huawei Cloud'],
        },


    ]);
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '500px', numVisible: 1, numScroll: 1 }
      ];

    return (
        <>
            <div className='text-center justify-center' id='Logros'>
                <h2 className='text-4xl font-bold mt-8 mb-8 text-warning'>Logros</h2>
            </div>
            <div className="lg:m-16 md:m-8 sm:m-2">
                <Carousel
                    value={projects}
                    numVisible={2}
                    numScroll={2}
                    circular
                    responsiveOptions={responsiveOptions}
                    itemTemplate={(project) => <ProjectItem project={project} icons='pi pi-link' urlImg='../../imgs/archievements/' text='Habilidades:'/>}
                    showIndicators={true}
                />
            </div>
        </>
    )
}
