import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Banner = (props) => {
  const { url, id } = props
  return (
    <Link to={`/product/${id}`}>
      <Image style={{ width: '100%' }} src={url}></Image>
    </Link>
  )
}

export default Banner