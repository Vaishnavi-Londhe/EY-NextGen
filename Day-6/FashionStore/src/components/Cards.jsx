import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardGridComponent = () => {
  const cards = [
    {
      title: "ASOS DESIGN",
      text: "Trendy outfit for every occasion.",
      img: "https://assets.ajio.com/medias/sys_master/root/20240822/ZNW9/66c7383c6f60443f311fc7bf/-473Wx593H-469631511-dustypink-MODEL.jpg",
    },
    {
      title: "Ethnic Design",
      text: "Perfect ethnic wear for festivals.",
      img: "https://assets.ajio.com/medias/sys_master/root/20250110/MjKQ/6781183f0431850e0d91b836/-473Wx593H-700787207-purple-MODEL.jpg",
    },
    {
      title: "YOUSTA",
      text: "Affordable and stylish fashion.",
      img: "https://assets.ajio.com/medias/sys_master/root/20241205/YnLM/6751a0d00f47f80c87dad71d/-473Wx593H-442692496-olive-MODEL.jpg",
    },
    {
      title: "Traditional Saree",
      text: "Elegant sarees for special occasions.",
      img: "https://assets.ajio.com/medias/sys_master/root/20241209/cPqk/6756ba450f47f80c87e4d271/-473Wx593H-700894231-maroon-MODEL.jpg",
    },
    {
      title: "Western Wear",
      text: "Casual and comfortable outfits.",
      img: "https://assets.ajio.com/medias/sys_master/root/20241219/Ju66/6763ddb0c148fa1b304af325/-473Wx593H-700941887-beige-MODEL.jpg",
    },
    {
      title: "Co-Ord Sets",
      text: "Casual and comfortable outfits.",
      img: "https://assets.ajio.com/medias/sys_master/root/20241020/aGXL/6714df60260f9c41e8898421/-473Wx593H-700613627-rust-MODEL4.jpg",
    },
    {
      title: "Lehenga",
      text: "Elegant lehenga for special occasions.",
      img: "https://assets.ajio.com/medias/sys_master/root/20240423/13E1/6627a04616fd2c6e6ac8aeff/-473Wx593H-467271641-pink-MODEL.jpg",
    },
    {
      title: "Party Wear Saree",
      text: "Perfect saree for parties",
      img: "https://assets.ajio.com/medias/sys_master/root/20240108/vqa0/659bd53654c30e62769a2a67/-473Wx593H-466958271-black-MODEL.jpg",
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        {cards.map((card, index) => (
          <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGridComponent;
