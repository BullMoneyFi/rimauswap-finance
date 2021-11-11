import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Text, Button, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Link, NavLink } from 'react-router-dom'
// import useTheme from 'hooks/useTheme'
// import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
// import { CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

// const fading = () => keyframes`
//   from {
//     opacity: 0.9;
//   }
//   50% {
//     opacity: 0.1;
//   }
//   to {
//     opacity: 0.9;
//   }  
// `

const BgWrapper = styled.div`
  div{
    width:100%;
  }
  .right-image{
    display:none;
    ${({ theme }) => theme.mediaQueries.sm} {
      display:flex;
    }
  }
  .margin{
    margin-left:0px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-left:8px;
    }
  }
  button {
    width:100%;
    margin:5px 0;
    ${({ theme }) => theme.mediaQueries.sm} {
      width:auto;
    }
  }
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  & img{
    width:75%;
  }
`

const imagePath = '/images/home/lunar-tomcat/'
const imageSrc = 'tomcat'

// const starsImage: CompositeImageProps = {
//   path: '/images/home/lunar-tomcat/',
//   attributes: [
//     { src: 'star-l', alt: '3D Star' },
//     { src: 'star-r', alt: '3D Star' },
//     { src: 'star-top-r', alt: '3D Star' },
//   ],
// }

const Hero = () => {
  const { t } = useTranslation()
  const { isXs, isSm, isMd } = useMatchBreakpoints()
  const { account } = useWeb3React()
  // const { theme } = useTheme()

  return (
    <BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column', null, 'row', 'row']}
        alignItems={['flex-end', null, 'center', 'center']}
        justifyContent="center"
      >
        <Flex
          flex={[null, null, null, '45']}
          mb={['24px', null, null, '0']}
          alignItems={['center', null, null, 'center']}
          justifyContent="center"
          position="relative"
          className="right-image"
        >
          <BunnyWrapper>
          {/* srcSet={getSrcSet(imagePath, imageSrc)} */}
            <img src={`${imagePath}${imageSrc}.svg`}  alt={t('Lunar bunny')} />
          </BunnyWrapper>
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper> */}
        </Flex>
        <Flex 
          flex={[null, null, null, '55']}
          alignItems={['center', null, null, 'center']}
          flexDirection="column">
          <Text style={{
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '0em',
    textAlign: 'left'
    }}
 color="textSubtle" fontSize={isXs || isSm?  "30px !important" : isMd? "40px !important" : "20px !important"} mb="20px">
            {t('Support RIMAU DeFi Farm Fundraise')}
          </Text>
          <Text
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '21px',
                textAlign: 'left',
                opacity: 0.5
                }}
              mb="20px" color="textSubtle" >
            {t('Raised fund is used for DeFi Yield Farming and portfolio management, half of the proceed is used to fund charity programs for the underprivileged, sustainably')}
          </Text>
          <Flex flexDirection={['column', null, 'row', null]}>
            {!account && <ConnectWalletButton />}
            <NavLink className="margin" to="/swap">
              <Button scale="md" variant="primary"><img style={{ width: 32, marginRight: 10, border: '2px solid #ef932170', borderRadius: '100%' }} src={`${'/images/icon.svg'}`}  alt="text" />{t('Get RIMAU Token')}</Button>
            </NavLink>
            {/* <NavLink className="margin" to="/swap?outputCurrency=0x098dCbf3518856E45BB4e65E7fCc7C5Ff4a2C16e">
              <Button scale="md" variant="secondary">{t('Trade Now')}</Button>
            </NavLink> */}
            <NavLink exact  className="margin" to={{pathname:"https://docs-en.rimauswap.finance/#rimau-defi-farm"}}  target="_blank">
              <Button scale="md" external variant="secondary">{t('Learn More')}</Button>
            </NavLink>
          </Flex>
        </Flex>
        
      </Flex>
    </BgWrapper>
  )
}

export default Hero