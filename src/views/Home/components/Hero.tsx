import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Text, Button, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Link, NavLink } from 'react-router-dom'
import { getExternalLinkWithDomain } from 'utils/getExternalLinkWithDomain'
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
    ${({ theme }) => theme.mediaQueries.sm} {
      display:flex;
      text-align: center
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
  text-align: center;
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

  const replaceLink = () =>{
    const text = t('Support our %Vision% by acquiring RIMAU tokens with USDT and stake them in Belang Pool to earn more RIMAUs. USDT is extracted to generate gains through DeFi Yield Farming and Portfolio Management. Proceed is used to fund ESG charity initiatives to help the underprivileged and to buy back RIMAUs from open market and burned.');
    const vision = text.split("%Vision%");
    const visionLink = getExternalLinkWithDomain('https://docs-en.rimauswap.finance/#our-vision', 'rimauswap.finance', false);
    return <span>{vision[0]} <a style={{ textDecoration: 'underline' }} href={visionLink} rel="noreferrer" target="_blank">{t('Vision')}</a> {vision[1]}</span>;
  }

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
            {t('Support RIMAU DeFi Farm, Help The Underprivileged')}
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
            { replaceLink()}
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