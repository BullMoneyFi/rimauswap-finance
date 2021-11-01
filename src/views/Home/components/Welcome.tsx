import React from 'react'
import { Flex, useMatchBreakpoints, Heading, Text } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { getExternalLinkWithDomain } from 'utils/getExternalLinkWithDomain'

const BannerWrapper = styled.div`
  background:${({ theme }) => theme.colors.gradients.gold};
  border-radius: 30px;
  overflow: hidden;
  padding-left: 30px;
  padding-top: 30px;
  text-align: left;
  padding-right: 30px;
  margin-bottom:20px;
  .right-image{
    display:none;
    img{
      height:100%;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom:28px;
    padding-left:30px;
    padding-right:30px;
    .right-image{
      display:block;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom:40px;
    padding-left:60px;
    padding-right:60px;
    .right-image{
      display:block;
    }
  }
`

const Welcome = () => {
  const { t, currentLanguage } = useTranslation()
  const { isXs, isSm, isMd } = useMatchBreakpoints()
  const theme = useTheme();

  const replaceLink = () =>{
    const text = t('The First DeFi Public Benefit Project on Binance Smart Chain with Appreciation Intensive Tokenomics & DeFi Farm Funded Sustainable ESG to help the underprivileged');
    // const farm = text.split("%Farm%");
    // const stake = farm[1].split("%Stake%");
    // const farmLink = currentLanguage.code === 'en' ? getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-farm-rimau', 'rimauswap.finance', false) : (currentLanguage.code === 'my' || currentLanguage.code === 'id') ? getExternalLinkWithDomain('https://docs-bm.rimauswap.finance/produks/berladang-farming', 'rimauswap.finance', false) :  currentLanguage.code === 'zh-cn' ? getExternalLinkWithDomain('https://docs-zh.rimauswap.finance/products/rimau-yield-farming', 'rimauswap.finance', false) : getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-farm-rimau', 'rimauswap.finance', false);

    // const stakeLink = currentLanguage.code === 'en' ? getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-stake-rimau', 'rimauswap.finance', false) : (currentLanguage.code === 'my' || currentLanguage.code === 'id') ? getExternalLinkWithDomain('https://docs-bm.rimauswap.finance/produks/cagar-rimau-staking', 'rimauswap.finance', false) :  currentLanguage.code === 'zh-cn' ? getExternalLinkWithDomain('https://docs-zh.rimauswap.finance/products/rimau-staking', 'rimauswap.finance', false) : getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-stake-rimau', 'rimauswap.finance', false);

    // return <span>{farm[0]} <a style={{color:theme.theme.colors.background}} href={farmLink} rel="noreferrer" target="_blank">{t('Farm')}</a> {stake[0]} <a style={{color:theme.theme.colors.background}} href={stakeLink} rel="noreferrer" target="_blank">{t('Stake')}</a> {stake[1]}</span>;
    return <span>{text}</span>
  }

  return (
    <BannerWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-start', null, null, 'flex-start']}
        justifyContent="flex-start"
        style={{marginBottom:20}}
        >
          
        <Flex flex="1" width="100%" flexDirection="column">
            {/* {
              isXs || isSm ?
                <img src={`/images/Merdeka/m-${currentLanguage.code}.png`} style={{width: '100%', margin:'auto'}}  alt={t('Merdeka')} />
              : 
                <img src={`/images/Merdeka/d-${currentLanguage.code}.png`} style={{width: '100%', margin:'auto'}} alt={t('Merdeka')} />
            } */}
          <Heading scale="xxl" color="textSubtle" fontSize={isXs || isSm?  "25px !important" :  isMd? "30px !important" : "40px !important"}  mb="20px">
           {replaceLink()}
          </Heading>
          <Text textAlign="left" fontSize="18px" style={{opacity:0.5}} color="textSubtle" mb="px">
            {t('Let Us Grow Together & Build The Sustainable ESG For Common Good!')}
          </Text>
        </Flex>
      </Flex>
    </BannerWrapper> 
  )
}
export default Welcome
