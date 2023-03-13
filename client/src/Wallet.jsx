import server from "./server";
import * as secp from 'ethereum-cryptography/secp256k1'
import {keccak256} from 'ethereum-cryptography/keccak'
import {toHex} from 'ethereum-cryptography/utils'

function getAddress(publicKey) {
  const hash = keccak256(publicKey.slice(1))
  
  return hash.slice(-20)
}

function Wallet({ address, setAddress, balance, setBalance , setPvtKey,pvtKey}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPvtKey(privateKey);

    address = toHex(getAddress(secp.getPublicKey(privateKey)))
    setAddress(address)
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type a private key" value={pvtKey} onChange={onChange}></input>
      </label>

      <p>
        Wallet Address: {address}
      </p>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
