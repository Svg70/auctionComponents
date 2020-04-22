import React from 'react'
import styled from 'styled-components'

interface Props {
  nickName: string
  verified: boolean
  rate: number
}

const SUserWrapper = styled.div`
  display: flex;
  
`
const SUserVerified = styled.a`

`
const SUserName = styled.a`
  
  text-decoration: none;
  

  &:hover: {
    text-decortion: underline;
  }
`
export const UserName = ({...props}: Props) => {
  
  return <SUserWrapper>
    <SUserVerified>+</SUserVerified>
    <SUserName>{props.nickName}</SUserName>
  </SUserWrapper>
}