import React from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <section>
      <Container>
        <Row className="contact-container">
          <Col className="mx-auto" md={8}>
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

export default ContactForm
