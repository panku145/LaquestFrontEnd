import React, { useEffect } from "react";
import $ from "jquery";
import { gsap, TweenMax, TimelineMax, Expo } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleType from "circletype";
import { Link } from "react-scroll";

// IMPORT ASSETS
import "../Privacy-policy/privacy-policy.css";
import "../Privacy-policy/privacy-policy-responsive.css";

// IMPORT COMPONENTS & PAGES
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";
import FOOTER from "../../components/Footer/Footer.js";

const PrivacyPolicy = () => {

useEffect(() => {
    // CIRCULAR TEXT ANIMATION
    const circularType = new CircleType(document.getElementById("rotate"));
    circularType.radius(47.5);
    // CIRCULAR TEXT ANIMATION

    // CURSOR
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    $(document).on("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    $(".rm").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".rm").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
    // CURSOR

    // FIXTOP
    var fixmeTop = $(".eula__list ").offset().top;
    $(window).scroll(function () {
      var currentScroll = $(window).scrollTop();
      if (currentScroll >= fixmeTop) {
        $(".eula__list ").css({
          position: "fixed",
          top: "50px",
        });
      } else {
        $(".eula__list ").css({
          position: "relative",
          top: "0",
        });
      }
    });
    // FIXTOP
  }, []);

  return (
    <>
      {/* CIRCULAR TEXT */}
      <div className="circular__text__container">
        <a target="_blank" href="https://www.facebook.com/LaQuestinc">
          <div className="circular__text">
            <span id="rotate">• Connect with us • Connect with us</span>
          </div>
          <div className="center__icon">
            <FontAwesomeIcon icon={["fas", "comment-dots"]} />
          </div>
        </a>
      </div>
      {/* CIRCULAR TEXT */}

      {/* CURSOR */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      {/* CURSOR */}

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

        {/* PRIVACY HEADER */}
        <section id="eulaHeaderSection">
          <div className="section__container">
            <div className="eula__header__container">
              <h2 className="ff__gilroy__l white_c">
                LaQuest Philippines Inc.
              </h2>
              <h1 className="ff__gilroy__e white_c">Web Privacy Policy.</h1>
            </div>
          </div>
        </section>
        {/* PRIVACY HEADER */}

        {/* EULA */}
        <section id="eulaSection">
          <div className="section__container__eula">
            <div className="eula__navlist__container">
              <ul className="eula__list">
                <li>
                  <Link to="privacyPolicyOverview" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    LaQuest Web Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyWhoweare" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Who we are?
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyNotice" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Privacy notice
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyPersonalInfo"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    How do we collect Personal Information?
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyDatawith" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Who will we share your data with?
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyServicep" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Service Providers
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyDataprocess"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Where is your data processed?
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyWhydata" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Why do we collect personal information?
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyWherepersonalinfo"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Where do we use your Personal Information?
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyConsent" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Consent
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyDiscloseinfo"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    When we may disclose your personal information?
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyAccuracyinfo"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    The accuracy and retention of personal information
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyAccesscontrol"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Your access to and control over information
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacyPolicyAccesswebsite"
                    smooth={true}
                    offset={-30}
                  >
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Use or access of website
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicySecurity" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyConcern" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Resolving your privacy concerns
                  </Link>
                </li>
                <li>
                  <Link to="privacyPolicyContact" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="eula__content__container">
              <div
                className="privacy__policy__overview"
                id="privacyPolicyOverview"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  LaQuest Web Privacy Policy
                </h3>
                <p className="ff__gilroy__e dark_c">
                  Reviewed in 25th May 2018. GDPR version
                </p>
                <p className="ff__gilroy__l dark_c">
                  We at <span className="ff__gilroy__e dark_c">LaQuest</span>{" "}
                  respect your personal data and want to be GDPR friendly. That
                  is why, we have tried to make the information in this Privacy
                  Policy understandable and clear, while bearing only to the
                  extent required by the law.
                </p>
              </div>

              <div
                className="privacy__policy__whoweare"
                id="privacyPolicyWhoweare"
              >
                <h3 className="ff__gilroy__e secondary_c">Who we are?</h3>
                <p className="ff__gilroy__l dark_c">
                  LaQuest LLP, India is the controller and holding company. Our
                  address is A-1, UGF 149/2 Friend Apartment, Devli, Near South
                  Delhi, Delhi - 110062 India.
                </p>
                <p className="ff__gilroy__l dark_c">
                  LaQuest Philippines Inc, Philippines is the international
                  branch of LaQuest LLP based in Level 10-1 One Global Place
                  25th Street, 5th Ave, Bonifacio Global City, Taguig, 1634
                  Metro Manila. Philippines
                </p>
                <p className="ff__gilroy__l dark_c">
                  LaQuest is a global business solutions provider dedicated to
                  elevating it's business partner’s backbone as it facilitates
                  the upgrade of obsolete business platforms, provides reliable
                  business backend support, and help traditional business system
                  transform to the digital world. A trusted Google Cloud partner
                  with Certified G Suite Administrators and technical supports,
                  LaQuest is committed to bringing digital advancement with its
                  reliable source of competent professionals honed to deliver
                  client satisfaction.
                </p>
              </div>

              <div className="privacy__policy__notice" id="privacyPolicyNotice">
                <h3 className="ff__gilroy__e secondary_c">
                  This privacy notice discloses our privacy practices that
                  applies solely to the information collected by our website,
                  www.laquest.net
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We collect your personal information necessary for our
                  business interactions. You will receive a notification when
                  your Personally Identifiable Information is collected from our
                  web site. This includes details of how it is going to be used,
                  the available choices of how you want your data to be utilized
                  and of whom it will be shared. Added are the security
                  procedures in place to protect your information from being
                  misused as well as your option to correct any inaccuracies in
                  the information.
                </p>
                <p className="ff__gilroy__l dark_c">
                  Using our website, or the services provided by LaQuest,
                  including, but not limited to software and technology,
                  digital, outsourcing, direct, inbound or outbound lead
                  generation services, contact sourcing, data appending, data
                  validation and any other business services that may be
                  provided from time to time, you agree to the terms and
                  conditions set forth within this policy and all the ancillary
                  policies of our services.
                </p>
                <p className="ff__gilroy__l dark_c">
                  We may from time to time review and revise these terms for
                  update or business enhancement reasons. We reserve the right
                  to amend or change the policies anytime without prior notice.
                  The amendment or changes thereto shall be effective
                  immediately once posted on our website. All employees and
                  agents of LaQuest understand that any information provided to
                  us is to be held with high confidentiality to protect our
                  user’s privacy.
                </p>
              </div>

              <div
                className="privacy__policy__personalInfo"
                id="privacyPolicyPersonalInfo"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  How do we collect Personal Information?
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We obtain personal information in a variety of ways in which
                  our customers have voluntarily provided. These are:
                </p>
                <ul className="privacy__content__list">
                  <li>Full name</li>
                  <li>Job title</li>
                  <li>Company or organization you work</li>
                  <li>Your email address</li>
                  <li>Your phone number</li>
                  <li>
                    Address and information about your company or organization
                  </li>
                  <li>The fact that you’ve visited our website</li>
                  <li>Who referred you to laquest.net</li>
                  <li>
                    Have you download any marketing materials from our website
                  </li>
                  <li>Your linkedIn profile address</li>
                </ul>
                <p className="ff__gilroy__l dark_c">
                  Ultimately, the personal Information you provide to us is at
                  your discretion and under your control. We could add some
                  information that is not a secret, like your job title or
                  address to LinkedIn profile, if you’ve made those publicly
                  available.
                </p>
              </div>

              <div
                className="privacy__policy__datawith"
                id="privacyPolicyDatawith"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Who will we share your data with?
                </h3>
                <p className="ff__gilroy__e dark_c">
                  LaQuest LLP and LaQuest Philippines Inc
                </p>
                <p className="ff__gilroy__l dark_c">
                  We may disclose your information to our affiliates or
                  subsidiaries, which may help us to process any transactions we
                  offered and that you have shown interest with.
                </p>
              </div>

              <div
                className="privacy__policy__servicep"
                id="privacyPolicyServicep"
              >
                <h3 className="ff__gilroy__e secondary_c">Service Providers</h3>
                <p className="ff__gilroy__e dark_c">
                  LaQuest LLP and LaQuest Philippines Inc
                </p>
                <p className="ff__gilroy__l dark_c">
                  We may disclose your information to our affiliates or
                  subsidiaries, which may help us to process any transactions we
                  offered and that you have shown interest with.
                </p>
              </div>

              <div
                className="privacy__policy__dataprocess"
                id="privacyPolicyDataprocess"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Where is your data processed?
                </h3>
                <p className="ff__gilroy__l dark_c">
                  Your data is processed in India and the Philippines and may be
                  transferred to the US, Asia or Europe. Your data will always
                  be safe and shall conforme under GDPR protection, despite
                  where it is processed.
                </p>
                <p className="ff__gilroy__l dark_c">
                  We treat your data as protective as the GDPR requires from the
                  moment we’ve received it. If we transfer your data inside or
                  outside our group, we’ll use appropriate safeguards, such as
                  standard contractual clauses, for personal data not to get
                  outside of the GDPR scope.
                </p>
              </div>

              <div
                className="privacy__policy__whydata"
                id="privacyPolicyWhydata"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Why do we collect personal information?
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We use your information to communicate with you and provide
                  you with the services listed on www.laquest.net. Occasionally,
                  we update you about our new trends, improved or added services
                  and to help us better understand your needs and interests.
                </p>
                <p className="ff__gilroy__l dark_c">
                  We also collect information about your visit to our web site,
                  including the pages you access, the links you click and other
                  actions taken within our site for the purpose of collective
                  trend analysis, better management purposes of the regular use
                  of our web site and improve its content.
                </p>
              </div>

              <div
                className="privacy__policy__wherepersonalinfo"
                id="privacyPolicyWherepersonalinfo"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Where do we use your Personal Information?
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We are the sole owners of the information collected on our
                  website. We only have access to collect information that you
                  voluntarily give us such as; name, address, phone and billing
                  information via email or other direct contact from you. We
                  will not sell or rent this information to anyone.
                </p>
                <p className="ff__gilroy__l dark_c">
                  We will use your information to respond to you, regarding the
                  reason you contacted us. We will not share your information
                  with any third party outside of our organization, other than
                  when necessary to fulfill your request, e.g. to ship an order.
                  Unless you ask us not to, we may contact you via email in the
                  future to tell you about special offers, new products or
                  services, or changes to this privacy policy.
                </p>
              </div>

              <div
                className="privacy__policy__consent"
                id="privacyPolicyConsent"
              >
                <h3 className="ff__gilroy__e secondary_c">Consent</h3>
                <p className="ff__gilroy__l dark_c">
                  By providing personal Information to us, you agree and consent
                  that we may collect, use and disclose your personal
                  Information in accordance with this Policy. In addition, where
                  appropriate, specific authorizations or consents may be
                  obtained from time to time. In most cases and subject to legal
                  and contractual restrictions, you are free to refuse or
                  withdraw your consent at any time. It should be noted that the
                  website can only be used if you provide Personal Information.
                </p>
              </div>

              <div
                className="privacy__policy__whenpersonalinfo"
                id="privacyPolicyWhenpersonalinfo"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  When we may disclose your personal information?
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We will not sell, rent or lease your information to third
                  parties for their independent use under any circumstances.
                  However, disclosure may take place in some situations,
                  including sharing information with third parties that are
                  contractually bound to us with the understanding not to
                  disclose shared information for their personal use. We may
                  provide access to our database in order to cooperate with
                  official investigations or legal proceedings, including, for
                  example, in response to subpoenas, search warrants, court
                  orders, or other legal process.
                </p>
                <p className="ff__gilroy__l dark_c">
                  While your personally identifying information is protected as
                  outlined above, we reserve the right to use, transfer, sell,
                  and share aggregated, anonymous data about our users as a
                  group for any business purpose, such as analyzing usage trends
                  and seeking compatible advertisers and partners.
                </p>
                <p className="ff__gilroy__l dark_c">
                  In addition, as our business changes, we may buy or sell
                  various assets. In the event all or a portion of the assets
                  owned or controlled by us, our parent or any subsidiary or
                  affiliated entity of us are sold, assigned, transferred or
                  acquired by another company, the information from and/or about
                  our clients may be among the transferred assets.
                </p>
              </div>

              <div
                className="privacy__policy__discloseinfo"
                id="privacyPolicyDiscloseinfo"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  We may disclose your Personal Information to an individual or
                  organization in the following circumstances:
                </h3>
                <p className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e dark_c">(a)</span> to third
                  parties who are our advisors or service providers;
                  <br />
                  <span className="ff__gilroy__e dark_c">(b)</span> banking
                  partners and/or financial institutions to facilitate the
                  transaction;
                  <br />
                  <span className="ff__gilroy__e dark_c">(c)</span> to third
                  parties who are, or may be involved in maintaining, reviewing
                  and developing our business systems, procedures and
                  infrastructure, including testing or updating our systems
                  and/or the Website; and
                  <br />
                  <span className="ff__gilroy__e dark_c">(d)</span> to third
                  parties when required by applicable law. Where we disclose
                  Personal Information to third parties that perform services on
                  our behalf, we will require those third parties to use such
                  information solely for the purposes of providing services to
                  us and to have appropriate safeguards for the protection of
                  that Personal Information.
                  <br />
                </p>
              </div>

              <div
                className="privacy__policy__accuracyinfo"
                id="privacyPolicyAccuracyinfo"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  The accuracy and retention of personal information
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We endeavour to ensure that any Personal Information provided
                  and in our possession is as accurate, current and complete as
                  necessary for the purposes for which we use that information.
                  We keep your Personal Information only as long as it is
                  required for the reasons it was collected. The length of time
                  we retain information varies, depending on its use and the
                  nature of the information. This period may extend beyond the
                  end of your relationship with us but it will be only for so
                  long as is necessary.
                </p>
              </div>

              <div
                className="privacy__policy__accesscontrol"
                id="privacyPolicyAccesscontrol"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Your access to and control over information
                </h3>
                <p className="ff__gilroy__l dark_c">
                  We endeavour to maintain appropriate physical, procedural and
                  technical security with respect to the storage of Personal
                  Information so as to prevent any loss, misuse, unauthorized
                  access, disclosure, or modification of Personal Information.
                  We have established all suitable procedures to protect the
                  security of our client information from unauthorized access,
                  use, or disclosure. LaQuest has employees that understand the
                  importance of confidentiality and client privacy, and all our
                  employees and contractors are bound by a non-disclosure
                  agreement. If for any reason you need to make changes to
                  Personal Information, we should be contacted by email{" "}
                  <a
                    href="mailto:info@laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    info@laquest.net
                  </a>{" "}
                  or in writing to ensure that these changes take place
                  immediately.
                </p>
                <p className="ff__gilroy__l dark_c">
                  You may opt out of any future contacts from us at any time.
                  You can do the following at any time by contacting us via our
                  email address{" "}
                  <a
                    href="mailto:info@laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    info@laquest.net
                  </a>
                  , or via the web form at{" "}
                  <a
                    href="http://www.laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    http://www.laquest.net
                  </a>
                </p>
                <ul className="privacy__content__list">
                  <li>See what data we have about you, if any.</li>
                  <li>Change/correct any data we have about you.</li>
                  <li>Have us delete any data we have about you.</li>
                  <li>
                    Express any concern you have about our use of your data.
                  </li>
                </ul>
              </div>

              <div
                className="privacy__policy__accesswebsite"
                id="privacyPolicyAccesswebsite"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Use or access of website
                </h3>
                <p className="ff__gilroy__l dark_c">
                  In using the Website (www.laquest.net), you may encounter
                  “cookies”. “Cookies” are files or pieces of information that
                  may be stored in a computer’s hard drive when an individual
                  visits a website. Most Internet browsers are initially set to
                  accept cookies. If you do not wish to accept cookies, you can
                  set yours to refuse cookies or to alert you when cookies are
                  being sent. “Session” cookies are temporary bits of
                  information that are erased once a visitor exits its web
                  browser window or otherwise turns its computer off. Session
                  cookies are used to improve navigation on websites and to
                  collect aggregate statistical information. The Website may use
                  session cookies. “Persistent” cookies are more permanent bits
                  of information that are placed on the hard drive of a
                  visitor’s computer and stay there unless it is deleted.
                  Persistent cookies store information on a visitor’s computer
                  for a number of purposes, such as retrieving certain
                  information previously provided (e.g., passwords), helping to
                  determine what areas of the website visitors find most
                  valuable, and customizing the website based on visitor
                  preferences. The Website may use persistent cookies. We have
                  no control over the content of third party websites that
                  individuals may access through hyperlinks on the Website. We
                  encourage everyone to read the privacy policy of every website
                  they visit.
                </p>
              </div>

              <div
                className="privacy__policy__security"
                id="privacyPolicySecurity"
              >
                <h3 className="ff__gilroy__e secondary_c">Security</h3>
                <p className="ff__gilroy__l dark_c">
                  We take precautions to protect your information. When you
                  submit sensitive information via the website, your information
                  is protected both online and offline. Wherever we collect
                  sensitive information (such as data, name email), that
                  information is encrypted and transmitted to us in a secure
                  way. You can verify the web browser, or look for “https” at
                  the beginning of the address of the web page.
                </p>

                <p className="ff__gilroy__l dark_c">
                  While we use encryption to protect sensitive information
                  transmitted online, we also protect your information offline.
                  Only employees who need the information to perform a specific
                  job (for example, billing or customer service) are granted
                  access to personally identifiable information. The
                  computers/servers in which we store personally identifiable
                  information are kept in a secure environment.
                </p>

                <p className="ff__gilroy__l dark_c">
                  Your access to our website{" "}
                  <a
                    href="http://www.laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    www.laquest.net
                  </a>{" "}
                  generates entries in our web server logs that identify the
                  Internet Address (or IP number) of the gateway you used to
                  access our site (for example the external address of a cable
                  modem) and the pages accessed. We use this information only to
                  improve the operations of our website and retain the records
                  for only one month. We can delete these records earlier at
                  your request.
                </p>
              </div>

              <div
                className="privacy__policy__concerns"
                id="privacyPolicyConcern"
              >
                <h3 className="ff__gilroy__e secondary_c">
                  Resolving your privacy concerns
                </h3>
                <p className="ff__gilroy__l dark_c">
                  In the unlikely event that we believe that the security of
                  your information in our possession or control may have been
                  compromised, we may seek to notify you. If notification is
                  appropriate, we may notify you through the Website or
                  otherwise.
                </p>

                <p className="ff__gilroy__l dark_c">
                  LaQuest welcomes your comments regarding our privacy
                  statement. To submit your comments, or to request more
                  information about our privacy policy, please contact our
                  privacy officer by email at{" "}
                  <a
                    href="mailto:info@laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    info@laquest.net
                  </a>
                </p>
              </div>

              <div
                className="privacy__policy__contact"
                id="privacyPolicyContact"
              >
                <h3 className="ff__gilroy__e secondary_c">Contact us</h3>
                <p className="ff__gilroy__l dark_c">
                  If you have any queries or complaints about our compliance
                  with this Privacy Policy, or if you would like to make any
                  recommendations or comments to improve the quality of our
                  Privacy Policy, please email us at info@laquest.net{" "}
                  <a
                    href="mailto:info@laquest.net"
                    target="_blank"
                    className="ff__gilroy__l secondary_c"
                  >
                    info@laquest.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* EULA */}

        {/* FOOTER */}
        <FOOTER />
        {/* FOOTER */}
      </div>
    </>
  )
}

export default PrivacyPolicy
