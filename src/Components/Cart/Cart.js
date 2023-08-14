import React from 'react';
import SingleHotelCard from '../SingleHotelCard/SingleHotelCard'
import CartForm from '../Cart/CartForm/CartForm'
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const detailsHotel=useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="flex flex-col sm:flex-row ">
             <SingleHotelCard key={detailsHotel.id} detailsHotel={detailsHotel}></SingleHotelCard>
          <div className=' w-full h-full'>
            <CartForm key={detailsHotel.id} detailsHotel={detailsHotel}></CartForm>
          </div>
        </div>
      </div>
    );
};

export default Cart;