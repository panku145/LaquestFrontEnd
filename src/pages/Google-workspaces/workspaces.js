import React, { useRef, useState } from "react";
import { Link as PageLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
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

// IMPORT CUSTOM STYLE
import "swiper/swiper-bundle.min.css";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import "./workspaces.css";
import "./workspaces-responsive.css";

// IMPORT COMPONENTS & PAGES
import FOOTER from "../../components/Footer/Footer.js";
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";

// IMAGES
import laptopHero from "../../assets/images/laptop.png";
import circleGrid from "../../assets/images/solid-cicrle-box@2x.png";

import googlefeatureHero from "../../assets/images/img_eye.png";
import googleMeet from "../../assets/images/google-meet.png";
import googleGmail from "../../assets/images/google-gmail.png";
import googleDocs from "../../assets/images/google-docs.png";
import googleDrives from "../../assets/images/google-drives.png";
import googleCalendar from "../../assets/images/google-calendar.png";

import dataProtect from "../../assets/images/built-in-data-protec.png";

import bookHero from "../../assets/images/book-pdf.png";
import dlPDF from "../../assets/images/Prevent-your-email-from-being-filtered-as-spam.pdf";

import consultationHero from "../../assets/images/google-workspace/consulting.jpg";
import trianingsHero from "../../assets/images/google-workspace/training.jpg";
import supportHero from "../../assets/images/google-workspace/customer-support.jpg";

SwiperCore.use([Navigation]);

const workspaces = () => {

 // swiper slider
  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();
  // swiper slider

  const [isOpen, setOpen] = useState(false);

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
        <section id="gheaderSection">
          <div className="section__container">
            <div className="gheader__content">
              <h3 className="header__gsuite ff__gilroy__e light_c">
                G Suite just got better
              </h3>
              <h1 className="gheader__tagline ff__gilroy__e dark_c">
                Introducing <span>Google Workspace.</span>
              </h1>
              <h2 className="gheader__subtagline ff__gilroy__e dark_c">
                Get your <span>Free 14 Days</span> trial.
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
                  <div className="cta__label">FREE TRIAL</div>
                </PageLink>
              </div>
            </div>

            <div className="gheader__hero">
              <div className="gworkspace__container">
                <ModalVideo
                  channel="youtube"
                  youtube={{
                    autoplay: 1,
                    mute: 1,
                  }}
                  isOpen={isOpen}
                  videoId="bE31y5HbukA"
                  onClose={() => setOpen(false)}
                />
                <a
                  href="javascript:void(0)"
                  className="video-play-button"
                  onClick={() => setOpen(true)}
                >
                  <span>
                    <FontAwesomeIcon icon={["fas", "play"]} />
                  </span>
                </a>
                <img
                  className="circle__grid__top"
                  src={circleGrid}
                  alt="Laptop"
                />
                <img src={laptopHero} alt="Laptop" />
                <img
                  className="circle__grid__bottom"
                  src={circleGrid}
                  alt="Laptop"
                />
              </div>
            </div>
          </div>
        </section>
        {/* HEADER SECTION */}

        {/* FEATURE SECTION */}
        <section id="featureSection">
          <div className="section__container">
            <div className="feature__hero">
              <img src={googlefeatureHero} alt="Google Feature" />
            </div>
            <div className="feature__content">
              <h2 className="feature__tagline ff__gilroy__l dark_c">
                Make everything <span className="ff__gilroy__e">simple</span>,{" "}
                <span className="ff__gilroy__e">fast</span> and{" "}
                <span className="ff__gilroy__e">manageable</span>.
              </h2>
              <p className="feature__desc ff__gilroy__l dark_c">
                Google Workspace is Google Cloud's compliant and full-packed
                powerful business tools created to reduce unnecessary expenses,
                maximizing productivity and provides ease of data and
                communication access.
              </p>

              <p className="feature__list__header ff__gilroy__e">
                Popular Feature:
              </p>
              <ul className="feature__list">
                <li>
                  <img className="googleGmail" src={googleGmail} alt="Gmail" />
                  <span>Gmail</span>
                </li>
                <li>
                  <img
                    className="googleCalendar"
                    src={googleCalendar}
                    alt="Calendar"
                  />
                  <span>Calendar</span>
                </li>
                <li>
                  <img
                    className="googleDrives"
                    src={googleDrives}
                    alt="Drives"
                  />
                  <span>Drive</span>
                </li>
                <li>
                  <img className="googleMeet" src={googleMeet} alt="Meet" />
                  <span>Meet</span>
                </li>
                <li>
                  <img className="googleDocs" src={googleDocs} alt="Docs" />
                  <span>Docs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* FEATURE SECTION */}

        {/* GOOGLE DESC SECTION */}
        <section id="googleDescSection">
          <div className="section__container">
            <div className="googleworkspace__desc__content">
              <div className="googleworkspace__desc__thumbnail">
                <h4 className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">
                    Tools you love,
                  </span>
                  <br />
                  thoughtfully connected
                </h4>
                <p className="ff__gilroy__l dark_c">
                  An integrated workspace that’s simple to use, Google Workspace
                  lets you spend less time managing your work and more time
                  actually doing it.
                </p>
              </div>

              <div className="googleworkspace__desc__thumbnail">
                <h4 className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">
                    Smart suggestions
                  </span>
                  <br />
                  to help you prioritize
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Address what’s important and let Google handle the rest with
                  best-in-class AI and search technology that helps you work
                  smarter.
                </p>
              </div>

              <div className="googleworkspace__desc__thumbnail">
                <h4 className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e secondary_c">
                    Flexible solutions
                  </span>
                  <br />
                  for every business
                </h4>
                <p className="ff__gilroy__l dark_c">
                  An integrated workspace that’s simple to use, Google Workspace
                  lets you spend less time managing your work and more time
                  actually doing it.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* GOOGLE DESC SECTION */}

        {/* CLOUD SECURITY SECTION */}
        <section id="cloudsecurityeSection">
          <div className="section__container">
            <div className="security__container">
              <div className="cloudsecurity__content">
                <h2 className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e">Strong Cloud Security</span>
                  <br />
                  and <span className="ff__gilroy__e">Compliance Culture.</span>
                </h2>
              </div>
              <div className="cloudsecurity__hero">
                <img src={dataProtect} alt="Data Protect" />
              </div>
            </div>
          </div>
        </section>
        {/* CLOUD SECURITY SECTION */}

        {/* PRODUCT STORY */}
        <section id="productstorySection">
          <div className="section__container">
            <div className="productstory__container">
              <div className="google__hero__container">
                {/* <img src={googlemeetHero} alt="Google Meet" /> */}
                <div className="ps__tagline">
                  <h2 className="ff__gilroy__e">PRODUCT STORY</h2>
                </div>
              </div>

              <div className="product__feature__list">
                <div className="pfeature__thumbnail">
                  <h4 className="ff__gilroy__e secondary_c">UPDATE</h4>
                  <p className="ff__gilroy__l dark_c">
                    LaQuest during the Covid-19 pandemic
                  </p>
                  <a
                    className="pfeature__cta ff__gilroy__l secondary_c"
                    href="javascript:void(0)"
                  >
                    Read more{" "}
                    <FontAwesomeIcon
                      className="pfeature__cta__icon"
                      icon={["fas", "long-arrow-alt-right"]}
                    />
                  </a>
                </div>
                <div className="pfeature__thumbnail">
                  <h4 className="ff__gilroy__e secondary_c">BLOG</h4>
                  <p className="ff__gilroy__l dark_c">
                    Google empowers integration and adaptability to cloud
                    computing.
                  </p>
                  <a
                    className="pfeature__cta ff__gilroy__l secondary_c"
                    href="javascript:void(0)"
                  >
                    Read more{" "}
                    <FontAwesomeIcon
                      className="pfeature__cta__icon"
                      icon={["fas", "long-arrow-alt-right"]}
                    />
                  </a>
                </div>
              </div>

              <div className="product__feature__list">
                <div className="pfeature__thumbnail">
                  <h4 className="ff__gilroy__e secondary_c">CASE STUDY</h4>
                  <p className="ff__gilroy__l dark_c">
                    Get tips how others become successful with Google Workspace
                    and how you too can achieve the same.
                  </p>
                  <a
                    className="pfeature__cta ff__gilroy__l secondary_c"
                    href="javascript:void(0)"
                  >
                    Read more{" "}
                    <FontAwesomeIcon
                      className="pfeature__cta__icon"
                      icon={["fas", "long-arrow-alt-right"]}
                    />
                  </a>
                </div>

                <div className="pfeature__thumbnail">
                  <h4 className="ff__gilroy__e secondary_c">GOOGLE PARTNER</h4>
                  <p className="ff__gilroy__l dark_c">
                    Nothing works best when you know you can get direct priority
                    and straight forward support from the experts.
                  </p>
                  <a
                    className="pfeature__cta ff__gilroy__l secondary_c"
                    href="https://cloud.withgoogle.com/partners/detail/?id=laquest-inc&hl=en-PH"
                    target="_blank"
                  >
                    Partner Link{" "}
                    <FontAwesomeIcon
                      className="pfeature__cta__icon"
                      icon={["fas", "long-arrow-alt-right"]}
                    />
                  </a>
                </div>
              </div>

              <div className="spam__filter__pdf">
                <div className="pdf_content">
                  <h4 className="ff__gilroy__e secondary_c">UPDATE</h4>
                  <p className="ff__gilroy__l dark_c">
                    Best practices in{" "}
                    <span className="ff__gilroy__e">
                      preventing your emails from going to the junk,
                      promotional, spam folder,
                    </span>{" "}
                    bounced email or undelivered.
                  </p>
                  <p className="ff__gilroy__l dark_c">
                    When your email is authentic, that does not ensure
                    deliverability to the inbox of your recipients. Your{" "}
                    <span className="ff__gilroy__e">
                      emails pass through many security checks along every
                      network
                    </span>{" "}
                    nodes before it reaches your intended destination.
                  </p>
                  <div className="dl__pdf">
                    <a href={dlPDF} className="ff__gilroy__l" target="_blank">
                      Download Here{" "}
                      <FontAwesomeIcon icon={["fas", "download"]} />
                    </a>
                  </div>
                </div>
                <div className="pdf__hero">
                  <img src={bookHero} alt="Book" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PRODUCT STORY */}

        {/* ADD-ONS SECTION */}
        <section id="addonsSection">
          <div className="section__container">
            <div className="addons__content">
              <h4 className="ff__gilroy__l light_c">ADD-ONS</h4>
              <h2 className="ff__gilroy__l dark_c">
                Professional <span className="ff__gilroy__e">services</span> and
                <br />
                <span span className="ff__gilroy__e">
                  support
                </span>{" "}
                with{" "}
                <span span className="ff__gilroy__e">
                  LaQuest.
                </span>
              </h2>
              <p className="ff__gilroy__l dark_c">
                Your on-the-go, all-the-way support to handle all your Google
                Workspace and 3rd party integration technical needs.
              </p>
            </div>

            <div className="addons__list">
              <div className="arrows__control">
                <div
                  ref={navigationPrevRef}
                  className="swiper__next secondary_c"
                >
                  <FontAwesomeIcon icon={["fas", "chevron-left"]} />
                </div>
                <div
                  ref={navigationNextRef}
                  className="swiper__prev secondary_c"
                >
                  <FontAwesomeIcon icon={["fas", "chevron-right"]} />
                </div>
              </div>
              <Swiper
                spaceBetween={50}
                slidesPerView={2.5}
                loop={true}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  768: {
                    width: 1100,
                    slidesPerVie: 2.5,
                  },
                  320: {
                    width: 400,
                    spaceBetween: 20,
                    slidesPerView: 1.5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="addons__thumbnail">
                    <div className="addons__thumbnail__hero">
                      <img src={consultationHero} alt="Consultation" />
                    </div>
                    <div className="addons__thumbnail__tagline">
                      <h5 className="ff__gilroy__l secondary_c">Consulting</h5>
                      <h3 className="ff__gilroy__l white_c">
                        Get expert advice
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="addons__thumbnail">
                    <div className="addons__thumbnail__hero">
                      <img src={trianingsHero} alt="Trainings" />
                    </div>
                    <div className="addons__thumbnail__tagline">
                      <h5 className="ff__gilroy__l secondary_c">Training</h5>
                      <h3 className="ff__gilroy__l white_c">
                        Learn from Practitioners
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="addons__thumbnail">
                    <div className="addons__thumbnail__hero">
                      <img src={supportHero} alt="Support" />
                    </div>
                    <div className="addons__thumbnail__tagline">
                      <h5 className="ff__gilroy__l secondary_c">Support</h5>
                      <h3 className="ff__gilroy__l white_c">
                        Get best Solutions
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* ADD-ONS SECTION */}

        {/* FOOTER SECTION */}
        <FOOTER />
        {/* FOOTER SECTION */}
      </div>
    </>
  )
}

export default workspaces
