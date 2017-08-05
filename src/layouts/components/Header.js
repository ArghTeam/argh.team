import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import FitText from 'react-fittext'


const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 1.6em;
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
  <FitText compressor={7}>
    <Container>
        <Menu items={menuItems} large />
    </Container>
  </FitText>

export default Header
