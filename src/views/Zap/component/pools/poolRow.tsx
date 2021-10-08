import React, { useCallback, useEffect, useMemo, useState  } from 'react'
import { CurrencyAmount, Token } from '@rimauswap-sdk/sdk'
import { PoolData } from 'state/info/types'
import { Button, Text, ArrowDownIcon, Flex, Box, Heading, useModal, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import SwapWarningTokens from 'config/constants/swapWarningTokens'
import { formatAmount } from 'views/Info/utils/formatInfoNumbers'
import { getAddress } from 'utils/addressHelpers'
import { DoubleCurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { LinkWrapper, PoolRowGrid } from '../../styleds'


interface PoolRowProps {
  poolData: PoolData
  ket?: any
}


const PoolRow: React.FC<PoolRowProps> = ({ poolData }) => {
  const { t } = useTranslation()
  return (
    <LinkWrapper to={`/zap/pool/${poolData.address}`}>
      <PoolRowGrid>
        <Flex className="curreny-name">
          {/* <TokenPairImage primaryToken={poolData.token0} secondaryToken={poolData.token1} mr="8px" width={40} height={40} /> */}
          <DoubleCurrencyLogo size={30} address0={poolData.token0.address} address1={poolData.token1.address} />
          <Box>
            <Text className="name" ml="8px">
              {poolData.token0.symbol}/{poolData.token1.symbol}
            </Text>
            <Text className="maximizer" ml="8px">
              {t('Boost!')}
            </Text>
          </Box>
        </Flex>
        <Flex className="curreny-apr-rate">
          <Box>
            <Text className="rate" ml="8px">
              110.50%
            </Text>
            <Text className="apr" ml="8px">
              
              APR 88.70%
            </Text>
          </Box>
        </Flex>
        <Flex className="total-balance-earn">
          <Box>
          <Text> {t('Earn')}</Text>
          <Text>CAKE + BUNNY</Text>
          </Box>
          <Box>
            <Text>{t('Balance')}</Text>
            <Text>${formatAmount(0.000)}</Text>
          </Box>
          <Box>
            <Text>{t('Total Deposit')}</Text>
            <Text>${formatAmount(6642053.44)}</Text>
          </Box>
         
        </Flex>
      </PoolRowGrid>
  </LinkWrapper>
  )
}

export default PoolRow