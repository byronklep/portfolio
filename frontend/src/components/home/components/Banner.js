import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import WOW from 'wowjs'

import Space from '../../../img/spaceEarth.jpeg'
import Sam from '../../../img/sam.png'

const Banner = () => {
  useEffect(() => {
    const wow = new WOW.WOW()
    wow.init()
  }, [])

  return (
    <>
      <Parallax
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImage={Space}
        className="heroBanner ">
        <div className="space_heroBanner">
          <Container className="text-light wow fadeInUp">
            <img
              src={Sam}
              className="rounded-circle mb-3"
              alt="Sam Klepper"
              height={190}
              width={200}
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
          </Container>
        </div>
      </Parallax>
    </>
  )
}

export default Banner
