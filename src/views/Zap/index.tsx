import React from 'react'
import { Route } from 'react-router-dom'
import Page from 'components/Layout/Page'
import { PoolUpdater, ProtocolUpdater, TokenUpdater } from 'state/info/updaters'
import Zap from './component/zap';
import ZapPools from './component/pools/pools';
import ZapPoolDetail from './component/pools/pooldetail';

const Info: React.FC = () => {
  return (
    <Page>
      <Route path="/zap" exact>
        <Zap />
      </Route>
      <Route path={['/zap/pools', '/zap/pool']} exact>
        <ZapPools />
      </Route>
      <Route exact path={['/zap/pools/:address', '/zap/pool/:address']} component={ZapPoolDetail} />
    </Page>
  )
}

export default Info
