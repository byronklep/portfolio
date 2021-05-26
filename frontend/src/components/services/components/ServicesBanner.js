import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import WOW from 'wowjs'
import Space from '../../../img/spaceEarth.jpeg'

const ServicesBanner = () => {
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
            <h1 className="main-font1 text-center">Services</h1>
            <p className="main-font2">
              Wether you need a simple brochure website to get your business
              online, or a monolithic, custom, e-commerce solution to sell your
              products-- <strong className="text-warning">SbK Devs</strong> got
              you convered.
            </p>
            <p className="main-font2">
              With proven experience, first as a{' '}
              <strong className="text-info">freelance web developer</strong>{' '}
              where I obtained & managed my own clients; to working on a
              development team as the freelance web developer{' '}
              <strong className="text-success">lead developer</strong>
              where I helped launch a cryptocurrency on the{' '}
              <strong className="text-warning">Ethereum block-chain.</strong>
            </p>
          </Container>
        </div>
      </Parallax>
    </>
  )
}

export default ServicesBanner
