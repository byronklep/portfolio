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
      <div className="about-text-main about-cont wow bounceInDown">
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
          <Col className="p-5">
            <h1 className="about-main-font1">Greetings!</h1>
            <p className="main-font-about">
              Welcome to my portfolio. As you can see, I was born & raised in
              humid, Houston, TX way back in the year 1984. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempo. in
              humid, Houston, TX way back in the year 1984. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ABanner
