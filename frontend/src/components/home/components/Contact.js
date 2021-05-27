import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact-container">
      <Container>
        <Row className="my-4">
          <Col className="text-center">
            <Link to="/contact">
              <h1 className="main-font">Contact</h1>
            </Link>

            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <h3>Name</h3>
                </Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <h3>Email</h3>
                </Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  <h3>Message</h3>
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="btn-black" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
