import React, { useRef, useEffect } from "react";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import $ from "jquery";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, TweenMax, TimelineMax, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleType from "circletype";
import { Autoplay } from "swiper";

// IMPORT ASSETS
import "swiper/swiper-bundle.min.css";
import "../Home/Home.css";

// IMAGES

import elServicesHero from "../../assets/images/home/services-box.jpg";
import elProductsHero from "../../assets/images/home/Homepage-Product-Box.jpg";
import elTrainingsHero from "../../assets/images/home/training_box.jpg";

import circleGrid from "../../assets/images/header-circle-bg.png";

import Brmis from "../../assets/images/home/products/brmis.png";
import lims from "../../assets/images/home/products/lims.png";
import pamasys from "../../assets/images/home/products/pamasys.jpg";
import overlay1 from "../../assets/images/home/products/overlay1.png";
import overlay2 from "../../assets/images/home/products/overlay2.png";
import overlay3 from "../../assets/images/home/products/overlay3.png";
import overlay4 from "../../assets/images/home/products/overlay4.png";
import productThree from "../../assets/images/home/products/elearning.jpg";
import TrainningIMG from "../../assets/images/home/trainings_hero.jpg";

import servicesOne from "../../assets/images/home/services/1.png";
import servicesTwo from "../../assets/images/home/services/2.png";
import servicesThree from "../../assets/images/home/services/3.png";
import servicesFour from "../../assets/images/home/services/4.png";

import eventOne from "../../assets/images/home/event/event1.jpg";
import eventTwo from "../../assets/images/home/event/event2.jpg";
import eventThree from "../../assets/images/home/event/event3.jpg";
import eventFour from "../../assets/images/home/event/event4.jpg";
import GoogleCloud from "../../assets/images/home/google-cloud.jpg";
import CaseStudy1 from "../../assets/images/home/case-study/case-study1.jpg";
import CaseStudy2 from "../../assets/images/home/case-study/case-study2.jpg";
import CaseStudy3 from "../../assets/images/home/case-study/case-study3.jpg";
import CaseStudy4 from "../../assets/images/home/case-study/case-study4.jpg";
import CaseStudy5 from "../../assets/images/home/case-study/case-study5.jpg";
import Phillippine from "../../assets/images/home/case-study/pillippine.png";
import headerBanner from "../../assets/images/home/header-banner.png";
import finance from "../../assets/images/home/case-study/finance.png";
import medical from "../../assets/images/home/case-study/medical.png";
import nyc from "../../assets/images/home/case-study/nyc.png";
import local from "../../assets/images/home/case-study/local.png";
import education from "../../assets/images/home/case-study/education.png";

import companyprofile from "../../assets/company-profile/LaQuest-Company-Profile-_Email-Version.pdf";

// IMPORT COMPONENTS & PAGES
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";
import FOOTER from "../../components/Footer/Footer.js";

SwiperCore.use([Navigation]);
gsap.registerPlugin(ScrollTrigger);

