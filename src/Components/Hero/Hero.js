import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='py-5'>
          <div class="my-4 mx-0 text-center md:text-6xl text-5xl ">Things to do in Bangladesh</div>
      <div className='hero mt-5'>
      <div  className='hero-content flex-col lg:flex-row m-3 flex justify-items-center '>
            <div className='image-right'>
             <img className='h-full w-full object-cover md:2/3 sm:h-1/3 object-fit max-w-sm shadow-2xl' src="https://images.pexels.com/photos/14425602/pexels-photo-14425602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='mx-5'>
                <p className='my-4 text-sm font-thin'>The Capital of Bangladesh tradional places with high-rises amid <br></br> a cuting-edge fashion and design secnce</p>
                <div className='my-5 lg:flex-row md:flex sm:flex-col justify-items-center '>
                    <img className='shadow-2xl lg:m-4 mb-3 rounded' src="https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <img className=' lg:mx-4  sm:my-4  shadow-2xl rounded' src="https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </div>
                <Link to="/book" className="link text-3xl italic text-cyan-600">Book A Tour ➡️</Link>
            </div>
          </div>
      </div>
        </div>
    );
};

export default Hero;