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
    content: '(31) 99226-2115',
    link: 'https://wa.me/5531992262115',
  },
  {
    title: 'Linkedin',
    icon: LinkedinIcon,
    content: 'pedroaugmed',
    link: 'https://www.linkedin.com/in/pedroaugmed/',
  },{
    title: 'Github',
    icon: GitHubIcon,
    content: 'pedroaugmedeiros',
    link: 'https://github.com/pedroaugmedeiros',
  }]

  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-center text-3xl font-dmsans text-titles'>Contatos</h1>
      <section className='flex gap-20 items-center m-10 mx-20'>
        {contacts.map((contact) => 
                <div className='flex flex-col items-center justify-center'>
                <a href={contact.link} target='blank'><div className='rounded-full bg-[#212121] mb-3'><img className='p-3' src={contact.icon} alt={contact.icon}/></div></a>
                <h2 className='text-[#F9F9F9]  line-resume font-dmsans'>{contact.title}</h2>
                <h3 className='text-[#828282] line-resume font-dmsans'>{contact.content}</h3>
              </div>)}

      </section>
    </div>
  )
}
