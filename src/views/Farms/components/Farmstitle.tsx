import React from 'react'
import { Flex, Text, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import styled, { useTheme } from 'styled-components'


const BannerMain = styled.div`
margin: 10px;
text-align: center;
`

const BannerWrapper = styled.div`
  background:${({ theme }) => theme.colors.gradients.gold};
  border-radius: 30px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
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
    .right-image{
      display:block;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 10px;
    margin: 10px;
    padding: 25px;
    .right-image{
      display:block;
    }
  }
`

const Farmstitle = () => {
  const { t, currentLanguage } = useTranslation()
  const { isXs, isSm, isMd } = useMatchBreakpoints()
  const theme = useTheme()
 
  const getLink = (currentLang) =>{
    return currentLang === 'en' ? 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau' : currentLang === 'zh-cn' ? 'https://docs-zh.rimauswap.finance/products/rimau-yield-farming' : currentLang === 'my' || currentLang === 'id' ? 'https://docs-bm.rimauswap.finance/produks/berladang-farming' : 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau'
   }

   const getText1 = () => {
    const text = t('RimauSwap has been ‘%Rebooted%’ with enhanced clarity. Existing RimauSwap V1 farms have been decommissioned (RIMAU reward payout stopped).');
    const headerText = text.split("%Rebooted%");
    const headerLink = "https://rimauswap.farm/" // currentLanguage.code === 'en' ? 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau' : (currentLanguage.code === 'my' || currentLanguage.code === 'id') ? 'https://docs-bm.rimauswap.finance/produks/berladang-farming' :  currentLanguage.code === 'zh-cn' ? 'https://docs-zh.rimauswap.finance/products/rimau-yield-farming' : 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau';

    return <span>{headerText[0]} <a style={{color: theme.colors.textSubtle, textDecoration: 'underline'}} href={headerLink} rel="noreferrer" target="_blank">RimauSwap Rebooted</a> {headerText[1]} </span>;
  }

  const getText2 = () => {
    const text = t('Existing stakers can unstake from decommissioned farms listed below. You may stake your unstaked RIMAU tokens in our %Belang Pool% to continue earning RIMAUs.');
    const headerText = text.split("%Belang Pool%");
    const headerLink = "https://rimauswap.farm/pools" // currentLanguage.code === 'en' ? 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau' : (currentLanguage.code === 'my' || currentLanguage.code === 'id') ? 'https://docs-bm.rimauswap.finance/produks/berladang-farming' :  currentLanguage.code === 'zh-cn' ? 'https://docs-zh.rimauswap.finance/products/rimau-yield-farming' : 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau';

    return <span>{headerText[0]} <a style={{color: theme.colors.textSubtle, textDecoration: 'underline'}} href={headerLink} rel="noreferrer" target="_blank">RimauSwap Rebooted</a> {headerText[1]} </span>;
  }

  return (
    <BannerMain>
      <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems={['flex-start', null, null, 'flex-start']}
          justifyContent="flex-start"
          > 
          <Flex
          flexDirection="column"
          width="100%"
          ml={[null, null, null, '10px']}
          mr={[null, null, null, '10px']}
          flex={["100", "100", "100", "60"]}>
            <BannerWrapper>
              <Flex
                position="relative"
                flexDirection={['row', null, null, 'row']}
                alignItems={['center', null, null, 'center']}
                justifyContent="center"
                > 
                <Flex flex="1" width="100%" flexDirection="column" alignItems={isXs || isSm || isMd ? "flex-start" :'center'}>
                  {/* <Text textAlign="left" bold fontSize="18px" style={{opacity:0.8}} color="black" mb="10px">
                    {t('Appreciation-Intensive Tokenomics')}
                  </Text> */}
                  <Text textAlign="left" fontSize="14px" style={{opacity:0.8}} color="black" mb="px">
                    {
                      getText1()
                    }
                  </Text>
                  <Text marginTop="12px" textAlign="left" fontSize="14px" style={{opacity:0.8}} color="black" mb="px">
                    {
                      getText2()
                    }
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
