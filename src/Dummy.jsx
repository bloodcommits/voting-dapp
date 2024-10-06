import React, { useContext } from 'react'
import { createContext } from 'react'
import {Web3context} from "./context/Web3context"
const Dummy = () => {
    const {contractInstance,
        selectedAccount,
        chainId} = useContext(Web3context)
        console.log(contractInstance , selectedAccount , chainId)
  return (
    <div>jai shree ram</div>
  )
}

export default Dummy