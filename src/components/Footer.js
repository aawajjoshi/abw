import React from 'react';

import abw from '../assets/images/logos/ABW_logo.svg';

import phone from '../assets/images/logos/phone.svg';
import map from '../assets/images/logos/map-pin.svg';
import clock from '../assets/images/logos/clock.svg';
import facebook from '../assets/images/logos/facebook.svg';
import instagram from '../assets/images/logos/instagram.svg';

const activeStyle = {
    color: '#18A0FB'
}

const Footer = () => {
    return (
        <section id="contact" className="footer">
            <div className='footer-container'>

                <div>
                    <img src={abw} alt="abw-logo" srcSet="" />
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src={phone} alt='phone' className='footer-info-icons' />
                    </div>
                    <div>
                        <a href="tel:(240)-833-8387">(240)-833-8387</a>
                    </div>
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src={map} alt='location' className='footer-info-icons' />
                    </div>
                    <div>
                        <a>11242 Georgia Ave<span style={{ display: 'block' }}>Silver Spring, MD 20902</span></a>
                    </div>
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src={clock} alt='hours' className='footer-info-icons' />
                    </div>
                    <div>
                        <a>Mon - Thu: 11am - 10pm<span style={{ display: 'block' }}>Fri - Sat: 11am - 11pm</span><span style={{ display: 'block' }}>Sun: 11am - 9pm</span></a>
                    </div>
                </div>

                <div className='break-line'></div>

                <div className='footer-info-box'>
                    <div>
                        <a>Follow us</a>
                    </div>
                    <div style={{ width: '100px' }}>
                        <a href='https://www.facebook.com/Americas-Best-Wings-Wheaton-113241587064352' target='_blank'><img src={facebook} alt='facebook' className='footer-info-icons' style={{ marginTop: '9%', marginRight: '6%' }} /></a>
                        <a><img src={instagram} alt='instagram' className='footer-info-icons' style={{ marginTop: '9%', marginLeft: '6%' }} /></a>
                    </div>
                </div>                

                <div className='footer-info-box'>
                    <p>© America's Best Wings ● 2021</p>
                </div>

            </div>
    </section>
    )
}

export default Footer;