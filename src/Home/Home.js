import React from "react";
import "./home.scss";
import dao from "../images/shapes/dao-square.svg";
import asset from "../images/shapes/asset-square.svg";
import usdao from "../images/shapes/usdao-square.svg";
import { Col, Row } from "react-bootstrap";
import coins from "../images/shapes/all-coin-logos.svg";
import stablecoin from "../images/tokens/stable-coin.svg";
import assettoken from "../images/tokens/asset-token.svg";
import daotoken from "../images/tokens/dao-token.svg";
import list from "../images/list-icon.svg";
import Social from "../components/Social";
import Developers from "../components/Developers";

const Home = () => {
  return (
    <>
      {/* ===================== Begin::banner ===================== */}
      <div className="banner">
        <div className="square square-1"></div>
        <img src={dao} alt="dao" className="dao-square" />
        <img src={asset} alt="asset" className="asset-square" />
        <div className="square square-2"></div>
        <img src={usdao} alt="usdao" className="usdao-square" />

        <div className="banner-text">
          <p>
            <span>USDAO</span> Truly Decentralized Global Digital Currency
          </p>
        </div>

        <p className="banner-content">
          A 100% crypto-backed and fully collateralized stablecoin with
          decentralized governance.
        </p>

        <div className="btn-wrap d-flex mt-5">
          <button className="btn btn-border-gradient">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.9698 0.0468896C15.3326 0.234967 13.5316 0.737221 12.0925 1.40712C11.3185 1.76737 10.4375 2.31212 9.77427 2.84047C9.41344 3.12791 8.67918 3.83481 8.35963 4.20238L8.19952 4.38659L7.9018 4.24705C6.36523 3.52679 4.88043 4.19468 3.96598 6.01745C3.65128 6.64471 3.43649 7.39368 3.38891 8.02988C3.35504 8.48204 3.44704 8.64363 3.73817 8.64363C3.83474 8.64363 3.90419 8.6061 4.06578 8.46657C4.4654 8.1215 5.0366 7.90694 5.55927 7.90557C5.73735 7.90511 5.81243 7.92091 5.87573 7.97219L5.95872 8.03937L5.89257 8.20962C5.72645 8.63727 5.48542 9.35855 5.41059 9.65205C5.33853 9.93464 5.33329 9.99781 5.36835 10.1621C5.40261 10.3227 5.4005 10.3546 5.35355 10.3848C5.32341 10.4041 5.17955 10.4965 5.03382 10.5902C4.49347 10.9374 4.17564 11.3218 3.90483 11.9559C3.72017 12.3881 3.50334 13.2404 3.42421 13.8449C3.36531 14.295 3.36535 14.3202 3.4253 14.4315C3.54322 14.6505 3.64671 14.6586 4.50039 14.5161C5.33467 14.3768 6.11303 14.1137 6.59965 13.8066C6.87996 13.6296 7.2359 13.2447 7.46322 12.8726C7.59551 12.656 7.65599 12.586 7.69696 12.6019C7.86737 12.668 8.08618 12.6575 8.41663 12.5675C8.73242 12.4814 9.36276 12.2681 9.78619 12.104L9.9564 12.038L10.028 12.1259C10.0927 12.2053 10.0977 12.2463 10.0791 12.548C10.0451 13.0962 9.87291 13.5285 9.5279 13.9314C9.39002 14.0925 9.35228 14.1629 9.35228 14.2591C9.35228 14.5503 9.51384 14.6423 9.96589 14.6085C11.2724 14.5107 12.7301 13.7973 13.434 12.9113C14.1047 12.0672 14.2136 11.0888 13.7478 10.0945L13.6083 9.79668L13.7925 9.63653C14.1577 9.3188 14.8659 8.58345 15.1463 8.23058C16.6265 6.36831 17.631 3.76809 17.9489 0.975632C18.014 0.403698 18.0156 0.302923 17.961 0.183225C17.8703 -0.0160021 17.7096 -0.0380916 16.9698 0.0468896ZM17.249 0.931664C17.1638 1.66171 16.9927 2.54173 16.7995 3.24438C16.7409 3.45718 16.6853 3.66692 16.6758 3.71043C16.6663 3.75395 16.6484 3.78958 16.6361 3.78958C16.6025 3.78958 14.1881 1.36737 14.2067 1.35238C14.2328 1.33135 14.7193 1.19575 15.1729 1.08305C15.7006 0.951995 16.8403 0.753577 17.1719 0.73504L17.2727 0.729412L17.249 0.931664ZM14.9198 3.07986L16.3903 4.55096L16.2232 4.97048C15.8845 5.82086 15.3448 6.79431 14.824 7.49417C13.81 8.85675 12.2266 10.1416 10.4871 11.0135C10.3085 11.103 10.1425 11.1762 10.118 11.1762C10.0596 11.1762 6.82035 7.93645 6.82035 7.8781C6.82035 7.74838 7.42098 6.66652 7.8404 6.04073C9.03706 4.25539 10.3862 3.04364 12.148 2.17184C12.6147 1.94089 13.3632 1.6131 13.4317 1.60965C13.4414 1.60916 14.1111 2.27075 14.9198 3.07986ZM12.4156 3.58314C12.0807 3.62394 11.7152 3.81139 11.4463 4.0804C11.0944 4.43235 10.9347 4.82004 10.9347 5.32233C10.9347 6.30236 11.693 7.06079 12.6728 7.06079C13.1749 7.06079 13.5625 6.90106 13.9144 6.54911C14.441 6.02237 14.5775 5.24217 14.2599 4.5733C13.9241 3.86605 13.2157 3.48567 12.4156 3.58314ZM13.0992 4.35156C13.9099 4.69876 13.9372 5.85283 13.1441 6.24928C12.9631 6.33975 12.8869 6.3573 12.6755 6.3573C12.0769 6.3573 11.6392 5.91801 11.6384 5.31649C11.6381 5.10805 11.6558 5.03158 11.7461 4.85093C11.9977 4.3472 12.5839 4.13087 13.0992 4.35156ZM7.16009 4.71811C7.25992 4.7447 7.43195 4.80784 7.54241 4.85838C7.72829 4.94354 7.73962 4.95536 7.69499 5.01755C7.21871 5.68104 6.80547 6.33785 6.48694 6.93768C6.37396 7.15048 6.27873 7.32861 6.27532 7.33353C6.2719 7.33845 6.22137 7.31865 6.16303 7.28956C6.01519 7.2158 5.48532 7.18608 5.15469 7.233C4.91939 7.26638 4.47789 7.39526 4.23946 7.50015C4.17884 7.52681 4.17511 7.51784 4.19744 7.39892C4.21087 7.32716 4.26229 7.14654 4.31166 6.99754C4.68086 5.88319 5.38548 5.02184 6.14823 4.75254C6.42167 4.65599 6.86962 4.64076 7.16009 4.71811ZM10.5303 6.99586C10.4201 7.05611 9.95049 7.52512 9.89479 7.63061C9.72364 7.95464 10.0411 8.27219 10.3651 8.101C10.4771 8.0418 10.9448 7.56962 11.0011 7.45882C11.1494 7.16751 10.816 6.83968 10.5303 6.99586ZM9.11762 8.45967C8.87245 8.49907 8.7737 8.84873 8.95445 9.03741C9.13489 9.2258 9.48739 9.13037 9.53522 8.88018C9.55509 8.77624 9.50547 8.59228 9.44375 8.54106C9.37729 8.48588 9.21166 8.44455 9.11762 8.45967ZM7.96187 10.0492C8.7539 10.8416 9.39473 11.4962 9.3859 11.5037C9.35162 11.5332 8.7462 11.7393 8.3853 11.8445C8.14547 11.9144 7.97203 11.9468 7.91415 11.9325C7.80102 11.9046 6.13827 10.2571 6.07912 10.1143C6.04568 10.0336 6.04923 9.97217 6.09759 9.79506C6.19155 9.45088 6.47794 8.60846 6.50097 8.60846C6.5124 8.60846 7.16979 9.25679 7.96187 10.0492ZM2.48733 10.043C1.91293 10.6175 1.89714 10.6372 1.89714 10.7797C1.89714 10.9986 2.01716 11.1234 2.22777 11.1234H2.38865L2.96927 10.5435C3.59719 9.91627 3.64302 9.84258 3.53509 9.63382C3.46546 9.49918 3.38212 9.45264 3.21051 9.45264C3.08532 9.45264 3.04277 9.48736 2.48733 10.043ZM13.1103 10.3936C13.3387 10.8426 13.3917 11.4257 13.2424 11.8485C13.0782 12.3139 12.6893 12.7701 12.1565 13.1224C11.7624 13.3831 11.4938 13.5126 11.0104 13.6753C10.5453 13.8318 10.4569 13.8452 10.4963 13.7527C10.7143 13.2421 10.8106 12.7468 10.7834 12.2759C10.7724 12.0859 10.7415 11.9047 10.7089 11.8393C10.6782 11.7778 10.6571 11.7247 10.6621 11.7212C10.667 11.7177 10.8292 11.6309 11.0227 11.5283C11.6431 11.1993 12.4334 10.7062 12.8651 10.3788C12.9501 10.3144 13.025 10.2617 13.0314 10.2617C13.0379 10.2617 13.0735 10.321 13.1103 10.3936ZM6.45951 11.5363C6.77404 11.8505 7.03134 12.1292 7.03134 12.1558C7.03134 12.3395 6.54574 12.995 6.26793 13.1862C5.92324 13.4234 5.24693 13.6638 4.55216 13.7959C4.11927 13.8782 4.13537 13.8844 4.16442 13.6472C4.23732 13.0523 4.56084 12.0922 4.81084 11.7287C5.00147 11.4516 5.64922 10.9694 5.83532 10.9661C5.86412 10.9656 6.14499 11.2222 6.45951 11.5363ZM2.64311 11.9399C2.54876 11.9579 0.0670082 14.4426 0.0194993 14.5666C-0.0729164 14.8078 0.17873 15.0597 0.446552 14.9941C0.510238 14.9785 0.966725 14.548 1.78387 13.7328C3.12977 12.3902 3.15804 12.3541 3.04154 12.1288C3.00725 12.0625 2.9326 11.9939 2.863 11.9648C2.79721 11.9374 2.7389 11.917 2.73345 11.9196C2.728 11.9223 2.68735 11.9314 2.64311 11.9399ZM8.06873 14.4463C8.03005 14.4626 7.73909 14.7379 7.42214 15.0581L6.84584 15.6403L6.8661 15.7912C6.89293 15.9914 7.01675 16.1006 7.21677 16.1006C7.35919 16.1006 7.37892 16.0848 7.95329 15.5103C8.50876 14.9547 8.54347 14.9121 8.54347 14.7869C8.54347 14.6171 8.49705 14.5319 8.36835 14.4653C8.25494 14.4067 8.17486 14.4016 8.06873 14.4463ZM2.77628 14.9435C2.67037 14.9849 0.296289 17.3442 0.224445 17.4794C0.0923276 17.7282 0.263655 18 0.552612 18C0.629239 18 0.884331 17.7625 1.93684 16.7111C2.80769 15.8412 3.23284 15.3924 3.24469 15.3306C3.27022 15.197 3.18459 15.0231 3.06211 14.9597C2.94135 14.8973 2.90046 14.895 2.77628 14.9435ZM5.58955 14.9435C5.48363 14.9849 3.10955 17.3442 3.03771 17.4794C2.90559 17.7282 3.07692 18 3.36587 18C3.4425 18 3.69759 17.7625 4.7501 16.7111C5.62095 15.8412 6.0461 15.3924 6.05796 15.3306C6.08349 15.197 5.99786 15.0231 5.87537 14.9597C5.75462 14.8973 5.71372 14.895 5.58955 14.9435Z"
                fill="url(#paint0_linear_772_468)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_772_468"
                  x1="9"
                  y1="0"
                  x2="9"
                  y2="18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F88311" />
                  <stop offset="1" stop-color="#F83811" />
                </linearGradient>
              </defs>
            </svg>
            Launch App
          </button>

          <button className="btn btn-border-gradient ms-5">
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1223 0.646973H4.74652C2.77331 0.646973 1.07227 2.24643 1.07227 4.2206V14.4872C1.07227 16.5726 2.66214 18.2353 4.74652 18.2353H12.4026C14.3768 18.2353 15.9763 16.4623 15.9763 14.4872V5.70314L11.1223 0.646973Z"
                stroke="url(#paint0_linear_772_460)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8711 0.635742V3.42353C10.8711 4.78437 11.9722 5.88837 13.3321 5.89124C14.5942 5.89412 15.8851 5.89508 15.9723 5.88933"
                stroke="url(#paint1_linear_772_460)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6877 12.9098H5.51562"
                stroke="url(#paint2_linear_772_460)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.73179 8.16374H5.51562"
                stroke="url(#paint3_linear_772_460)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_772_460"
                  x1="8.52427"
                  y1="0.646973"
                  x2="8.52427"
                  y2="18.2353"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F88311" />
                  <stop offset="1" stop-color="#F83811" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_772_460"
                  x1="13.4217"
                  y1="0.635742"
                  x2="13.4217"
                  y2="5.89353"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F88311" />
                  <stop offset="1" stop-color="#F83811" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_772_460"
                  x1="8.10169"
                  y1="12.4307"
                  x2="8.10169"
                  y2="13.389"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F88311" />
                  <stop offset="1" stop-color="#F83811" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_772_460"
                  x1="7.12371"
                  y1="7.68457"
                  x2="7.12371"
                  y2="8.6429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F88311" />
                  <stop offset="1" stop-color="#F83811" />
                </linearGradient>
              </defs>
            </svg>
            Read Docs
          </button>
        </div>
      </div>
      {/* ===================== end::banner ===================== */}

      {/* ===================== begin::wallet ===================== */}
      <div className="wallet">
        <Row>
          <Col lg={6}>
            <img src={coins} alt="coins" className="coins" />
          </Col>

          <Col
            lg={6}
            className="d-flex flex-column align-items-start justify-content-center"
          >
            <p className="title-line">
              WHAT ARE YOU WAITING <span>FOR?</span>
            </p>

            <p className="content text-secondary">
              There’s no need to create an account! Just connect your web 3.0
              wallet and get USDAO
            </p>

            <button className="btn btn-border-gradient">Connect wallet</button>

            <p className="coming-soon-text">Coming Soon!</p>
          </Col>
        </Row>
      </div>
      {/* ===================== end::wallet ===================== */}

      {/* ===================== begin::developer ==================== */}
      <Developers />
      {/* ===================== end::developer ==================== */}

      {/* ===================== begin::tokens ==================== */}
      <div className="tokens text-center d-flex flex-column align-items-center">
        <p className="title-line text-center">
          <span>USDAO Protocol</span> Three tokens, one purpose
        </p>

        <p className="content text-secondary">
          The USDAO protocol uses three distinct digital assets to create a
          robust, transparent and secure alternative to centralized stablecoins,
        </p>

        <Row>
          <Col md={4}>
            <div className="token-wrap flex-column d-flex align-items-center justify-content-center">
              <img src={stablecoin} alt="" />

              <p className="token-title">USDAO STABLECOIN</p>
              <p className="token-content">
                The USDAO stablecoin provides super fast, low-cost transactions
                with 1:1 parity with the US dollar.{" "}
              </p>

              <button className="btn btn-border-gradient">Learn More</button>
            </div>
          </Col>

          <Col md={4}>
            <div className="token-wrap flex-column d-flex align-items-center justify-content-center">
              <img src={assettoken} alt="" />

              <p className="token-title">ASSET TOKEN</p>
              <p className="token-content">
                Investors provide liquidity into the USDAO protocol in return
                for dividend bearing ASSET tokens.
              </p>

              <button className="btn btn-border-gradient">Learn More</button>
            </div>
          </Col>

          <Col md={4}>
            <div className="token-wrap d-flex flex-column align-items-center justify-content-center">
              <img src={daotoken} alt="" />

              <p className="token-title">DAOGOV TOKEN</p>
              <p className="token-content">
                DAOGOV is the governance token of the protocol, allowing holders
                to create and vote on proposals.
              </p>

              <button className="btn btn-border-gradient">Learn More</button>
            </div>
          </Col>
        </Row>
      </div>
      {/* ===================== end::tokens ==================== */}

      {/* ===================== begin::protocol ==================== */}
      <div className="protocol">
        <div className="bg-square"></div>
        <Row className="protocol-row">
          <Col
            md={6}
            className="d-flex h-100 flex-column align-items-start justify-content-center"
          >
            <p className="heading">GOVERNANCE PROTOCOL</p>
            <p className="title-line">Governed by the community.</p>

            <p className="content text-secondary">
              The USDAO Protocol is managed by a global community of our token
              holders and delegates.
            </p>
            <button className="btn btn-border-gradient">Learn More</button>
          </Col>

          <Col md={6}>
            <div className="protocol-list">
              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">USDAO STABLECOIN</p>
                <p className="token-content">
                  The USDAO stablecoin provides super fast, low-cost
                  transactions with 1:1 parity with the US dollar.{" "}
                </p>
              </div>

              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">USDAO STABLECOIN</p>
                <p className="token-content">
                  The USDAO stablecoin provides super fast, low-cost
                  transactions with 1:1 parity with the US dollar.{" "}
                </p>
              </div>

              <div className="list-wrap">
                <img src={list} alt="list" className="list-icon" />
                <p className="token-title">USDAO STABLECOIN</p>
                <p className="token-content">
                  The USDAO stablecoin provides super fast, low-cost
                  transactions with 1:1 parity with the US dollar.{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* ===================== end::protocol ==================== */}

      {/* ===================== begin::advantage ==================== */}
      <div className="advantage">
        <p className="title-line text-center mb-5">
          <span>Advantages</span> of the USDAO Protocol
        </p>

        <Row>
          <Col md={6}>
            <Row className="gy-5">
              <Col md={12}>
                <p className="token-title">Full Collateralization</p>
                <p className="token-content">
                  The ecosystem is managed by smart contracts which ensure full
                  collateralization at all times. Liquidity providers hold ASSET
                  tokens which earn dividends generated by transaction fees.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>

              <Col md={12}>
                <p className="token-title">100% Decentralized</p>
                <p className="token-content">
                  The USDAO protocol is fully decentralized, with complete
                  governance by DAOGOV token holders ensuring the protocol
                  always remains in the control of the community.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>

              <Col md={12}>
                <p className="token-title">Cross Chain Development</p>
                <p className="token-content">
                  Whilst the USDAO ecosystem is built on Ethereum, it will be
                  further developed to operate across multiple blockchains and
                  Layer 2 protocols.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Row className="gy-5">
              <Col md={12}>
                <p className="token-title">Earn Monthly Rewards</p>
                <p className="token-content">
                  Low fees and super-fast transactions with no hidden costs
                  makes USDAO ideal for cross-border remittance, and as a
                  dollar-pegged stablecoin for cryptocurrency traders.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>

              <Col md={12}>
                <p className="token-title">Business Integration</p>
                <p className="token-content">
                  USDAO protocol has been designed to make it easy for
                  developers to create innovative new products and services as
                  well as integrate into their existing business systems.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>

              <Col md={12}>
                <p className="token-title">Staking and Earning</p>
                <p className="token-content">
                  The USDAO ecosystem provides investors with efficient earning
                  potential by staking their tokens, and a fully automated
                  system to maximise returns.
                </p>

                <button className="btn btn-border-gradient">Learn More</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {/* ===================== end::advantage ==================== */}

      {/* ===================== begin::social ==================== */}
      <Social
        socialHighlight="Join global"
        socialTitle="open source community"
      />
      {/* ===================== end::social ==================== */}
    </>
  );
};

export default Home;
