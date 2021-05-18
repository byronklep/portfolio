import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project1 from '../../../img/projects/project1.jpg'
import project2 from '../../../img/projects/project2.jpg'
import project3 from '../../../img/projects/project3.jpg'
import project4 from '../../../img/projects/project4.jpg'

const Projects = () => {
  return (
    <>
      <Container className="projects-container">
        <Row>
          <Col className="text-center">
            <Link to="/projects">
              <h1 className="main-font mb-5">Projects</h1>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="project-card">
              <Link to="/projects">
                <Card.Img variant="top" src={project1} />
              </Link>
              <Card.Body>
                <Link to="/projects">
                  <Card.Title as="h3">Crypto Wise</Card.Title>
                </Link>
                <Card.Text className="pjt-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/projects">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Link to="/projects">
                <Card.Img variant="top" src={project2} />
              </Link>
              <Card.Body>
                <Link to="/projects">
                  <Card.Title as="h3">DeLeon Safety Solutions</Card.Title>
                </Link>
                <Card.Text className="pjt-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/projects">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="project-card">
              <Link to="/projects">
                <Card.Img variant="top" src={project3} />
              </Link>
              <Card.Body>
                <Link to="/projects">
                  <Card.Title as="h3">Hero's Corner</Card.Title>
                </Link>
                <Card.Text className="pjt-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/projects">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card">
              <Link to="/projects">
                <Card.Img variant="top" src={project4} />
              </Link>
              <Card.Body>
                <Link to="/projects">
                  <Card.Title as="h3">Texas Latino Workers Center</Card.Title>
                </Link>
                <Card.Text className="pjt-card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/projects">
                  <Button variant="primary">Learn more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects
