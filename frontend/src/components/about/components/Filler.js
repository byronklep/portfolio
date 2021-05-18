const { Container, Col, Row } = require('react-bootstrap')

const Filler = () => {
  return (
    <section className="filler-section">
      <Container>
        <Row>
          <Col>
            <h1>Filler Text</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Filler
