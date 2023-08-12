import React from "react";
import { FaStar,FaBed } from 'react-icons/fa';

const HotelCard = ({hotel}) => {
  console.log(hotel)
  const {img,desc,name,ratings,cost}=hotel;
  return (
    <div className="flex flex-col lg:flex-row  w-3/5  bg-base-100 shadow-xl rounded-lg my-5">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="HotelPhoto"
          className="rounded-xl p-0 mb-5 "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <div className="card-actions flex flex-col items-center justify-between sm:justify-center ">
         <div className="lg:mx-2 flex flex-row items-center ">
         <p className="mx-1 flex items-center"><FaStar className="mx-1 items-center"/>{ratings}</p>
          <p className="mx-1 flex items-center"><FaBed className="mx-1 items-center"/>{cost}</p>
         </div>
          <button className="btn btn-primary rounded-sm sm:mt-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
