import { Card, Col, Row } from "react-bootstrap";

const CardClima = ({clima, nombreUbic}) => {
  return (
    <Card>
      <Card.Header>{nombreUbic}</Card.Header>
      <Card.Body>
        <Row className='align-items-center'>
          <Col sm={12} md={4} className='text-center'>
          {clima.icon}
          </Col>
          <Col sm={12} md={8}>
            <Card.Title>{clima.main}</Card.Title>
            <Card.Text>{clima.description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardClima;