function Home() {
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
    // CURSOR

    // LOADER
    TweenMax.to(".loaderwrapper", 2, {
      top: "-100%",
      display: "none",
      ease: Expo.easeInOut,
      delay: 3.5,
    });
    TweenMax.to(".loader__tagline", 1.3, {
      opacity: 1,
      y: -10,
      ease: Expo.easeOut,
      delay: 1.5,
    });
    TweenMax.to(".loader__tagline", 0.5, {
      opacity: 0,
      delay: 3.5,
    });
    TweenMax.to(".icon", 1.5, {
      opacity: 1,
    });
    TweenMax.to(".icon", 1, {
      opacity: 0,
      delay: 3.5,
    });
    // LOADER

    // HEADER
    TweenMax.from(".img__anim__circle img", 1, {
      opacity: 0,
      left: -50,
      ease: Expo.easeInOut,
      delay: 5.4,
    });
    TweenMax.from(".header__tagline h3", 0.8, {
      opacity: 0,
      y: 10,
      ease: Expo.easeInOut,
      delay: 5.4,
    });
    TweenMax.from(".header__tagline h1", 0.8, {
      opacity: 0,
      y: 10,
      ease: Expo.easeInOut,
      delay: 5.9,
    });
    TweenMax.from(".header__btn", 0.8, {
      opacity: 0,
      y: 10,
      ease: Expo.easeInOut,
      delay: 6.4,
    });

    const headerTL = new TimelineMax();
    headerTL
      .from(".anim__overlay__header", 0.8, {
        width: "0%",
        ease: Expo.easeInOut,
        delay: 5.4,
      })
      .from(".hero__anim__header img", 0.1, {
        opacity: 0,
      })
      .to(".anim__overlay__header", 0.5, {
        width: "100%",
        left: "100%",
        ease: Expo.easeInOut,
      })
      .from(".hero__content", 1, {
        opacity: 0,
        y: 10,
        ease: Expo.easeInOut,
      });

    const headerStagTL = new TimelineMax();
    headerStagTL.staggerFrom(
      ".easy_lik_menu li ",
      1,
      {
        opacity: 0,
        y: 10,
        ease: Expo.easeInOut,
        delay: 0,
      },
      0.5
    );

    // HEADER

    // ABOUT US
    const aboutHeroTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#aboutUsSection",
        start: "top 70%",
      },
    });

    aboutHeroTL
      .from(".anim__overlay", 0.8, {
        width: "0%",
        ease: Expo.easeInOut,
      })
      .from(".hero__anim__about img", 0.1, {
        opacity: 0,
      })
      .to(".anim__overlay", 0.5, {
        width: "100%",
        left: "100%",
        ease: Expo.easeInOut,
      })
      .from(".aboutus_hero_h", 0.5, {
        x: -50,
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .from(".aboutus_content_bg_img", 0.8, {
        opacity: 0,
        ease: Expo.easeInOut,
      });

    const aboutContentTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#aboutUsSection",
        start: "top 70%",
      },
    });
    aboutContentTL
      .to(".aboutus_header_separator div", 0.8, {
        width: "75%",
        ease: Expo.easeInOut,
      })
      .from(".aboutus_header_separator h2", 0.8, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      })
      .from(".aboutus_desc", 1, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      })
      .from(".aboutus__content__btn", 0.8, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
    // ABOUT US

    // SERVICES
    const servicesContentTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newServiceSection",
        start: "top 70%",
      },
    });
    servicesContentTL.staggerFrom(
      ".services_header .services__stag__anim",
      1,
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeOut,
      },
      0.5
    );

    const servicesListTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newServiceSection",
        start: "top 70%",
      },
    });
    servicesListTL.staggerFrom(
      ".services__list_container .services__thumbnail",
      1,
      {
        opacity: 0,
        y: 50,
        ease: Expo.easeOut,
      },
      0.5
    );
    // SERVICES

    // UPDATES
    const updatesHeaderTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#updatesSection",
        start: "top 70%",
      },
    });
    updatesHeaderTL
      .from("#updatesSection", 1, {
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .from(".updates__container", 1, {
        opacity: 0,
        x: "-100%",
        ease: Expo.easeInOut,
      })
      .staggerFrom(
        ".updates__container .updates__c",
        1,
        {
          opacity: 0,
          y: 50,
          ease: Expo.easeOut,
        },
        0.5
      );

    TweenMax.from(".updates__hero_container", 1, {
      opacity: 0,
      opacity: 0,
      y: 50,
      ease: Expo.easeOut,
      delay: 1.5,
    });
    // UPDATES

    // PRODUCTS
    const productsContentTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newProductSection",
        start: "top 50%",
      },
    });
    productsContentTL
      .staggerFrom(
        ".Products_header .product__stag__anim",
        1,
        {
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut,
        },
        0.5
      )
      .from(".products__btn", 1, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      })
      .from(".arrows__control", 1, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });

    const productsListTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newProductSection",
        start: "top 50%",
      },
    });
    productsListTL.staggerFrom(
      ".product__swiper .product__swiper__list",
      1,
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      0.5
    );
    // PRODUCTS

    // TRAININGS
    const trainingsHeroTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newTrainningSection",
        start: "top 70%",
      },
    });
    trainingsHeroTL
      .from(".anim__overlay__trainings", 0.8, {
        width: "0%",
        ease: Expo.easeInOut,
      })
      .from(".hero__anim__traning img", 0.1, {
        opacity: 0,
      })
      .to(".anim__overlay__trainings", 0.5, {
        width: "100%",
        left: "100%",
        ease: Expo.easeInOut,
      })
      .from(".trainings_hero_h", 0.5, {
        x: -50,
        opacity: 0,
        ease: Expo.easeInOut,
      })
      .staggerFrom(
        ".training__header .training__c",
        0.8,
        {
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut,
        },
        0.5
      );

    const traningSchedTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#newTrainningSection",
        start: "top 70%",
      },
    });
    traningSchedTL
      .from(".training__list_menu", 1, {
        opacity: 0,
        ease: Expo.easeInOut,
        delay: 1,
      })
      .staggerFrom(
        ".training__list_menu a",
        0.8,
        {
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut,
        },
        0.5
      )
      .from(".trainings__btn", 1, {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
    // TRAININGS

    // ARTICLE
    const articleHeaderTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#articlesSection",
        start: "top 70%",
      },
    });
    articleHeaderTL.staggerFrom(
      ".article__container .article__c",
      1,
      {
        opacity: 0,
        // y:20,
        ease: Expo.easeOut,
      },
      0.5
    );

    const articleListTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#articlesSection",
        start: "top 70%",
      },
    });
    articleListTL.staggerFrom(
      ".article__list .article__item__container",
      1,
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeOut,
        delay: 1,
      },
      0.5
    );
    // ARTICLE

    // CASE STUDY
    const caseStudyHeaderTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#casestudySection",
        start: "top 70%",
      },
    });

    caseStudyHeaderTL.staggerFrom(
      ".casestudy__content .casestudy__c",
      1,
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeOut,
      },
      0.5
    );

    const caseStudyHeroTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#casestudySection",
        start: "top 70%",
      },
    });
    caseStudyHeroTL.from(".casestudy__hero__container", 1, {
      opacity: 0,
      delay: 1,
    });
    // CASE STUDY

    // CONTACT
    const contactContentTL = new TimelineMax({
      scrollTrigger: {
        trigger: "#contactUsSection",
        start: "top 90%",
      },
    });
    contactContentTL.staggerFrom(
      ".contactus__container .contact__stag__anim",
      1,
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeOut,
      },
      0.5
    );
    // CONTACT
  }, []);

  return (
    <>
      <a href={companyprofile}></a>
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

      {/* LOADER */}
      {/* <div className="loaderwrapper">
        <div className="loader__svg">
          <svg className="icon" viewBox="0 0 408.22 399.69">
            <path
              className="icon__active"
              fill="none"
              stroke="#fff"
              d="M37.24,5.94c0,0,41.95,309.55,366.66,365.67
                        c0,0-63.35,20.98-137.05,2.83c0,0-84.47,54.99-188.79-13.04c0,0-108.85-75.97-58.96-218.83l32.88,69.17
                        c0,0,10.2,141.73,146.27,137.2C198.25,348.93-12.65,238.94,37.24,5.94z"
            />
            <path
              className="icon__active"
              fill="none"
              stroke="#fff"
              d="M362.84,203.29c0,41.81-14.85,80.16-39.58,110.05
                        c-0.5,0.61-1,1.21-1.52,1.81c-1.33,1.16-3.06,1.86-4.96,1.86c-4.18,0-7.57-3.39-7.57-7.57c0-1.08,0.22-2.1,0.63-3.02
                        c0.71-0.91,1.39-1.84,2.07-2.78c17.36-24.08,27.2-55.36,26.68-91.28c-1.18-81.82-64.54-144.23-145.01-142.94
                        c-39.08,0.63-74.5,16.36-100.26,41.69l-27.83-35c31.1-29.59,74.86-47.05,124.57-45.6C285.44,33.3,362.84,107.87,362.84,203.29z"
            />
          </svg>
          <h3 className="loader__tagline ff__gilroy__e">TASKS SIMPLIFIED</h3>
        </div>
      </div> */}
      {/* LOADER */}

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

        {/* HEADER SECTION */}
        <section id="headerSection" className="home-header-section">
          <div className="circle-grid-container">
            <img src={circleGrid} alt="" />
          </div>
          <div className="header-banner-bg"></div>
          <div className="section__container">
            <div className="header-grid-container">
              <div className="header-heading-sec">
                <div className="header-heading-container">
                  <h1>
                    Together, we make <br /> Tasks Simplified!
                  </h1>
                </div>
                <div className="about-us-link-sec">
                  <PageLink to="/about-us" style={{ textDecoration: "none" }}>
                    <div className="latest-event-button-section">
                      <span>About us</span>
                      <div className="center-con">
                        <div className="round"></div>
                        <div id="cta">
                          <span className="arrow primera next previouss-lide "></span>
                        </div>
                      </div>
                    </div>
                  </PageLink>
                </div>
              </div>
              <div className="header-banner-sec">
                <div className="header-banner-container">
                  <img
                    className="header-banner-img"
                    src={headerBanner}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="easy__link_container">
            <ul className="easy_lik_menu">
              <li className="easy_link_item">
                <Link to="newServiceSection" smooth={true} offset={-80}>
                  <div className="item__box">
                    <div className="item_hero">
                      <img src={elServicesHero} alt="" />
                    </div>
                    <div className="item__label">
                      <p>
                        SERVICES<span>.</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="easy_link_item">
                <Link to="newProductSection" smooth={true} offset={-80}>
                  <div className="item__box">
                    <div className="item_hero">
                      <img src={elProductsHero} alt="" />
                    </div>
                    <div className="item__label">
                      <p>
                        PRODUCTS<span>.</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="easy_link_item">
                <Link to="newTrainningSection" smooth={true} offset={-80}>
                  <div className="item__box">
                    <div className="item_hero">
                      <img src={elTrainingsHero} alt="" />
                    </div>
                    <div className="item__label">
                      <p>
                        TRAININGS<span>.</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* HEADER SECTION */}

        {/* SERVICES SECTION */}
        <section
          // id="aboutUsCompanyHistory"
          id="newServiceSection"
          className="about-history-slider-conatiner home-page-service-sec"
        >
          <div className="section__fullwidth">
            <div className="service-heading-description-sec">
              <div className="chistory__content">
                <h2 className="corevalues__header ff__gilroy__e history__anim company-light-font">
                  Our Services
                </h2>
                <h2 className="corevalues__header ff__gilroy__e history__anim">
                  Cross-Platform Development.
                </h2>
              </div>
              <div className="service-description">
                <p>
                  We offer a full spectrum of software development to help
                  organizations stay up to date with the technological trends
                  and allow flexibility in managing the increased demand of
                  business operations.
                </p>
              </div>
            </div>
            <div className="chistory__hero">
              <div className="chistory_control">
                <div ref={navigationPrevRef} className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next previouss-lide "></span>
                  </div>
                </div>
                <div ref={navigationNextRef} className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next nextslide "></span>
                  </div>
                </div>
              </div>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                speed={1000}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  2000: {
                    slidesPerView: 4,
                  },
                  1600: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },

                  320: {
                    width: 1200,
                    slidesPerView: 3,
                  },
                }}
                className="chistory__list__slider"
              >
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img
                        className="services-img"
                        src={servicesOne}
                        alt="Company History Hero "
                      />
                    </div>
                    <div className="service-border-right">
                      <div className="services-heading-container">
                        <span>
                          Systems Automation <br /> & Integration
                        </span>
                      </div>
                      <div className="company-servisec-desc">
                        <p>
                          Connect your systems and create a full spectrum view
                          of your business.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="learn-more-btn">Learn More</button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img
                        className="services-img"
                        src={servicesTwo}
                        alt="Company History Hero"
                      />
                    </div>

                    <div className="service-border-right">
                      <div className="services-heading-container">
                        <span>
                          Custom Design <br /> Solutions
                        </span>
                      </div>
                      <div className="company-servisec-desc">
                        <p>
                          Let’s discuss the best design of technology that
                          aligns with your business needs.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="learn-more-btn">Learn More</button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img
                        className="services-machine-img"
                        src={servicesThree}
                        alt="Company History Hero"
                      />
                    </div>
                    <div className="service-border-right">
                      <div className="services-heading-container">
                        <span>
                          Machine <br /> Integration
                        </span>
                      </div>
                      <div className="company-servisec-desc">
                        <p>
                          Capture necessary data from your machines straight to
                          your computers.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="learn-more-btn">Learn More</button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img
                        className="services-img"
                        src={servicesFour}
                        alt="Company History Hero"
                      />
                    </div>
                    <div className="service-border-right">
                      <div className="services-heading-container">
                        <span>
                          IT <br /> Augmentation
                        </span>
                      </div>
                      <div className="company-servisec-desc">
                        <p>
                          Leverage our pool of talents to accomplish your dream
                          IT <br /> projects.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button>Learn More</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img
                        className="services-machine-img"
                        src={servicesFour}
                        alt="Company History Hero"
                      />
                    </div>
                    <div className="service-border-right">
                      <div className="services-heading-container">
                        <span>
                          Maintenance <br /> & Support
                        </span>
                      </div>
                      <div className="company-servisec-desc">
                        <p>
                          Be at ease. We can take care of your technological
                          business transformation.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="learn-more-btn">Learn More</button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* SERVICES SECTION */}

        {/* GOOGLE CLOUD SECTION */}
        <section id="googleCloud" className="google-cloud-sec">
          <div className="section__fullwidth">
            <div className="cloud-inner-sec">
              <img src={GoogleCloud} alt="" />
              <div className="cloud-description-sec">
                <div className="chistory__content">
                  <h3 id="GoogleCloud">
                    <strong>Google</strong> Cloud
                  </h3>
                  <h2 className="corevalues__header ff__gilroy__e history__anim google-cloud-head">
                    We bring you closer to your success.
                  </h2>
                </div>
                <div className="google-para-sec">
                  <p>
                    As a &nbsp;
                    <a
                      href="https://cloud.google.com/find-a-partner/partner/laquest-inc"
                      target="_blank"
                    >
                      Google Cloud Partner
                    </a>
                    , LaQuest initiates on-the-ground experiences to ensure that
                    our insights are credible to support sensible solutions
                    scalable enough to support substantial pillars of future
                    technologies.
                  </p>
                </div>
                <div className="google-link-sec">
                  <a
                    href="https://laquest.net/google-workspace"
                    target="_blank"
                    className="link-animation"
                  >
                    <p className="animation-hover">
                      <strong>Google</strong> Workspace
                    </p>
                    <i className="fa-solid fa-play read-more-icon cloud-icon"></i>
                  </a>
                  <a
                    href="https://laquest.net/google-for-workspace"
                    target="_blank"
                    className="link-animation"
                  >
                    <p className="animation-hover">
                      <strong>Google</strong> for Education
                    </p>
                    <i className="fa-solid fa-play read-more-icon cloud-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="google-cloud-bg"></div>
        </section>
        {/* GOOGLE CLOUD SECTION */}

        {/* PRODUCTS SECTION */}
        <section
          style={{ paddingTop: "0" }}
          id="newProductSection"
          className="about-history-slider-conatiner home-page-service-sec home-product-sec"
        >
          <div className="section__fullwidth">
            <div className="service-heading-description-sec">
              <div className="chistory__content">
                <h2 className="corevalues__header ff__gilroy__e history__anim company-light-font">
                  Products
                </h2>
                <h2 className="corevalues__header ff__gilroy__e history__anim">
                  Our Simplified Solutions are at your Fingertips.
                </h2>
              </div>
              <div className="service-description">
                <p className="product-description">
                  Building data management system tools from the ground up. So
                  you can focus on the most relevant part of your business.
                </p>
              </div>
            </div>
            <div className="chistory__hero">
              <div className="chistory_control">
                <div ref={navigationPrevRef} className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next previouss-lide "></span>
                  </div>
                </div>
                <div ref={navigationNextRef} className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next nextslide "></span>
                  </div>
                </div>
              </div>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  1600: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 3.3,
                  },
                  768: {
                    slidesPerView: 2,
                  },

                  320: {
                    slidesPerView: 1,
                  },
                }}
                className="chistory__list__slider mySwiper"
              >
                <SwiperSlide className="chistory__slide">
                  <div className="product-container">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        className="product-img content-image"
                        src={lims}
                        alt=""
                      />
                      <img src={overlay1} alt="" className="product-overlay" />
                      <div class="content-details fadeIn-left">
                        <h3>Laboratory Information Management System</h3>
                        <p>
                          Automate workflows, integrate instruments, manage
                          specimen samples, quick reporting, and associate
                          information for laboratories.
                        </p>
                        <div className="readmore-arrowicon-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-heading-container">
                    <span>LIMS</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="product-container">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        className="product-img content-image"
                        src={Brmis}
                        alt=""
                      />
                      <img src={overlay2} alt="" className="product-overlay" />
                      <div class="content-details fadeIn-left">
                        <h3>Resident Record Management Information System</h3>
                        <p>
                          Enables efficient administrative work, manages
                          databases of your residents, and quickly produces
                          demographic reports in compliance with data privacy.
                        </p>
                        <div className="readmore-arrowicon-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-heading-container">
                    <span>BrRMIS</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="product-container">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        className="product-img content-image"
                        src={productThree}
                        alt=""
                      />
                      <img src={overlay3} alt="" className="product-overlay" />
                      <div class="content-details fadeIn-left">
                        <h3>Learning Management System</h3>
                        <p>
                          Create and manage classes, and build interactive
                          courses and lessons to support blended and distance
                          learning.
                        </p>
                        <div className="readmore-arrowicon-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-heading-container">
                    <span>eLearning</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="product-container">
                    <div class="content">
                      <div class="content-overlay"></div>
                      <img
                        className="product-img content-image"
                        src={pamasys}
                        alt=""
                      />
                      <img src={overlay4} alt="" className="product-overlay" />
                      <div class="content-details fadeIn-left">
                        <h3>Patient Management System</h3>
                        <p>
                          An application that maintains patient records and
                          allows physicians to organize consultations,
                          appointments, schedules & follow-ups.
                        </p>
                        <div className="readmore-arrowicon-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-heading-container">
                    <span>PaMaSys</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* PRODUCTS SECTION */}

        {/* TRAININGS SECTION */}
        <section
          style={{ paddingTop: "0", marginTop: "0", marginBottom: "0" }}
          id="newTrainningSection"
          className="about-history-slider-conatiner home-page-service-sec home-product-sec home-trainnig-section"
        >
          <div className="section__fullwidth">
            <div className="training-container">
              <div className="training-heading">
                <h2 className="corevalues__header ff__gilroy__e history__anim company-light-font">
                  Training
                </h2>
              </div>
              <div className="training-grid-container">
                <div className="trainning-grid-items">
                  <img className="trainning-img" src={TrainningIMG} alt="" />

                  <div className="chistory__content">
                    <h2 className="corevalues__header ff__gilroy__e history__anim company-light-font">
                      Enrich your Workforce,
                    </h2>
                    <h2 className="corevalues__header ff__gilroy__e history__anim">
                      Never get Outdated.
                    </h2>
                  </div>
                  <div className="training-para-heading">
                    <p>
                      Enhance your workforce through professional upskills
                      training with skills in organizational transformation.
                    </p>
                  </div>
                </div>
                <div className="trainning-grid-items">
                  <div className="training-type-sec">
                    <div className="traininig-inner-sec">
                      <span>Information Technology Corporate Boot Camps</span>
                      <div className="training-para-heading">
                        <p>
                          Tailor-fit upskills training according to the needs of
                          your organization's IT Team.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="hover-underline-animation">
                          Read More
                        </button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                    <div className="traininig-inner-sec">
                      <span>Cross-Platform Mobile & WEB Apps Development</span>
                      <div className="training-para-heading">
                        <p>
                          Advanced app development in various programming
                          languages.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="hover-underline-animation">
                          Read More
                        </button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                    <div className="traininig-inner-sec">
                      <span>
                        Exploring DECENTRALIZED Architecture Frameworks
                      </span>
                      <div className="training-para-heading">
                        <p>
                          Discover how Decentralized Architecture Frameworks and
                          how it is utilized.
                        </p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="hover-underline-animation">
                          Read More
                        </button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                    <div className="traininig-inner-sec">
                      <span>Comprehensive Google CLOUD Product Training</span>
                      <div className="training-para-heading">
                        <p>Grow your knowledge on any Google Cloud products.</p>
                      </div>
                      <div className="learn-more-button-sec">
                        <button className="hover-underline-animation">
                          Read More
                        </button>
                        <i className="fa-solid fa-play read-more-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TRAININGS SECTION */}

        {/* NEW CASESTUDY AND NEWS SECTION */}
        <section id="workSuccessStory" className="case-study-new-sec">
          <div className="our-solution-head">
            <div className="para-span-sec">
              <p className="text-container-para">Our Work</p>
              <span>Success Stories</span>
            </div>
            <div className="latest-event-button-section">
              <span>View All</span>
              <div className="center-con">
                <div className="round"></div>
                <div id="cta">
                  <span className="arrow primera next previouss-lide "></span>
                </div>
              </div>
            </div>
          </div>
          <div className="chistory__hero">
            <div className="chistory_control">
              <div ref={navigationPrevRef} className="center-con">
                <div className="round"></div>
                <div id="cta">
                  <span className="arrow primera next previouss-lide "></span>
                </div>
              </div>
              <div ref={navigationNextRef} className="center-con">
                <div className="round"></div>
                <div id="cta">
                  <span className="arrow primera next nextslide "></span>
                </div>
              </div>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              speed={1500}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },

                320: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
              className="chistory__list__slider "
            >
              <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy1} alt="" className="case-study-img" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Government</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>
                                Department of Finance Republic of the
                                Philippines
                              </p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img
                                className="finance-casestudy"
                                src={finance}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          How DOF Simplified Their Tasks and
                          <strong>Built Server Monitoring Apps</strong>
                        </p>

                        <span>
                          LaQuest has deployed a pre-training survey to the
                          trainees to identify their Android familiarity skills
                          and design learning tracks. The result showed that 70%
                          of them are familiar with Java and 80% are challenged
                          with Restful API and XML components.
                        </span>
                        <div className="learn-more-button-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide>
              <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy2} className="case-study-img" alt="" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Government</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>
                                Philippine Council for Health Research and
                                Development-Department of Science and Technology
                              </p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img
                                className="phillippine-casestudy"
                                src={Phillippine}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          How PCHRD is Leveraging the Power of Online Learning
                          with
                          <strong> OpenEdx Learning Management System</strong>
                        </p>

                        <span>
                          The implementation of OpenedX is a project to provide
                          an eLearning platform for the stakeholders of DOST to
                          use. It is installed on the local server using Linux
                          OS
                        </span>
                        <div className="learn-more-button-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide>
              {/* <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy1} alt="" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Government</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>
                                National Youth Commission of the Philippines
                              </p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img className="nyc-casestudy" src={nyc} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          <strong>Google Workspace </strong> from LaQuest for
                          Government.
                        </p>

                        <span>
                          The “National Youth Commission" has transitioned to
                          LaQuest professional services for the new Google
                          Workspace.
                        </span>
                        <div className="learn-more-button-sec">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide> */}
              <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy3} className="case-study-img" alt="" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Government</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>Local Government Unit of the Philippines</p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img className="loacal-casestudy" src={local} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          How the
                          <strong>Local Government Units Digitized</strong>
                          &nbsp;their Processes to Serve their Residents Better
                        </p>

                        <span>
                          Barangays in the Province of Batangas are now
                          digitally transforming through the robust Barangay
                          Records Management Information System (BrMIS) made by
                          LaQuest.
                        </span>
                        <div className="learn-more-button-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide>
              <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy4} className="case-study-img" alt="" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Education</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>Visayas State University</p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img
                                className="education-casestudy"
                                src={education}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          How Visayas State University Digitized its Education
                          System using
                          <strong> Google Workspace for Education</strong>
                        </p>

                        <span>
                          As long users of G Suite for Education, Visayas State
                          University turned to LaQuest to help transition them
                          to an upgraded Google Workspace for Education and how
                          they can utilize new tools at their disposal to
                          support their learning continuity plan.
                        </span>
                        <div className="learn-more-button-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide>
              <SwiperSlide className="chistory__slide">
                <div className="section__fullwidth">
                  <div className="cloud-inner-sec">
                    <img src={CaseStudy5} className="case-study-img" alt="" />
                    <div className="cloud-description-sec">
                      <div className="chistory__content"></div>
                      <div className="google-para-sec">
                        <div className="case-study-heading-sec">
                          <span>Case Study</span>
                          <p>Healthcare</p>
                        </div>

                        <div className="phillippines-councile">
                          <div className="phillippine-council-inner">
                            <div>
                              <p>Pamana Medical Center</p>
                            </div>
                            <div className="case-study-comp-logo">
                              <img
                                className="medical-casestudy"
                                src={medical}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="google-link-sec">
                        <p>
                          How <strong>Pamana Medical Center</strong> is
                          Transforming their Laboratories To Automate their
                          Process
                        </p>

                        <span>
                          Pamana Medical Center is leveraging lab tests and
                          results through LaQuest’s custom-built Laboratory
                          Information Management System (LIMS) solutions and
                          integrated laboratory equipment to automate data
                          transfer and results in delivery.
                        </span>
                        <div className="learn-more-button-sec">
                          <button className="hover-underline-animation">
                            Read More
                          </button>
                          <i className="fa-solid fa-play read-more-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="google-cloud-bg"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* NEW CASESTUDY AND NEWS SECTION */}

        {/* LATEST EVENT AND NEWS */}
        <section
          id="aboutUsInitiatives"
          style={{ paddingTop: "0", marginTop: "0" }}
          className="latest-news-event-sec"
        >
          <div className="our-solution-head">
            <div className="para-span-sec">
              <p className="text-container-para">Latest</p>
              <span>News and Events</span>
            </div>

            <div className="latest-event-button-section">
              <span>View More Post</span>
              <div className="center-con">
                <div className="round"></div>
                <div id="cta">
                  <span className="arrow primera next previouss-lide "></span>
                </div>
              </div>
            </div>
          </div>
          <div className="section__container">
            <div className="initiative__list">
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <div className="zoom-img-container">
                    <img className="event-img" src={eventOne} alt="" />
                  </div>
                  <div className="event-description-sec">
                    <p>Government Transformation</p>
                    <span>Learning advanced Apps development.</span>
                  </div>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <div className="zoom-img-container">
                    <img className="event-img" src={eventTwo} alt="" />
                  </div>
                  <div className="event-description-sec">
                    <p>Global Business Operation</p>
                    <span>LaQuest expands and ventures to the NA region. </span>
                  </div>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <div className="zoom-img-container">
                    <img className="event-img" src={eventThree} alt="" />
                  </div>
                  <div className="event-description-sec">
                    <p>Latest News</p>
                    <span>Cross-platform mobile apps for DOST-PCHRD</span>
                  </div>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <div className="zoom-img-container">
                    <img className="event-img" src={eventFour} alt="" />
                  </div>
                  <div className="event-description-sec">
                    <p>Latest Update</p>
                    <span>
                      Learning Management System using OpenEdx for PCHRD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LATEST EVENT AND NEWS */}

        {/* FOOTER SECTION */}
        <FOOTER />
        {/* FOOTER SECTION */}
      </div>
    </>
  );
}

export default Home;
