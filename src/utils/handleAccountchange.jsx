export const handleAccountChange = async(setWeb3state)=>{
    const accounts = await window.ethereum.request({
        "method":"eth_requestAccounts"
    })
    const selectedAccount = accounts[0];
    setWeb3state((prev)=>({...prev , selectedAccount}))

}