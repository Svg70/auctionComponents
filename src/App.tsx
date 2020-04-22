import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProductItem} from './components/productItem'
import { Header } from './components/header';
import styled from 'styled-components'


function App() {
  const initArray = [1,2,3,4,5,6,7,8,9];
  const productArray = initArray.map( e => <ProductItem src = 'https://res.cloudinary.com/drkhbnvbo/image/upload/v1582635323/jh7fsjhx/wftsx9ztkubbssol29wc.jpg' time = {new Date}/>)
  return (
    <div className="App">
      <Header categories = {['coins', 'medals', 'stamps']} userInfo = {{userName: 'Ivan', messages: 50}}/>
      {productArray}
    </div>
  );
}

export default App;
