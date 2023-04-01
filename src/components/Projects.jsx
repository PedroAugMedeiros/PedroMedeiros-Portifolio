import React, { useState } from 'react'
import JsIcon from '../images/MyPhoto.png'
import HtmlIcon from '../images/MyPhoto.png'

export default function Projects() {
  // const [showAllProjects, setShowAllProjects] = useState(false)
  const projects = [{
    title: 'JavaScript',
    icon: JsIcon, 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  }, {
    title: 'JavaScript',
    icon: JsIcon 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  }, {
    title: 'JavaScript',
    icon: JsIcon 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  }, {
    title: 'JavaScript',
    icon: JsIcon 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  }, {
    title: 'JavaScript',
    icon: JsIcon 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  }, {
    title: 'JavaScript',
    icon: JsIcon 
  }, {
    title: 'Html',
    icon: HtmlIcon 
  } ]
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-center'>Projects</h1>
      <section className='flex flex-wrap gap-20 mx-10'>
      {projects.map((project) => {
        return (
          <div key={project.title} className='flex flex-col gap-5 w-[20%]'>
                        <h2 className='text-center'>{project.title}</h2>
            <img className='w-[100%]' src={project.icon} alt={project.title} />
          </div>
        )
      })}
      </section>
      {/* <section className='align-start' >
      <div className='flex flex-row gap-2 justify-start'>
      <button onClick={() => setShowAllProjects(false)}>Destaques</button>
      |
      <button onClick={() => setShowAllProjects(true)}>Todos os Projetos</button>
      </div>
      </section>
 <section>
        {showAllProjects ? renderProjects(allProjects) : renderProjects(highligthProjects)}
      </section>
  */}
    </div>

  )
}
