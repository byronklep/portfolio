import { Row, Col, Container, Accordion, Card } from 'react-bootstrap'

const Services = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Services</h1>
          </Col>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0" className="acc">
            <Card className="acc">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="accord-header">
                Frontend <i className="fas fa-laptop-code"></i>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Container>
                    <Row>
                      <Col md={8}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                          fluid
                        />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="acc">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                className="accord-header">
                Backend <i className="fas fa-database"></i>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {' '}
                  <Container>
                    <Row>
                      <Col md={8}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                          fluid
                        />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="acc">
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                className="accord-header">
                DevOPs <i className="fab fa-connectdevelop"></i>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {' '}
                  <Container>
                    <Row>
                      <Col md={8}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                          fluid
                        />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Row>
      </Container>
    </>
  )
}

export default Services
