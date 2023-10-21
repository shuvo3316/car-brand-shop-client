import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
//import React from 'react'
import ReactPlayer from 'react-player/youtube'



const Home = () => {

  
    return (
       <div className=""> 
        {/* //banner */}

        <div className="hero min-h-screen  rounded" style={{backgroundImage: 'url(https://i.ibb.co/x7cx7sP/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 text-2xl"> New Here? register now and get <span className="text-orange-400">5% OFF</span> on Any Product</p>
      <button className="btn btn-error">Register Now</button>
    </div>
  </div>
</div>



{/* video  */}

<div className="justify-center my-5">
    <h2 className="text-4xl text-center text-orange-400">New Arrival</h2>

<div className="md:ml-80">
<ReactPlayer
          className='react-player justify-center'
          url='https://www.youtube.com/watch?v=sitXeGjm4Mc'
         // width='100%'
          //height='100%'
        />
</div>
</div>



<div  className=" grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
           

   
   
      <Link to={"/audi"}>
      <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/0nTMWNV/audilogo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">AUDI</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
      </Link>
   
   
    <Link to={"/tata"}>
    <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/25LNg9G/tatalogo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">TATA</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
    </Link>
   
   
     <Link to={"/lamborghini"}>
     <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/CwLY45B/lamborghinilogo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">Lamborghini</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
   
     </Link>
     <Link to={"/mercedes"}>
     <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/wd28nph/mercedece-logo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">Mercedes</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
   
     </Link>




     <Link to={"/jaguar"}>
     <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/CzrRJrL/jaguar.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">Mercedes</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
   
     </Link>
   
           </div>



           <section>

        
           </section>
       </div>
       
    );
};

export default Home;