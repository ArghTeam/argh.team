import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Container = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Item = styled.li`
  display: inline-block;
  margin: 0;
`
const NavLink = styled(Link)`
  font-size: ${(props) => props.large ? '1.25em' : '1em'};
  font-weight: 300;
  color: inherit;
  display: inline-block;
  padding: 0.5em 1em;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline; 
  }
`

const Menu = ({items, large}) =>
  <Container>
    {items.map((item) =>
      <Item><NavLink to={item.uri} large={large}>{item.title}</NavLink></Item>
    )}
  </Container>

Menu.propTypes = {
  items: PropTypes.object.isRequired,
  large: PropTypes.bool
}

export default Menu
