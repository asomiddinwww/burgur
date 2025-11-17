import React from 'react'
import { Linkss } from '../../card_api'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='w-full flex items-center justify-center gap-3 bg-[#13382b] text-white pb-10.5'>
      <div>
        <h1 className='font-lexend text-center text-4xl font-bold pb-10 pt-[25px]'>MENU</h1>
        <div className='grid grid-cols-4 gap-5 max-[851px]:grid-cols-3 max-[671px]:grid-cols-2 max-[452px]:grid-cols-1'>
          {Linkss.map((value) => (
            <Link to='/shop' key={value.id} className='w-[200px] flex flex-col items-center justify-between text-center bg-[#ffffff22] p-3 rounded-2xl hover:scale-105 cursor-pointer transition-all active:scale-103'>
              <img className='w-[150px]' src={value.img} alt="" />
              <p className='font-lexend text-[12px] pb-1'>{value.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu