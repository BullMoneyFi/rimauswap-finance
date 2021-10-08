import React, { useState } from 'react'
import { Box, Button, Heading } from '@rimauswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Select, { OptionProps } from 'components/Select/Select'
import SearchInput from 'components/SearchInput'
import { FilterSection, LabelWrapper } from '../../styleds'

import PoolRow from './poolRow'





const ZapPools: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('default');
  const allPoolData = [
    {
        "address": "0x5160b9cfb4467d8b245f56e4b5bab25d557517ec",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0x55d398326f99059ff775485246999027b3197955",
            "name": "Tether USD",
            "symbol": "USDT"
        },
        "token0Price": 0.1166050224722849,
        "token1Price": 8.575959926920675,
        "volumeUSD": 389939.88292858494,
        "reservePrice": 637.6128436450892,
        "volumeUSDChange": 780.2073132266189,
        "volumeUSDWeek": 524126.77831000404,
        "volumeUSDChangeWeek": 228.95681045845313,
        "totalFees24h": 974.8497073214623,
        "totalFees7d": 1310.31694577501,
        "lpFees24h": 662.8978009785943,
        "lpFees7d": 891.0155231270069,
        "lpApr7d": 16.717935156574622,
        "liquidityUSD": 277905.9308803931,
        "liquidityUSDChange": -26.93716836687322,
        "liquidityToken0": 16133.015161289506,
        "liquidityToken1": 138356.0915236225
    },
    {
        "address": "0x18d82764d5806b2ec7df4e89f42d0c3d6eb145d4",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
            "name": "Wrapped BNB",
            "symbol": "WBNB"
        },
        "token0Price": 50.38798132654784,
        "token1Price": 0.019846002432987557,
        "volumeUSD": 111350.7867238432,
        "reservePrice": 285.23663141709255,
        "volumeUSDChange": 1297.8999545373501,
        "volumeUSDWeek": 150815.16234325967,
        "volumeUSDChangeWeek": 73.33689157573889,
        "totalFees24h": 278.376966809608,
        "totalFees7d": 377.0379058581492,
        "lpFees24h": 189.2963374305334,
        "lpFees7d": 256.3857759835414,
        "lpApr7d": 10.753331917202607,
        "liquidityUSD": 124321.44735666226,
        "liquidityUSDChange": -31.756429460228226,
        "liquidityToken0": 7206.014908807382,
        "liquidityToken1": 143.01058941233592
    },
    {
        "address": "0x434f4463a56e95feda02a47c1b2d13255fe38871",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "name": "Ethereum Token",
            "symbol": "ETH"
        },
        "token0Price": 424.7473233259195,
        "token1Price": 0.0023543409106610764,
        "volumeUSD": 73507.4436212302,
        "reservePrice": 650.6692370521818,
        "volumeUSDChange": 523.0420365890989,
        "volumeUSDWeek": 111523.37237019278,
        "volumeUSDChangeWeek": 34.97859433050149,
        "totalFees24h": 183.7686090530755,
        "totalFees7d": 278.80843092548196,
        "lpFees24h": 124.96265415609132,
        "lpFees7d": 189.5897330293277,
        "lpApr7d": 3.485852155047593,
        "liquidityUSD": 283596.60853832046,
        "liquidityUSDChange": -25.30510177376672,
        "liquidityToken0": 16564.31542478529,
        "liquidityToken1": 38.998045461666315
    },
    {
        "address": "0x54632e239c63da1973e63f66ce96077c8d15af2d",
        "token0": {
            "address": "0x55d398326f99059ff775485246999027b3197955",
            "name": "Tether USD",
            "symbol": "USDT"
        },
        "token1": {
            "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            "name": "BUSD Token",
            "symbol": "BUSD"
        },
        "token0Price": 0.9995222849052975,
        "token1Price": 1.0004779434154865,
        "volumeUSD": 70631.84084287264,
        "reservePrice": 370.44624219657794,
        "volumeUSDChange": 19961.964917604324,
        "volumeUSDWeek": 77708.77016293294,
        "volumeUSDChangeWeek": 2824.5063939802044,
        "totalFees24h": 176.5796021071816,
        "totalFees7d": 194.27192540733236,
        "lpFees24h": 120.07412943288348,
        "lpFees7d": 132.10490927698598,
        "lpApr7d": 4.266268516302158,
        "liquidityUSD": 161460.37333602956,
        "liquidityUSDChange": -5.166549672912872,
        "liquidityToken0": 80567.22644964843,
        "liquidityToken1": 80605.73302503406
    },
    {
        "address": "0xc1bed912ac46581f2927e60ef7e79a473faa6579",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
            "name": "BTCB Token",
            "symbol": "BTCB"
        },
        "token0Price": 6454.593381230398,
        "token1Price": 0.00015492842708077396,
        "volumeUSD": 35030.673085645656,
        "reservePrice": 312.40685769720403,
        "volumeUSDChange": 517.5610580010558,
        "volumeUSDWeek": 49920.829246821115,
        "volumeUSDChangeWeek": 117.36536449884476,
        "totalFees24h": 87.57668271411414,
        "totalFees7d": 124.80207311705279,
        "lpFees24h": 59.55214424559761,
        "lpFees7d": 84.86540971959589,
        "lpApr7d": 3.249859430584708,
        "liquidityUSD": 136163.6915991704,
        "liquidityUSDChange": -9.183508689330424,
        "liquidityToken0": 7899.572380236074,
        "liquidityToken1": 1.2238683234807006
    },
    {
        "address": "0xd74cd09b880b1b9cdd6e37ac535ecdcc5b1e0334",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
            "name": "Dogecoin",
            "symbol": "DOGE"
        },
        "token0Price": 0.02916975763434784,
        "token1Price": 34.28208120668389,
        "volumeUSD": 14618.874745482139,
        "reservePrice": 74.91939513338211,
        "volumeUSDChange": 744.8555260451601,
        "volumeUSDWeek": 24183.361594643,
        "volumeUSDChangeWeek": 831.7610855369013,
        "totalFees24h": 36.54718686370535,
        "totalFees7d": 60.4584039866075,
        "lpFees24h": 24.852087067319633,
        "lpFees7d": 41.1117147108931,
        "lpApr7d": 6.564864268133937,
        "liquidityUSD": 32653.897193337856,
        "liquidityUSDChange": -13.578654926799476,
        "liquidityToken0": 1884.2973199225012,
        "liquidityToken1": 64597.63373912
    },
    {
        "address": "0x47f6fa6a5192c5f9c06346a0d6aede5bd1f40f11",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
            "name": "Litecoin Token",
            "symbol": "LTC"
        },
        "token0Price": 21.26192218908363,
        "token1Price": 0.047032436254207693,
        "volumeUSD": 9198.487174457649,
        "reservePrice": 53.35931156473453,
        "volumeUSDChange": 721.9115908409638,
        "volumeUSDWeek": 12107.932422578928,
        "volumeUSDChangeWeek": 555.2227185516454,
        "totalFees24h": 22.99621793614412,
        "totalFees7d": 30.26983105644732,
        "lpFees24h": 15.637428196578002,
        "lpFees7d": 20.583485118384175,
        "lpApr7d": 4.614908713319123,
        "liquidityUSD": 23256.854530660275,
        "liquidityUSDChange": -13.819728044585444,
        "liquidityToken0": 1344.0350781121979,
        "liquidityToken1": 63.21324413473101
    },
    {
        "address": "0xf419cf360174e185575d04b045c8d18b59d2fa38",
        "token0": {
            "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "name": "Ethereum Token",
            "symbol": "ETH"
        },
        "token1": {
            "address": "0x55d398326f99059ff775485246999027b3197955",
            "name": "Tether USD",
            "symbol": "USDT"
        },
        "token0Price": 0.00027492025342961774,
        "token1Price": 3637.4184423484458,
        "volumeUSD": 1080.2587208166187,
        "reservePrice": 93.90328899426578,
        "volumeUSDChange": -19.763142684399927,
        "volumeUSDWeek": 6645.230273317975,
        "volumeUSDChangeWeek": -30.21862434574579,
        "totalFees24h": 2.700646802041547,
        "totalFees7d": 16.613075683294937,
        "lpFees24h": 1.8364398253882517,
        "lpFees7d": 11.296891464640558,
        "lpApr7d": 1.431054167060354,
        "liquidityUSD": 41162.151336425486,
        "liquidityUSDChange": 0.519518065981717,
        "liquidityToken0": 5.682481756624965,
        "liquidityToken1": 20669.563939856238
    },
    {
        "address": "0xde5c3dd19894b5a919bb68c323e447b0d4cec7d5",
        "token0": {
            "address": "0x55d398326f99059ff775485246999027b3197955",
            "name": "Tether USD",
            "symbol": "USDT"
        },
        "token1": {
            "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
            "name": "Wrapped BNB",
            "symbol": "WBNB"
        },
        "token0Price": 433.66505149040546,
        "token1Price": 0.0023059271125566464,
        "volumeUSD": 1029.9488751083263,
        "reservePrice": 60.02412118999229,
        "volumeUSDChange": -39.830944261718265,
        "volumeUSDWeek": 8593.62166415972,
        "volumeUSDChangeWeek": -27.267562793054406,
        "totalFees24h": 2.574872187770816,
        "totalFees7d": 21.4840541603993,
        "lpFees24h": 1.7509130876841545,
        "lpFees7d": 14.609156829071523,
        "lpApr7d": 2.911747851371762,
        "liquidityUSD": 26161.73660997867,
        "liquidityUSDChange": -12.53563522912804,
        "liquidityToken0": 13047.942384210359,
        "liquidityToken1": 30.08760410682768
    },
    {
        "address": "0x4aa9520e34f97ce991a3a6d1b9a5095cf6c4a611",
        "token0": {
            "address": "0x55d398326f99059ff775485246999027b3197955",
            "name": "Tether USD",
            "symbol": "USDT"
        },
        "token1": {
            "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
            "name": "BTCB Token",
            "symbol": "BTCB"
        },
        "token0Price": 55658.36576755834,
        "token1Price": 0.00001796675102133292,
        "volumeUSD": 615.0416449585464,
        "reservePrice": 95.67650140881062,
        "volumeUSDChange": -51.82141809012394,
        "volumeUSDWeek": 4701.320569447995,
        "volumeUSDChangeWeek": -29.285945432903475,
        "totalFees24h": 1.537604112396366,
        "totalFees7d": 11.753301423619988,
        "lpFees24h": 1.0455707964295289,
        "lpFees7d": 7.99224496806159,
        "lpApr7d": 0.9993507055867696,
        "liquidityUSD": 41700.9592143581,
        "liquidityUSDChange": 0.8891905845403596,
        "liquidityToken0": 20836.851802608864,
        "liquidityToken1": 0.37437052840588547
    },
    {
        "address": "0x277cf8ebecd8343612b4ebfc1070a40539d0046d",
        "token0": {
            "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "name": "Ethereum Token",
            "symbol": "ETH"
        },
        "token1": {
            "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
            "name": "Wrapped BNB",
            "symbol": "WBNB"
        },
        "token0Price": 0.11952890658364464,
        "token1Price": 8.366177091231185,
        "volumeUSD": 543.75525566346,
        "reservePrice": 86.43984595438582,
        "volumeUSDChange": -16.46317632703161,
        "volumeUSDWeek": 3274.5547416785557,
        "volumeUSDChangeWeek": -42.06501812569589,
        "totalFees24h": 1.3593881391586502,
        "totalFees7d": 8.186386854196389,
        "lpFees24h": 0.924383934627882,
        "lpFees7d": 5.566743060853544,
        "lpApr7d": 0.7704449536098282,
        "liquidityUSD": 37675.12855886366,
        "liquidityUSDChange": -13.336599025596167,
        "liquidityToken0": 5.192358203488101,
        "liquidityToken1": 43.44018825148846
    },
    {
        "address": "0x145de0b56765adc57d5329003bf5a5f7fc2d5cad",
        "token0": {
            "address": "0x098dcbf3518856e45bb4e65e7fcc7c5ff4a2c16e",
            "name": "Rimau",
            "symbol": "RIMAU"
        },
        "token1": {
            "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            "name": "BUSD Token",
            "symbol": "BUSD"
        },
        "token0Price": 0.04613566224495923,
        "token1Price": 21.675206366182806,
        "volumeUSD": 0,
        "reservePrice": 0.0001880365825371842,
        "volumeUSDChange": 0,
        "volumeUSDWeek": 0,
        "volumeUSDChangeWeek": 0,
        "totalFees24h": 0,
        "totalFees7d": 0,
        "lpFees24h": 0,
        "lpFees7d": 0,
        "lpApr7d": 0,
        "liquidityUSD": 0.08558112101757007,
        "liquidityUSDChange": 0,
        "liquidityToken0": 0.002037306746014707,
        "liquidityToken1": 0.04415904415108515
    },
    {
        "address": "0x02b4ea5dc60ec4559f8534a8f0d026956f1d57b8",
        "token0": {
            "address": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
            "name": "Wrapped BNB",
            "symbol": "WBNB"
        },
        "token1": {
            "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            "name": "BUSD Token",
            "symbol": "BUSD"
        },
        "token0Price": 0.002276947854531808,
        "token1Price": 439.18440995901625,
        "volumeUSD": 0,
        "reservePrice": 0.1019228419865911,
        "volumeUSDChange": 0,
        "volumeUSDWeek": 2.2664275703461527,
        "volumeUSDChangeWeek": -24.309468382211247,
        "totalFees24h": 0,
        "totalFees7d": 0.0056660689258653816,
        "lpFees24h": 0,
        "lpFees7d": 0.0038529268695884594,
        "lpApr7d": 0.4522987488277448,
        "liquidityUSD": 44.4181596763109,
        "liquidityUSDChange": 0,
        "liquidityToken0": 0.05074441829171202,
        "liquidityToken1": 22.286157406159056
    }
]

const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(event.target.value)
}

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }
  
  return (
    <Box style={{paddingTop:30}}>
      <FilterSection>
        <Box className="left-content">
          <Button scale="md">{t('LP')}</Button>
          <Button scale="md">{t('Single Asset')}</Button>
        </Box>
        <Box className="right-content">
        <LabelWrapper style={{ marginLeft: 16 }}>
          <Select
            options={[
              {
                label: t('Default'),
                value: 'default',
              },
              {
                label: t('APY'),
                value: 'apy',
              },
              {
                label: t('TVL'),
                value: 'tvl',
              }
            ]}
            onChange={handleSortOptionChange}
          />
          </LabelWrapper>
          <LabelWrapper style={{ marginLeft: 16 }}>
          <SearchInput onChange={handleChangeSearchQuery} placeholder="Search Pools" />
        </LabelWrapper>
        </Box>
      </FilterSection>
      <Heading fontSize="font-size: 20px !important" mb="20px">{t('Active Pools')}({allPoolData.length})</Heading>
      {
        allPoolData.length> 0 && allPoolData.map((item, index)=>(
          <PoolRow key={item.address} poolData={item} />
        ))
      }
    </Box>
  )
}

export default ZapPools