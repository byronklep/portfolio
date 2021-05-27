const Footer = () => {
  return (
    <>
      <footer className="footer text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto:sam@samklepper.com"
              target="_blank"
              rel="noreferrer"
              role="button">
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="tel:7133769541"
              target="_blank"
              rel="noreferrer"
              role="button">
              <i className="fas fa-phone"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/samklep"
              target="_blank"
              rel="noreferrer"
              role="button">
              <i className="fab fa-github"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              role="button">
              <i className="fab fa-twitter"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3">
          © 2021 |
          <a className="text-white pl-1" href="/">
            samklepper.com
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
