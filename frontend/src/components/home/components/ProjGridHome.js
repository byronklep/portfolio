import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjGridHome = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/projects/four`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading projects...</p>
  }

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
          <Col>
            <div className="cards">
              {data.projects.map((pjt, _id) => (
                <Card className="project-card">
                  <Link to={`/projects/${pjt._id}`}>
                    <Card.Img variant="top" src={pjt.image1} />
                  </Link>
                  <Card.Body>
                    <Link to={`/projects/${pjt._id}`}>
                      <Card.Title as="h3">{pjt.title}</Card.Title>
                    </Link>
                    <Card.Text className="pjt-card-text">
                      {pjt.description}
                    </Card.Text>
                    <Link to={`/projects/${pjt._id}`}>
                      <Button className="btn-black">Learn more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjGridHome
