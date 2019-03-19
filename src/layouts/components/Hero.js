import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FitText from 'react-fittext'
import PngLogo from './Logopng'
import Contact from './Contact'

const Logo = styled(PngLogo)`
  width: 100%;
  height: auto;
`
const Tagline = styled.div`
  margin: 1em auto 0.2em;
  color: #6B6B6B;
  line-height: 1;
  font-weight: 100;
  text-transform: uppercase;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  padding: 0 6%;
`

const Hero = () =>
  <Container>
    <Logo />
    <FitText compressor={2}>
      <Tagline>
          We do things on the internets<br/>We know all the right moves
      </Tagline>
    </FitText>
      <Contact />
  </Container>


Hero.PropTypes = {

}

export default Hero
