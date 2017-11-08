import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import socialImage from './ArghOG.png'

const meta = [
  { name: 'description', content: 'A team with a big passion for crafting the web'},
  { name: 'keywords', content: 'web, app, chat, bot, micro service' },
  { property: 'og:title', content: 'Argh.team — web apps, browser extensions, chat bots, micro services'},
  { property: 'og:type', content: 'website'},
  { property: 'og:url', content: 'https://argh.team/'},
  { property: 'og:image', content: `https://argh.team${socialImage}`},
  { property: 'og:image:width', content: `828`},
  { property: 'og:image:height', content: `381`}
]

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const Body = styled.div`
  flex: 0 1 50%;
`

const Footer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TemplateWrapper = ({
  children
}) => (
    <Root>
      <Helmet
        title="Argh.team — web apps, browser extensions, chat bots, micro services"
        meta={meta}
      />
      <Body>
        <Header />
        <Hero />
      </Body>
      <Footer>
        <Contact />
      </Footer>
    </Root>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
