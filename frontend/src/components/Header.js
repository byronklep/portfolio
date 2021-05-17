import { Navbar, Nav, Button, Form } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Sam K</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Form inline>
            <div className="nav-buttons">
              {/* <Button className="mr-2" variant="outline-secondary">
                GitHub <i className="fab fa-github"></i>
              </Button> */}
              <Button className="nav-btn" variant="outline-info">
                Resume <i className="fas fa-file"></i>
              </Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
