const secp = require('ethereum-cryptography/secp256k1')
const {toHex} = require('ethereum-cryptography/utils')
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const hash = keccak256(publicKey.slice(1))
    
    return hash.slice(-20)
}

const privateKey = secp.utils.randomPrivateKey()
console.log('private key: ', toHex(privateKey))

const publicKey = secp.getPublicKey(privateKey)
console.log('public key: ', toHex(getAddress(publicKey)))

