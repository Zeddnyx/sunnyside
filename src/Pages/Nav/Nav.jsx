import { useState } from 'react'
import Hamburger from '../../assets/images/icon-hamburger.svg'
import Logo from '../../assets/images/logo.svg'

export default function Nav() {

  const [menu, setMenu] = useState(false)

  return <nav className={nav}>
    <div>
      <img src={Logo} alt="Sunnyside" />
    </div>

    <div>
      <button onClick={() => setMenu(!menu)} className={btnMenu}><img src={Hamburger} alt="Hamburger" /></button>
    </div>

    <ul className={!menu ? `hidden` : `${ul}`}>
      <li className={li}>About</li>
      <li className={li}>Services</li>
      <li className={li}>Project</li>
      <li className={li}>Contact</li>
    </ul>

    <ul className='hidden md:flex gap-5'>
      <li className={li}>About</li>
      <li className={li}>Services</li>
      <li className={li}>Project</li>
      <li className={li}>Contact</li>
    </ul>
  </nav>
}

const nav = 'z-50 fixed top-0 left-0 bg-[#3EBFFF] flex w-full justify-between px-5 py-5 items-center'
const btnMenu = 'outline-none md:hidden'

const ul = 'md:hidden fixed flex flex-col absolute top-24 inset-x-0 w-96 mx-auto bg-white py-3 items-center text-center'
const mdLi = 'md:text-white md:hover:bg-white md:hover:text-DarkGrayBlue'
const li = `text-center text-DarkGrayBlue hover:VeryDarkBlue hover:bg-Yellow rounded-full w-[100px] p-2 px-4 my-3 ${mdLi}`
