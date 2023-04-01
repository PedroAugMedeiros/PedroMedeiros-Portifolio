import React, { useEffect, useState } from 'react'
import MyPhoto from '../images/MyPhoto.png'

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
    <section className='flex justify-between py-20 px-40'>
    <div className="flex flex-col items-start justify-center w-[100%] gap-2">
      <p className={`${className === 1 ? firstAnimation : ''} line-resume font-poppins text-4xl text-[#F9F9F9]`}>Salve Visitante, eu sou o
      </p>
      <p className={`${className === 2 ? secondAnimation : ''} ${className < 2 ? 'hidden' : ''}  line-resume font-poppins text-4xl text-purple-content`}>  Pedro Medeiros
      </p>
      <p className={`${className === 3 ? thirdAnimation : ''} ${className < 3 ? 'hidden' : ''} line-resume font-dmsans text-content font-medium`}>  Desenvolvedor Front-End
      </p>
        <section className="flex items-stretch gap-5">
            <button className="p-2 px-5  text-xs rounded-full cv-button">Download CV</button>
            <button className="p-2 px-5  text-xs rounded-full contact-button">Entrar em contato</button>
        </section>
    </div>
    <div className='flex w-[100%] items-center justify-end'>
        <img className='w-[60%] rounded-full bg-purple-600 m-0 mr-0' src={MyPhoto}></img>
    </div>
    </section>
  )
}
