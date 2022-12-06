import { useState } from 'react';

import { navLinks } from '../constants';
import { logo, close, menu } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toogle, setToogle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='logo' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map(( nav, index ) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]
             ${active === nav.title ? 'text-white' : 'text-dimWhite'}
             ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}
             onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toogle ? close : menu}
            alt='menu'
            className='h-[28px] w-[28px] object-contain'
            onClick={() => setToogle((prev) => !prev)}
          />

          <div
            className= {`${toogle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
            `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col'>
              {navLinks.map(( nav, index ) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]
                  ${active === nav.title ? 'text-white' : 'text-dimWhite'}
                  ${index===navLinks.length-1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar