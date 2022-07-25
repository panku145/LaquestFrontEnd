import React, { useRef, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, Link as PageLink } from "react-router-dom";
import $ from "jquery";
import CircleType from "circletype";
import axios from "axios";

// IMPORT COMPONENTS
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";

// IMPORT ASSETS
import "../About-us/Aboutus.css";
import "../Contact-Us/contact.css";

// IMPORT IMAGES

import contactuspageHero from "../../assets/images/contact-us/contact-banner.jpeg";

import circleGrid from "../../assets/images/circle_grid@2x.png";
import AddressSection from "../../components/Conatact-Us/AddressSection";

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    company: "",
    number: "",
    help: "",
    // sent: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const [name, setname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [message, setmessage] = useState("");
  // const [company, setcompany] = useState("");
  // const [number, setnumber] = useState("");
  // const [help, sethelp] = useState("");
  const [sent, setsent] = useState(false);

  // const handleName = (e) => {
  //   setname(e.target.value);
  // };

  // const handleLastname = (e) => {
  //   setlastname(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setemail(e.target.value);
  // };

  // const handleMessage = (e) => {
  //   setmessage(e.target.value);
  // };

  // const handleCompany = (e) => {
  //   setcompany(e.target.value);
  // };

  // const handleNumber = (e) => {
  //   setnumber(e.target.value);
  // };

  // const handleHelp = (e) => {
  //   sethelp(e.target.value);
  // };

  const formSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      let data = {
        name: formValues.name,
        lastname: formValues.lastname,
        email: formValues.email,
        message: formValues.message,
        company: formValues.company,
        number: formValues.number,
        help: formValues.help,
      };

      axios
        .post("/api/forma", data)
        .then((res) => {
          setsent(true);
          resetForm();
          setTimeout(() => {
            setsent(false);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
          console.log("message not send");
        });
    }

    formValues.name = "";
  }, [formErrors]);

  const resetForm = () => {
    formValues.name = "";
    formValues.lastname = "";
    formValues.email = "";
    formValues.message = "";
    formValues.company = "";
    formValues.number = "";
    formValues.help = "";
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "First name is required!";
    }
    if (!values.help) {
      errors.help = "Company / Organization name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length < 5) {
      errors.message = "Message must be more than 5 characters";
    } else if (values.message.length > 50) {
      errors.message = "Message cannot exceed more than 10 characters";
    }
    if (!values.company) {
      errors.company = "Company / Organization name is required!";
    } else if (values.company.length < 5) {
      errors.company =
        "Company / Organization name must be more than 5 characters";
    } else if (values.company.length > 50) {
      errors.company =
        "Company / Organization name cannot exceed more than 10 characters";
    }
    if (!values.number) {
      errors.number = "number is required!";
    } else if (values.number.length < 10) {
      errors.number = "phone number must contain 10 digits";
    } else if (values.number.length > 10) {
      errors.number = "phone number can't be more then 10 digits";
    }
    return errors;
  };

  // const resetForm = () => {
  //   setname("");
  //   setlastname("");
  //   setemail("");
  //   setmessage("");
  //   setnumber("");
  //   sethelp("");

  //   setTimeout(() => {
  //     setsent(false);
  //   }, 3000);
  // };

  // swiper slider
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();
  // swiper slider

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
      onRepeat: function() {
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

    $(document).on("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    $(".rm").on("mouseenter", function() {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".rm").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
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

        {/* ABOUT US PAGE HEADER */}
        <header id="aboutUsPageHeader" className="contact-hero-sec">
          <div className="section__container">
            <div className="aboutuspage__header__content header-txt">
              {/* <div className="img__anim__circle">
                <img src={circleGrid} />
              </div> */}

              <h1 className="about__header__page__title ff__gilroy__e about-header-anim">
                Contact Us, <br /> we’d love to hear from you.
              </h1>
            </div>

            <div className="aboutuspage__header__hero">
              <div className="aboutuspage__hero__container">
                <div className="aboutuspage__hero">
                  {/* <img src={contactuspageHero} alt="About Us Header Hero" /> */}
                  <div className="anim__overlay__aboutus__header"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ABOUT US PAGE HEADER */}

        {/* SMARTY CITY INITIATIVES */}
        <section id="aboutUsInitiatives" className="form-section">
          <div className="contact-form-inner-sec">
            <div className="query-text-container">
              <div className="para-span-sec">
                <p className="text-container-para">Send us a request to</p>
                <span>create your dream project!</span>
              </div>
              <div className="mail-number-container">
                <div className="email-sec">
                  <p className="email-para-text">Send us an email</p>
                  <div className="mail-address-txt">
                    <p>General Inquiry</p>
                    <span>inquiry@laquest.net</span>
                  </div>
                  <div className="mail-address-txt">
                    <p>Investment enquiries</p>
                    <span>investors@laquest.net</span>
                  </div>
                </div>
                <div className="phone-sec">
                  <p className="email-para-text">Give us a call</p>
                  <div className="mail-address-txt">
                    <span>(718) 521-2957</span>
                    <p className="united-std">United States</p>
                  </div>
                  <div className="mail-address-txt">
                    <span>(632) 7118 1564</span>
                    <p className="united-std">Philippines</p>
                  </div>
                </div>
              </div>

              <div className="need-help-sec">
                <p className="need-help-head">
                  Still need <strong>help?</strong>
                </p>

                <div className="three-help-sec">
                  <div className="help-inner-sec">
                    <i className="fa-regular fa-calendar-check book-consultation-icn"></i>{" "}
                    <br />
                    <span className="book-consultation">
                      BOOK A CONSULTATION
                    </span>
                  </div>
                  <div className="help-inner-sec">
                    <i className="fa-solid fa-headset"></i> <br />
                    <span className="book-consultation">SUPPORT</span>
                  </div>
                  <Link
                    to="/google-workspace/support"
                    className="google-support-lnk"
                    target="_blank"
                  >
                    <div className="help-inner-sec">
                      <i className="fa-brands fa-google"></i> <br />
                      <span className="book-consultation">Google Support</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="form-container">
              <div className="form-container-inner-sec">
                <form onSubmit={formSubmit}>
                  <div className="name-email-phone-sec">
                    <div className="first-name-sec">
                      <input
                        name="name"
                        className="name"
                        value={formValues.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="First Name*"
                      />
                      <p className="error-msg">{formErrors.name}</p>
                    </div>
                    <div className="first-name-sec">
                      <input
                        name="lastname"
                        className="lastname"
                        value={formValues.lastname}
                        onChange={handleChange}
                        type="text"
                        placeholder="Last Name*"
                      />
                      <p className="error-msg">{formErrors.lastname}</p>
                    </div>
                    <div className="first-name-sec">
                      <input
                        name="email"
                        className="email"
                        type="text"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="Business Email*"
                      />
                      <p className="error-msg">{formErrors.email}</p>
                    </div>
                    <div className="first-name-sec">
                      <input
                        name="number"
                        value={formValues.number}
                        onChange={handleChange}
                        className="number"
                        type="number"
                        placeholder="Phone Number*"
                      />
                      <p className="error-msg">{formErrors.number}</p>
                    </div>
                  </div>
                  <div className="full-width-input">
                    <input
                      name="company"
                      className="company"
                      type="text"
                      value={formValues.company}
                      onChange={handleChange}
                      placeholder="Company / Organization*"
                    />
                    <p className="error-msg">{formErrors.company}</p>
                  </div>
                  <br />
                  <div className="need-help-with-spn">I need help with...*</div>

                  <div className="input-dropdown-sec">
                    <select
                      name="help"
                      value={formValues.help}
                      onChange={handleChange}
                      id="help-type"
                    >
                      <option value="">Choose One..</option>
                      <option value="Exploring solutions and services">
                        Exploring solutions and services
                      </option>
                      <option value="Requesting a quote or placing an order">
                        Requesting a quote or placing an order
                      </option>
                      <option value="A general inquiry">
                        A general inquiry
                      </option>
                      <option value="Google product support">
                        Google product support
                      </option>
                      <option value="Product support">Product support</option>
                    </select>
                    <p className="error-msg">{formErrors.help}</p>
                  </div>

                  <div className="message-txtarea">
                    <p>
                      <label htmlFor="w3review">Message*</label>
                    </p>
                    <textarea
                      name="message"
                      className="message"
                      value={formValues.message}
                      onChange={handleChange}
                      placeholder="Write your message here.. "
                    ></textarea>
                    <p className="error-msg">{formErrors.message}</p>
                  </div>
                  <div className="terms-condition-sec">
                    <p className="terms-condition-para">
                      By submitting this form you understand and agree that
                      LaQuest may contact you regarding your interest in our
                      services, partners, and products as well as receiving
                      electronic communications from us and our partners
                      including news, events, updates, and promotional offers.
                      You may withdraw your consent and unsubscribe from such
                      marketing communication at any time. You also acknowledge
                      and accept LaQuest’s
                      <Link className="contact-privacy" to="/privacy-policy">
                        Privacy Policy
                      </Link>
                      , including its use of cookies.
                    </p>
                    <div className="checkbox-sec">
                      <input type="checkbox" id="terms-condition" required />
                      <label>
                        I agree to receive other communications from LaQuest.
                      </label>
                    </div>
                    <div className={sent ? "msgAppear" : "msg"}>
                      <p>Thanks for reaching out!</p>
                    </div>

                    <div className="submit-button-sec">
                      <button type="submit">
                        <div className="center-con">
                          <div className="round"></div>
                          <div id="cta">
                            <span className="arrow primera next "></span>
                          </div>
                        </div>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="contact-address-sec">
            <AddressSection />
          </div>
          <div className="news-letter-sec">
            <div className="newsletter-inner-sec">
              <div className="news-latter-head-container">
                <p>
                  Insights, expertise, and big ideas <br /> delivered to your
                  inbox
                </p>
              </div>
              <div className="news-latter-btn-container">
                <button>
                  Subscribe to our newsletter
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
