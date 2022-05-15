import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sherwani1 from "../../Img/Carousel-Image/sherwani1.jpg";
import sherwani2 from "../../Img/Carousel-Image/sherwani2.jpg";
import sherwani3 from "../../Img/Carousel-Image/sherwani3.jpg";
import sherwani4 from "../../Img/Carousel-Image/sherwani4.jpg";
import sherwani5 from "../../Img/Carousel-Image/sherwani5.jpg";
import sherwani6 from "../../Img/Carousel-Image/sherwani6.jpg";
import sherwani7 from "../../Img/Carousel-Image/sherwani7.jpg";
import sherwani8 from "../../Img/Carousel-Image/sherwani8.jpg";
import sherwani9 from "../../Img/Carousel-Image/sherwani9.jpg";
import sherwani10 from "../../Img/Carousel-Image/sherwani10.jpg";
import sherwani11 from "../../Img/Carousel-Image/sherwani11.jpg";
import sherwani12 from "../../Img/Carousel-Image/sherwani12.jpg";
import Line from "../../Img/Material/line.png";
import { Container } from "react-bootstrap";
const LatestArrivals = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 33,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div style={{ marginTop: "35px" }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Latest Arrivals
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom:'35px'
        }}
      >
        <img src={Line} width={350}/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container autoPlay={true} infinite={true} autoPlaySpeed={1000}>
          <Carousel responsive={responsive}>
            <div>
              <img src={sherwani1} width={250} />
            </div>
            <div>
              <img src={sherwani2} width={250} />
            </div>
            <div>
              <img src={sherwani3} width={250} />
            </div>
            <div>
              <img src={sherwani4} width={250} />
            </div>
            <div>
              <img src={sherwani5} width={250} />
            </div>
            <div>
              <img src={sherwani6} width={250} />
            </div>
            <div>
              <img src={sherwani7} width={250} />
            </div>
            <div>
              <img src={sherwani8} width={250} />
            </div>
            <div>
              <img src={sherwani9} width={250} />
            </div>
            <div>
              <img src={sherwani10} width={250} />
            </div>
            <div>
              <img src={sherwani11} width={250} />
            </div>
            <div>
              <img src={sherwani12} width={250} />
            </div>
          </Carousel>
        </Container>
      </div>
      ;
    </>
  );
};
export default LatestArrivals;
