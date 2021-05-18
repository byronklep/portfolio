import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Jumbotron } from 'react-bootstrap'
import ProjectItem from './ProjectItem'

const ProjectsGrid = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/projects`)
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
    <div className="container mt-3 text-center">
      <Jumbotron>
        <h1 className="text-danger">Projects</h1>
      </Jumbotron>

      <Row>
        <br />
        <Col>
          <section className="cards">
            {data.projects.map((pjt, _id) => (
              <ProjectItem key={_id} pjt={pjt} />
            ))}
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectsGrid
