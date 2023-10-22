import { useLoaderData } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';

import Card from "../Card";

const Tata = () => {
    const loadedCars=useLoaderData();

    const data = [
        {
          image: "https://i.ibb.co/dgJMXZL/nano.jpg",
          caption: "25% OFF on this"
        },
        {
          image: "https://i.ibb.co/YcWhZg6/safari.jpg",
          caption: "15% OFF on this"
        },
        {
          image: "https://i.ibb.co/1XDwKSf/tata-harriar.webp",
          caption: "5% OFF on this"
        },
        {
          image: "https://i.ibb.co/10RTRZd/tatatiago.webp",
          caption: "35% OFF on this"
        },
       
      ];
    
      const captionStyle = {
        fontSize: '4em',
        fontWeight: 'bold',
        color:"red"
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
      <div>
        <section className="mb-20">
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



<div className="grid grid-cols-1 md:grid-cols-3 mt-40 w-11/12  mx-auto">
            {
                loadedCars.map(car=> <Card key={car._id  }
                car={car}
                
                ></Card>)

            }
        </div>
      </div>
    );
};

export default Tata;