
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import appstore from "../images/app-store.jpg";
import playstore from "../images/play3.png"
function Footer() {
  return (

    <><div className='footer'>
      <div className='upper-footer'>
        <div className='upper-footer-1'>
          <div className='footer-logo'><h1>Real</h1></div>
          <div className='address'>
            <p>Address</p>
            <h4>adddffffhghyjjkyukkuhygj</h4>
            <p>Total Free Costomer Care</p>
            <h4>+(0) 123 456 567 97</h4>
            <p>Need Live Suppoert?</p>
            <h4>www.real.com</h4>
          </div>
        </div>
        <div className='upper-footer-2'>
          <div className='upper-footer-2-text1'>
            <div className='footer-heading'><h4>Popular Search</h4></div>
            <div className='footer-subheading'>
              <p>Apartment for sales</p>
              <p>Apartment low to high</p>
              <p>Office for sale </p>
              <p>OPffice for rent </p>
            </div>
          </div>
          <div className='upper-footer-2-text2'>
          <div className='footer-heading'><h4>Discovery</h4></div>
            <div className='footer-subheading'>
              <p>New York</p>
              <p>Los Angle</p>
              <p>Chicago </p>
              <p>Miamai</p>
            </div>
          </div>
        </div>
        <div className='upper-footer-3'>
          <div className='upper-footer-3-link-heading'><h4>Quick Link</h4></div>
          <div className='upper-footer-3-links'>
            <p>Term of use</p>
            <p>privacy policy</p>
            <p>Our Services</p>
            <p>Contact Supportd</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className='upper-footer-4'>
          <div className='upper-footer-4-email'>
            <h4>Keep Yourself  Upto Date</h4>
            <div className="upper-footer-4-email-input">
            <input type="text" name="" id=""  placeholder="your Email" />
            <span><IoIosSend/></span>
            </div>

          </div>
          <div className="footer-app">
            <h3>Apps</h3>
            <div className='app'>
              <img src={appstore} alt="playstore"style={{ width: '40%' }}/>
              <img src={playstore} alt="appstore" style={{ width: '30%', height:'50%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer">
        <div className='lower-footer-text'>
          <p>© Real 2024 ib-themes - All rights reserved</p>
        </div>
        <div className='lower-footer-icons'>
          <p>Follow us</p>
          <div className='footer-icons'>
            <FaFacebookF />
            <FaSquareXTwitter />
            <FaInstagramSquare />
            <FaLinkedin />

          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Footer