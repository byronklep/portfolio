import React, { useState } from 'react'

import { Accordion, Col, ListGroup } from 'react-bootstrap'

const Accord = () => {
  const [activeId, setActiveId] = useState('0')

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null)
    } else {
      setActiveId(id)
    }
  }

  return (
    <>
      <Col md={10} className="mx-auto">
        <Accordion defaultActiveKey={activeId}>
          <div
            className={
              activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'
            }>
            <div className="panel-header">
              <Accordion.Toggle
                onClick={() => toggleActive('0')}
                className="panel-toggle"
                variant="link"
                eventKey="0">
                <h3>
                  Frontend <i className="fas fa-laptop-code"></i>
                </h3>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="0">
              <div className="panel-body">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Develop functional and appealing web/mobile applications
                    based on usability.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Provide website maintenance and enhancements.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Use a combination of markup languages to write web pages.
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center">
                  <img
                    className="img-fluid text-center"
                    src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                    alt="coding"
                  />
                </div>
              </div>
            </Accordion.Collapse>
          </div>

          <div
            className={
              activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'
            }>
            <div className="panel-header">
              <Accordion.Toggle
                onClick={() => toggleActive('1')}
                className="panel-toggle"
                variant="link"
                eventKey="1">
                <h3>
                  Backend <i className="fas fa-database"></i>
                </h3>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="1">
              <div className="panel-body">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Develop server-side application logic and API services.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Seamless integration with front-end codebase.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    API security, database utilization/management, caching and
                    best practices.
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center">
                  <img
                    className="img-fluid text-center"
                    src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                    alt="coding"
                  />
                </div>
              </div>
            </Accordion.Collapse>
          </div>
          <div
            className={
              activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'
            }>
            <div className="panel-header">
              <Accordion.Toggle
                onClick={() => toggleActive('2')}
                className="panel-toggle"
                variant="link"
                eventKey="2">
                <h3>
                  DevOPs <i className="fab fa-connectdevelop"></i>
                </h3>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="2">
              <div className="panel-body">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Build & setup new development tools and infrastructure.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Convey needs of stakeholders to developers.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Automation, testing & analysis to improve development and
                    release time.
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center">
                  <img
                    className="img-fluid text-center"
                    src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                    alt="coding"
                  />
                </div>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Col>
    </>
  )
}

export default Accord
