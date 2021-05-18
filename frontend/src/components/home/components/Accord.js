import React, { useState } from 'react'

import { Accordion, Col } from 'react-bootstrap'

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
      <Col md={8}>
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
                Frontend <i className="fas fa-laptop-code"></i>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="0">
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas, nisl ante
                facilisis lacus, non condimentum magna nulla id purus. Proin
                euismod orci a dui dignissim scelerisque.
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
                Backend <i className="fas fa-database"></i>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="1">
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas, nisl ante
                facilisis lacus, non condimentum magna nulla id purus. Proin
                euismod orci a dui dignissim scelerisque.
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
                DevOPs <i className="fab fa-connectdevelop"></i>
              </Accordion.Toggle>
            </div>

            <Accordion.Collapse eventKey="2">
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas, nisl ante
                facilisis lacus, non condimentum magna nulla id purus. Proin
                euismod orci a dui dignissim scelerisque.
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Col>
      <Col md={4}>
        <img
          src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
          width={300}
          alt="coding"
        />
      </Col>
    </>
  )
}

export default Accord
