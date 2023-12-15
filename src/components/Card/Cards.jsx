import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { Form } from '../Form/Form';
export const Cards = ({img, title, subtitle, description}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <>
      <div className='rounded-xl border-2 bg-white text-black w-[300px] h-[700px]'>
        <img className='w-[25rem] h-[25rem] rounded-t-xl' src={img} alt={title + ' stock image'}/>
        <h1 className='text-lg mx-4 mt-4'>{title}</h1>
        <h2 className='text-sm mx-4 text-[#B3B3B3] mb-4' style={{fontWeight: '400', lineHeight: '20px', letterspacing: '0.25px'}}>{subtitle}</h2>
        <div className='grid'>
          <p className='text-xs mx-4 text-[#B3B3B3]'>{description}</p>
          <div className='justify-end flex p-2'>
            <button onClick={toggleModal} className='flex gap-3 bg-[#3E422E] p-2 rounded-lg text-white'>
              <span>
                Ver mas
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.25 9V5.25C8.25 4.65326 8.48705 4.08097 8.90901 3.65901C9.33097 3.23705 9.90326 3 10.5 3H16.5C17.0967 3 17.669 3.23705 18.091 3.65901C18.5129 4.08097 18.75 4.65326 18.75 5.25V18.75C18.75 19.3467 18.5129 19.919 18.091 20.341C17.669 20.7629 17.0967 21 16.5 21H10.5C9.90326 21 9.33097 20.7629 8.90901 20.341C8.48705 19.919 8.25 19.3467 8.25 18.75V15M12 9L15 12M15 12L12 15M15 12H2.25" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal} title={"My Modal"}>
        <Datetime/>
        <Form/>
      </Modal>
    </>
  )
}
