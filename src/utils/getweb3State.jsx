import {ethers} from "ethers"
import abi from "../constants/abi.json"
export const gatewe3State = async() =>{
    try {
        if(!window.ethereum){
            throw new Error("METAMASK IS NOT PRESENT")
        }
        const accounts = await window.ethereum.request({
            "method":"eth_requestAccounts"
        })
        // console.log(accounts)
        const selectedAccount = accounts[0];

        const chainIdHex = await window.ethereum.request({
            "method":"eth_chainId"
        })
        // console.log(chainIdHex)
        const chainId = parseInt(chainIdHex , 16)
        // console.log(chainId)

        const provider =new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const  contractAddress = "0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290"

        const contractInstance = new ethers.Contract(contractAddress , abi , signer)

        // console.log(contractInstance , selectedAccount ,chainId)

        return {
            contractInstance , selectedAccount ,chainId
        }
    } catch (error) {
        console.log(error)
        throw new Error
    }

}