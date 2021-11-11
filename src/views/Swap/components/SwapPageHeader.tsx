import React from 'react'
import styled from 'styled-components'
import { Box } from '@rimauswap-libs/uikit'
import Container from 'components/Layout/Container'

// <{ background?: string }>
const Outer = styled(Box)`
`

const Inner = styled(Container)`
  padding-top: 12px;
  padding-bottom: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const SwapPageHeader: React.FC<{ background?: string }> = ({ children, ...props }) => (
  <Outer {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default SwapPageHeader
