import React, { useEffect, useState } from 'react'
import MyPhoto from '../images/MyPhoto.png'
import CV from '../documents/PedroMedeiros.pdf'

export default function Resume() {
  const firstAnimation = 'first-animation cursor-border';
  const secondAnimation ='second-animation cursor-border';
  const thirdAnimation = 'third-animation cursor-border';

  const [className, setClassName] = useState(1)
  useEffect(() =>  {
    if(className !== 3) {
      setTimeout(() => {
        setClassName(className + 1)
      }, 5000);
    }
  }, [className])


  return (
    <section className='flex justify-between py-20 px-40 sm:flex-col-reverse sm:p-2 sm:w-[100%] sm:justify-center sm:items-center sm:gap-10 md:p-10'>
    <div className="flex flex-col items-start justify-center w-[100%] gap-2 sm:items-center sm:gap-1 md:w-[100%]">
      <p className={`${className === 1 ? firstAnimation : ''} line-resume font-poppins text-4xl text-[#F9F9F9] sm:text-[150%] md:text-[250%]`}>Salve Visitante, eu sou o
      </p>
      <p className={`${className === 2 ? secondAnimation : ''} ${className < 2 ? 'hidden' : ''}  line-resume font-poppins text-4xl text-purple-content sm:text-[150%] md:text-[250%]`}>  Pedro Medeiros
      </p>
      <p className={`${className === 3 ? thirdAnimation : ''} ${className < 3 ? 'hidden' : ''} line-resume font-dmsans text-content font-medium md:text-[200%]`}>  Desenvolvedor Full-Stack
      </p>
        <section className="flex items-stretch gap-5 sm:flex-col sm:w-[90%]">
        <a className='p-2 px-5  text-xs rounded-full cv-button md:text-xl md:p-4' href={CV} download>Download CV</a>
        <a className='p-2 px-5  text-xs rounded-full contact-button md:text-xl md:p-4' href='mailto:pedroaugmed7@gmail.com' target='blank'>Entrar em contato</a>
        </section>
    </div>
    <div className='flex w-[100%] items-center justify-end sm:justify-center md:w-[50%]'>
        <img className='w-[60%] rounded-full bg-purple-600 m-0 mr-0 md:w-[100%]' src={MyPhoto} alt='myPhoto'></img>
    </div>
    </section>
  )
}
