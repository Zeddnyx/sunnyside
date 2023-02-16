import Orange from '../assets/images/mobile/image-header.jpg'
import Arrow from '../assets/images/icon-arrow-down.svg'

export default function About() {

  return <div className={div}>
  <div clasName={div2}>
    <h1 className={h1}>WE ARE CREATIVES</h1>

    <div className={divArrow}>
      <img src={Arrow} alt="Arrow" />
    </div>
    
    <div className={divImg}>
      <img src={Orange} alt="orange" />
    </div>
  </div>
  </div>
}

const div = 'full bg-[#3EBFFF] h-80 sm:h-[100px] md:h-[700px]'

const div2 = 'w-full relative'
const h1 = ' font-bold text-4xl font-serif inset-x-0 text-center z-20'

const divArrow = 'w-5 h-5 z-20 my-5'
const divImg = 'z-10 h-20 w-full inset-x-0 mx-auto md:max-w-xl'
