import React from 'react'
import { Flex, Text, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { getExternalLinkWithDomain } from 'utils/getExternalLinkWithDomain'


const BannerMain = styled.div`
text-align: center;
`

const BannerWrapper = styled.div`
  background: linear-gradient(180deg, rgba(136, 101, 235, 0.5) 0%, rgba(136, 101, 235, 0.18) 100%);
  backdrop-filter: blur(28px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-top: 10px;
  margin:10px 0px;
  padding-bottom: 10px;
  width:100%;
  text-align: center;
  padding-right: 20px;
  .right-image{
    display:none;
    img{
      height:100%;
    }
  }
  .link-href {
    color: ${({ theme }) => theme.isDark? '#F26E0D': '#F26E0D'}
  }
  .info-text {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  .info-text-title {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 10px 0px;
    padding: 25px;
    width:100%;
    height:100%;
    .right-image{
      display:block;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 5px 0px;
    padding: 15px;
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
          flexDirection={['column', 'column', 'column', 'column']}
          flexWrap={['wrap', 'wrap', 'wrap', 'wrap']}
          alignItems={['flex-start', null, null, 'stretch']}
          justifyContent="flex-start"
          > 
          <Flex
          flexDirection="column"
          flex={["100", "100", "100", "100"]}>
            <BannerWrapper>
              <Flex
                position="relative"
                flexDirection='row'
                alignItems={['center', null, null, 'center']}
                justifyContent="center"
                > 
                <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'flex-start'}>
                  <Text className="info-text-title" textAlign="left" bold fontSize="20px" fontWeight="700" color="textSubtle" mb="10px">
                  {t('RimauSwap Rebooted')}
                  </Text>
                  <Text className="info-text" textAlign="left" fontSize="14px" fontWeight="500"  color="textSubtle" mb="px">
                      {t('RimauSwap is ‘Rebooted’ with improved clarity in serving the underprivileged. Existing liquidity farms have been decommissioned. Existing stakers can unstake from respective farm in the ‘Finished Farms’ listing by toggling the “Live | Finished” button. Unstaked RIMAUs can be staked in Belang Pool to continue earning more RIMAUs.')}
                  </Text>
                </Flex>
              </Flex>
            </BannerWrapper> 
          </Flex>
          <Flex
          flexDirection={['column', 'column', 'row', 'row']}
          flex={["100", "100", "100", "100"]}>
            <Flex
            flexDirection="column"
            mr={[null, null, '10px', '10px']}
            flex={["100", "100", "100", "100"]}>
              <BannerWrapper>
                <Flex
                  position="relative"
                  flexDirection={['row', null, null, 'row']}
                  alignItems={['center', null, null, 'center']}
                  justifyContent="center"
                  > 
                  <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'flex-start'}>
                    <Text className="info-text-title" textAlign="left" bold fontSize="20px" fontWeight="700"  color="textSubtle" mb="10px">
                      {t('Get RIMAU, Help The Underprivileged')}
                      </Text>
                    <Text className="info-text" textAlign="left" fontSize="14px" fontWeight="500"  color="textSubtle" mb="px">  
                      {t('Acquire RIMAU now & help populate the ‘RIMAU DeFi Farm’. Proceed from DeFi Yield Farming & Portfolio Management is used to fund ongoing ESG charity programs benefitting the underprivileged, sustainably.')}
                      <span className="link-href" style={{fontWeight:800,paddingLeft: 4, textDecoration: 'underline'}}>
                        <a href="https://docs-en.rimauswap.finance/#rimau-defi-farm" rel="noreferrer" target="_blank">{t('Learn More')} </a>
                      </span>
                    </Text>
                  </Flex>
                </Flex>
              </BannerWrapper> 
            </Flex>
            <Flex
            flexDirection="column"
            ml={[null, null, '10px', '10px']}
            flex={["100", "100", "100", "100"]}>
              <BannerWrapper>
                <Flex
                  position="relative"
                  flexDirection={['row', null, null, 'row']}
                  alignItems={['center', null, null, 'center']}
                  justifyContent="center"
                  > 
                  <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'flex-start'}>
                    <Text className="info-text-title" textAlign="left" bold fontSize="20px" fontWeight="700"  color="textSubtle" mb="10px">
                      {t('Appreciation-Intensive Tokenomics')}
                    </Text>
                    <Text className="info-text" textAlign="left" fontSize="14px" fontWeight="500"  color="textSubtle" mb="px">
                      {t('Unlike other DeFi projects, the native RIMAU token is designed with an Appreciation-Intensive Tokenomics with active token buyback from market for burning, resulting in high value retention, and appreciation over time.')}
                        <span className="link-href" style={{fontWeight:800,paddingLeft: 4, textDecoration: 'underline'}}>
                        <a href="https://docs-en.rimauswap.finance/rimau-tokenomics#appreciation-intensive-tokenomics" rel="noreferrer" target="_blank">{t('Learn More')} </a>
                      </span>
                    </Text>
                  </Flex>
                </Flex>
              </BannerWrapper> 
            </Flex>
          </Flex>
        </Flex>
    </BannerMain>
  )
}
export default Farmstitle
