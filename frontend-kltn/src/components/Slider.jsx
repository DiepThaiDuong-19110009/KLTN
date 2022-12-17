import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/2a33498e-2e0d-48c9-8403-58da530a8639.jpg_2200x2200q90.jpg_.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/31b718a8-c72b-4c53-9878-aa52f95371a2.jpg_2200x2200q90.jpg_.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider