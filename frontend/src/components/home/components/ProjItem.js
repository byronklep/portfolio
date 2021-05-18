import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjItem = ({ pjt }) => {
  return (
    <Container className="justify-content-md-center">
      <Card className=" mb-5">
        <Link to={`/projects/${pjt._id}`}>
          <Card.Img
            className="card-img-top"
            src={pjt.image1}
            alt="project"
            fluid
          />
        </Link>
        <Card.Body>
          <Link to={`/projects/${pjt._id}`}>
            <Card.Title as="div">
              <strong>
                <h4 className="serial-links">{pjt.title}</h4>
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProjItem
