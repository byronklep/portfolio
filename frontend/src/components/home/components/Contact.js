import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Contact</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
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
