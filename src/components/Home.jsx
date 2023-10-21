import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
//import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Carousel } from "react-carousel-minimal";
import { FaCommentDots, FaHandshake, FaPeopleCarry, FaPlaceOfWorship, FaRegLightbulb } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { GiCrimeSceneTape, GiPartyHat } from "react-icons/gi";



const Home = () => {
    const data = [
        {
          image: "https://i.ibb.co/x6tzr67/bmwlogo.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.ibb.co/0nTMWNV/audilogo.jpg",
          caption: "Scotland"
        },
        {
          image: "https://i.ibb.co/CwLY45B/lamborghinilogo.jpg",
          caption: "Mercedes-Benz S-Class"
        },
        {
          image: "https://i.ibb.co/wd28nph/mercedece-logo.jpg",
          caption: "mercedes-benz G class"
        },
        {
          image: "https://i.ibb.co/wd28nph/mercedece-logo.jpg",
          caption: "mercedes-benz G class"
        },
        {
          image: "https://i.ibb.co/CzrRJrL/jaguar.jpg",
          caption: "mercedes-benz G class"
        },
       
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

  
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

<div className="justify-center w-72 md:w-full my-5">
    <h2 className="text-4xl text-center text-orange-400">New Arrival</h2>

<div className="   md:ml-80">
<ReactPlayer
          className=' react-player  justify-center'
          url='https://www.youtube.com/watch?v=sitXeGjm4Mc'
         // width='100%'
          //height='100%'
        />
</div>
</div>


<section className="my-20">
<div className="App m-10">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    
    </section>



<div  className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-52 mb-5 mx-auto">
           

           <Link to={"/bmw"}>
           <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/x6tzr67/bmwlogo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">BMW</h2>
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
           
           
           </Link>
   
   
      <Link to={"/audi"}>
      <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/0nTMWNV/audilogo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">AUDI</h2>
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
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
   
     </Link>
     <Link to={"/mercedes"}>
     <div className="card w-96 bg-teal-500 shadow-xl">
     <figure><img src="https://i.ibb.co/wd28nph/mercedece-logo.jpg" className="h-72 w-full" alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">Jaguar</h2>
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
       <div className="card-actions justify-end">
       </div>
     </div>
   </div>
   
     </Link>
   
           </div>


           <section className="bg-slate-200 p-4 my-5">

<div className="flex justify-between border">
    <div className=" border-red-300">
        <p className="text-2xl">why choose us</p>
        <h2 className="text-4xl">Our  Advantages</h2>
    </div>
    <button className="btn btn-error">Meet the team</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4  mt-6">
<div data-aos="fade-up-right" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><FaPeopleCarry></FaPeopleCarry> </p>

<h2 className="font-bold text-center text-2xl">Best Management</h2>
<p className="text-center">Anytime Anywhere</p>
      </div>
    </div>
<div data-aos="fade-up-right" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><FaWineGlassAlt></FaWineGlassAlt>  </p>

<h2 className="font-bold text-center text-2xl">Unique Design</h2>
<p className="text-center">We Think Out Of The Box</p>
      </div>
    </div>
<div data-aos="fade-up-left" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><FaPlaceOfWorship></FaPlaceOfWorship> </p>

<h2 className="font-bold  text-center text-2xl">Perfect Memory</h2>
<p className="text-center">perfect Memory</p>
      </div>
    </div>
<div data-aos="fade-up-left" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><CgPhone></CgPhone> </p>

<h2 className="font-bold text-2xl">24/7 hours Support</h2>
<p className="text-center">Anytime Anywhere</p>
      </div>
    </div>
<div data-aos="fade-up-right" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><GiPartyHat></GiPartyHat> </p>

<h2 className="text-center font-bold text-2xl">Unforgetable  driving Experience</h2>
<p className="text-center">Unique  driving Experience</p>
      </div>
    </div>
<div data-aos="fade-up-right" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><FaRegLightbulb></FaRegLightbulb> </p>

<h2 className="text-center font-bold text-2xl">Elegent Selection</h2>
<p className="text-center">We Think Out of The Box</p>
      </div>
    </div>
<div data-aos="fade-up-left" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-24 "><GiCrimeSceneTape></GiCrimeSceneTape> </p>

<h2 className=" text-center font-bold text-2xl">Unique Models</h2>
<p className="text-center">Natural View perfect venue</p>
      </div>
    </div>
<div data-aos="fade-up-left" className="border hover:bg-orange-400 h-60 "> 
      <div className="justify-center mt-10">
      <p className="text-6xl ml-32 "><FaHandshake ></FaHandshake></p>

<h2 className="text-center font-bold text-center text-2xl">Friendly Team</h2>
<p className="text-center">More Than 250 Teams</p>
      </div>
    </div>
   
</div>
</section>
       </div>
       
    );
};

export default Home;