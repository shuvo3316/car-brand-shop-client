import { Link } from "react-router-dom";

const Card = ({car}) => {
    const {_id,name,brand,photo,type,price,description,rating}=car;
    return (
        <div  className="card card-compact  w-72 md:w-96 bg-purple-800 mb-5 shadow-xl">
  <figure><img src={photo} alt="Shoes" className="h-72 w-full" /></figure>
  <div className="card-body text-center text-white">
    <h2 className="card-title mx-auto ">{name}</h2>
    <p>brand :{brand}</p>
    <p>price :{price} $</p>
    <p>rating :{rating}</p>
    
    <div className="card-actions justify-between">
      <Link to={`/details/${_id}`}><button  className="btn btn-error">Details</button></Link>
        <Link to={`updateproduct/${_id}`}>      <button className="btn btn-error">Update</button></Link>
    </div>
  </div>
</div>
    );
};

export default Card;