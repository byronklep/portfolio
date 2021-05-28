import React, { useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import WOW from 'wowjs'

import Houston from '../../../img/houston.jpeg'
import Sam from '../../../img/sam_portfolio1.png'
import background from '../../../img/about.png'

const ABanner = () => {
  useEffect(() => {
    const wow = new WOW.WOW()
    wow.init()
  }, [])

  return (
    <>
      <Parallax
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImage={background}
        className="aboutHeroBanner">
        <div className="city_heroBanner">
          <Container className="about-text-main wow bounceInDown">
            <Row>
              <Col md={8}>
                <h1 className="about-main-font1">Greetings!</h1>
                <p className="main-font-about">
                  Welcome to my portfolio. As you can see, I was born & raised
                  in humid, Houston, TX way back in the year 1984. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempo. in humid, Houston, TX way back in the year 1984. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Col>
              <Col>
                <img
                  src={Sam}
                  className="float-right  align-items-center about-img"
                  alt="Sam Klepper"
                  height={350}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    </>
  )
}

export default ABanner
