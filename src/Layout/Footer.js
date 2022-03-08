import React from 'react';
import './footer.scss';
import logo from "../images/logo.svg";
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col md={3}>
          <div className="footer-about">
            <div className="logo">
              <img src={logo} alt="logo" />

              <p className="footer-content">
                USDAO is a decentralized, community-based, multi
                collateral-backed cryptocurrency soft-pegged to the US dollar.
                It is designed to be resilient during market crash and
                hyperinflation which is ensured by ASSET token which is a USDAO
                pool stabilizer, USDAO offers owning US dollar without having a
                bank account and provide economic freedom and opportunity
                globally to anyone.
              </p>
            </div>
          </div>
        </Col>

        <Col md={9} className="footer-link-wrap">
          <Row className='gy-5'>
            <Col md={3}>
              <p className="footer-title">About</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    USDAO Stablecoin
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    DAOGOV
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    ASSET Token
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    For Businesses
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    For Developer
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <p className="footer-title">Explore</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    Staking
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Governance
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <p className="footer-title">Library</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    Whitepaper
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Portfolio
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <p className="footer-title">Developers</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    Docs
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Developer Resources
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Price Feeds
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <p className="footer-title">Contact</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Support
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Press inquiries
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <p className="footer-title">Partners</p>
              <ul>
                <li>
                  <a href="" className="footer-link">
                    USDAO
                  </a>
                </li>

                <li>
                  <a href="" className="footer-link">
                    Foundation
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer
