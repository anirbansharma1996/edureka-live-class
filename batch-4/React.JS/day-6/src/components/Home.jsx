import React, { useRef } from "react";
import Swipper from "./Swipper";
import { FaArrowUp } from "react-icons/fa";

export const Home = () => {
  const divref = useRef(null);

  const handleScroll = () => {
    divref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={divref} className="hero-section">
        <h1>
          Find the best fit <br />
          Accordingly...
        </h1>
        <button>Find Now </button>
      </div>
      <div className="upper-arrow" onClick={handleScroll}>
        <FaArrowUp />
      </div>
      <Swipper />
      <Insight />
      <h1>Contact Us</h1>
      <ContactUs />
    </>
  );
};

export function Insight() {
  return (
    <div className="insights">
      <h1>
        24 X 7 <br /> <span>customer support</span>{" "}
      </h1>
      <h1>
        10,000+ <br /> <span>happy customers</span>{" "}
      </h1>
      <h1>
        10days <br /> <span>replacement policy</span>
      </h1>
    </div>
  );
}

export function ContactUs() {
  return (
    <div className="contact-us">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.847563348811!2d88.71925601538299!3d26.54119088277447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4a6427c3d51d5%3A0x6b5424e6b6c0c10b!2sA.C.%20College%2C%20Jalpaiguri!5e0!3m2!1sen!2sin!4v1687172638379!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        style={{ border: "0" }}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-us-info">
        <h1>
          ShopStop HQ <br />
          <span>Jalpaiguri</span>
        </h1>
        <h1>
          Enquiry <br />
          <span>+91 70090 01000</span>
        </h1>
        <h1>
          Mail Us <br /> <span>shopstop@support.com</span>
        </h1>
      </div>
    </div>
  );
}
