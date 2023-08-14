import React from 'react';
import HotelCard from "../HotelCard/HotelCard"
import { useLoaderData } from 'react-router-dom';
import './Hotels.css'




const Hotels = () => {
    const hotels=useLoaderData();
   
    return (
        <div className="hero w-full ">
        <div className="hero-content flex flex-col lg:flex-row ">
  
          <div className='flex flex-col justify-center items-center '>
            {
                hotels.map(hotel=><HotelCard
                key={hotel.id}
                hotel={hotel}
                ></HotelCard>)
            }
          </div>
   
          <img src='https://images.pexels.com/photos/17061344/pexels-photo-17061344/free-photo-of-aerial-view-of-resorts-on-the-coast-in-cancun-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='mx-5 rounded-md shadow-xl'></img>
        
          
          
        <div>
              
        </div>
        </div>
      </div>
    );
};

export default Hotels;