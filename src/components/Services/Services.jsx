import React from 'react'
import { Cards } from '../Card/Cards'

export const Services = () => {
  return (
        <>
                <Cards img={'/images/service1.jpeg'} title={'Masajes Terapeuticos'} subtitle={'Alivia su tension, reduce la fatiga muscular'} description={'Existen diferentes tipos de masajes que se utilizan para mejorar el rendimiento físico, prevenir lesiones y acelerar la recuperación muscular.'}/>
                <Cards img={'/images/service2.jpeg'} title={'Entrenamiento Personal'} subtitle={'Desbloquea tu Potencial!'} description={'Se personalizará un programa que se ajuste a tus necesidades, llevándote al límite y asegurándote de que no te esfuerces demasiado. Con el entrenamiento personal, recibirás la motivación y la responsabilidad que necesitas para mantenerte constante, ayudándote a establecer hábitos saludables para toda la vida.'}/>
        </>
  )
}
