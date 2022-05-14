import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Container } from "react-bootstrap";
import Clothe1 from "../../Img/Wedding-Clothes-Card-Img/Clothe1.jpg";
import Clothe2 from "../../Img/Wedding-Clothes-Card-Img/Clothe2.jpg";
import Clothe3 from "../../Img/Wedding-Clothes-Card-Img/Clothe3.jpg";
import Line from "../../Img/Material/line.png"
const WeddingCostumCard = () => {
  const { Meta } = Card;
  return (
    <>
      <div>
          <h2 style={{fontWeight:'bold',textAlignL:'center',display:'flex',justifyContent: 'center',margin:'35px 0 5px 0'}}>Get a new Wedding Clothes</h2>
          <h4 style={{color:'#797B7E',textAlignL:'center',display:'flex',justifyContent: 'center',margin:'5px 0 10      px 0',fontSize: '16px',lineHeight: '1.5',textAlign:'center'}}>You’ll always be in fashion with our collection of clothing</h4>
      </div>
     <div style={{fontWeight:'bold',textAlignL:'center',display:'flex',justifyContent: 'center',margin:'35px 0 35px 0',width:'100%'}}>
         <img src={Line}/>
     </div>
     <div>
         <Container>
         <h2 style={{color:'#797B7E',textAlignL:'center',display:'flex',justifyContent: 'center',margin:'5px 0 35px 0',fontSize: '16px',lineHeight: '1.5',textAlign:'center'}}>
         Specialist in manufacturing ethnic Indian dresses with a contemporary style, SENSO Ethnic has carved a niche for itself in the industry. SENSO was started under the leadership of Shri. Mehul Shah, Since the company has successfully Completed 9 years itself as a leading manufacturer, wholeseller ,exporter, supplier and trader of a premium range of garments . Besides our popularity in Indian markets, we have also achieved huge appreciation in the overseas markets .
         </h2>
         </Container>
     </div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}  style={{display:'flex',justifyContent: 'center'}}>
            <Card
              hoverable
              style={{ width: 330 }}
              cover={<img alt="example" src={Clothe1} />}
            >
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} style={{display:'flex',justifyContent: 'center'}}>
            <Card
              hoverable
              style={{ width: 330 }}
              cover={<img alt="example" src={Clothe2} />}
            >
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} style={{display:'flex',justifyContent: 'center'}}>
            <Card
              hoverable
              style={{ width: 330 }}
              cover={<img alt="example" src={Clothe3} />}
            >
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default WeddingCostumCard;
