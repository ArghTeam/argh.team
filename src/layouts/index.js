import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import About from  './components/About'

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  position: relative;
  z-index: 1;
`
const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Argh Team"
        meta={[
          { name: 'description', content: 'Argh is a small team with a big passion for crafting the web'},
          { name: 'keywords', content: 'web, app, chat, bot, micro service' },
        ]}
      />
      <Header />
      <Hero />
      <About />
      <Body>
      <h3>Woot</h3>
        {/*{children()}*/}
      </Body>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
