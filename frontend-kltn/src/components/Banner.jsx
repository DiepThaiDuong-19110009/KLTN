import React from 'react'
import { Image } from 'react-bootstrap'

const Banner = (props) => {
    const {url} = props
  return (
    <Image style={{width: '100%'}} src={url}></Image>
  )
}

export default Banner