import React from 'react'
import image1 from '../assets/images/image-1.webp';
import image2 from '../assets/images/image-2.webp';
import image3 from '../assets/images/image-3.webp';
import image4 from '../assets/images/image-4.webp';
import image5 from '../assets/images/image-5.webp';
import image6 from '../assets/images/image-6.webp';
import image7 from '../assets/images/image-7.webp';
import image8 from '../assets/images/image-8.webp';
import image9 from '../assets/images/image-9.webp';
import image10 from '../assets/images/image-10.jpeg';
import image11 from '../assets/images/image-11.jpeg';


const Images = () => {

const handleClick = () =>{
  console.log('done');
}

  return (
    <div>
        <div className='border p-6 grid grid-col'>

            <div>
                <h2 className='font-bold text-2xl'>Gallery</h2>
                <button onClick={handleClick}>Click</button>
            </div>
           <div className='grid grid-cols-5 border gap-5'>
              <img src={image1} className='row-span-2 col-span-2 hover:' alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" />
              <img src={image8} alt="" />
              <img src={image9} alt="" />
              <img src={image10} alt="" />
              <img src={image11} alt="" />
           </div>
           <div>
            <button>Click Here</button>
            <p>Details</p>
           </div>
        </div>
    </div>
  )
}

export default Images