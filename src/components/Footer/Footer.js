import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// IMPORT ASSETS
import "../Footer/Footer.css";

// IMAGES
import footerLogo from "../../assets/images/laquest_logo_f.png"

const Footer = () => {
    return (
        <>
        <section id="footer">
            <div className="section__container">
                <div className="footer_container">

                    <div className="footer__brand_icon">
                        <img src={footerLogo} alt="LaQuest Inc Logo"/>
                        <p className="white_c ff__gilroy__l">Copyright © 2022 LaQuest Inc. All rights reserved</p>
                    </div>

                    <div className="footer__sm__list">
                       
                        <ul className="footer__sm__menu">
                       
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://www.linkedin.com/company/laquestinc"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                            </li>
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://twitter.com/laquestinc"><FontAwesomeIcon icon={["fab", "twitter-square"]}/></a>
                            </li>
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://www.facebook.com/LaQuestinc/"><FontAwesomeIcon icon={["fab", "facebook-square"]}/></a>
                            </li>
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://www.instagram.com/laquestinc/"><FontAwesomeIcon icon={["fab", "instagram-square"]}/></a>
                            </li>
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://cloud.withgoogle.com/partners/detail/?id=laquest-inc&hl=en-US&fbclid=IwAR16CzLCXDjM9_KkMzPyu4_Py3QwodQYr9UGJ3jN-YcuoyH44HTzmdjSeP8"><FontAwesomeIcon icon={["fab", "google"]}/></a>
                            </li>
                            <li className="footer_sm_item">
                                <a target="_blank" href="https://medium.com/laquest/ "><FontAwesomeIcon icon={["fab", "medium"]}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer
