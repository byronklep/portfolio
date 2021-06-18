import React, { useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import WOW from 'wowjs'

import Sam from '../../../img/sam_portfolio1.png'

const ABanner = () => {
  useEffect(() => {
    const wow = new WOW.WOW()
    wow.init()
  }, [])

  return (
    <>
      <div className="about-text-main about-cont">
        <div className=" wow bounceInDown">
          <Row>
            <Col className="text-center mt-5">
              <img
                src={Sam}
                className="mx-auto about-img"
                alt="Sam Klepper"
                height={350}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto p-5">
              <h1 className="about-main-font1">Lorem ipsum!</h1>
              <p className="main-font-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu ultrices augue, eu lobortis mauris. Mauris rhoncus risus et
                lorem pellentesque fermentum. Nullam condimentum tristique neque
                eget tempus.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ABanner
