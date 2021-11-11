import React from 'react'
import { Heading, TextProps } from '@rimauswap-libs/uikit'
// import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
}


const PurpleWordHeading: React.FC<HeadingProps> = ({ text, ...props }) => {
  // const { theme } = useTheme()
  // const split = text.split(' ')
  // const firstWord = split[0]
  // const remainingWords = split.slice(1).join(' ')
  return (
    <Heading scale="xl" mb="24px" {...props}
    style={{
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left'
    }}

    >
      {text}
      {/* <span style={{ color: theme.colors.secondary }}>{firstWord} </span>
      {remainingWords} */}
    </Heading>
  )
}

export default PurpleWordHeading
