import React from 'react';
import './innerBanner.scss';
import logos from "../images/logos/logos.svg";
import { Col, Row } from "react-bootstrap";

const InnerBanner = (props) => {
  return (
    <>
      <div className="gov-banner">
        <Row>
          <Col md={6}>
            <p className="big-title">
              {props.title} <span>{props.titlehighlight}</span>
            </p>

            <p className="gov-content">
              {props.desc}
            </p>

            <button className="btn btn-border-gradient">Buy Now</button>
          </Col>

          <Col md={6}>
            <img src={props.img} alt="" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default InnerBanner