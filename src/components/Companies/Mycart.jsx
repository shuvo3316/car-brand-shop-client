import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MycartCard from "./MycartCard";

const Mycart = () => {
    const{user,loading}=useContext(AuthContext)
    
    const loadedcars=useLoaderData()
    const [cars,setcars]=useState(loadedcars)
    if(loading){
        return <div>
            <span className="loading loading-spinner loading-lg text-center"></span>

        </div>
    }
    return (
        <div>
            
            <h2> hello from cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                cars.map(car=> <MycartCard key={car._id} 
                    cars={cars}
                    setcars={setcars}
                    car={car}></MycartCard>)
            }
            </div>
        </div>
    );
};

export default Mycart;