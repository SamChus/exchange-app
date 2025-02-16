import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }


}

const metamaskApiLink =
  "https://mainnet.infura.io/v3/80c03d67d9ab4ce1be7b07722fab0b51";

export const connectWallet = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    console.log("Connected Account:", accounts);
    return accounts[0];
  } else {
    console.log("MetaMask not detected");
  }
};

export const checkWalletConnection = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      console.log("Wallet is connected:", accounts);
      return accounts[0]
    } else {
      console.log("Wallet is not connected");
    }
  } else {
    console.log("MetaMask not detected");
  }
};

// Example of another method: eth_getBalance
export const getWalletBalance = async (address: string) => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(address);
    console.log("Wallet Balance:", web3.utils.fromWei(balance, "ether"));
    return web3.utils.fromWei(balance, "ether");
  } else {
    console.log("MetaMask not detected");
  }
};

// List of other methods like eth_requestAccounts
export const otherMethods = [
  "eth_sendTransaction",
  "eth_sign",
  "eth_signTransaction",
  "eth_signTypedData",
  "eth_getTransactionByHash",
  "eth_getTransactionReceipt",
  "eth_getBlockByNumber",
  "eth_getBlockByHash",
  "eth_getCode",
  "eth_call",
  "eth_estimateGas",
  "eth_gasPrice",
  "eth_blockNumber",
  "eth_getStorageAt",
  "eth_getLogs",
  "eth_getProof",
  "eth_getUncleByBlockHashAndIndex",
  "eth_getUncleByBlockNumberAndIndex",
  "eth_getWork",
  "eth_submitWork",
  "eth_submitHashrate"
];


