import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>FreeWeb3 Claim Resolution</h1>
    </header>
  );
}
// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Web3 Legal Engineering. All rights reserved.</p>
    </footer>
  );
}

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="grid">
        {/* Trunk */}
        <div className="box trunk-container">
          <a href="https://freeweb3.com" className="branch trunk">
            <div className="img-container trunk-image"> {/* Add custom class "trunk-image" */}
              <img src="https://freeweb3.infura-ipfs.io/ipfs/QmTFEbCgeNBFcqUYWSzoSoGbmGUAy8LgWAxCkeppwvJaDb" alt="evidencer" />
              <div className="img-overlay">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmTFEbCgeNBFcqUYWSzoSoGbmGUAy8LgWAxCkeppwvJaDb" alt="evidencer" />
              </div>
            </div>
          </a>
        </div>


        {/* Video */}
        <div className="box video-container">
          <video controls style={{ width: '100%' }}>
            <source src="https://freeweb3.infura-ipfs.io/ipfs/QmPAT4NNdPew9XQ6NiVh8FNyFgrEa6swzZgyqAnsfTNqq7" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Main Branches */}
        <div className="grid-container">
          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmeJ9dsUVMGRvxyRPtXdnquXwNadHzfB5u3ANcfkERTFeh" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmWWNCNcoPVaCujJJ2NReXGUoQ2TFkSRM3VXyi3azzSNTM" alt="Main Branch 1" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmWDkzdSB1ZLM4bY2nrWWPLaQVowqVLNXiKNaZ7b7BFNL3" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmWiqY1pvo3oxs4X8PpzaYsmFZNnx41TyucuiDTaqdbpv7" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/Qmeem8nMWmErEL9T2bMpxouqy11Sm5fSn5AmdvZE3pavUE" alt="Main Branch 2" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmeikuiJMuUEnPfVSxvUYvPWBemu3fvwH1vQjJYLNTzmFG" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmZTW65PNa5SEX7ke3ZpswMeKPaC8HTqfCNsqGDucf7uCH" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmbAGq83Nk745pAW8EKcqLYHfki2QdqARTKja7NqbvpWTx" alt="Main Branch 3" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmPS3S3YoKoZGXM3gDdPTJxbxZzi72wRSyRoCxBFnh3ir8" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmfB9GMT4H4hbFrfB3jejyrTs41Ks6C2TuCZGbApHNkRSg" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmXgo7kE5kKG6iiRcbiDJdiFhFC2K62cpELtu5ZwrHYR63" alt="Sub-Branch 1.1" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmPxwiXc9s12UMNgUZzWzkRbiXtHWrMu29bthC4HMN1RPC" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmeandRv1vZgyQCWnczuads5ScXNa6NZe5ZhMDyjcDiymJ" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmXDL3aEpsfAc4gQ642PzZNCPPba8hABd71EMer54TLeny" alt="Sub-Branch 1.2" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmWpqegeAg77gHdWGDqbiKYJFRozE8pzCBoSRw3B31BuWs" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmY7SfVBnQnhL3ET6ng6yem46D6MvChHPzEkktnHN5fta9" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmckWkzJyBJV9dqDf7myntH3h9J2MneQmtQgfAoSk46ibQ" alt="Sub-Branch 1.3" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmcENZ5q2Q896kwBRB3Um71oGQ4sViP33ogghXDdLaXhR5" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmeYB4JUWg1VebAWb3iYMCunxhu18kfdoDNVfmHn6v6nSf" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmfDXDcjSt9DwbmCpvQfQevn7CqgMMz8npmyyM5LiNMJDF" alt="Sub-Branch 2.1" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmXN24c7fYUZACBSFMGKRtg9BAj9da4y8Z7oyQL76nryaw" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmYUdKTRbfLz6mCfWvxypVncwneaFVZByeXPaa2tmhtCYw" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmNXKM15KwRV2PsV13BtZkP5vTZajW3kdsfCGZTHXNuxok" alt="Sub-Branch 2.2" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmXN24c7fYUZACBSFMGKRtg9BAj9da4y8Z7oyQL76nryaw" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmNpBuig2QGA4fnjnG3wtd24eTfSGaZUyKhdxRdBxoz4m8" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmTsU2JPKU9Tp47KfNYt9JSivncNKm3W9D1c3rXNEo7tH5" alt="Sub-Branch 2.3" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmcMhPeBPpy5mUCS7PGWjoLr8DamvSBE64fHZsJy2jiV7d" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmTRwPNPoC3pe1VaYCDVZLcAxzpbb8SGTctdM6CekNrhc5" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/Qmd2hFkfQXUo5r2S9a5yAfD5PPKbsN3zrNRU39g738KUbz" alt="Sub-Branch 3.1" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmcVP8t7rTY5q1Wp6nwAFgUV6c65wev4Wyk3ce4GCGg26p" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmWtiSS18vKpw79Mt8du8LA56aWn4bReWASnvsE7VxyyTP" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmY3ws5t6sYVorXDuru7uXmT3M6BFEKpRVFCG2GTpCnfsK" alt="Sub-Branch 3.2" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmVzP8KHrgM5D2mtedYMvdPNkSpGaNsBSs259CGJRAQ3uL" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>

          <div className="branch">
            <a href="https://freeweb3.infura-ipfs.io/ipfs/QmdnXRbDfZdLhFRbYJQcouHAuvYZjuboMtjRr7maVyTWsb" target="_blank" rel="noreferrer" className="sub-branch">
              <div className="img-container">
                <img src="https://freeweb3.infura-ipfs.io/ipfs/QmUcAJKiuRXpiYs49Z2uE8BmWATfkWNUvtDNXBpy8Kn8w9" alt="Sub-Branch 3.3" />
                <div className="img-overlay">
                  <img src="https://freeweb3.infura-ipfs.io/ipfs/QmSMfdwdAjo6C3ux6tkjC5dzGRm5cGLKKEDmCDdyzizRGy" alt="Evidencer Form" />
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
