import { Navbar, Nav, Button, Form } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className="navbar" variant="light" expand="lg">
        <Navbar.Brand href="/">Sam K</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Form inline>
            <div className="nav-buttons">
              <a href="img/resume.pdf" target="_blank" rel="noreferrer">
                <Button className="nav-btn" variant="outline-info">
                  Resume <i className="fas fa-file"></i>
                </Button>
              </a>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
