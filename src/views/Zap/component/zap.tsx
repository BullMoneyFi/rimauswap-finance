import React, { useCallback, useEffect, useMemo, useState  } from 'react'
import { CurrencyAmount, Token } from '@rimauswap-sdk/sdk'
import { Button, Text, ArrowDownIcon, Box, Heading, useModal, useMatchBreakpoints } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import SwapWarningTokens from 'config/constants/swapWarningTokens'
import { getAddress } from 'utils/addressHelpers'
import SwapWarningModal from 'views/Swap/components/SwapWarningModal'
import { AutoColumn } from '../../../components/Layout/Column'
import CurrencyInputPanel from '../../../components/CurrencyInputPanel'
import { AutoRow } from '../../../components/Layout/Row'
import ConnectWalletButton from '../../../components/ConnectWalletButton'
import useActiveWeb3React from '../../../hooks/useActiveWeb3React'
import { useCurrency, useAllTokens } from '../../../hooks/Tokens'
import useWrapCallback, { WrapType } from '../../../hooks/useWrapCallback'
import { Field } from '../../../state/swap/actions'
import { StyledHeader, Wrapper, ArrowWrapper } from '../styleds'
import {
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from '../../../state/swap/hooks'
import { useExpertModeManager } from '../../../state/user/hooks'
import { maxAmountSpend } from '../../../utils/maxAmountSpend'
import Page from '../../Page'





const Zap: React.FC = () => {
  const loadedUrlParams = useDefaultsFromURLSearch()

  const { t } = useTranslation()
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId),
  ]
  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c instanceof Token) ?? [],
    [loadedInputCurrency, loadedOutputCurrency],
  )

  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useAllTokens()
  const importTokensNotInDefault =
    urlLoadedTokens &&
    urlLoadedTokens.filter((token: Token) => {
      return !(token.address in defaultTokens)
    })

  const { account } = useActiveWeb3React()

  // for expert mode
  const [isExpertMode] = useExpertModeManager()

  // swap state
  const { independentField, typedValue, recipient } = useSwapState()
  const { v2Trade, currencyBalances, parsedAmount, currencies } = useDerivedSwapInfo()

  const {
    wrapType,
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue)
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE
  const trade = showWrap ? undefined : v2Trade

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
      }

  const { onSwitchTokens, onCurrencySelection, onUserInput, onChangeRecipient } = useSwapActionHandlers()
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput],
  )
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value)
    },
    [onUserInput],
  )

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ''
      : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }  
  
  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(currencyBalances[Field.INPUT])
  const atMaxAmountInput = Boolean(maxAmountInput && parsedAmounts[Field.INPUT]?.equalTo(maxAmountInput))

  // swap warning state
  const [swapWarningCurrency, setSwapWarningCurrency] = useState(null)
  const [onPresentSwapWarningModal] = useModal(<SwapWarningModal swapCurrency={swapWarningCurrency} />)

  const shouldShowSwapWarning = (swapCurrency) => {
    const isWarningToken = Object.entries(SwapWarningTokens).find((warningTokenConfig) => {
      const warningTokenData = warningTokenConfig[1]
      const warningTokenAddress = getAddress(warningTokenData.address)
      return swapCurrency.address === warningTokenAddress
    })
    return Boolean(isWarningToken)
  }

  useEffect(() => {
    if (swapWarningCurrency) {
      onPresentSwapWarningModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapWarningCurrency])

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      onCurrencySelection(Field.INPUT, inputCurrency)
      const showSwapWarning = shouldShowSwapWarning(inputCurrency)
      if (showSwapWarning) {
        setSwapWarningCurrency(inputCurrency)
      } else {
        setSwapWarningCurrency(null)
      }
    },
    [onCurrencySelection],
  )

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toExact())
    }
  }, [maxAmountInput, onUserInput])

  const handleOutputSelect = useCallback(
    (outputCurrency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency)
      const showSwapWarning = shouldShowSwapWarning(outputCurrency)
      if (showSwapWarning) {
        setSwapWarningCurrency(outputCurrency)
      } else {
        setSwapWarningCurrency(null)
      }
    },

    [onCurrencySelection],
  )

  // const [onPresentImportTokenWarningModal] = useModal(
  //   <ImportTokenWarningModal tokens={importTokensNotInDefault} onCancel={() => history.push('/swap/')} />,
  // )

  useEffect(() => {
    // if (importTokensNotInDefault.length > 0) {
    //   onPresentImportTokenWarningModal()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importTokensNotInDefault.length])

  const isShow = true;
  const inputDisabled = true;

  return (
    <Page>
      <StyledHeader>
        <Heading as="h1" fontSize="24px !important" scale="md">
          {t('Zap helps token conversion')}
        </Heading>
        <Text>{t('Zap uses pancakeswap *no extra fee')}</Text>
      </StyledHeader>
      <Wrapper id="swap-page">
        <AutoColumn gap={isMobile?'sm':'md'}>
          <CurrencyInputPanel
            isSwap={isShow}
            label={ t('From')}
            value={formattedAmounts[Field.INPUT]}
            showMaxButton={!atMaxAmountInput}
            currency={currencies[Field.INPUT]}
            onUserInput={handleTypeInput}
            onMax={handleMaxInput}
            onCurrencySelect={handleInputSelect}
            otherCurrency={currencies[Field.OUTPUT]}
            id="zap-currency-input"
          />
          <AutoColumn justify="space-between">
            <AutoRow justify={isExpertMode ? 'space-between' : 'center'} style={{ padding: '0 1rem' }}>
              <ArrowWrapper clickable>
                <ArrowDownIcon
                  width="24px"
                  onClick={() => {
                    onSwitchTokens()
                  }}
                  color={currencies[Field.INPUT] && currencies[Field.OUTPUT] ? 'primary' : 'text'}
                />
              </ArrowWrapper>
              {recipient === null && !showWrap && isExpertMode ? (
                <Button variant="text" id="add-recipient-button" onClick={() => onChangeRecipient('')}>
                  {t('+ Add a send (optional)')}
                </Button>
              ) : null}
            </AutoRow>
          </AutoColumn>
          <CurrencyInputPanel
            isSwap={isShow}
            value={formattedAmounts[Field.OUTPUT]}
            onUserInput={handleTypeOutput}
            label={t('To (estimated)')}
            inputDisabled= {inputDisabled}
            showMaxButton={false}
            currency={currencies[Field.OUTPUT]}
            onCurrencySelect={handleOutputSelect}
            otherCurrency={currencies[Field.INPUT]}
            id="zap-currency-output"
          />
        </AutoColumn>
        <Box mt="1rem">
          {
            !account ? (
              <ConnectWalletButton width="100%" />
            ):<Button
              variant="primary"
              // onClick={approveCallback}
              // disabled={approval !== ApprovalState.NOT_APPROVED || approvalSubmitted}
              width="100%"
            >
              {t('zap')}
            </Button>
          }
        </Box>
      </Wrapper>
    </Page>
  )
}

export default Zap