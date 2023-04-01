import React from 'react'
import MyPhoto from '../images/MyPhoto.png'

export default function Contacts() {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-center'>Contatos</h1>
      <section className='flex gap-5 items-center m-10 mx-20'>
        <div className='flex flex-col items-center'>
<img className='w-[40%]' src={MyPhoto}></img>
          <h2>Email</h2>
          <h3>rhuanbello@gmail.com</h3>
        </div>
        <div className='flex flex-col items-center'>
<img className='w-[40%]' src={MyPhoto}></img>
          <h2>Email</h2>
          <h3>rhuanbello@gmail.com</h3>
        </div>
        <div className='flex flex-col items-center'>
<img className='w-[40%]' src={MyPhoto}></img>
          <h2>Email</h2>
          <h3>rhuanbello@gmail.com</h3>
        </div>
        <div className='flex flex-col items-center'>
<img className='w-[40%]' src={MyPhoto}></img>
          <h2>Email</h2>
          <h3>rhuanbello@gmail.com</h3>
        </div>
      </section>
    </div>
  )
}
