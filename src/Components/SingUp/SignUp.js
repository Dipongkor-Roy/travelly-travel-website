import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const SignUp = () => {
  const {createUser,user,profileUpdate}=useContext(AuthContext);
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.Password.value;
    console.log(name,email,password)
    updatedProfile(name)
  
    createUser(email,password)
    .then((result)=>{
      const user=result.user;
      console.log(user)
      form.reset();
    })
    .catch(e=>console.log(e))
  }
  const updatedProfile=(name)=>{
    const profile={displayName:name};
    console.log(name)
    profileUpdate(profile)
    .then(()=>{})
    .catch(e=>console.log(e))
  }
  
    return (
 <form onSubmit={handleSubmit} >
         <div className="hero pt-4 lg:min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp Now</h1>
      <p className="py-6">To Explore the World and take a fresh travel experience</p>
    </div>
    <div className="card flex w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="Password" placeholder="Password" className="input input-bordered" />
       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-cyan-600 hover:bg-cyan-700">Sign Up</button>
        </div>
        <label className="label">
            <Link to='/logIn' className="label-text-alt link link-hover">Already Have Account ? Log In</Link>
          </label>
      </div>
    </div>
  </div>
</div>
 </form>
    );
};

export default SignUp;