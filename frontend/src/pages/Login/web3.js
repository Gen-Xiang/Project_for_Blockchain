let Web3 = require('web3')
let web3 = new Web3()
if (window.ethereum) {
    web3 = new Web3(window.ethereum)
} else if (window.web3) {
    web3 = new Web3(web3.currentProvider)
} else {
    alert('您需要先安装MetaMask插件')
}
if (window.web3) {
    window.ethereum.enable()
}
module.exports = web3