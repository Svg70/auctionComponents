import React from 'react'
import styled from 'styled-components'
import { DateFormat } from './dateFormat'
import { UserName } from './seller'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  price?: number
  location?: string
  time: Date
  src?: string
}

interface Src {
  imgSrc?: string
}

const Wrapper = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  border-top: 1px solid #b6b5b5
`
const SImageWrap = styled.div`
  width: 35%;
  margin: 2px;
  border: 1px #999 solid;
`
const SImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`

const SDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0 0 15px;
`
const SItemName = styled.a`
  min-height: 48px;
  margin: 0;
  
  color: #333;
  font-size: 1.25rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
const STime = styled(DateFormat)`
  font-size: 12px;
  margin: 0;
  color: #999;  
`
const SPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
`
const SItemLocation = styled.p`
  font-size: 12px;
  margin: 0;
  color: #999;
`


export const ProductItem = ({name = 'test lot', price = 100, location = 'Краснодарский край, Краснодар', ...props}: Props) => {
    return (
      <Wrapper>
          <SImageWrap>
            <SImage src = {props.src}/>
          </SImageWrap>
          <SDetails>
            <SItemName href='./jjj'>{name}</SItemName>
            <SItemLocation>{location}</SItemLocation>
            <STime date = {props.time}/>
            <SPrice>{price}</SPrice>
            <UserName nickName = 'ggg' verified = {true} rate = {222}></UserName>
          </SDetails>
      </Wrapper>
    )
}