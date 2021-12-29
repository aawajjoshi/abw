import React from "react";
import Modal from "../../../components/Modal";

const ModalText = () => {
  return (
    <div>
      <h3 className="md-heading">BEST WINGS FOR PICKUP OR DELIVERY</h3>
      <p className="md-info">
      At America's Best Wings, you can place your order online for pickup in store. Alternatively, you can have America’s best wings delivered right to your doorsteps through one of delivery partners. Order online now!
      </p>
      <a href='https://www.clover.com/online-ordering/americas-best-wings-silver-spring' rel='noreferrer' target='_blank'><button className='md-link-icon-clover'>ORDER ONLINE FOR PICKUP OR DELIVERY</button></a>
      <div className="md-link">
      <div className="md-link-box">
            <a className="" href="https://www.grubhub.com/restaurant/americas-best-wings-11242-georgia-ave-silver-spring/2522990?classicAffiliateId=%2Fr%2Fw%2F2522990%2F&utm_source=https://restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=2522990" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387760/ABW/LOGOS/Grubhub_ucvxem.svg'
                alt="grubhub-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://order.ubereats.com/washington-dc/food-delivery/Americas%20Best%20Wings/FyYRRlNQSvep04tzcSpABg/?utm_source=web-restaurant-manager" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387761/ABW/LOGOS/Uber-Eats_kryvb5.svg'
                alt="uberEats-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        <div className="md-link-box">
            <a className="" href="https://www.doordash.com/business/691122/?utm_source=partner-link&utm_medium=website&utm_campaign=691122&utm_content=red-l" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/Doordash_yfdell.svg'
                alt="doordash-logo"
                className='md-link-icon'
                />
            </a>
        </div>
        {/* <div className="md-link-box">
            <a className="" href="https://eat.chownow.com/discover/restaurant/43450/americas-best-wings-wheaton-11242-georgia-ave-silver-spring" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1618184611/ABW/LOGOS/Chownow_vxvh3x.svg'
                alt="chowNow-logo"
                className='md-link-icon'
                />
            </a>
        </div> */}
      </div>
    </div>
  );
};

const ModalBox = () => {
    return <Modal modalText={<ModalText />} />
}

export default ModalBox;
