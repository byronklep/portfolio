import React, { useEffect } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import WOW from 'wowjs'

import Houston from '../../../img/houston.jpeg'
import Sam from '../../../img/sam_portfolio1.png'

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
        bgImage={Houston}
        className="aboutHeroBanner">
        <div className="city_heroBanner">
          <Container className="about-text-main">
            <Row>
              <Col md={8}>
                <h1 className="about-main-font1">Greetings!</h1>
                <p className="main-font-about">
                  Welcome to my portfolio. As you can see, I was born & raised
                  in humid, Houston, TX way back in the year 1984.
                </p>
                <p className="main-font-about">
                  I've been a techno-enthusiast ever since my Dad brought home
                  an old, used Gateway PC with windows 95 on it. Soon enough, I
                  found myself tinkering with the myserious machine--
                  discovering a lifelong passion for all-things-tech!
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
        {/* <div className="city_heroBanner d-flex">
          <Container className="text-light wow fadeInUp ">
            <div className="f-image">
              <img
                src={Sam}
                className="float-right mb-3"
                alt="Sam Klepper"
                height={300}
                width={300}
              />

              <h1 className="main-font1">Hello, I am Sam.</h1>
              <p className="main-font2">
                I am a full-stack developer from Houston, TX.
                <br />
                Check out my work.
              </p>
              <p className="ml-5">
                <Link to="/about">
                  <Button variant="primary">About me</Button>
                </Link>
              </p>
            </div>
          </Container>
        </div> */}
      </Parallax>
    </>
  )
}

export default ABanner
