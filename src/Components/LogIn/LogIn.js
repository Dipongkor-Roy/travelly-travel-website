import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="hero pt-4 lg:min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">LogIn Now</h1>
            <p className="py-6">To Explore the World and take a fresh travel experience</p>
          </div>
          <div className="card flex w-full shadow-2xl bg-base-100">
            <div className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-cyan-600 hover:bg-cyan-700">Log In</button>
              </div>
              <label className="label">
                  <Link to='/signUp' className="label-text-alt link link-hover">New on Travelly ?</Link>
                </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;