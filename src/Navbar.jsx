import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Users</Navbar.Brand>
        </Container>
      </Navbar>)
}