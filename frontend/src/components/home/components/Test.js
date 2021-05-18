import { Container, Row } from 'react-bootstrap'
import Testimonials from './Testimonials'

const Test = () => {
  return (
    <section className="test-container">
      <Container className="test-slider">
        <Row>
          <Testimonials />
        </Row>
      </Container>
    </section>
  )
}

export default Test
