import React from 'react'
import { Flex, Text, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { getExternalLinkWithDomain } from 'utils/getExternalLinkWithDomain'


const BannerMain = styled.div`
margin: 10px;
text-align: center;
`

const BannerWrapper = styled.div`
  background:${({ theme }) => theme.colors.gradients.gold};
  border-radius: 30px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  margin-left: 10px;
  padding-bottom: 10px;
  width:100%;
  text-align: center;
  padding-right: 20px;
  margin-bottom:10px;
  .right-image{
    display:none;
    img{
      height:100%;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 25px;
    width:100%;
    height:100%;
    .right-image{
      display:block;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 10px;
    margin: 10px;
    padding: 25px;
    align-items: flex-start;
    .right-image{
      display:block;
    }
  }
`

const Farmstitle = () => {
  const { t, currentLanguage } = useTranslation()
  const { isXs, isSm, isMd } = useMatchBreakpoints()
 
  const getLink = (currentLang) =>{
    return currentLang === 'en' ? getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-farm-rimau', 'rimauswap.finance', false) : currentLang === 'zh-cn' ? getExternalLinkWithDomain('https://docs-zh.rimauswap.finance/products/rimau-yield-farming', 'rimauswap.finance', false) : currentLang === 'my' || currentLang === 'id' ? getExternalLinkWithDomain('https://docs-bm.rimauswap.finance/produks/berladang-farming', 'rimauswap.finance', false) : getExternalLinkWithDomain('https://docs-en.rimauswap.finance/products/how-to-farm-rimau', 'rimauswap.finance', false)
   }

  return (
    <BannerMain>
      <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems={['flex-start', null, null, 'stretch']}
          justifyContent="flex-start"
          > 
          <Flex
          flexDirection="column"
          width="100%"
          mr={[null, null, null, '10px']}
          flex={["100", "100", "100", "100"]}>
            <BannerWrapper>
              <Flex
                position="relative"
                flexDirection='row'
                alignItems={['center', null, null, 'center']}
                justifyContent="center"
                > 
                <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'center'}>
                  <Text textAlign="left" bold fontSize="18px" style={{opacity:0.8}} color="black" mb="10px">
                  {t('RimauSwap Rebooted')}
                  </Text>
                  <Text textAlign="left" fontSize="14px" style={{opacity:0.8}} color="black" mb="px">
                      {t('RimauSwap is ‘Rebooted’ with improved clarity in serving the underprivileged. Existing liquidity farms have been decommissioned. Existing stakers can unstake from respective farm in the ‘Finished Farms’ listing by toggling the “Live | Finished” button. Unstaked RIMAUs can be staked in Belang Pool to continue earning more RIMAUs.')}
                      
                  </Text>
                </Flex>
              </Flex>
            </BannerWrapper> 
          </Flex>
          <Flex
          flexDirection="column"
          width="100%"
          ml={[null, null, null, '10px']}
          mr={[null, null, null, '10px']}
          flex={["100", "100", "100", "100"]}>
            <BannerWrapper>
              <Flex
                position="relative"
                flexDirection={['row', null, null, 'row']}
                alignItems={['center', null, null, 'center']}
                justifyContent="center"
                > 
                <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'center'}>
                  <Text textAlign="left" bold fontSize="18px" style={{opacity:0.8}} color="black" mb="10px">
                    {t('Get RIMAU, Help The Underprivileged')}
                    </Text>
                  <Text textAlign="left" fontSize="14px" style={{opacity:0.8}} color="black" mb="px">  
                    {t('Acquire RIMAU now & help populate the ‘RIMAU DeFi Farm’. Proceed from DeFi Yield Farming & Portfolio Management is used to fund ongoing ESG charity programs benefitting the underprivileged, sustainably')}
                    <span className="Linkhref" style={{fontWeight:800,paddingLeft: 4, textDecoration: 'underline'}}>
                      <a href={getLink(currentLanguage?.code)} rel="noreferrer" target="_blank">{t('Learn how')} </a>
                    </span>
                  </Text>
                </Flex>
              </Flex>
            </BannerWrapper> 
          </Flex>
          <Flex
          flexDirection="column"
          width="100%"
          ml={[null, null, null, '10px']}
          mr={[null, null, null, '10px']}
          flex={["100", "100", "100", "100"]}>
            <BannerWrapper>
              <Flex
                position="relative"
                flexDirection={['row', null, null, 'row']}
                alignItems={['center', null, null, 'center']}
                justifyContent="center"
                > 
                <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'center'}>
                  <Text textAlign="left" bold fontSize="18px" style={{opacity:0.8}} color="black" mb="10px">
                    {t('Appreciation-Intensive Tokenomics')}
                  </Text>
                  <Text textAlign="left" fontSize="14px" style={{opacity:0.8}} color="black" mb="px">
                    {t('Unlike other DeFi projects, the native RIMAU token is designed with an Appreciation-Intensive Tokenomics with active token buyback from market for burning, resulting in high value retention, and appreciation over time')}
                      <span className="Linkhref" style={{fontWeight:800,paddingLeft: 4, textDecoration: 'underline'}}>
                      <a href={getLink(currentLanguage?.code)} rel="noreferrer" target="_blank">{t('Learn how')} </a>
                    </span>
                  </Text>
                </Flex>
              </Flex>
            </BannerWrapper> 
          </Flex>
        </Flex>
    </BannerMain>
  )
}
export default Farmstitle
