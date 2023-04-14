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
    <div className='flex flex-col gap-10'>
      <h1 className='text-center text-3xl font-dmsans text-titles'>Projetos</h1>
      <div className='w-[10%] text-3xl font-dmsans text-titles ml-20'>
      <h2>Destaques</h2>
      <div className='borderGradientProjects'></div>
      </div>

      <section className='flex flex-wrap gap-5 justify-around items-center'>
      {projects.map((project) => {
        return (
            <ProjectCard key={project.title} title={project.title} icon={project.icon} linkRepository={project.linkRepository} linkDeploy={project.linkDeploy}/>
        )
      })}
      </section>
      <div className='flex justify-center mt-10'><a className='w-[70%] p-2 cv-button' href='https://github.com/PedroAugMedeiros?tab=repositories' target='blank'><button className=''>Ver Mais Projetos</button></a></div>
   
    </div>

  )
}
