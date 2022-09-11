import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Carousel from "react-material-ui-carousel"

const BlockSlider = ({ data }) => {
  return (
    <div className="container max-w-4xl">
      <Carousel
        autoPlay={false}
        animation={"slide"}
        height={500}
        navButtonsAlwaysVisible
      >
        {data.files.map((file) => (
          <GatsbyImage
            key={file.id}
            image={getImage(file.localFile)}
            alt={file.alternativeText}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default BlockSlider
