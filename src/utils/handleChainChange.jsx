export const handlechainchange=async(setWeb3state)=>{
    const chainIdHex = await window.ethereum.request({
        "method":"eth_chainId"
    })
    // console.log(chainIdHex)
    const chainId = parseInt(chainIdHex , 16)
    // console.log(chainId)
    setWeb3state((prev)=({...prev , chainId}))
}