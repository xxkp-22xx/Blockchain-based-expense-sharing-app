import web3 from "./web3";

// deployed contract's ABI
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "Users",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "userName",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "contributor",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "message",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "newMessage",
            "type": "string"
          }
        ],
        "name": "setMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

// our contract's deployed address
const address = "0xFB6128e17d561662752FabF8a41A5874e5359D30";

const contract = new web3.eth.Contract(abi, address);

export default contract;
