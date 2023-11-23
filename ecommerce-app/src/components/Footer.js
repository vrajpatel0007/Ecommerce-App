import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,Bslnstagram, BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className='col-5'>
            <div className="footer-top-data d-flex gep-30 align-items-center">
              <img className="pe-3" src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0 text-white ">Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
            <div className="input-group ">
              <input
                type="text"
                className="form-control py-1"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                Pincode: 131103
              </address>
              <a href="tel:+91 4576295315" className="mt-4 d-block mb-2 text-white">
                +91 4576295315
              </a>
              <a href="Mailto:navdeepdahiya753@gmait.com" className="mt-4 d-block mb-2 text-white">
              navdeepdahiya753@gmait.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a className="" href="">
                  <BsLinkedin className="text-white fs-4" />
                </a>
                <a className="" href="">
                  <BsInstagram className="text-white fs-4" />
                </a>
                <a className="6e" href="">
                  <BsGithub className="text-white fs-4" />
                </a>
                <a className="" href="">
                  <BsYoutube className="text-white fs-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link className="text-white py-2 mb-1">Refund Policy'</Link>
              <Link className="text-white py-2 mb-1">Shipping Polic</Link>
              <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Leptope</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by Developer's Corner
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>;
}

export default Footer