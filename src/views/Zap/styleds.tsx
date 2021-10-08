import { Text, Card } from '@rimauswap-libs/uikit'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

export const StyledHeader = styled(PageHeader)`
  position: relative;
  text-align:center;
`

export const Wrapper = styled.div`
position: relative;
padding: 1rem 0;
`

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
padding: 2px;

${({ clickable }) =>
  clickable
    ? css`
        :hover {
          cursor: pointer;
          opacity: 0.8;
        }
      `
    : null}
`

export const Label = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSubtle};
`
export const LinkWrapper = styled(Link)`
  text-decoration: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const PoolRowGrid = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 0;
  padding: 16px;
  background:${({ theme }) => theme.colors.tableRow};
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.textSubtle}1a`};
  &:hover{
    background: ${({ theme }) => `${theme.colors.backgroundAlt}1a`};
  }
  & > div{
    width:100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .curreny-name{
    & > div{
      display: flex;
      flex-direction: column;
      .name{
        font-size:16px;
        font-widgth:600;
      }
      .maximizer{
        font-size:14px;
        font-widgth:600;
      }
    }
  }
  .curreny-apr-rate{
    & > div{
      text-align:center;
      .rate{
        font-size: 22px;
        font-weight: 400;
      }
      .apr{
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .total-balance-earn{
    display: none;
    flex-direction: column;
    & > div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
  }
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
  .left-content, .right-content{
    display:flex;
  }
  .left-content{
    button{
      margin-right:10px;
    }
  }
`

export const LabelWrapper = styled.div`
  margin-bottom:10px;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom:0;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`