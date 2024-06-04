import React from "react"; 
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            {" "}
            We are always ready to help you by providing the best community and
            ngo numbers and helpline</span>
            

            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexColStart row">
                <div className="flecColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span>Call</span>
                      <span>+91 7689530295</span>
                    </div>
                  </div>

                  <div className="flexCenter button"> Call Now</div>
                </div>
              </div>
            </div>
        </div>

        {/*right side*/}
        <div className="c-right">
          <div className="flexCenter image-container">
            <img src="./contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
