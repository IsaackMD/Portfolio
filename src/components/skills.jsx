
import { ItemSkill } from './ItemSkill'

export const Skills = () => {
  return (
    <div style={{ marginTop: '12rem' }}>
      <div className='lg:px-12 md:px-4 sm:px-2'>
        <div className='mx-12'>
          <h2 id='Conocimientos' className='text-center strong-text text-4xl'>
            Conocimientos
          </h2>
        </div>

        <div className='container-skills text-center align-items-center justify-content-center'>
          <div className='lg:mx-20 lg:my-4' >
            <div className='text-center py-8'>
              <h3 className="text-2xl text-white">Vamos a ver mis <strong className='strong-text'>Conocimientos:</strong></h3>
            </div>
            <div className='text-center'>
            <p className='text-white'> Estoy comprometido en desarrollar soluciones tecnológicas que impulsen la innovación y la eficiencia en los proyectos en los que participo. Mi objetivo es integrarme en equipos de alto rendimiento donde pueda seguir creciendo profesionalmente y contribuir con mi experiencia en el desarrollo web y en nuevas tecnologías.</p>
            </div>
          </div>

<ItemSkill></ItemSkill>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
