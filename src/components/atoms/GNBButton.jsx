// @ts-check

import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`

const GNBButton = (props) => {
  return (
      <Box onClick={props.onClick}>{props.children}</Box>
  )
}

export default GNBButton