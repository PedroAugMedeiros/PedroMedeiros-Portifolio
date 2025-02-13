import React from 'react'
import EmailIcon from '../images/mailIcon.svg'
import PhoneIcon from '../images/phone.svg'
import LinkedinIcon from '../images/linkedinIcon.svg'
import GitHubIcon from '../images/githubIcon.svg'

export default function Contacts() {
  const contacts = [{
    title: 'Email',
    icon: EmailIcon,
    content: 'pedroaugmed7@gmail.com',
    link: 'mailto:pedroaugmed7@gmail.com',
  }, {
    title: 'Telefone',
    icon: PhoneIcon,
    content: '(31) 97351-8584',
    link: 'https://wa.me/5531992262115',
  },
  {
    title: 'Linkedin',
    icon: LinkedinIcon,
    content: 'pedroaugmed',
    link: 'https://www.linkedin.com/in/pedro-augusto-medeiros/',
  },{
    title: 'Github',
    icon: GitHubIcon,
    content: 'pedroaugmedeiros',
    link: 'https://github.com/pedroaugmedeiros',
  }]

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-center text-[200%] font-dmsans text-titles md:text-[260%]'>Contatos</h1>
      <section className='flex gap-20 items-center m-10 mx-20 sm:flex-col sm:gap-10 md:flex-wrap md:justify-center md:mx-5'>
        {contacts.map((contact) => 
                // <div className='flex flex-col items-center justify-center md:w-[200%]'>
                <div className='flex flex-col items-center justify-center md:w-[42%]'>
                <a className='md:w-[60%]' href={contact.link} target='blank'><div className='rounded-full bg-[#212121] mb-3'><img className='p-3  md:w-[100%] md:p-8' src={contact.icon} alt={contact.icon}/></div></a>
                <h2 className='text-[#F9F9F9]  line-resume font-dmsans md:text-3xl'>{contact.title}</h2>
                <h3 className='text-[#828282] line-resume font-dmsans md:text-xl'>{contact.content}</h3>
              </div>)}

      </section>
    </div>
  )
}
