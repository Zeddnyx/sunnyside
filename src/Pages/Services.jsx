import Transform from '../assets/images/mobile/image-transform.jpg'
import Cup from '../assets/images/mobile/image-stand-out.jpg'

export default function Services() {
   return <div className={div}>

    <div className={div2}>
      <div>
        <img src={Transform} alt="Transform" />
      </div>

      <div className={divText}>
        <h1 className={h1}>Lorem Ipsum sit dolor</h1>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      </div>

      <div className='md:col'>
        <img src={Cup} alt="Cup" />
      </div>

      <div className={divText2}>
        <h1 className={h1}>Lorem Ipsum sit dolor</h1>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
      </div>
    </div>

   </div>
}

const div = 'relative top-[450px] md:top-0 z-30 '
const div2 = 'grid grid-cols-1 md:grid-cols-2 bg-white text-center md:text-start'

const divText = 'w-full p-20 font-serif grid gap-4 md:gap-0 md:col-start-2 h-96 md:h-80'
const divText2 = 'w-full p-20 font-serif grid gap-4 md:row-start-2 h-96 md:h-80'
const h1 = 'font-bold text-3xl'
