import { Container, Row, Col } from 'react-bootstrap'
import Testimonials from './Testimonials'

const Test = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <h3>Testimonals</h3>
          </Col>
        </Row>
        <Row>
          <Testimonials />
        </Row>
      </Container>
    </>
  )
}

export default Test
