import React from 'react'
import { Flex, Text, Button, Link, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { NavLink } from 'react-router-dom'
import { CompositeImageProps, getImageUrl, getSrcSet } from '../CompositeImage'
import PurpleWordHeading from '../PurpleWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

const SectionText = styled.div`
  position:relative;
  padding-top:80px;
  padding-left:80px;
  margin-left: -80px;
  width: ${`calc(100% + 80px)`};
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
    width: 100%;
  }
  `
const SectionButtons = styled(Flex)`
  padding-left:0;
  flex-direction: column;
  *{
    width:100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left:78px;
    flex-direction: row;
    *{
      width:auto;
    }
  }
  .margin{
    margin-left:0px;
    margin-top:16px;
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-left:8px;
      margin-top:0px;
    }
  }
`


export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton?: SalesSectionButton
  secondaryButton?: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()
  const { isXs, isSm, isMd } = useMatchBreakpoints()
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props
  const imagePath = '/images/home/text-circle/'
  const imageSrc = 'text-circle'
  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column', null, reverse ? 'row-reverse' : 'row', reverse ? 'row-reverse' : 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex={["1", "1", "60", "70"]}
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          mb={["40px", null, "0", null]}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <SectionText>
            <img style={{position: 'absolute', top: 15, left: 25, width: '21%'}} src={`${imagePath}${imageSrc}.svg`}  alt="text" />
            {/* <PurpleWordHeading color="textSubtle"  fontSize={isXs || isSm?  "25px !important" : isMd? "30px !important" : "40px !important"} text={headingTranslatedText} /> */}
            <Text
              style={{
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '24px',
              letterSpacing: '0em',
              textAlign: 'left',
              }} mb="20px" color="textSubtle" >
      {headingTranslatedText}
      {/* <span style={{ color: theme.colors.secondary }}>{firstWord} </span>
      {remainingWords} */}
    </Text>
            <Text color="textSubtle" 
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '21px',
                textAlign: 'left',
                opacity: 0.5
                }}
              fontSize="16px" mb="20px">
              {bodyTranslatedText}
            </Text>
          </SectionText>
          <SectionButtons>
            {primaryButton? 
            <Link mr="16px" external={primaryButton.external} href={primaryButton.to}>
                <Button>
                  <img style={{ width: 32, marginRight: 10, border: '2px solid #ef932170', borderRadius: '100%' }} src={`${'/images/icon.svg'}`}  alt="text" />
                  
                  <Text color="card" bold fontSize="16px">
                    {t(primaryButton.text)}
                  </Text>
                </Button>
              </Link>: null}
              {
                secondaryButton?
                  <NavLink className="margin" exact  to={{pathname:secondaryButton.to}}  target="_blank">
                    <Button scale="md" external variant="secondary">{t('Learn More')}</Button>
                  </NavLink>
                :null
              }
          </SectionButtons>
          

        </Flex>
        <Flex
          flex={["1", "1", "40", "30"]}
          mb={['24px', '0', null, '0']}
        >
          <img src={getImageUrl(images.path, images.src)} srcSet={getSrcSet(images.path, images.src)} alt={images.alt} />
          {/* <CompositeImage {...images} /> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
