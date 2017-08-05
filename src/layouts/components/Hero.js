import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FitText from 'react-fittext'
import SvgLogo from './Logo'
import Contact from './Contact'

const Logo = styled(SvgLogo)`
  fill: hotpink;
  // fill: #EC098D;
  // fill: white;
  // padding: 4vw;
  // background-image: linear-gradient(-180deg, #FF9292 0%, #EC098D 100%);
  width: 100%;
  height: auto;
`
const Tagline = styled.div`
  margin: 1em auto 0.2em;
  line-height: 1;
  font-weight: 100;
  text-transform: uppercase;
`

const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  margin-top: 5vw;
  text-align: center;
  box-sizing: border-box;
`

const Hero = () =>
  <Container>
    <Logo />
    <FitText compressor={2}>
      <Tagline>
          We do things on the internets,<br/>we know all the right moves
      </Tagline>
    </FitText>
      <Contact />
  </Container>


Hero.PropTypes = {

}

export default Hero
