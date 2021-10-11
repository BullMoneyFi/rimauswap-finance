import React, { useCallback, useEffect, useMemo, useState  } from 'react'
import { CurrencyAmount, Token } from '@rimauswap-sdk/sdk'
import { Button, Text, ArrowDownIcon, Box, Heading, useModal, useMatchBreakpoints, Link, Radio } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import SwapWarningTokens from 'config/constants/swapWarningTokens'
import { getAddress } from 'utils/addressHelpers'
import { NavLink } from 'react-router-dom'
import SwapWarningModal from 'views/Swap/components/SwapWarningModal'
import { AutoColumn } from '../../../../components/Layout/Column'
import CurrencyInputPanel from '../../../../components/CurrencyInputPanel'
import { AutoRow } from '../../../../components/Layout/Row'
import ConnectWalletButton from '../../../../components/ConnectWalletButton'
import useActiveWeb3React from '../../../../hooks/useActiveWeb3React'
import { useCurrency, useAllTokens } from '../../../../hooks/Tokens'
import useWrapCallback, { WrapType } from '../../../../hooks/useWrapCallback'
import { Field } from '../../../../state/swap/actions'
import { StyledHeader, Wrapper, ZapPollSection, ZapPollRow, ZapPollCol, MaxButton, InputRow } from '../../styleds'
import { Input as NumericalInput } from '../../../../components/CurrencyInputPanel/NumericalInput'

import {
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from '../../../../state/swap/hooks'
import { useExpertModeManager } from '../../../../state/user/hooks'
import { maxAmountSpend } from '../../../../utils/maxAmountSpend'
import Page from '../../../Page'


const ZapPoolDetail: React.FC = () => {
  const loadedUrlParams = useDefaultsFromURLSearch()
  const [type, setType] = useState('DEPOSIT');
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
  const inputDisabled = false;
  const disableCurrencySelect = false;

  const handleChange = (value) => {
    setType(value);
  };

  return (
    <Page>
      <StyledHeader>
        <Heading as="h1" fontSize="18px !important" scale="md">
          {t('Auto-Compounding Performance fee to RIMAU')}
        </Heading>
        <Text>{t('Redistribution of fees')}</Text>
      </StyledHeader>
      <Wrapper id="swap-page" style={{ width: '100%', flex: 1, height: '100%', padding: 20 }}>
        <ZapPollSection>
          <ZapPollRow>
            <ZapPollCol className="text-left">
              <span>
                APY
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </span>
            </ZapPollCol>
            <ZapPollCol className="text-center">
              <span>82.12%</span>
            </ZapPollCol>
            <ZapPollCol className="text-right">
              <span />
            </ZapPollCol>
          </ZapPollRow>
          <ZapPollRow>
            <ZapPollCol className="text-left">
              <span>Deposit</span>
            </ZapPollCol>
            <ZapPollCol className="text-center">
            <span>0.000</span>
            </ZapPollCol>
            <ZapPollCol className="text-right">
            <span>BUNNY</span>
            </ZapPollCol>
          </ZapPollRow>
          <ZapPollRow>
            <ZapPollCol className="text-left">
              <span>Profit</span>
            </ZapPollCol>
            <ZapPollCol className="text-center">
            <span>0.000 BUNNY</span>
            </ZapPollCol>
            <ZapPollCol className="text-right">
            <span><Button scale="sm">CLAIM</Button></span>
            </ZapPollCol>
          </ZapPollRow>
          <ZapPollRow>
            <ZapPollCol className="text-left">
              <span>Contract</span>
            </ZapPollCol>
            <ZapPollCol className="text-center">
              <span />
            </ZapPollCol>
            <ZapPollCol className="text-right">
            <span><NavLink to="/zap">Click to view contract</NavLink></span>
            </ZapPollCol>
          </ZapPollRow>
        </ZapPollSection>
        <ZapPollSection>
          <ZapPollRow>
            <ZapPollCol className="text-left">
              <span>
                <Button scale="md" variant="text" onClick={()=>handleChange('DEPOSIT')} className={`typeOption ${type === "DEPOSIT"? 'active' : null}`} >DEPOSIT</Button>
                <Button scale="md" variant="text" onClick={()=>handleChange('WITHDRAW')} className={`typeOption ${type === "WITHDRAW"? 'active' : null}`} >WITHDRAW</Button>
              </span>
            </ZapPollCol>
            <ZapPollCol className="text-right">
            <span>0.5% fee for withdrawals within 3 days</span>
            </ZapPollCol>
          </ZapPollRow>
          <ZapPollRow>
            <ZapPollCol className="text-center" style={{width:"100%", justifyContent:'center', }}>
            <InputRow selected={disableCurrencySelect}>
              <NumericalInput
                isSwap={isShow}
                className="token-amount-input"
                value={formattedAmounts[Field.INPUT]}
                disabled = { inputDisabled }
                onUserInput={(val) => handleTypeInput(val)}
              />
              <Text id="pair">RIMAU</Text>
              <MaxButton>
                {account && currencies[Field.INPUT] && !atMaxAmountInput && (
                  <Button onClick={handleMaxInput} scale="sm" variant="text">
                    MAX
                  </Button>
                )}
              </MaxButton> 
            </InputRow>
            </ZapPollCol>
          </ZapPollRow>
          
        </ZapPollSection>
        <ZapPollSection>
          <ZapPollRow>
            <ZapPollCol className="text-center" style={{width:"100%", justifyContent:'center'}}>
                <Text style={{marginBottom:10}}>YOUR BALANCE</Text>   
                <Heading style={{marginBottom:10}}>$0.000</Heading>
                <Button style={{marginBottom:10}} scale="md" variant="primary" >Connect Wallet</Button>
            </ZapPollCol>
          </ZapPollRow>
        </ZapPollSection>
      </Wrapper>
    </Page>
  )
}

export default ZapPoolDetail