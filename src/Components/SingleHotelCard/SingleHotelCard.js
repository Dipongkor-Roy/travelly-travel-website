import React from "react";

const SingleHotelCard = ({ detailsHotel }) => {
  const { img, desc, cost, name } = detailsHotel;
  return (
    <div className="card mt-2 w-full bg-base-200 shadow-xl">
      <div className="flex items-center justify-between px-4 m-3">
        <p className="text-2xl">{name}</p>
        <p className="text-2xl">{cost}</p>
      </div>
      <figure className="px-10 pt-10">
        <img src={img} alt="img" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>{desc}</p>
        <div className="alert my-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Selected Package Room : {cost}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelCard;
