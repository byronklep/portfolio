import { Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import Coding from '../../../img/coding.jpeg'

const Banner2 = () => {
  return (
    <>
      <Parallax
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImage={Coding}
        className="codingBanner ">
        <div className="coding_heroBanner">
          <Container className="text-white text-center">
            <h1>Hello, I am Sam.</h1>
            <p className="lead">
              I am a full-stack developer from Houston, TX.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempo
            </p>
          </Container>
        </div>
      </Parallax>
    </>
  )
}

export default Banner2
