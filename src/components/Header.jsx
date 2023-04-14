import React, { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
    <section className='flex gap-5 justify-around py-4'>
        <h1 className='font-dmsans text-2xl
 font-medium  text-titles md:text-[260%] md:p-4'>
        Portifólio
        </h1>
    </section>
    <div className='borderGradient'></div>
    </div>
  )
}
