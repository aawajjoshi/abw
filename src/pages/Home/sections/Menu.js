import React from 'react';

import uberEats from '../../../assets/images/logos/Uber-Eats.svg'
import doordash from '../../../assets/images/logos/Doordash.svg'
import grubhub from '../../../assets/images/logos/Grubhub.svg'

const Menu = () => {
    return (
      <section id="menu" className="features-section">
        <div className="features-container">
          <h3
            className="md-heading"
            style={{ width: "100%", textAlign: "center", color: '#000000' }}
          >
            MENU
          </h3>
          <p className="feature-info">
          At America's Best Wings, we serve more than just amazing chicken wings. Shift through our menu on UberEats, Grubhub, or Doordash to see all of our offerings before placing your order.
          </p>
          {/* <NavLink exact to='/menu'><button className='feature-button'>FULL MENU</button></NavLink> */}
        </div>
        <div className="feature-icons">
          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/wings.jpg' alt="wings" />
          </div>
          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/burger.jpg' alt="burger" />
          </div>
          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/wrap.jpg' alt="wrap" />
          </div>

          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/fish-chips.jpg' alt="fish & chips" />
          </div>
          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/sandwich.jpg' alt="sandwich" />
          </div>
          <div className="box">
            <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/pasta.jpg' alt="pasta" />
          </div>
        </div>
        <div className="features-container">
          {/* <button className='feature-button feature-order-btn'>ORDER NOW</button> */}

          <h3
            className="md-heading"
            style={{ width: "100%", textAlign: "center", color: '#000000', margin: '4% auto 3%' }}
          >
            ORDER NOW
          </h3>

          <a href='https://www.clover.com/online-ordering/americas-best-wings-silver-spring' target='_blank'><button className='feature-button feature-order-btn'>ORDER ONLINE & PICKUP</button></a>

          <div id="order" className='feature-link-icon'>
          <div className="feature-link-icon-box">
                <a className="" href="https://www.grubhub.com/restaurant/americas-best-wings-11242-georgia-ave-silver-spring/2522990?classicAffiliateId=%2Fr%2Fw%2F2522990%2F&utm_source=https://restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=2522990" target="_blank">
                    <img
                    src={grubhub}
                    alt="grubhub-logo"
                    className='md-link-icon'
                    />
                </a>
            </div>
            <div className="feature-link-icon-box">
                <a className="" href="https://order.ubereats.com/washington-dc/food-delivery/Americas%20Best%20Wings/FyYRRlNQSvep04tzcSpABg/?utm_source=web-restaurant-manager" target="_blank">
                    <img
                    src={uberEats}
                    alt="uberEats-logo"
                    className='md-link-icon'
                    />
                </a>
            </div>
            <div className="feature-link-icon-box">
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
      </section>
    );
  };

  export default Menu;