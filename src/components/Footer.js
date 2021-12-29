import React from 'react';

const Footer = () => {
    return (
        <section id="contact" className="footer">
            <div className='footer-container'>

                <div>
                    <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387760/ABW/LOGOS/ABW_logo_e2szkq.svg' alt="abw-logo" srcSet="" />
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387761/ABW/LOGOS/phone_sgplhl.svg' alt='phone' className='footer-info-icons' />
                    </div>
                    <div>
                        <a href="tel:(240)-833-8387">(240)-647-9453</a>
                    </div>
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387761/ABW/LOGOS/map-pin_brzxls.svg' alt='location' className='footer-info-icons' />
                    </div>
                    <div>
                        <a href='http://maps.google.com/?q=11242 Georgia Ave, Silver Spring, Maryland, 20902' rel='noreferrer' target='_blank'>11242 Georgia Ave<span style={{ display: 'block' }}>Silver Spring, MD 20902</span></a>
                    </div>
                </div>

                <div className='footer-info-box'>
                    <div>
                        <img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/clock_edpsqw.svg' alt='hours' className='footer-info-icons' />
                    </div>
                    <div>
                        <span>Mon - Thu: 11am - 10pm<span style={{ display: 'block' }}>Fri - Sat: 11am - 11pm</span><span style={{ display: 'block' }}>Sun: 11am - 9pm</span></span>
                    </div>
                </div>

                <div className='break-line'></div>

                <div className='footer-info-box'>
                    <div>
                        <span>Follow us</span>
                    </div>
                    <div style={{ width: '100px' }}>
                        <a href='https://www.facebook.com/Americas-Best-Wings-Wheaton-113241587064352' rel='noreferrer' target='_blank'><img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/facebook_usetjm.svg' alt='facebook' className='footer-info-icons' style={{ marginTop: '9%', marginRight: '6%' }} /></a>
                        <a href='https://www.instagram.com/americasbestwingswheaton/' rel='noreferrer' target='_blank'><img src='https://res.cloudinary.com/dw8damfxa/image/upload/v1611387759/ABW/LOGOS/instagram_vj6yts.svg' alt='instagram' className='footer-info-icons' style={{ marginTop: '9%', marginLeft: '6%' }} /></a>
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