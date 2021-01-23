import React from "react";
import Modal from "../../../components/Modal";

import uberEats from '../../../assets/images/logos/Uber-Eats.svg'
import doordash from '../../../assets/images/logos/Doordash.svg'
import grubhub from '../../../assets/images/logos/Grubhub.svg'

const ModalText = () => {
  return (
    <div>
      <h3 className="md-heading">BEST WINGS FOR PICKUP OR DELIVERY</h3>
      <p className="md-info">
      At America's Best Wings, you can place your order online for pickup in store. Alternatively, you can have America’s best wings delivered right to your doorsteps through one of delivery partners. Order online now!
      </p>
      <a href='https://www.clover.com/online-ordering/americas-best-wings-silver-spring' target='_blank'><button className='md-link-icon-clover'>ORDER ONLINE & PICKUP</button></a>
      {/* <p className="md-heading" style={{ fontWeight: '400' }}>OR</p> */}
      <div className="md-link">
      <div className="md-link-box">
            <a className="" href="https://www.grubhub.com/restaurant/americas-best-wings-11242-georgia-ave-silver-spring/2522990?classicAffiliateId=%2Fr%2Fw%2F2522990%2F&utm_source=https://restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=2522990" target="_blank">
                <img
                src={grubhub}
                alt="grubhub-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://order.ubereats.com/washington-dc/food-delivery/Americas%20Best%20Wings/FyYRRlNQSvep04tzcSpABg/?utm_source=web-restaurant-manager" target="_blank">
                <img
                src={uberEats}
                alt="uberEats-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://www.doordash.com/business/691122/?utm_source=partner-link&utm_medium=website&utm_campaign=691122&utm_content=red-l" target="_blank">
                <img
                src={doordash}
                alt="doordash-logo"
                className='md-link-icon'
                />
            </a>
        </div>
      </div>
    </div>
  );
};

const ModalBox = () => {
    return <Modal modalText={<ModalText />} />
}

export default ModalBox;
