import React from 'react'
import styled, { keyframes, useTheme } from 'styled-components'
import { Flex, Heading, Text, Button, useMatchBreakpoints, LinkExternal, Link } from '@rimauswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
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
  text-align:right;
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
  
  const theme  = useTheme()

  const replaceLink = (key:string, links: string[]) => {
    const texts = [];
    let keyText = t(key);
    const generatedLinks = [];
    links.forEach(l => {
      texts.push(keyText.split(l)[0])
      keyText = keyText.split(l)[1]
      generatedLinks.push(<a href={l}>log in</a>)
    })
    texts.push(keyText)
    return  <div>{texts.map((txt, i) => txt + generatedLinks[i] )}</div>;
  }

  const getRebootedHeader = () => {
    const text = t('RimauSwap V1 has been enhanced to %RimauSwap Rebooted%.');
    const headerText = text.split("%RimauSwap Rebooted%");
    const headerLink = "https://rimauswap.farm/" // currentLanguage.code === 'en' ? 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau' : (currentLanguage.code === 'my' || currentLanguage.code === 'id') ? 'https://docs-bm.rimauswap.finance/produks/berladang-farming' :  currentLanguage.code === 'zh-cn' ? 'https://docs-zh.rimauswap.finance/products/rimau-yield-farming' : 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau';

    return <span>{headerText[0]} <a style={{color: theme.colors.textSubtle, textDecoration: 'underline'}} href={headerLink} rel="noreferrer" target="_blank">RimauSwap Rebooted</a>.</span>;
  }

  // const getRebootedText = () => {

  //   const text = t('RimauSwap V1 has been enhanced to %RimauSwap Rebooted%.');
  //   const rebootedText = text.split("%RimauSwap Rebooted%");
  //   const rebootedLink = "https://docs-en.rimauswap.finance/"

  //   return <span>{rebootedText[0]} <a style={{color: theme.colors.textSubtle, textDecoration: 'underline'}} href={headerLink} rel="noreferrer" target="_blank">RimauSwap Rebooted</a>.</span>;

  //   <Text textAlign="left" fontSize="16px" style={{opacity:0.5}} color="textSubtle" mb="20px">
  //   {t('We have re-strategize the RimauSwap Public Benefit Project to make it even better. Now we can realize the project vision sooner with clearer ESG Initiatives. [Learn More]')}
  // </Text>

  // }

  
  return (
    <BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column', null, 'row', 'row']}
        alignItems={['flex-end', null, 'center', 'center']}
        justifyContent="center"
      >
        <Flex 
          flex={[null, null, null, '55']}
          alignItems={['center', null, null, 'center']}
          flexDirection="column">
          <Heading scale="xxl" color="textSubtle" fontSize={isXs || isSm?  "30px !important" : isMd? "40px !important" : "30px !important"} mb="20px">
            { getRebootedHeader()}
          </Heading>
          <Text textAlign="left" fontSize="16px" style={{opacity:0.5}} color="textSubtle" mb="20px">
            {t('We have re-strategize the RimauSwap Public Benefit Project to make it even better. Now we can realize the project vision sooner with clearer ESG Initiatives.')}
          </Text>
          <Flex flexDirection={['row', null, 'row', null]}>
          <LinkExternal href='https://docs-en.rimauswap.finance/'>Learn More</LinkExternal>
            <Link external href="https://rimauswap.farm/buy-rimau">
                <Button scale="md" variant="danger">{t('Get RIMAU Token')}</Button>
            </Link>
          </Flex>
        </Flex>
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
      </Flex>
    </BgWrapper>
  )
}

export default Hero