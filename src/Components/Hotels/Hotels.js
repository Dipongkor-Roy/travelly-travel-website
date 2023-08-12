import React from 'react';
import HotelCard from "../HotelCard/HotelCard"
import { useLoaderData } from 'react-router-dom';
import './Hotels.css'




const Hotels = () => {
    const hotels=useLoaderData();
    console.log(hotels)
    return (
        <div className=" ">
        <div className="flex flex-row sm:flex-wrap">
        
          <div className='flex flex-col justify-center items-center h-full'>
            {
                hotels.map(hotel=><HotelCard
                key={hotel.id}
                hotel={hotel}
                ></HotelCard>)
            }
          </div>
        
          
        <div>
              
        </div>
        </div>
      </div>
    );
};

export default Hotels;