import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MycartCard = ({car,setcars,cars}) => {
    const{user}=useContext(AuthContext)
    const {_id,name,brand,photo,type,price,description,rating}=car;

    const handleDelete=()=>{
        fetch(`http://localhost:5000/users/${user.uid}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.deletedCount)
            if(data.deletedCount>0){
                console.log('successfully deleted')
                const remaining=cars.filter(car=>car._id!==_id)
              setcars(remaining)
            }
        })
    }
    return (
        <div  className="card card-compact w-80  md:w-96 bg-purple-800 mb-5 shadow-xl">
  <figure><img src={photo} alt="Shoes" className="h-72 w-full" /></figure>
  <div className="card-body text-center text-white">
    <h2 className="card-title mx-auto ">{name}</h2>
    <p>brand :{brand}</p>
    <p>price :{price} $</p>
    <p>rating :{rating}</p>
    
    <div className="card-actions justify-center">
      <button onClick={handleDelete} className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
    );
};

export default MycartCard;