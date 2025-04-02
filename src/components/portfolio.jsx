import { Carousel } from 'primereact/carousel';
import ProjectItem from '../components/projectItem.jsx';
import React, { useEffect, useState } from 'react';
import { ProductService } from '../helpers/ListProjects.js';
import '../../src/output.css';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '500px', numVisible: 1, numScroll: 1 }
  ];

  useEffect(() => {
    // Obtenemos los proyectos y tomamos los primeros 9
    ProductService.getProductsSmall().then((data) => setProjects(data.slice(0, 9)));
  }, []);

  return (
    <div id="Proyectos" className="mt-10">
      <div>
        <div className="mx-12 text-center">
          <h2 className="text-4xl font-bold text-center text-800 mb-10 text-warning-500">
            Proyectos
          </h2>
        </div>
        <div className="lg:m-16 md:m-8 sm:m-2">
          <Carousel
            value={projects}
            numVisible={2}
            numScroll={2}
            circular
            responsiveOptions={responsiveOptions}
            itemTemplate={(project) => <ProjectItem project={project} />}
            showIndicators={true}
          />
        </div>
      </div>
    </div>
  );
};
