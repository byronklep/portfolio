import { Jumbotron, Container, Button } from 'react-bootstrap'

const Banner = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Banner
