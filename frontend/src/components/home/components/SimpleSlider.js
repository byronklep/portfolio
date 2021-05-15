import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="m-5 text-center">
        <Slider {...settings}>
          <div>
            <span
              className="iconify"
              data-icon="vscode-icons:file-type-html"
              data-inline="false"></span>
            <p className="mt-2 icon-font">HTML</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="vscode-icons:file-type-css"
              data-inline="false"></span>
            <p className="mt-2 icon-font">CSS</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:javascript"
              data-inline="false"></span>
            <p className="mt-2 icon-font">JavaScript</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="vscode-icons:file-type-node"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Node</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:react"
              data-inline="false"></span>
            <p className="mt-2 icon-font">React</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="vscode-icons:file-type-mongo"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Mongo</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:bootstrap"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Bootstrap</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:git-icon"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Git</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:heroku-icon"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Heroku</p>
          </div>
          <div>
            <span
              className="iconify"
              data-icon="logos:netlify"
              data-inline="false"></span>
            <p className="mt-2 icon-font">Netlify</p>
          </div>
        </Slider>
      </div>
    )
  }
}
