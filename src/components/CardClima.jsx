import { Card, Col, Row } from "react-bootstrap";

const CardClima = () => {
  return (
    <Card>
      <Card.Header>NOMBRE DE LO BUSCADO</Card.Header>
      <Card.Body>
        <Row className='align-items-center'>
          <Col sm={12} md={4} className='text-center'>
            icono
          </Col>
          <Col sm={12} md={8}>
            <Card.Title>Estado del clima</Card.Title>
            <Card.Text>Descripcion del clima</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardClima;
