import { Form, Button, Card, Row, Col } from "react-bootstrap";
import CardClima from "./CardClima";

const FormularioClima = () => {
  return (
    <Card>
      <Card.Header>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={5}>
                <Form.Label>Ingrese un pais, ciudad, estado...</Form.Label>
              </Col>
              <Col sm={12} md={5}>
                <Form.Control
                  type="text"
                  placeholder="Ej: San Miguel de Tucuman"
                />
              </Col>
              <Col sm={12} md={2}>
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Card.Header>
      <Card.Body>
        <CardClima></CardClima>
      </Card.Body>
    </Card>
  );
};

export default FormularioClima;
