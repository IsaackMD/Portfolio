import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticularOption from "../helpers/ParticuleConfig";


const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
  
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
  
  
  
    if (!init) return null;
  
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1 // Asegúrate que esté detrás de tu contenido
      }}>
        <Particles
          id="tsparticles"
          options={ParticularOption}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    );
  };

  export default ParticlesBackground