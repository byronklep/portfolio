import { Container, Row, Col, Card } from 'react-bootstrap'
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
            <Card>
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={project4} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects
