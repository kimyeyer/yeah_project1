import React, { useState } from 'react'

const Image_1_URL = "https://images.unsplash.com/photo-1699933486971-bcbc02b03ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Image_2_URL = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Image_3_URL = "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Carousel() {
    const [actvieImage, setActiveImage] = useState(1);
    console.log(actvieImage);
  return (
    <div>
        <div className='carousel'>
            <ul className='carousel_slides'>
                <input type='radio' name='radio-buttons' id='img-1' checked={actvieImage === 1} readOnly></input>
                <li className='carousel_slide-container'>
                    <div className='carousel_slide-img'>
                        <img alt='scenery 1' src={Image_1_URL}></img>
                    </div>
                    <div className='carousel_controls'>
                        <label onClick={()=>setActiveImage(3)} className='carousel_slide-prev'><span>&lsaquo;</span></label>
                        <label onClick={()=>setActiveImage(2)} className='carousel_slide-next'><span>&rsaquo;</span></label>
                    </div>
                </li>
                <input type='radio' name='radio-buttons' id='img-2' checked={actvieImage === 2} readOnly></input>
                <li className='carousel_slide-container'>
                    <div className='carousel_slide-img'>
                        <img alt='scenery 2' src={Image_2_URL}></img>
                    </div>
                    <div className='carousel_controls'>
                        <label onClick={()=>setActiveImage(1)} className='carousel_slide-prev'><span>&lsaquo;</span></label>
                        <label onClick={()=>setActiveImage(3)} className='carousel_slide-next'><span>&rsaquo;</span></label>
                    </div>
                </li>
                <input type='radio' name='radio-buttons' id='img-3' checked={actvieImage === 3} readOnly></input>
                <li className='carousel_slide-container'>
                    <div className='carousel_slide-img'>
                        <img alt='scenery 3' src={Image_3_URL}></img>
                    </div>
                    <div className='carousel_controls'>
                        <label onClick={()=>setActiveImage(2)} className='carousel_slide-prev'><span>&lsaquo;</span></label>
                        <label onClick={()=>setActiveImage(1)} className='carousel_slide-next'><span>&rsaquo;</span></label>
                    </div>
                </li> 
                <div className='carousel_dots'>
                    <label onClick={()=>setActiveImage(1)} className='carousel_dot' id="img-dot-1"></label>
                    <label onClick={()=>setActiveImage(2)} className='carousel_dot' id="img-dot-2"></label>
                    <label onClick={()=>setActiveImage(3)} className='carousel_dot' id="img-dot-3"></label>
                </div>
            </ul>
        </div>
    </div>
  )
}
