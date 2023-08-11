import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <div className="navbar bg-base-100 nav m-0 ">
        <div className="flex-1 mr-10">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Travelly</Link>
        </div>
        <div className="flex-none">
          <ul tabIndex={0} className="menu menu-horizontal px-1 pborder hidden lg:flex">
             <li><Link to='/book'>Destination</Link></li>
             <li><Link>About Us</Link></li>
             <li><Link>Contact Us</Link></li>
          </ul>
        </div>
        <div >
          <Link to='/signUp' className="btn btn-ghost normal-case  text-cyan-600">Sign Up</Link>
          </div>
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"  onClick={()=>window.my_modal_1.showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" ">
      <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box text-center">
      <li className="hover:bg-cyan-600 hover:text-white  my-1"><Link className="p-2" to='/book'>Destination</Link></li>
             <li className="hover:bg-cyan-600 hover:text-white  my-1 "><Link className=" p-2">About Us</Link></li>
             <li className="hover:bg-cyan-600 hover:text-white  my-1"><Link className="p-2">Contact Us</Link></li>
             <div className="modal-action">
      <button className="btn hover:bg-cyan-600 hover:text-white  ">Close</button>
    </div>
  </form>
             </dialog>
      </ul>
      </div>
      </div>

        </>

    );
};

export default Header;