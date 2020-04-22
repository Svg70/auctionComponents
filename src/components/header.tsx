import React from 'react'
import styled from 'styled-components'


interface UserInfo {
  userName?: string
  messages?: number
}

interface HeaderStatus {
  categories: Array<string>
  userInfo: UserInfo
}

const SHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 62px;
  background-color: #999;
`
const SMenu = styled.div`
  display flex;
`
const SMenuItem = styled.a`

`
const SUser = styled.div`
  display: flex;
`


export const Header = ({categories = [], userInfo = {userName: '', messages: 0}}: HeaderStatus) => {

const SMenuRow = categories.map(e => <SMenuItem>{e}</SMenuItem>);
  return <SHeader>
    <SMenu>{SMenuRow}</SMenu>
    <SUser>
      {userInfo.userName}
    </SUser>
  </SHeader>
}