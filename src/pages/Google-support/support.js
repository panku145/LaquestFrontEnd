import React, { useRef, useEffect } from "react";
import { Link as PageLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
// --------------
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/effect-fade/effect-fade";
// import "swiper/modules/navigation/navigation";
// import "swiper/modules/pagination/pagination";
// ------------------
import SwiperCore, { Navigation } from "swiper";
import $ from "jquery";

// IMPORT CUSTOM STYLE
import "swiper/swiper-bundle.min.css";
import "./support.css";
import "./support-responsive.css";

// IMPORT COMPONENTS & PAGES
import FOOTER from "../../components/Footer/Footer.js";
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";

// import Modal from "../../components/Modal/Modal.js";

// IMAGES
import circleGrid from "../../assets/images/solid-cicrle-box@2x.png";

import googleWorkspace from "../../assets/images/google-workspace-logo.png";
import googlePartner from "../../assets/images/white-laptop.png";

import deployment from "../../assets/images/data-migration.jpg";
import dataMigration from "../../assets/images/data-migration1.jpg";
import deviceManagement from "../../assets/images/device-management.jpg";
import network from "../../assets/images/network.jpg";
import integration from "../../assets/images/integration.jpg";
import managementSupport from "../../assets/images/management-support.jpg";

SwiperCore.use([Navigation]);

function Support() {
  // swiper slider
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();
  // swiper slider

  useEffect(() => {
    var dmsbtn = ".dmsbtn",
      dsbtn = ".dsbtn",
      dmsupportbtn = ".dmsupportbtn",
      cisbtn = ".cisbtn",
      mssbtn = ".mssbtn",
      mdnsbtn = ".mdnsbtn",
      dsContent = ".ds__content",
      dmsContent = ".dms__content",
      dmsupportContent = ".dmsupport__content",
      cisContent = ".cis__content",
      mssContent = ".mss__content",
      mdnsContent = ".mdns__content";

    // DMS
    $(dmsbtn).click(function () {
      $(dmsbtn).addClass("active");
      $(dmsContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dsContent +
          "," +
          dmsupportContent +
          "," +
          cisContent +
          "," +
          mssContent +
          "," +
          mdnsContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dsbtn + "," + dmsupportbtn + "," + cisbtn + "," + mssbtn + "," + mdnsbtn
      ).removeClass("active");
    });
    // DMS

    // DS
    $(dsbtn).click(function () {
      $(dsbtn).addClass("active");
      $(dsContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dmsContent +
          "," +
          dmsupportContent +
          "," +
          cisContent +
          "," +
          mssContent +
          "," +
          mdnsContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dmsbtn +
          "," +
          dmsupportbtn +
          "," +
          cisbtn +
          "," +
          mssbtn +
          "," +
          mdnsbtn
      ).removeClass("active");
    });
    // DS

    // DMSUPPORT
    $(dmsupportbtn).click(function () {
      $(dmsupportbtn).addClass("active");
      $(dmsupportContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dmsContent +
          "," +
          dsContent +
          "," +
          cisContent +
          "," +
          mssContent +
          "," +
          mdnsContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dmsbtn + "," + dsbtn + "," + cisbtn + "," + mssbtn + "," + mdnsbtn
      ).removeClass("active");
    });
    // DMSUPPORT

    // CIS
    $(cisbtn).click(function () {
      $(cisbtn).addClass("active");
      $(cisContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dmsContent +
          "," +
          dsContent +
          "," +
          dmsupportContent +
          "," +
          mssContent +
          "," +
          mdnsContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dmsbtn + "," + dsbtn + "," + dmsupportbtn + "," + mssbtn + "," + mdnsbtn
      ).removeClass("active");
    });
    // CIS

    // MSS
    $(mssbtn).click(function () {
      $(mssbtn).addClass("active");
      $(mssContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dmsContent +
          "," +
          dsContent +
          "," +
          dmsupportContent +
          "," +
          cisContent +
          "," +
          mdnsContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dmsbtn + "," + dsbtn + "," + dmsupportbtn + "," + cisbtn + "," + mdnsbtn
      ).removeClass("active");
    });
    // MSS

    // MDNS
    $(mdnsbtn).click(function () {
      $(mdnsbtn).addClass("active");
      $(mdnsContent).css({
        display: "inline-block",
        transition: "5s ease-in-out",
      });
      $(
        dmsContent +
          "," +
          dsContent +
          "," +
          dmsupportContent +
          "," +
          cisContent +
          "," +
          mssContent
      ).css({
        display: "none",
        transition: "5s ease-in-out",
      });
      $(
        dmsbtn + "," + dsbtn + "," + dmsupportbtn + "," + cisbtn + "," + mssbtn
      ).removeClass("active");
    });
    // MDNS
  }, []);

  return (
    <>
      <div className="wrapper">
        {/* LINE ON BG */}
        <div className="strips">
          <div className="strips__one"></div>
          <div className="strips__two"></div>
          <div className="strips__three"></div>
          <div className="strips__four"></div>
          <div className="strips__five"></div>
          <div className="strips__six"></div>
        </div>
        {/* LINE ON BG */}

        {/* NAVIGATION */}
        <NAVIGATION />
        {/* NAVIGATION */}

        {/* NAVIGATION */}
        {/* <NAV /> */}
        {/* NAVIGATION */}

        {/* HEADER SECTION */}
        <section id="supportHeaderSection">
          <div className="section__container">
            <div className="support__header_content">
              <h3 className="support__header ff__gilroy__e light_c">Support</h3>
              <h1 className="support__tagline ff__gilroy__e dark_c">
                Google Workspace.
              </h1>
              <h4 className="support__subtagline ff__gilroy__l dark_c">
                Schedule a{" "}
                <span className="ff__gilroy__e">
                  free 30-minute consultation
                </span>{" "}
                with a <br className="br__hide" />
                LaQuest Hybrid Technical Support expert.
              </h4>
            </div>
            <div className="support__header_hero">
              <div className="support__header__hero__mv">
                <div className="gridcircle__top">
                  <img src={circleGrid} alt="Grid Circle" />
                </div>
                <img src={googlePartner} alt="Google Partner" />
                <div className="gridcircle__bottom">
                  <img src={circleGrid} alt="Grid Circle" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HEADER SECTION */}

        {/* CONTACT DETAILS */}
        <section id="supportcontactSection">
          <div className="section__container">
            <div className="support__contact__content">
              <div className="support__contact__thumbnail">
                <div className="google__brand">
                  <img src={googleWorkspace} alt="Google Workspace" />
                </div>
                <a
                  href="https://admin.google.com/TransferToken"
                  target="_blank"
                >
                  <h4 className="google__brand__content ff__gilroy__l dark_c">
                    Get{" "}
                    <span className="google__brand__content ff__gilroy__e secondary_c">
                      PIN
                    </span>{" "}
                    for
                    <br />{" "}
                    <span className="google__brand__content ff__gilroy__l secondary_c">
                      Transfer Token
                    </span>
                  </h4>
                </a>
              </div>

              <div className="support__contact__thumbnail">
                <h4 className="contact__details__h ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">Helpdesk</span>{" "}
                  <br />
                  Support
                </h4>
                <p className="support__contact__info ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e light_c">Philippines:</span>{" "}
                  <br className="br__contact__info" />
                  +(632) 8255 2685
                  <br />
                  <span className="ff__gilroy__e light_c">India:</span>{" "}
                  <br className="br__contact__info" />
                  +91-9871978766
                </p>
              </div>

              <div className="support__contact__thumbnail">
                <h4 className="contact__details__h ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">Email</span>{" "}
                  <br />
                  Assistance
                </h4>
                <p className="support__contact__info ff__gilroy__l dark_c">
                  support@laquest.net
                  <br />
                  hybridtech@laquest.net
                </p>
              </div>

              <div className="support__contact__thumbnail">
                <h4 className="contact__details__h ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">Certified</span>{" "}
                  <br />
                  Administration
                </h4>
                <p className="support__contact__info ff__gilroy__l dark_c">
                  We are your remote admin assistants in provisioning new users,
                  configuring settings and authorizing new features.
                </p>
              </div>

              <div className="support__contact__thumbnail">
                <h4 className="contact__details__h ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">Technology</span>{" "}
                  <br />
                  Consultation
                </h4>
                <p className="support__contact__info ff__gilroy__l dark_c">
                  We are here to listen about your technology needs and we will
                  surely provide a definite solution there is!
                </p>
              </div>

              <div className="support__contact__thumbnail">
                <h4 className="contact__details__h ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">3rd Party</span>{" "}
                  <br />
                  Connectivity
                </h4>
                <p className="support__contact__info ff__gilroy__l dark_c">
                  We assist in configuring your Google Workspace to function
                  collaboratively with 3rd party tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT DETAILS */}

        {/* WORKSPACE FEATURES */}
        <section id="workspaceFeatureSection">
          <div className="section__container">
            <div className="wsf__nav">
              <ul className="wsf__nav__list">
                <li className="active dsbtn li--mr">DEPLOYMENT SUPPORT</li>
                <li className="dmsbtn">DATA MIGRATION SUPPORT</li>
                <li className="dmsupportbtn li--mr">DEVICE MANAGEMENT SUPPORT</li>
                <li className="cisbtn">CONFIGURATION & INTEGRATION SUPPORT</li>
                <li className="mssbtn li--mr">MANAGEMENT SETTING SUPPORT</li>
                <li className="mdnsbtn">MULTIPLE DOMAIN NETWORK SUPPORT</li>
              </ul>
            </div>
            <div className="content__container__wsf">
              {/* DS */}
              <div className="ds__content">
                <h4 className="ff__gilroy__e">DEPLOYMENT SUPPORT</h4>
                <p className="ff__gilroy__l  dark_c">
                  Transitioning your organization to switch to Google Workspace
                  can is no longer a daunting task because it is our job to help
                  you move smoothly from your local or legacy server to properly
                  migrate and/or sync your data with Google Workspace.
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Data Migration
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Provisioning
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Sync Management
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Implementation
                  </li>
                </ul>
              </div>
              {/* DS */}

              {/* DMS */}
              <div className="dms__content">
                <h4 className="ff__gilroy__e">DATA MIGRATION SUPPORT</h4>
                <p className="ff__gilroy__l  dark_c">
                  We help export and import, configure the migration process for
                  your emails, contacts, calendar events and files. Whether your
                  files are coming from a different domain to another domain or
                  from a different email client to Google Workspace.
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Migration from Google Workspace to Google Workspace.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Migration from personal emails to Google Workspace.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Migration from Microsoft 365/Exchange to Google Workspace.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Migration from IBM to Google Workspace.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Migration from local/legacy server to Google Workspace.
                  </li>
                </ul>
              </div>
              {/* DMS */}

              {/* DMSUPPORT */}
              <div className="dmsupport__content">
                <h4 className="ff__gilroy__e">DEVICE MANAGEMENT SUPPORT</h4>
                <p className="ff__gilroy__l  dark_c">
                  We help configure devices such as mobile phones, tablets,
                  laptops and other company owned devices that are being used to
                  access company data so that an administrator can monitor,
                  control and review reports on device activities.
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    iOS
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Android
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Chrome
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Windows that use Google Sync.
                  </li>
                </ul>
              </div>
              {/* DMSUPPORT */}

              {/* CIS */}
              <div className="cis__content">
                <h4 className="ff__gilroy__e">
                  CONFIGURATION & INTEGRATION SUPPORT
                </h4>
                <p className="ff__gilroy__l  dark_c">
                  Google Workspace is designed to be integrated to 3rd party
                  communication platforms and we provide assistance in setting
                  up this integration process with the Google Workspace such as:
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    SMTP required apps.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Cloud printers.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Mass email marketing software.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Customer relationship management (CRM) software.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Accounting software, web forms and others.
                  </li>
                </ul>
              </div>
              {/* CIS */}

              {/* MSS */}
              <div className="mss__content">
                <h4 className="ff__gilroy__e">MANAGEMENT SETTING SUPPORT</h4>
                <p className="ff__gilroy__l  dark_c">
                  We help you and your administrator in setting up your
                  company’s rule requirements according to the policies, roles,
                  permissions and restrictions for your organization and further
                  enhance your security and monitoring systems.
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    File sharing rules
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Apps access permissions and restriction settings.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Chat and email access and permissions.
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="wsf__cta__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Device monitoring set-up.
                  </li>
                </ul>
              </div>
              {/* MSS */}

              {/* MDNS */}
              <div className="mdns__content">
                <h4 className="ff__gilroy__e">
                  MULTIPLE DOMAIN NETWORK SUPPORT
                </h4>
                <p className="ff__gilroy__l  dark_c">
                  We help set-up rules and policies for different departments
                  having assignments with multiple domains or sub-domains. Our
                  services include diagnosis and configuration of complicated
                  settings that requires email routing and data communication of
                  non-Google Workspace with the Google Workspace users having
                  the same domain in their email addresses. A consolidation of
                  all domains in one Google Workspace account is also part of
                  the domain network that we support for organization with
                  different permissions or restrictions in the access, use or
                  sharing of applications and data which are managed in one
                  Google Workspace admin console.
                </p>
              </div>
              {/* MDNS */}
            </div>
          </div>
        </section>
        {/* WORKSPACE FEATURES */}

        {/* SUPPORT FORM SECTION */}
        <section id="supportformSection">
          <div className="section__container flex__wrap">
            <div className="support__form">
              <div className="support__page__form">
                <h2 className="ff__gilroy__l dark_c">
                  Let's start the{" "}
                  <span className="ff__gilroy__e">Conversation.</span>
                </h2>
                <form method="POST">
                  <div className="input__size__frame form__field__ml form__field__ml__1280 m__none">
                    <div className="text__field">
                      <input type="text" name="fullname" required />
                      <span></span>
                      <label htmlFor="fullname">First Name*</label>
                    </div>
                  </div>

                  <div className="input__size__frame form__field__mr__1280 m__none">
                    <div className="text__field">
                      <input type="text" name="fullname" required />
                      <span></span>
                      <label htmlFor="fullname">Last Name*</label>
                    </div>
                  </div>

                  <div className="input__size__frame form__field__mr form__field__ml__1280 form__field__mr__w1280 m__none">
                    <div className="text__field">
                      <input type="email" name="email" required />
                      <span></span>
                      <label htmlFor="email">Email Address*</label>
                    </div>
                  </div>

                  <div className="input__size__frame form__field__ml form__field__ml__w1280 form__field__mr__1280 m__none">
                    <div className="text__field">
                      <input type="tel" name="mobile_number" required />
                      <span></span>
                      <label htmlFor="mobile_number">Mobile Number*</label>
                    </div>
                  </div>

                  <div className="input__size__frame form__field__ml__1280 form__field__mr__w1280 m__none">
                    <div className="text__field">
                      <input type="text" name="company_name" required />
                      <span></span>
                      <label htmlFor="company_name">Company Name*</label>
                    </div>
                  </div>

                  <div className="input__size__frame form__field__mr m__none">
                    <div className="text__field">
                      <input type="text" name="country" required />
                      <span></span>
                      <label htmlFor="country">Country*</label>
                    </div>
                  </div>

                  <div className="input__size__frame__textarea m__none">
                    <div className="textarea__field">
                      <textarea name="message" rows="5" required></textarea>
                      <span></span>
                      <label htmlFor="message">Message*</label>
                    </div>
                  </div>

                  <div className="submit__btn">
                    <button type="submit">
                      Send Message{" "}
                      <FontAwesomeIcon
                        className="icon__submit"
                        icon={["fas", "paper-plane"]}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="support__form__content">
              <h2 className="ff__gilroy__l dark_c">
                Why <span className="ff__gilroy__e">LaQuest?</span>
              </h2>
              <p className="ff__gilroy__l dark_c">
                We help to execute{" "}
                <span className="ff__gilroy__e secondary_c">faster</span> and{" "}
                <span className="ff__gilroy__e secondary_c">
                  seamless deployment
                </span>{" "}
                of your{" "}
                <span className="ff__gilroy__e secondary_c">office tools</span>{" "}
                and strategize to better{" "}
                <span className="ff__gilroy__e secondary_c">
                  boost your productivity,
                </span>{" "}
                organize your daily task,
                <span className="ff__gilroy__e secondary_c">
                  create stunning presentations
                </span>{" "}
                and{" "}
                <span className="ff__gilroy__e secondary_c">
                  quickly generate reports.
                </span>
              </p>
              <ul className="laquest__support___feature">
                <li>
                  <FontAwesomeIcon
                    className="icon__form__section"
                    icon={["fas", "chevron-right"]}
                  />{" "}
                  Multi-portal technical support
                </li>
                <li>
                  <FontAwesomeIcon
                    className="icon__form__section"
                    icon={["fas", "chevron-right"]}
                  />{" "}
                  Dedicated support experts
                </li>
                <li>
                  <FontAwesomeIcon
                    className="icon__form__section"
                    icon={["fas", "chevron-right"]}
                  />{" "}
                  Quick remote access assistance
                </li>
                <li>
                  <FontAwesomeIcon
                    className="icon__form__section"
                    icon={["fas", "chevron-right"]}
                  />{" "}
                  Real-time support on critical cases
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* SUPPORT FORM SECTION */}

        {/* GOOGLE PARTNER SECTION */}
        <section id="googlepartnerSection">
          <div className="section__container">
            <div className="googlepartner__content">
              <h2 className="ff__gilroy__l dark_c">
                With our <span className="ff__gilroy__e">commitment</span> and{" "}
                <span className="ff__gilroy__e">attitude</span>{" "}
                <br className="gp__hide" />
                <span className="ff__gilroy__e">
                  towards development
                </span> and <span className="ff__gilroy__e">growth,</span>{" "}
                <br className="gp__hide" />
                we formulate an authentic method <br className="gp__hide" />
                to{" "}
                <span className="ff__gilroy__e">
                  address every business needs!
                </span>
              </h2>
              <div className="cta__btn">
                <PageLink to="/">
                  <div className="cta__box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20.49 14.485"
                    >
                      <g id="ARROW" transform="translate(-254 -933.757)">
                        <rect
                          id="Rectangle_314"
                          data-name="Rectangle 314"
                          width="20.005"
                          height="2"
                          transform="translate(254 940)"
                          fill="#f0ad47"
                        />
                        <rect
                          id="Rectangle_315"
                          data-name="Rectangle 315"
                          width="10"
                          height="2"
                          transform="translate(266.005 946.828) rotate(-45)"
                          fill="#f0ad47"
                        />
                        <rect
                          id="Rectangle_316"
                          data-name="Rectangle 316"
                          width="10"
                          height="2"
                          transform="translate(267.419 933.757) rotate(45)"
                          fill="#f0ad47"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="cta__label">Contact us for partnership</div>
                </PageLink>
              </div>
            </div>
          </div>
        </section>
        {/* GOOGLE PARTNER SECTION */}

        {/* FOOTER SECTION */}
        <FOOTER />
        {/* FOOTER SECTION */}
      </div>
    </>
  );
}

export default Support;
