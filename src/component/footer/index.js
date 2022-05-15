import parson from "../../Img/Parson-img/parson.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div style={{ background: "#000" }}>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <img src={parson} />
            </Col>
            <Col xs={12} md={9}>
              <p
                style={{
                  color: "rgb(225,225,225)",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                It takes a long time to understand the delicate intricacies of
                design, to a dedicated few it becomes second nature. Meraj, the
                brain behind the brand, is best known to his colleagues in the
                fashion industry for his innovative style, flair and
                comprehensive knowledge of the art of design, colors and
                fabrics. His brilliant grasp of the needs of his clients has
                made him one of the most desired designers for wedding attires
                nationally. His warm personality reflects in his spell binding
                work. If your friends haven’t told you about him, they’re just
                keeping a much treasured fashion secret.With a legacy of 3
                decades offering the extravagant Bridal wear collections in
                Lehengas, Men's wedding ensemble, Sarees, Anarkalis &
                Indo-western, his creations reflect unique designs inspired from
                the best of Indian culture. He is more into custom-made tailored
                bespoke creations and brings your ideas to life.
              </p>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "center",borderTop:'1.5px solid rgb(225,225,225)' }}>
            <p style={{ color: "rgb(225,225,225)" }}>
              Website Design by{" "}
              <span style={{ color: "#FF0000" }}>
                <a
                  href="https://www.instagram.com/jagrut_rakholiya"
                  target="_blank"
                  style={{ color: "#FF0000", textDecoration: "none" }}
                >
                  Jagrut Rakholiya
                </a>
              </span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
