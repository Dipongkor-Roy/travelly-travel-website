import React, { useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import { toast } from 'react-hot-toast';

const LogIn = () => {
  const {logIn}=useContext(AuthContext);
  const [error,setError]=useState("");
  const navigate = useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
    .then((result)=>{
      const user=result.user;
      form.reset();
      setError("");
     if(user){
      toast.success('Successfully Log In' );
      navigate(from,{replace:true})
     }else{
      toast.error("Somthing is wrong check your email and password");
     }
    })
    .catch(e=>{
      console.log(e)
      setError(e.message)
    })
  }
  
    return (
      <form onSubmit={handleSubmit}>
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
                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-cyan-600 hover:bg-cyan-700">Log In</button>
              </div>
              <label className="label">
              
                  <Link to='/signUp' className="label-text-alt link link-hover">New on Travelly ? Create Account</Link>
                </label>
                <p>{error}</p>
                
            </div>
          </div>
        </div>
      </div>
      </form>
    );
};

export default LogIn;