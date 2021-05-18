import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

const ProjectPage = ({ match }) => {
  const [serial, setSerial] = useState({})

  useEffect(() => {
    const fetchSerials = async () => {
      const { data } = await axios.get(`/api/projects/${match.params.id}`)

      // console.log(data)
      setSerial(data)
    }

    fetchSerials()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row className="justify-content-md-center  mb-5">
        <Col md={6}>
          <Image src={serial.image1} alt={serial.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>
                <h3>{serial.title}</h3>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h5>{serial.subtitle}</h5>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{serial.description}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProjectPage
