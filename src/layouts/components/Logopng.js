import React from 'react'
import styled from 'styled-components'
import logo from './arghlogo.png'

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: url(${logo}) no-repeat;
  background-size: contain;
  background-position: center;
`

const Logo = (props) =>
  <Root><canvas width="922" height="323" style={{width: '100%', maxWidth: '100%'}} /></Root>

export default Logo
