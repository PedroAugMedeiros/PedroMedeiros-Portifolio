import React from 'react'
import ProjectCard from './ProjectCard'
import ComicsFlixBanner from '../images/comicsFlixBanner.png'
import MyPokedexBanner from '../images/myPokedexBanner.png'
import EasyRecipesBanner from '../images/easyRecipesBanner.png'

export default function Projects() {

  const projects = [{
    title: 'ComicsFlix',
    icon: ComicsFlixBanner,
    linkDeploy: 'https://comicsflix.netlify.app',
    linkRepository: 'https://github.com/PedroAugMedeiros/comicsflix',
  }, {
    title: 'My Pokedex',
    icon: MyPokedexBanner,
    linkDeploy: 'https://mypokedexx.netlify.app',
    linkRepository: 'https://github.com/PedroAugMedeiros/My-Pokedex',
  }, {
    title: 'Easy Recipes',
    icon: EasyRecipesBanner,
    linkDeploy: 'https://easyrecipes-eight.vercel.app',
    linkRepository: 'https://github.com/PedroAugMedeiros/ProjectRecipesApp', 
  },]
  
  return (
    <div className='flex flex-col gap-10 overflow-y-hidden'>
      <h1 className='text-center text-[200%] font-dmsans text-titles md:text-[260%]'>Projetos</h1>
      <div className='w-[10%] text-[150%] font-dmsans text-titles ml-20 sm:w-[40%] sm:ml-10 md:ml-10 md:w-[20%] md:text-[200%]'>
      <h2>Destaques</h2>
      <div className='borderGradientProjects'></div>
      </div>

      <section className='flex flex-wrap gap-5 justify-around items-center sm:flex-col sm:justify-center sm:items-center sm:mx-5 md:flex-col md:justify-center md:items-center md:mx-5 md:gap-20 overflow-y-hidden'>
      {projects.map((project) => {
        return (
            <ProjectCard key={project.title} title={project.title} icon={project.icon} linkRepository={project.linkRepository} linkDeploy={project.linkDeploy}/>
        )
      })}
      </section>
      <div className='flex justify-center mt-10'><a className='w-[70%] p-2 cv-button md:p-10 md:text-[250%]' href='https://github.com/PedroAugMedeiros?tab=repositories' target='blank'><button className=''>Ver Mais Projetos</button></a></div>
   
    </div>

  )
}
