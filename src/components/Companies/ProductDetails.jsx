import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const {user}=useContext(AuthContext)
    console.log(user.uid)
    const loadedcar=useLoaderData()
    const {name,brand,price,photo,description,type,rating}=loadedcar;
    //console.log(user.email)
    console.log(loadedcar)
    const handleCart=()=>{
        const cartCard={
           uid:user.uid, email:user.email, name:name,brand:brand,price:price,type:type,rating:rating,photo:photo

        }

        fetch(`http://localhost:5000/users`,{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartCard)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data){
                toast("Successfully added to the cart");

            }

        })
    }
    return (
        <div>
            <img src={photo} className=" w-full" alt="" />
            <div className="relative -top-14 bg-slate-600 bg-opacity-60">
<button onClick={handleCart} className=" btn btn-error opacity-100">Add to Cart</button>

</div>
           <div className="h-36 mb-6">
           <h2 className="text-3xl text-orange-400">brand name: {name}</h2>
            <p>Description :{description}</p>
           </div>


        </div>
    );
};

export default ProductDetails;