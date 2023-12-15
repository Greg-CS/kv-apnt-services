import React from 'react'

export const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: "url(/images/hero.png)"}}>
      <div className='flex self-start pl-32' style={{alignSelf: 'center'}}>
        <div className='font-bold font-mono'>
          <h1 className='shadow-xl rounded-full'>
            Masajes de Rehabilitacion
          </h1>
          <span className='text-xs'>Terapias a domicilio en toda la isla.</span>
          <button className='flex bg-[#3E422E] gap-3 p-3 rounded-lg'>
            <span>
               Reservar            
            </span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 7.40326 3.23705 6.83097 3.65901 6.40901C4.08097 5.98705 4.65326 5.75 5.25 5.75H18.75C19.3467 5.75 19.919 5.98705 20.341 6.40901C20.7629 6.83097 21 7.40326 21 8V19.25M3 19.25C3 19.8467 3.23705 20.419 3.65901 20.841C4.08097 21.2629 4.65326 21.5 5.25 21.5H18.75C19.3467 21.5 19.919 21.2629 20.341 20.841C20.7629 20.419 21 19.8467 21 19.25M3 19.25V11.75C3 11.1533 3.23705 10.581 3.65901 10.159C4.08097 9.73705 4.65326 9.5 5.25 9.5H18.75C19.3467 9.5 19.919 9.73705 20.341 10.159C20.7629 10.581 21 11.1533 21 11.75V19.25M12 13.25H12.008V13.258H12V13.25ZM12 15.5H12.008V15.508H12V15.5ZM12 17.75H12.008V17.758H12V17.75ZM9.75 15.5H9.758V15.508H9.75V15.5ZM9.75 17.75H9.758V17.758H9.75V17.75ZM7.5 15.5H7.508V15.508H7.5V15.5ZM7.5 17.75H7.508V17.758H7.5V17.75ZM14.25 13.25H14.258V13.258H14.25V13.25ZM14.25 15.5H14.258V15.508H14.25V15.5ZM14.25 17.75H14.258V17.758H14.25V17.75ZM16.5 13.25H16.508V13.258H16.5V13.25ZM16.5 15.5H16.508V15.508H16.5V15.5Z" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
