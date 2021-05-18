import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import WOW from 'wowjs'
import Space from '../../../img/spaceEarth.jpeg'

const ProjBanner = () => {
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
        className="servicesHeroBanner ">
        <div className="services_heroBanner">
          <Container className="text-light wow fadeInUp">
            <h1 className="main-font1 text-center">Projects</h1>
            <p className="main-font2 text-center">
              Check out my latest projects!
            </p>
          </Container>
        </div>
      </Parallax>
    </>
  )
}

export default ProjBanner
