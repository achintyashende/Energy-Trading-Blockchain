import './App.css';
import { marketplace_abi, nft_abi } from "./abi.js";
import { ethers } from 'ethers';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/Home.jsx';
import Create from './components/Create.jsx';
import Nav from './components/Nav.jsx';
import First from './components/First.js';
import About from './components/About.jsx';

function App() {

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [marketplace, setMarketplace] = useState({});
  const [nftItem, setNFTItem] = useState({});

  // useEffect(() => {
  const loadProvider = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaef3' }], //bifnity code // chainId must be in hexadecimal numbers
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();


        // 355113 same 0x56b29
        // Check if the chain ID is as expected
        if (network.chainId !== 44787) {
          alert('Please switch to the correct network.');
          return;
        }

        window.ethereum.on("chainChanged", () => {
          window.location.reload()
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setLoading(false);

        // const marketplaceAddress = "0x88ab1903f29B1A7535de1188F08D7892CEE3911b"; //sepolia
        // const marketplaceAddress = "0x53AfCdA7f3a1183B1CD7bFF6B0585A46514208A7";  //bitfinty ICP
        // const marketplaceAddress = "0x830A7594eF91d10662F8B623BB65b290a7a08143";  //bitfinty ICP to sender


        // const marketplaceAddress = "0x2d4355D6a616D23Ca259a5875454327708c7A1eB";  //bitfinty ICP to sender
        const marketplaceAddress = "0x372A29ccfE8fFb2FE0079C453d104C247A50edeE";  //CELO ALFOJORES to sender
        const marketplaceContract = new ethers.Contract(
          marketplaceAddress,
          marketplace_abi,
          signer
        );

        setMarketplace(marketplaceContract);
      } else {
        console.error("Metamask is not installed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("App code end");
  };
  // loadProvider();
  // }, []);


  return (

    <BrowserRouter>
      <ToastContainer />
      <div className="App font-jersey-25">
        <div className="gradient-bg-welcome">
          {/* <button onClick={connect}>Con</button> */}

          <Nav account={account} loadProvider={loadProvider} loading={loading} />
          {
            loading ? (<>
              {/* <div className=' text-white'>Connecting to Metamask</div> */}
              <First loadProvider={loadProvider} loading={loading} />
            </>
            ) : (
              <Routes>
                <Route path='/' element={<First loadProvider={loadProvider} loading={loading} />} />
                <Route path='/marketplace' element={<Hero marketplace={marketplace} nftItem={nftItem} account={account} />} />
                <Route path='/create' element={<Create marketplace={marketplace} />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/my-listed-nfts' element={<MyItem marketplace={marketplace} account={account} />} /> */}
                {/* <Route path='/my-purchases' element={<MyPurchases marketplace={marketplace} nft={nft} account={account} />} /> */}
                {/* <Route path='/my-purchases' element={<Purchaes marketplace={marketplace} account={account} />} /> */}
              </Routes>
            )}
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;












// useEffect(() => {
//   const connectW = async () => {
//     const wallet = new WalletConnectWallet({
//       network: WalletConnectChainID.Nile,
//       options: {
//         relayUrl: 'wss://relay.walletconnect.com',
//         projectId: 'a8417a68556ab44330ee0f1ab5a20558',
//         metadata: {
//           name: 'JustLend',
//           description: 'JustLend WalletConnect',
//           url: 'https://app.justlend.org/',
//           icons: ['https://app.justlend.org/mainLogo.svg']
//         }
//       },
//       web3ModalConfig: {
//         themeMode: 'dark',
//         themeVariables: {
//           '--w3m-z-index': 1000
//         },
//         explorerRecommendedWalletIds: [
//           '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
//           '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
//         ]
//       }
//     });

//     const { address } = await wallet.connect();
//     console.log("Address",address);
//   }
//   connectW();

// }, []);










