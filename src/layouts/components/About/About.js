import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import backgroundImage from './arghbg.jpg'

const productColor = '#ffff00';
const productPadding = 0.3;
const fontSize = 1.6;
const lineHeight = fontSize;

const Container = styled.div`
  margin: 4em 0;
  position: relative;

  &:before {
    display: block;
    content: '';
    position: absolute;
    height: 200%;
    width: 100%;
    background: url(https://images.unsplash.com/photo-1472808900176-aa74f96048c0?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=);
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    background-size: cover;
    left: 0;
    top: 0;
    opacity: 0.8;
  }
  &:after {
    display: block;
    content: '';
    position: absolute;
    height: 200%;
    width: 100%;
    left: 0;
    top: 0;
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    background: rgba(100,200,255, 1);
    mix-blend-mode: darken;
  }  
`
const Hello = styled.div`
  max-width: 700px;
  display: flex;
  margin: 2em auto; 
  position: relative;
  z-index: 1;
`
const HelloStrong = styled.strong`
  font-size: 4em;
  flex: 0 0 auto;
  font-weight: 700;
  margin-right: 0.2em;
  margin-top: 0.3em;
  display: block;
`
const HelloBody = styled.div`
  flex: 1 1 60%;
  font-size: ${fontSize}em;
  line-height: ${lineHeight}em;
  font-weight: 300;
`
const Products = styled.div`
  max-width: 570px;
  margin: 4em auto; 
  position: relative;
  z-index: 1;
`
const ProductsStrong = styled.strong`
  font-size: 4em;
  font-weight: 700;
  display: block;
  margin-top: 0.2em;
  line-height: 0.7;
  color: #ffff00;
`
const ProductsBody = styled.div`
  display: inline;
  font-size: ${fontSize}em;
  line-height: ${lineHeight};
  font-weight: 300;
  padding: ${productPadding}em;
  padding-left: 0;
  padding-right: 0;
  margin: ${productPadding}em;
  -webkit-box-decoration-break: clone;
  -ms-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #ffff00;
  box-shadow: ${productPadding}em 0 0 ${productColor}, -${productPadding}em 0 0 ${productColor};
`


const About = () =>
  <Container>
    <Hello>
      <HelloStrong>Hello,</HelloStrong>
      <HelloBody><p>Argh is a salted crew of digital makers with experience in building products and shipping ‘em to the stores.</p>
        <p>We know how to get into client’s shoes and have “insider” perspective.</p></HelloBody>
    </Hello>
    <Products>
      <ProductsBody>You can trust us your ideas, and we’ll be happy to deliver your quick prototype, MVP, or&nbsp;polished&nbsp;product.</ProductsBody>
      <ProductsStrong>We love <br/>
        making products.</ProductsStrong>
    </Products>
  </Container>


About.PropTypes = {

}

export default About
