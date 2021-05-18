import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

const ProjectPage = ({ match }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/projects/${match.params.id}`)
      setData(data)
    }

    fetchData()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row className="justify-content-md-center  mb-5">
        <Col md={6}>
          <Image src={data.image1} alt={data.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>
                <h3>{data.title}</h3>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h5>{data.subtitle}</h5>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{data.description}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProjectPage
