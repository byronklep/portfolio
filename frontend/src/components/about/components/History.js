import { Container, Row, Col } from 'react-bootstrap'
import Filler from './Filler'

const History = () => {
  return (
    <>
      <section className="history-section">
        <Container>
          <Row className="my-5">
            <Col md={8}>
              <h1 className="text-center">My History</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fringilla ut morbi tincidunt augue interdum velit euismod in.
                Consectetur adipiscing elit ut aliquam purus. Dictum non
                consectetur a erat nam at.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                alt="sam"
                width={300}
              />
            </Col>
          </Row>
          <Row className="mx-auto my-5">
            <Col md={4}>
              <img
                className="ml-5"
                src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                height={300}
                width={300}
              />
            </Col>
            <Col className="mx-auto">
              <h1 className="text-center">More Story</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fringilla ut morbi tincidunt augue interdum velit euismod in.
                Consectetur adipiscing elit ut aliquam purus. Dictum non
                consectetur a erat nam at.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Filler />
      <section>
        <Container>
          <Row className="my-5">
            <Col>
              <h1 className="text-center">Mas</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
                aliqua.Incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col>
              <img
                className="ml-5"
                src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                height={300}
                width={300}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default History
