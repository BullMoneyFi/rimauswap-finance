import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Appreciation Intensive Tokenomics',
  bodyText: 'Half of the proceed from RIMAU DeFi Farm is used to actively buy RIMAU from the market & burned. Reducing circulating supply results in high value retention and appreciation over time.',
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Get RIMAU token',
    external: false,
  },
  images: {
    path: '/images/home/decentralized/',
    src: 'decentralized',
    alt: 'Decentralized',
    attributes: [
      { src: 'decentralized', alt: 'Decentralized' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Self-sustainable Contribution For The Underprivileged',
  bodyText: 'As RIMAU DeFi Farm grows, so is the farm proceed and continuous funding of the RimauSwap ESG charity programs: FeedUp! SkillUp! and StartUp!',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Get RIMAU token',
    external: false,
  },
  images: {
    path: '/images/home/benefitting/',
    src: 'benefitting',
    alt: 'Benefitting',
    attributes: [
      { src: 'benefitting', alt: 'Benefitting' }
    ],
  },
}
export const cakeSectionData: SalesSectionProps = {
  headingText: 'Leave No One Behind',
  bodyText:
    'Some of us are lucky enough to be benefitting from the DeFi market financially. As we progress, let us also include the underprivileged communities. Support our vision. Together, we can make the world a better place',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Get RIMAU token',
    external: false,
  },
  // secondaryButton: {
  //   to: 'https://docs.pancakeswap.finance/tokenomics/cake',
  //   text: 'Learn',
  //   external: true,
  // },
  images: {
    path: '/images/home/environmental/',
    src: 'environmental',
    alt: 'Small 3d rimau',
    attributes: [
      // { src: 'Vector', alt: 'Small 3d rimau' },
      { src: 'environmental', alt: 'Small 3d rimau' },
      // { src: 'Vector-1', alt: 'CAKE token' },
  ],
  },
}
