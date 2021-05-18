import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <div className="container testimonial-container mb-5">
        <Slider {...settings}>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="blockquote">
              <p className="test-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum placerat, lorem id bibendum egestas.
              </p>
              <footer className="blockquote-footer text-center">
                John Doe <cite title="Source Title">Digital Crafts</cite>
              </footer>
            </blockquote>
          </div>
        </Slider>
      </div>
    )
  }
}
