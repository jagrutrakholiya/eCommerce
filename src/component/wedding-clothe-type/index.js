import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import TypeOne from "../../Img/Wedding-Clothe-Type/product1.jpg";
import TypeTwo from "../../Img/Wedding-Clothe-Type/product2.jpg";
import TypeThree from "../../Img/Wedding-Clothe-Type/product-big.jpg";
import TypeFoure from "../../Img/Wedding-Clothe-Type/product3.jpg";
import TypeFive from "../../Img/Wedding-Clothe-Type/product4.jpg";
import Line from "../../Img/Material/line.png";
const WeddingClotheType = () => {
  return (
    <>
      <Container>
        <div>
          <h2
            style={{
              textAlignL: "center",
              display: "flex",
              justifyContent: "center",
              margin: "35px 0 5px 0",
            }}
          >
            All Type Wedding Dresses
          </h2>
        </div>
        <div
          style={{
            textAlignL: "center",
            display: "flex",
            justifyContent: "center",
            margin: "35px 0 35px 0",
            width:'100%'
          }}
        >
          <img src={Line} />
        </div>
        <Row>
          <Col xs={12} md={3} lg={3} style={{ marginTop: "20px" }}>
            <Row>
              <Col xs={12} style={{ cursor: "pointer", position: "relative" }}>
                <img src={TypeOne} width={"100%"} />
                <div
                  style={{
                    color: "#000",
                    background: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    padding: "20px",
                    left: "25px",
                  }}
                >
                  Kurta Sets
                </div>
              </Col>
              <Col
                xs={12}
                style={{
                  marginTop: "15px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img src={TypeTwo} width={"100%"} />
                <div
                  style={{
                    color: "#000",
                    background: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    padding: "20px",
                    left: "25px",
                  }}
                >
                  Kurta Sets
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6} style={{ marginTop: "20px" }}>
            <Row>
              <Col style={{ cursor: "pointer", position: "relative" }}>
                <img src={TypeThree} width={"100% "} />
                <div
                  style={{
                    color: "#000",
                    background: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    padding: "20px",
                    left: "25px",
                  }}
                >
                  Kurta Sets
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} lg={3} style={{ marginTop: "20px" }}>
            <Row>
              <Col
                xs={12}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  position: "relative",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  <div>
                    <img src={TypeFoure} width={"100% "} />
                    <div
                      style={{
                        color: "#000",
                        background: "#fff",
                        position: "absolute",
                        bottom: "10px",
                        padding: "20px",
                        left: "25px",
                      }}
                    >
                      Kurta Sets
                    </div>
                  </div>
                </a>
              </Col>
              <Col
                xs={12}
                style={{
                  marginTop: "15px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <img src={TypeFive} width={"100% "} />
                <div
                  style={{
                    color: "#000",
                    background: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    padding: "20px",
                    left: "25px",
                  }}
                >
                  Kurta Sets
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default WeddingClotheType;
