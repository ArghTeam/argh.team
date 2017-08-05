import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FitText from 'react-fittext'
import {Skype, Email} from './Icons'

const iconSize = '1.2em'

const Container = styled.div`
  display: inline-flex;
  margin: 0.5em auto;
  flex-wrap: wrap;
  justify-content: center;
`
const Item = styled.div`
  padding: 0.2em 0.5em;
  // font-size: 1.2em;
  font-weight: 200;
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
        <Item>Contact<Link className='url' href="https://argh.team"><span className="org">Argh&nbsp;Team</span></Link>:</Item>
        <Item><IconSkype/> <Link className='skype' href="skype:fedor.troitsky?chat">argh.team</Link></Item>
        <Item><IconEmail/> <Link className='email' href="mailto:hello@argh.team">hello@argh.team</Link></Item>
      </Container>

Contact.PropTypes = {

}

export default Contact
