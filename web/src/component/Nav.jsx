import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
