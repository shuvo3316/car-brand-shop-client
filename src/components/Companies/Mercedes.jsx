import { useLoaderData } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';

import Card from "../Card";

const Mercedes = () => {
    const loadedCars=useLoaderData();
    const data = [
        {
          image: "https://i.ibb.co/tXFHc0H/Mercedes1.webp",
          caption: "5% OFF on this"
        },
        {
          image: "https://i.ibb.co/93KF6YW/Mercedes2.webp",
          caption: "15% OFF on this"
        },
        {
          image: "https://i.ibb.co/tBjY9MR/Mercedes.webp",
          caption: "5% OFF on this"
        },
        {
          image: "https://i.ibb.co/tC9vm8x/mercedes4.jpg",
          caption: "45% OFF on this"
        },
       
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        color:"red"
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (

      <div className="dark:bg-slate-800 ">

<section className="mb-28">
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


<div className="grid grid-cols-1  md:grid-cols-3 w-11/12  mx-auto">
            {
                loadedCars.map(car=> <Card key={car._id  }
                car={car}
                
                ></Card>)

            }
        </div>
      </div>
    );
};

export default Mercedes;