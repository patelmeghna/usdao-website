import React from 'react'
import InnerBanner from '../components/InnerBanner';
import logo from '../images/logos/asset-logo.svg';

const Asset = () => {
  return (
    <div className='asset-page'>
      <InnerBanner
        title="ASSET"
        titlehighlight="TOKEN"
        desc="Liquidity providers deposit ETH in return for ASSET tokens, which represent a proportion of the liquidity pool"
        img={logo}
      />
    </div>
  );
}

export default Asset
