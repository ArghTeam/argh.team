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
const Root = styled.div`
  box-sizing: border-box;
  // background: url(https://images.unsplash.com/photo-1472808900176-aa74f96048c0?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=);
  background-size: cover;
`
const TemplateWrapper = ({
  children
}) => (
    <Root>
      <Helmet
        title="Argh Team — web apps, chat bots, micro services"
        meta={[
          { name: 'description', content: 'Argh is a team with a big passion for crafting the web'},
          { name: 'keywords', content: 'web, app, chat, bot, micro service' },
        ]}
      />
      <Header />
      <Hero />
      {/*<About />*/}
    </Root>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
