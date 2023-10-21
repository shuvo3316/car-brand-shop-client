import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";

const Errorpage = () => {
    return (
        <div className="">
        <Navbar></Navbar>
       <div className="justify-center">
       <h2 className="text-6xl my-20 text-center">error 404</h2>
   <div className="justify-center text-center">
   <NavLink to={"/"}> <button className="btn btn-error text-center items-center"> go to Home</button>
</NavLink>  
   </div>
        </div>          
    </div>
    );
};

export default Errorpage;