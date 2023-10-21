import { NavLink } from "react-router-dom";
import  { useContext, useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
import { AuthContext } from "./AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut,loading}=useContext(AuthContext)
   // console.log(user.displayName)
    if(loading){
        <span className="loading loading-bars loading-lg"></span>

    }

    const [isDarkMode, setIsDarkMode] = useState(false)


    const links=<>
    <NavLink className={"m-2 btn glass"} to={"/"}>Home</NavLink>
    <NavLink className={"m-2 btn glass"} to={"/addproduct"}>Add Product</NavLink>
    {/* <NavLink className={"m-2 btn glass"} to={`brand/updateproduct/:id`}>Update Product</NavLink> */}
{
    user&&    <NavLink className={"m-2 btn glass"} to={`/mycart/${user.uid}`}>Mycart</NavLink>

}

{
    user? <></>:    <NavLink className={"m-2 btn glass"} to={"/register"}>Register</NavLink>

}
    <NavLink className={"m-2 btn glass"} to={"/login"}>Login</NavLink>
    </>
    return (
        
        <div className="navbar bg-base-100 my-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Car HUB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
       

            {
                user?       <>   <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div> <p>{user.displayName}</p><button className="btn btn-error" onClick={logOut}>SignOut</button></>
                :
                <button className="btn btn-error">Login</button>


            }
          <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
        </div>
        
      </div>
    );
};

export default Navbar;