import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const productColor = '#ffff00';
const productPadding = 0.3;
const fontSize = 1.6;
const lineHeight = fontSize;

const Container = styled.div`
  margin: 4em 0;
  position: relative;
  margin-bottom: -50%;

  &:before,  &:after {
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpolygon points='0 0, 40 40, 0 40' fill='hotpink'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    left: 0;
    top: 0;
  }
  &:after {
    transform: rotate(180deg);
    top: 100%;
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
  font-weight: 800;
  margin-right: 0.2em;
  margin-top: 0.3em;
  display: block;
`
const HelloBody = styled.div`
  flex: 1 1 60%;
  font-size: ${fontSize}em;
  line-height: ${lineHeight}em;
  font-weight: 200;
`
const Products = styled.div`
  max-width: 570px;
  margin: 4em auto; 
  position: relative;
  z-index: 1;
`
const ProductsStrong = styled.strong`
  font-size: 4em;
  font-weight: 800;
  display: block;
  margin-top: 0.2em;
  line-height: 0.7;
  color: #ffff00;
`
const ProductsBody = styled.div`
  display: inline;
  font-size: ${fontSize}em;
  line-height: ${lineHeight};
  font-weight: 200;
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
