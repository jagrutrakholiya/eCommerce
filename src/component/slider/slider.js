import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Product1 from "../../Img/Product/Product1.jpg";
import Product2 from "../../Img/Product/Product2.jpg";
import Product3 from "../../Img/Product/Product3.jpg";
import Product4 from "../../Img/Product/Product4.jpg";
const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-70"
            src={Product1}
            alt="First slide"
            width={"100%"}
          />
          <Carousel.Caption>
            <h3 style={{ color: "#fff " }}>AMAZING PRODUCT!</h3>
            <p style={{ color: "#fff", fontWeight: "bold" }}>
              WEDDING SHERWANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-80"
            src={Product2}
            alt="Second slide"
            width={"100%"}
          />
          <Carousel.Caption>
            <h3 style={{ color: "#fff " }}>AMAZING PRODUCT!</h3>
            <p style={{ color: "#fff", fontWeight: "bold" }}>
              WEDDING SHERWANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={Product3}
            alt="Third slide"
            width={"100%"}
          />
          <Carousel.Caption>
            <h3 style={{ color: "#fff " }}>AMAZING PRODUCT!</h3>
            <p style={{ color: "#fff", fontWeight: "bold" }}>
              WEDDING SHERWANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={Product4}
            alt="Third slide"
            width={"100%"}
          />
          <Carousel.Caption>
            <h3 style={{ color: "#fff " }}>AMAZING PRODUCT!</h3>
            <p style={{ color: "#fff", fontWeight: "bold" }}>
              WEDDING SHERWANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Slider;
