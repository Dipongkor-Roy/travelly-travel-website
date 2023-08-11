import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DateSelection = () => {
    const [date,setDate]=useState();
    
    return (
        <div className="hero my-5 lg:min-h-screen">
        <div className="hero-content mt-5 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Book Now ✈️</h1>
            <p className="py-6">Embark on unforgettable journeys with our travel website. Discover new horizons, create lasting memories, and explore the world's wonders with ease. Your next adventure starts here.</p>
          </div>
          <div className="card flex w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Origin</span>
                </label>
                <input type="text" placeholder="Origin" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Destination</span>
                </label>
                <input type="text" placeholder="Destination" className="input input-bordered" />
                
              </div>
              <div className='flex justify-items-center'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <input type="date" onChange={e=>setDate(e.target.value)} placeholder="From" className="input input-bordered w-11/12" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">To</span>
                </label>
                <input type="date" placeholder="To" onChange={e=>setDate(e.target.value)} className="input input-bordered w-11/12" />
                
              </div>
              </div>
              <div className="form-control mt-6">
                <Link><button className="btn w-full text-white rounded bg-cyan-600 hover:bg-cyan-700">Start Booking</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DateSelection;