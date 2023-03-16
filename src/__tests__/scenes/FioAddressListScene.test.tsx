import { describe, expect, it } from '@jest/globals'
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { FioAddressList } from '../../components/scenes/FioAddressListScene'
import { getTheme } from '../../components/services/ThemeContext'
import { fakeNavigation } from '../../util/fake/fakeNavigation'

describe('FioAddressList', () => {
  it('should render with loading props', () => {
    const renderer = createRenderer()

    const fakeWallet: any = {
      currencyCode: 'FIO',
      nativeAmount: '100',
      networkFee: '1',
      blockHeight: 34,
      date: 220322,
      txid: '0x34346463',
      signedTx: '0xdgs3442',
      ourReceiveAddresses: ['FioAddress']
    }

    const actual = renderer.render(
      <FioAddressList
        fioAddresses={[
          {
            name: 'fio@edge',
            bundledTxs: 100,
            walletId: '0x374236418'
          }
        ]}
        fioDomains={[
          {
            name: 'myFio@fio',
            expiration: '12-10-23',
            isPublic: true,
            walletId: '0x24623872138'
          }
        ]}
        fioWallets={[fakeWallet]}
        loading
        isConnected
        refreshAllFioAddresses={() => undefined}
        navigation={fakeNavigation}
        theme={getTheme()}
      />
    )

    expect(actual).toMatchSnapshot()
  })
})
