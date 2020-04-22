import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    language?: string
    format?: string
    date: Date
}

const STime = styled.div`
  font-size: 12px;
  margin: 0;
  color: #999;  
`

export const DateFormat = ({language, format = 'HH:mm', date, ...props}: Props) => {

    if (!moment(date).isValid) return null
    return (
        <STime>
            {moment(date).format(format)}
        </STime>
    )
}