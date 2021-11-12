import { MenuEntry } from '@rimauswap-libs/uikit'
import { ContextApi } from 'contexts/Localization/types'

const helps: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Buy Rimau'),
    icon: "RimauIcon",
    href: 'https://rimauswap.farm/buy-rimau',
  },
  // {
  //   label: t("How to farm"),
  //   icon: "FarmsIcon",
  //   href: 'https://docs-en.rimauswap.finance/products/how-to-farm-rimau',
  // },
  {
    label: t("Help"),
    icon: "QuestionIcon",
    href: 'https://docs-en.rimauswap.finance/how-to-guides/how-to-get-rimau',
  },
];

export default helps