import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioClima from "./components/FormularioClima";

function App() {
  return (
    <div>
      <h1 className="text-center p-3 bg-warning">Clima</h1>
      <Container className="my-4">
        <FormularioClima></FormularioClima>
      </Container>
    </div>
  );
}

export default App;
