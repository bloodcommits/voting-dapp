import React, { useContext, useEffect, useState } from 'react'
import {Web3context} from './Web3context'
import { gatewe3State } from '../utils/getweb3State'
import { handlechainchange } from '../utils/handleChainChange'
import { handleAccountChange } from '../utils/handleAccountchange'


const Web3provider = ({children}) => {
    const[web3state , setWeb3state]=useState({
        contractInstance : null,
        selectedAccount :null,
        chainId:null,

    })
    useEffect(()=>{
        window.ethereum.on('accountsChanged',()=>handleAccountChange(setWeb3state))
        window.ethereum.on('chainChanged',()=>handlechainchange(setWeb3state))
    
        // return()=>{
        //     window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3state))
        //     window.ethereum.removeListener('chainChanged',()=>handlechainchange(setWeb3state))
        // }
      },[])
      
    const handleWallet=async()=>{
        try {
            
            const {contractInstance , selectedAccount , chainId} = await gatewe3State()
            setWeb3state({
                contractInstance , selectedAccount , chainId
            })
            // console.log(web3state)
        } catch (error) {
         console.log(error)   
        }

    }
  return (
  <>
  <Web3context.Provider value ={web3state}>
        {children}
    </Web3context.Provider>
  <button onClick={handleWallet}>connect to wallet</button>
  </>
  )
}

export default Web3provider