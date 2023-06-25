
import { setAddress } from 'state/counter';
import { useDispatch } from 'react-redux'
import { store } from "../state"
import { hexStripZeros } from '@ethersproject/bytes'
import { BigNumber } from '@ethersproject/bignumber'
import moment from "moment"

export const formatAddress = (address = "") => {
  return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)
}
export const formatAddress_H5 = (address = "") => {
  return "..." + address.substring(address.length - 4, address.length)
}

export const formatTime = (timestamp = "") => {
  return (
    <div>
      <p style={{ paddingLeft: "5px" }}>{moment(timestamp * 1000).format("MM/DD")}</p>
      <em style={{ fontSize: "12px", color: "#999" }}>{moment(timestamp * 1000).format("H:mm:ss")}</em>
    </div>

  )
}

export const formatNum = (num) => {
  return Math.round(num * 100) / 100
}

export const subscribeProvider = async provider => {

  if (!provider.on) {
    return
  }

  // close connect
  provider.on("close", () => {
    console.log("close")
    store.dispatch(setAddress(""))
    localStorage.clear()
  })

  //Subscribe to session disconnection
  provider.on("disconnect", (code, reason) => {
    store.dispatch(setAddress(""))
    localStorage.clear()
  })

  // switch account
  provider.on("accountsChanged", accounts => {
    // if (accounts.length) {
    //   store.dispatch(setAddress(accounts[0]))
    // } else {
    //   store.dispatch(setAddress(""))
    // }
    store.dispatch(setAddress(""))
    localStorage.clear()
    console.log("accountsChanged", accounts);
  })

  provider.on("chainChanged", chainId => {
    console.log("chainId", parseChainId(chainId))
    localStorage.clear()
  })
}

export const switchNetwork = async (provider) => {
  return new Promise(resolve => {
    provider.request({ method: "eth_chainId" }).then(async chainId => {
      console.log(parseInt(chainId, 16), chainId, process.env.REACT_APP_BSC_CHAIN_ID, 'current chainId')

      //this js file can't use hook, need to write this again 
      try {
        if (process.env.REACT_APP_BSC_CHAIN_ID != parseInt(chainId, 16)) {

          if (window["ethereum"]) {
            const provider = window["ethereum"];
            try {
              const formattedChainId = hexStripZeros(BigNumber.from(process.env.REACT_APP_BSC_CHAIN_ID).toHexString())
              await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: formattedChainId }],
              });
              window.location.reload()
              resolve("ok")
            } catch (error) {
              console.log(error, 'errorerror');
            }
          }
        } else {
          resolve("ok")
        }
      } catch (error) {
        console.log('web3errorerror', error);
      }
    })
  })
}

function parseChainId(chainId) {
  return parseInt(chainId, 16)
}

export function debounce(fn, delay = 1000, immediate = true) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    immediate && !timer && fn.apply(this, args)
    timer = setTimeout(() => {
      timer = null
      !immediate && fn.apply(this, args)
    }, delay)
  }
}

export const isH5 = () => {
  if (document.documentElement.clientWidth < 640) {
    sessionStorage.h5 = true
  } else {
    sessionStorage.h5 = false
  }
}