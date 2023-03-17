import React from "react";
import "../css/track2.css";
import poly from "../assests/images/polygon1.png";
import Filecon from "../assests/images/Filecoin.png";
import Replit from "../assests/images/replit.png";
import sol from "../assests/images/SolanaD1.png";
const Track2 = () => {
  return (
    <div>
      <div>
        <center>
          <div className="track1">
            <div className="track-card">
              <center>
                <div className="image-track">
                  <img src={poly} className="poly" />
                </div>
              </center>
              <div className="track-content">
                <ul className="ull">
                  <li className="lit">
                    ₹10,000 for the best hack built on Ethereum
                  </li>
                  <li className="lit">
                    ₹15,000 for the best hack built on Ethereum + Polygon
                  </li>
                  <li className="lit">
                    Eligibility to apply for internship/full-time roles and seed
                    funding of up to 5,000 USD for winners!
                  </li>
                </ul>
              </div>
              <center>
                <div className="know">Know More...</div>
              </center>
            </div>
            <div className="track-card">
              <center>
                <div className="image-track">
                  <img src={Filecon} className="poly" />
                </div>
              </center>
              <div className="track-content">
                <ul className="ull">
                  <li className="lit">
                    ₹20000 for best use of IPFS and/or Filecoin
                  </li>
                  <li className="lit">
                    Microgrants up to 5000 USD, open grants up to 50,000 USD
                  </li>
                </ul>
              </div>
              <center>
                <div className="know know1">Know More...</div>
              </center>
            </div>
            <div className="track-card">
              <center>
                <div className="image-track">
                  <img src={Replit} className="poly" />
                </div>
              </center>
              <div className="track-content">
                <ul className="ull">
                  <li className="lit">
                    $50 to winning project of the hackathon (must be deployed on
                    Replit)
                  </li>
                  <li className="lit">
                    Replit schwags to 5 eligible submissions deployed on Replit.
                  </li>
                  <li className="lit">
                    Eligibility for internship / full time role interviews at
                    Replit Know more about the bounty on this
                  </li>
                </ul>
              </div>
              <center>
                <div className="know know2">Know More...</div>
              </center>
            </div>
            <div className="track-card">
              <center>
                <div className="image-track">
                  <img src={sol} className="sol" />
                </div>
              </center>
              <div className="track-content">
                <ul className="ull">
                  <li className="lit">
                    Upto $USDC 850 up for grabs, for the best hack built on top
                    of Solana Blockchain at Devfolio-powered community
                    Hackathons.
                  </li>
                  <li className="lit">
                    Young gun - $USDC 100 for the best project beginners just
                    starting out on Solana
                  </li>
                  <li className="lit">
                    Rising teknoking - $USDC 250 for the best project that goes
                    into depth, demonstrating higher-order code.
                  </li>
                </ul>
              </div>
              <center>
                <div className="know">Know More...</div>
              </center>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Track2;
