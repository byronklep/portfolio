const AccTogg = () => {
  return (
    <>
      <div
        className="accordion md-accordion accordion-1"
        id="accordionEx23"
        role="tablist">
        <div className="card">
          <div
            className="card-header blue lighten-3 z-depth-1"
            role="tab"
            id="heading96">
            <h5 className="text-uppercase mb-0 py-1">
              <a
                className="white-text font-weight-bold"
                data-toggle="collapse"
                href="#collapse96"
                aria-expanded="true"
                aria-controls="collapse96">
                I am the first title of accordion
              </a>
            </h5>
          </div>
          <div
            id="collapse96"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="heading96"
            data-parent="#accordionEx23">
            <div className="card-body">
              <div className="row my-4">
                <div className="col-md-8">
                  <h2 className="font-weight-bold mb-3 black-text">
                    Hi! I am the first one.
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </p>
                  <p className="mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="col-md-4 mt-3 pt-2">
                  <div className="view z-depth-1">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header blue lighten-3 z-depth-1"
            role="tab"
            id="heading97">
            <h5 className="text-uppercase mb-0 py-1">
              <a
                className="collapsed font-weight-bold white-text"
                data-toggle="collapse"
                href="#collapse97"
                aria-expanded="false"
                aria-controls="collapse97">
                I am the second title of accordion
              </a>
            </h5>
          </div>
          <div
            id="collapse97"
            className="collapse"
            role="tabpanel"
            aria-labelledby="heading97"
            data-parent="#accordionEx23">
            <div className="card-body">
              <div className="row my-4">
                <div className="col-md-8">
                  <h2 className="font-weight-bold mb-3 black-text">
                    Hi! I am the second one.
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </p>
                  <p className="mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="col-md-4 mt-3 pt-2">
                  <div className="view z-depth-1">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header blue lighten-3 z-depth-1"
            role="tab"
            id="heading98">
            <h5 className="text-uppercase mb-0 py-1">
              <a
                className="collapsed font-weight-bold white-text"
                data-toggle="collapse"
                href="#collapse98"
                aria-expanded="false"
                aria-controls="collapse98">
                I am the third title of accordion
              </a>
            </h5>
          </div>
          <div
            id="collapse98"
            className="collapse"
            role="tabpanel"
            aria-labelledby="heading98"
            data-parent="#accordionEx23">
            <div className="card-body">
              <div className="row my-4">
                <div className="col-md-8">
                  <h2 className="font-weight-bold mb-3 black-text">
                    Hi! I am the third one.
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </p>
                  <p className="mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="col-md-4 mt-3 pt-2">
                  <div className="view z-depth-1">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/nature.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccTogg
