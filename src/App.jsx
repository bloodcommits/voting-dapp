import React from 'react'
import Web3provider from './context/Web3provider'
import Dummy from './Dummy'

const App = () => {
  return (
    <>
    <Web3provider>
      <Dummy/>
    </Web3provider>
    </>
  )
}

export default App