import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import FitText from 'react-fittext'


const Container = styled.div`
  padding-top: 2em;
  padding-bottom: 1.6em;
  max-width: 1100px;
  margin: 0 auto;
`
const menuItems = [
  {
    title: 'Web Apps',
    uri: 'web-apps'
  },
  {
    title: 'Browser Extensions',
    uri: 'browser-extensions'
  },
  {
    title: 'Chat Bots',
    uri: 'chat-bots'
  },
  {
    title: 'Micro Services',
    uri: 'micro-services'
  }
]

const Header = () =>
  <FitText compressor={5}>
    <Container>
        <Menu items={menuItems} large />
    </Container>
  </FitText>

export default Header
