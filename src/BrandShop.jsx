import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';



const BrandShop = () => {

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
            <Outlet></Outlet>
            </div>
          
            <Footer></Footer>
            <ToastContainer />
          
        </div>
    );
};

export default BrandShop;