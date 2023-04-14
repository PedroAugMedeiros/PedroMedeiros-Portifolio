import React, { useState } from 'react'

export default function ProjectCard(props) {

 const [onHover, setOnHover] = useState(false)
    
 const { title, icon, linkDeploy, linkRepository } = props

  return (
    <div onClick={() => setOnHover(!onHover)} onMouseOver={() => setOnHover(true)} onMouseOut={() => setOnHover(false)} className={`w-[20%] ${onHover ? 'z-10 border-white transition-transform duration-1000 ease-out overflow-y-none scale-110 w-[20%] delay-100' : 'z-0 transition-transform duration-1000 ease-out scale-100 delay-100'} sm:w-[100%] md:w-[70%]`}  key={title}>
      <div className='flex justify-center items-center sm:mt-10'>
      <img className={`w-[100%]  ${onHover ? 'opacity-100 rounded-b-none cursor-pointer' : 'opacity-20'} rounded-md sm:opacity-60`} src={icon} alt={title} />
    <h2 className={`${onHover && 'hidden'} text-center p-2 absolute top-[45%] text-white opacity-100 z-10 text-xl font-dmsans text-titles `}>{title}</h2>
      </div>

    {onHover && 
        <><div className='borderGradientProjects'>
          </div><div className='flex items-center justify-center bg-[#212121] h-20 gap-2 sm:mb-10 rounded-b-md md:h-32 mb-10'>
          <a href={linkRepository} target="blank"><button className="p-2 px-4 border-2 rounded-full border-[#8257E6] h-10 text-xs m-2 project-buttons md:h-20 md:text-2xl overflow-y-hidden md:p-10">Ver Repositorio</button></a>
          <a href={linkDeploy} target="blank">
            <button className="p-2 px-4 border-2 rounded-full border-[#8257E6] h-10 text-xs m-2 project-buttons md:h-20 md:text-2xl">Ver Deploy</button>
          </a>

        </div></>}
  </div>
  )
}
