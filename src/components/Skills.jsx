import React from 'react'

import CssIcon from '../images/css.svg'
import HtmlIcon from '../images/htmlIcon.svg'
import JSIcon from '../images/javascriptIcon.svg'
import ReactIcon from '../images/reactIcon.svg'
import TSIcon from '../images/typescriptIcon.svg'
import RTLIcon from '../images/reactTestingLibraryIcon.svg'
import TailwindIcon from '../images/tailwindcssIcon.svg'
import BootstrapIcon from '../images/bootstrapIcon.png'
import SCIcon from '../images/styledComponentsIcon.svg'
import HooksIcon from '../images/../images/hookIcon.svg'
import CypressIcon from '../images/../images/cypressIcon.svg'
import JestIcon from '../images/jestIcon.png'
import PWIcon from '../images/../images/pwIcon.svg'
import DockerIcon from '../images/docker.svg'


export default function Skills() {
  const skills = [
    {
      title: 'React.js',
      icon: ReactIcon 
    },
    {
      title: 'TypeScript',
      icon: TSIcon 
    },
    {
      title: 'JavaScript',
      icon: JSIcon 
    },{
    title: 'HTML5',
    icon: HtmlIcon 
  }, {
    title: 'CSS3',
    icon: CssIcon 
  }, {
    title: 'Talwind CSS',
    icon: TailwindIcon 
  }, {
    title: 'Styled Components',
    icon: SCIcon 
  }, {
    title: 'Bootstrap',
    icon: BootstrapIcon 
  }, {
    title: 'ContextAPI e hooks',
    icon: HooksIcon 
  }, {
    title: 'Redux',
    icon: CssIcon 
  }, {
    title: 'Git & Github',
    icon: CssIcon 
  }, {
    title: 'React Testing',
    icon: RTLIcon 
  }, {
    title: 'Cypress',
    icon: CypressIcon 
  }, {
    title: 'Jest',
    icon: JestIcon 
  }, {
    title: 'Playwright',
    icon: PWIcon 
  },  {
    title: 'Docker',
    icon: DockerIcon 
  } ]

  return (
    <div className='flex flex-col items-center gap-20'>
      <h1 className='text-[200%] font-dmsans text-titles md:text-[260%]'>Habilidades</h1>
      <section className='flex mx-20 gap-10  flex-wrap justify-center'>
        {skills.map((skill) => {
          return (<div className='flex flex-col gap-4 items-center bg-[#212121] justify-center py-3 w-[9%] rounded-tl-3xl borderGradientSkills sm:w-[40%] md:w-[20%]'>
            <h1 className='text-purple-content font-dmsans text-center font-medium text-sm md:text-xl'>{skill.title}</h1>
            <img className='w-[49%]' src={skill.icon} alt={skill.title}/>
          </div>)
        })}
      </section>
    </div>
  )
}
