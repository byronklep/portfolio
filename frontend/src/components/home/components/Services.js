import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Accord from './Accord'

const Services = () => {
  return (
    <>
      <Container className="services-container">
        <Row>
          <Col className="text-center">
            <Link to="/services">
              <h1 className="main-font mb-5">Services</h1>
            </Link>
          </Col>
        </Row>
        <Row>
          <Accord />
        </Row>
      </Container>
    </>
  )
}

export default Services
