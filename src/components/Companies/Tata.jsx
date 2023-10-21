import { useLoaderData } from "react-router-dom";
import { Carousel } from 'react-carousel-minimal';

import Card from "../Card";

const Tata = () => {
    const loadedCars=useLoaderData();

    const data = [
        {
          image: "https://i.ibb.co/tqr23gS/bmwx5.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.ibb.co/M1TS6Q2/bmw-5.jpg",
          caption: "Scotland"
        },
        {
          image: "https://i.ibb.co/Jrxys91/bmw-2.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://i.ibb.co/ZB6SjZq/bmw7.jpg",
          caption: "San Francisco"
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



<div className="grid grid-cols-1 md:grid-cols-3 w-11/12  mx-auto">
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