import { MenuEntry } from '@rimauswap-libs/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { getExternalLinkWithDomain } from 'utils/getExternalLinkWithDomain';

const socials: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t("Help"),
    icon: "QuestionIcon",
    href: getExternalLinkWithDomain('https://docs-en.rimauswap.finance/how-to-guides/how-to-get-rimau', 'rimauswap.finance', false),
  },
  {
    label: t("Telegram"),
    icon: "TelegramIcon",
    items: [
      {
        label: `${t('Community')} (${t('EN')})`,
        href: "https://t.me/RimauSwap",
      },
      {
        label:`${t('Community')} (${t('BM')})`,
        href: "https://t.me/RimauSwapBM/",
      },
      {
        label:`${t('Community')} (${t('ZH')})`,
        href: "https://t.me/RimauSwapZH/",
      },
      {
        label: t("Announcement"),
        href: "https://t.me/RimauSwapAnnouncement",
      }
    ],
  },
  {
    label: t("Twitter"),
    icon: "TwitterIcon",
    href: "https://twitter.com/RimauSwap",
  },
  {
    label: t("Facebook"),
    icon: "FacebookIcon",
    href: "https://www.facebook.com/rimauswap/",
  },
  {
    label: t("Medium"),
    icon: "MediumIcon",
    href: "https://medium.com/@rimauswap/",
  },
  {
    label: t("Docs"),
    icon: "DocsIcon",
    href: getExternalLinkWithDomain("https://docs-en.rimauswap.finance/", 'rimauswap.finance', false),
    // items: [
    //   {
    //     label: t("BM"),
    //     href: getExternalLinkWithDomain("https://docs-bm.rimauswap.finance/", 'rimauswap.finance', false),
    //   },
    //   {
    //     label: t("EN"),
    //     href: getExternalLinkWithDomain("https://docs-en.rimauswap.finance/", 'rimauswap.finance', false),
    //   },
    //   {
    //     label: t("ZH"),
    //     href: getExternalLinkWithDomain("https://docs-zh.rimauswap.finance/", 'rimauswap.finance', false),
    //   },
    // ],
  },
  // {
  //   label: t("Whitepaper"),
  //   icon: "WhitepaperIcon",
  //   items: [
  //     {
  //       label: t("BM"),
  //       href: getExternalLinkWithDomain(`${window.location.origin}/whitepaper/Kertas-Putih-RimauSwap.pdf`, '', false), // "https://www.whitepaper-bm.rimauswap.finance/",
  //     },
  //     {
  //       label: t("EN"),
  //       href: getExternalLinkWithDomain(`${window.location.origin}/whitepaper/RimauSwap-Whitepaper.pdf`, '', false), // "https://www.whitepaper-en.rimauswap.finance/",
  //     },
  //     {
  //       label: t("ZH"),
  //       href: getExternalLinkWithDomain(`${window.location.origin}/whitepaper/RimauSwap-Whitepaper-ZH.pdf`, '', false), // "https://whitepaper-zh.rimauswap.finance/",
  //     },
  //   ],
  // },
  {
    label: t("Whitepaper"),
    icon: "WhitepaperIcon",
    href: getExternalLinkWithDomain(`${window.location.origin}/whitepaper/RimauSwap-Whitepaper.pdf`, '', false), // "https://www.whitepaper-en.rimauswap.finance/",
  },
  {
    label: t("CoinMarketCap Listing"),
    icon: "CoinMarketCapIcon",
    items: [
      {
        label: t("BM"),
        href: getExternalLinkWithDomain("https://docs-bm.rimauswap.finance/penyenaraian-coinmarketcap", 'rimauswap.finance', false),
      },
      {
        label: t("EN"),
        href: getExternalLinkWithDomain("https://docs-en.rimauswap.finance/coinmarketcap-listing", 'rimauswap.finance', false),
      },
      {
        label: t("ZH"),
        href: getExternalLinkWithDomain("https://docs-zh.rimauswap.finance/zheng-shi-deng-lu-coinmarketcap", 'rimauswap.finance', false),
      },
    ],
  },
  
  
];
export default socials;
