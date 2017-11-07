import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FitText from 'react-fittext'
import {Skype, Email} from './Icons'

const iconSize = '1.2em'

const Container = styled.div`
  display: inline-flex;
  margin: 1em auto;
  flex-wrap: wrap;
  justify-content: center;
`
const Item = styled.div`
  padding: 0.2em 0.5em;
  font-size: 0.9em;
  font-weight: 300;
  display: flex;
  align-items: center;
`
const IconSkype = styled(Skype)`
  width: ${iconSize};
  height: ${iconSize};
`
const IconEmail = styled(Email)`
  width: ${iconSize};
  height: ${iconSize};
`
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0 0.2em;
`

const Contact = () =>

      <Container className="vcard">
        <Item><Link className='url' href="https://argh.team"><span className="org">Argh.team&nbsp;OÜ</span>, <span className="address">Sepapaja 6, Tallinn 15551, Estonia</span></Link></Item>
        <Item><IconEmail/> <Link className='email' href="mailto:hello@argh.team">welcome@argh.team</Link></Item>
      </Container>

Contact.PropTypes = {

}

export default Contact
