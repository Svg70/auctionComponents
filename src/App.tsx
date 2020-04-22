import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProductItem} from './components/productItem'
import { Header } from './components/header';
import styled from 'styled-components'

const SApp = styled.div`
  display: flex;
  flex-direction: column;
`
const SArea = styled.div`
  padding-top: 62px;
`
const SContent = styled.div`
  display: flex;
`
const SNavbar = styled.div`
  width: 350px;
  background-color: pink;
`
const SFilterBlock = styled.div`
  height: 20px;
  width: 100px;
`

function App() {
  const initArray = [
  { src:'https://d.radikal.ru/d02/2004/78/6bd82e0c6134.jpg', date: new Date },
  { src:'https://b.radikal.ru/b04/2004/d1/f1d73005b736.jpg', date: new Date },
  { src:'https://d.radikal.ru/d29/2004/24/7f087d4b54b5.png', date: new Date },
  { src:'https://a.radikal.ru/a18/2004/b6/4941b1d46683.jpg', date: new Date },
  { src:'https://c.radikal.ru/c31/2004/e1/9cfe81b1f886.jpg', date: new Date },
  { src:'https://b.radikal.ru/b12/2004/56/84ce64f5ec8f.jpg', date: new Date },
  { src:'https://a.radikal.ru/a40/2004/46/193a39902fc7.jpg', date: new Date },
  { src:'https://a.radikal.ru/a05/2004/34/cb0d536fe15a.jpg', date: new Date },
  ]



  const productArray = initArray.map( e => <ProductItem src = {e.src} time = {e.date}/>)
  return (
    <SApp>
      <Header categories = {['coins', 'medals', 'stamps']} userInfo = {{userName: 'Ivan', messages: 50}}/>
      <SContent>
        <SNavbar></SNavbar>
        <SArea>
          <SFilterBlock/>
          {productArray}</SArea>
      </SContent>
      
    </SApp>
  );
}

export default App;
