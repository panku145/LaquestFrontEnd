import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, TweenMax, TimelineMax, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, Link as PageLink } from "react-router-dom";
import $ from "jquery";
import CircleType from "circletype";

// IMPORT COMPONENTS
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";
import FOOTER from "../../components/Footer/Footer.js";

// IMPORT ASSETS
import "../About-us/Aboutus.css";

// IMPORT IMAGES

import slide1 from "../../assets/images/about/slide1.jpg";
import slide2 from "../../assets/images/about/slide2.jpeg";
import CoreIcon from "../../assets/images/about/core-value.svg";
import dottedBg from "../../assets/images/about/contact-bg.png";
import linkedIN from "../../assets/images/about/linkedin.svg";
import ArrowRight from "../../assets/images/about/arrow-right.svg";
import technology from "../../assets/images/about-us/technology.jpg";
import cloud from "../../assets/images/about-us/cloud.jpg";
import academy from "../../assets/images/about-us/academy.jpg";
import research from "../../assets/images/about-us/technology.jpg";

import aboutBanner from "../../assets/images/about/banner.jpeg";
import circleGrid from "../../assets/images/header-circle-bg.png";

import roadmapOne from "../../assets/images/about-us/company-history/Aug16-Data-Team.jpg";
import roadmapTwo from "../../assets/images/about-us/company-history/Jan17-Registration.jpg";
import roadmapThree from "../../assets/images/about-us/company-history/Oct17-Google-Workspace.jpg";
import roadmapFour from "../../assets/images/about-us/company-history/Oct18-Software-Tech.jpg";
import roadmapFive from "../../assets/images/about-us/company-history/Jan19-SEC-Reg.jpg";
import roadmapSix from "../../assets/images/about-us/company-history/Mar19-LIMS.jpg";
import roadmapSeven from "../../assets/images/about-us/company-history/Jul19-Hospital-MS.jpg";
import roadmapEight from "../../assets/images/about-us/company-history/Aug19-Patient-MS.jpg";
import roadmapNine from "../../assets/images/about-us/company-history/Oct19-LaQuest-Acad.jpg";
import roadmapTen from "../../assets/images/about-us/company-history/Jun18-IT-Developers.jpg";
import roadmapEleven from "../../assets/images/about-us/company-history/Jan20-BrMIS.jpg";
import roadmapTwelve from "../../assets/images/about-us/company-history/Jan21-Smart-City.jpg";

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
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

    // ABOUT US HEADER
    // const aboutusheaderStagTL = new TimelineMax();
    // aboutusheaderStagTL.staggerFrom(
    //   ".aboutuspage__header .about-header-anim",
    //   1,
    //   {
    //     opacity: 0,
    //     y: 10,
    //     ease: Expo.easeInOut,
    //   },
    //   0.5
    // );
    // ABOUT US HEADER

    // ABOUT US BIO
    // const aboutusBioTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsPageBioSection",
    //     start: "top 70%",
    //   },
    // });
    // aboutusBioTL
    //   .from(".anim__overlay__bio", 0.8, {
    //     width: "0%",
    //     ease: Expo.easeInOut,
    //   })
    //   .from(".about__bio__hero img", 0.1, {
    //     opacity: 0,
    //   })
    //   .to(".anim__overlay__bio", 0.5, {
    //     width: "100%",
    //     left: "100%",
    //     ease: Expo.easeInOut,
    //   })
    //   .staggerFrom(
    //     ".aboutuspage__bio__content .bio-anim",
    //     1,
    //     {
    //       opacity: 0,
    //       y: 10,
    //       ease: Expo.easeInOut,
    //       delay: 2,
    //     },
    //     0.5
    //   );

    // ABOUT US BIO

    // SMART CITY INITIATIVES
    // const aboutusInitiativesTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsPageInitiatives",
    //     start: "top 70%",
    //   },
    // });
    // aboutusInitiativesTL
    //   .from(".circle__box__anim__solid", 0.7, {
    //     opacity: 0,
    //     ease: Expo.easeInOut,
    //   })
    //   .staggerFrom(
    //     ".smart__city__initiatives__container .smart__initiatives__thumbnail",
    //     0.7,
    //     {
    //       opacity: 0,
    //       y: 10,
    //       ease: Expo.easeInOut,
    //     },
    //     0.2
    //   )
    //   .from(".circle__box__anim__border", 0.7, {
    //     opacity: 0,
    //     ease: Expo.easeInOut,
    //   });
    // SMART CITY INITIATIVES

    // ABOUT US CORE VALUES
    // const aboutusCorevaluesTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCorevaluesSection",
    //     start: "top 70%",
    //   },
    // });
    // aboutusCorevaluesTL
    //   .from(".anim__overlay__corevalues", 0.8, {
    //     width: "0%",
    //     ease: Expo.easeInOut,
    //   })
    //   .from(".corevalues_hero_container img", 0.1, {
    //     opacity: 0,
    //   })
    //   .to(".anim__overlay__corevalues", 0.5, {
    //     width: "100%",
    //     left: "100%",
    //     ease: Expo.easeInOut,
    //   });

    // const aboutusCorevaluesContentTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCorevaluesSection",
    //     start: "top 70%",
    //   },
    // });
    // aboutusCorevaluesContentTL
    //   .staggerFrom(
    //     ".corevalues_content .corevalues__anim",
    //     0.7,
    //     {
    //       opacity: 0,
    //       y: 10,
    //       ease: Expo.easeInOut,
    //     },
    //     0.5
    //   )
    //   .staggerFrom(
    //     ".corevalues__list li",
    //     0.7,
    //     {
    //       opacity: 0,
    //       y: 10,
    //       ease: Expo.easeInOut,
    //     },
    //     0.5
    //   );
    // ABOUT US CORE VALUES

    // ABOUT US HISTORY
    // const aboutusHistoryContentTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCompanyHistory",
    //     start: "top 70%",
    //   },
    // });
    // aboutusHistoryContentTL
    //   .staggerFrom(
    //     ".chistory__content .history__anim",
    //     0.7,
    //     {
    //       opacity: 0,
    //       y: 10,
    //       ease: Expo.easeInOut,
    //     },
    //     0.5
    //   )
    //   .from(".chistory_control", 0.7, {
    //     opacity: 0,
    //     y: 10,
    //     ease: Expo.easeInOut,
    //   });

    // const aboutusHistoryListTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCompanyHistory",
    //     start: "top 70%",
    //   },
    // });
    // aboutusHistoryListTL.staggerFrom(
    //   ".chistory__list__slider .chistory__slide",
    //   0.7,
    //   {
    //     opacity: 0,
    //     y: 10,
    //     ease: Expo.easeInOut,
    //   },
    //   0.2
    // );
    // ABOUT US HISTORY

    // ABOUT US CEO MESSAGE
    // const aboutusCEOmessageContentTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCEOmessageSection",
    //     start: "top 70%",
    //   },
    // });
    // aboutusCEOmessageContentTL.staggerFrom(
    //   ".ceo__message__content .ceo__message_anim",
    //   0.7,
    //   {
    //     opacity: 0,
    //     y: 10,
    //     ease: Expo.easeInOut,
    //   },
    //   0.5
    // );

    // const aboutusCEOmessageHeroTL = new TimelineMax({
    //   scrollTrigger: {
    //     trigger: "#aboutUsCEOmessageSection",
    //     start: "top 70%",
    //   },
    // });
    // aboutusCEOmessageHeroTL
    //   .from(".anim__overlay__ceo", 0.8, {
    //     width: "0%",
    //     ease: Expo.easeInOut,
    //   })
    //   .from(".message__hero img", 0.1, {
    //     opacity: 0,
    //   })
    //   .to(".anim__overlay__ceo", 0.5, {
    //     width: "100%",
    //     left: "100%",
    //     ease: Expo.easeInOut,
    //   });
    // ABOUT US CEO MESSAGE
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
              </div>
              <div className="header-banner-sec">
                <div className="header-banner-container">
                  <img className="header-banner-img" src={aboutBanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <header
          id="aboutUsPageHeader"
          className="contact-hero-sec about-hero-sec "
        >
          <div className="section__container">
            <div className="aboutuspage__header__hero " id="aboutuspageheader">
              <div className="aboutuspage__hero__container">
                <div className="aboutuspage__hero">
                  <img src={aboutBanner} alt="" />
                </div>
              </div>
            </div>
            <div className="aboutuspage__header__content header-txt">
              <h1 className="about__header__page__title ff__gilroy__e about-header-anim">
                Together, we make Tasks Simplified
              </h1>
            </div>
          </div>
        </header> */}

        {/* COMPANY HISTORY*/}
        <section id="aboutUsCompanyHistory" className="history-slider-sec">
          <div className="insightSec larg-slider-img-txt-sec">
            <div
              className="section__container insight__container"
              style={{ width: "98%" }}
            >
              <div className="products__list insight-list ">
                <div className="arrows__control largimg-arrow-control">
                  <div ref={navigationPrevRef} className="center-con">
                    <div className="round"></div>
                    <div id="cta">
                      <span className="arrow primera next "></span>
                    </div>
                  </div>
                  <div ref={navigationNextRef} className="center-con">
                    <div className="round"></div>
                    <div id="cta">
                      <span className="arrow primera  nextslide "></span>
                    </div>
                  </div>
                </div>
                <Swiper
                  // spaceBetween={20}
                  slidesPerView={0.6}
                  loop={true}
                  speed={2000}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  breakpoints={{
                    768: {
                      slidesPerVie: 0.2,
                    },

                    480: {
                      //   width: 768,
                      slidesPerView: 0.2,
                    },
                  }}
                  className="product__swiper"
                >
                  <SwiperSlide className="product__swiper__list">
                    <div className="img-slider-sec">
                      <div className="video-inner-section-col txt-mrgin-auto">
                        <div className="txt_container">
                          <div className="our-solution-head">
                            <div className="para-span-sec">
                              <p className="text-container-para">We deliver</p>
                              <span>enterprise-grade solutions.</span>
                            </div>
                            <div className="laquest-vesatile-para">
                              <p>
                                <strong>
                                  LaQuest is a versatile Independent Software
                                  Vendor, a digital and Information Technology
                                  company
                                </strong>
                                that offers a great deal of technological
                                reinforcement and vital services that supports
                                business operations across the world. It is a
                                dynamic international company that focuses on
                                helping many industries in achieving the goal of
                                productivity, efficiency, and ease in every
                                organization.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="video_container ">
                        <div
                          className="video-container-inner-sec"
                          style={{
                            margin: "auto",
                          }}
                        >
                          <img src={slide1} alt="" id="sliderimg" />
                          <div className="empty-bg"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="product__swiper__list">
                    <div className="img-slider-sec">
                      <div className="video-inner-section-col txt-mrgin-auto">
                        <div className="txt_container">
                          <div className="our-solution-head">
                            <div className="para-span-sec">
                              <p className="text-container-para">
                                Government trusts us in
                              </p>
                              <span>delivering innovation.</span>
                            </div>
                            <div className="laquest-vesatile-para">
                              <p>
                                Our refined approach is forged through our
                                actual experiences on the ground. We clearly
                                understand every streak of challenges in the
                                public sector which is why we bridge
                                transformation in delivering the most robust
                                technology trends. We target improved
                                productivity and adaptive solutions to enhance
                                public services and stress-free working
                                environment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="video_container ">
                        <div
                          className="video-container-inner-sec"
                          style={{
                            margin: "auto",
                          }}
                        >
                          <img src={slide2} alt="" id="sliderimg" />
                          <div className="empty-bg"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* COMPANY HISTORY */}

        {/* SMARTY CITY INITIATIVES */}

        <section id="aboutUsInitiatives">
          <div className="our-solution-head">
            <div className="para-span-sec">
              <p className="text-container-para">Our solutions to various</p>
              <span>challenges in your organization</span>
            </div>
          </div>
          <div className="section__container">
            <div className="initiative__list">
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <img className="solution-img" src={technology} alt="" />
                  <p>Technology</p>
                  <span>Utilization</span>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <img className="solution-img" src={research} alt="" />
                  <p>Research and</p>
                  <span>Development</span>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <img className="solution-img" src={academy} alt="" />
                  <p>LaQuest</p>
                  <span>Academy</span>
                </div>
              </div>
              <div className="first-container">
                <div className="first-container-inner-sec">
                  <img className="solution-img" src={cloud} alt="" />
                  <p>Google Cloud</p>
                  <span>Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SMARTY CITY INITIATIVES */}

        {/* COMPANY HISTORY*/}
        <section
          id="aboutUsCompanyHistory"
          className="about-history-slider-conatiner"
        >
          <div className="section__fullwidth">
            <div className="section__container">
              <div className="chistory__content">
                <h2 className="corevalues__header ff__gilroy__e history__anim company-light-font">
                  Company
                </h2>
                <h2 className="corevalues__header ff__gilroy__e history__anim">
                  History<span className="primary_c">.</span>
                </h2>
                {/* <div className="page__section__title__separator history__anim"></div> */}
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
                speed={1500}
                loop={true}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  320: {
                    width: 700,
                    slidesPerView: 2.5,
                  },
                }}
                className="chistory__list__slider"
              >
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapTwelve} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jan. 2021
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Started the campaign on IT solutions for Smart City
                        Initiatives.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapEleven} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jan. 2020
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Launched Barangay System to support COVID-19 monitoring
                        and record keeping of residents.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapNine} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Oct. 2019
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Launched LaQuest Academy for IT professional development
                        training to the government sector and for other
                        enterprises.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapEight} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Aug. 2019
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest built its own Patient Management System product.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapSeven} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jul. 2019
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest Inc launched its own Electronic Medical and
                        Health Record.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapSix} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Mar. 2019
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Laboratory Information Management System is launched in
                        collaboration with hospitals and major medical suppliers
                        in the Philippines.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapFive} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jan. 2019
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest Philippines Inc was legally registered with the
                        Security and Exchange Commission (SEC).{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapFour} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Oct. 2018
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest added Software and Technology services to its
                        line of business.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapTen} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jun. 2018
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Formed a team of IT and Software programmers in the
                        Philippines.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapThree} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Oct. 2017
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        Accredited as Google Partners for Google Cloud, Google
                        workspace and its expansion.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapTwo} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Jan. 2017
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest LLP was legally registered in New Delhi, India.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="chistory__slide">
                  <div className="chistory__thumbnail">
                    <div className="chistory__thumbnail__hero">
                      <img src={roadmapOne} alt="Company History Hero" />
                      <div className="chistory__date__container">
                        <div className="chistory__date__border">
                          <div className="history__date">
                            <h5 className="ff__gilroy__l secondary_c">
                              Aug. 2016
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chistory__thumbnail__desc">
                      <p>
                        LaQuest started its first data project with a group of
                        researchers in India.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* COMPANY HISTORY */}

        {/* CORE VALUES */}
        <section id="aboutUsCorevaluesSection" className="about-core-value-sec">
          <div className="section__container">
            <div className="core-value-head-container">
              <div className="para-span-sec">
                <p className="text-container-para">Our </p>
                <span>Core Values</span>
              </div>
            </div>
            <div className="core-third-container">
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Customer Focused</p>
                  <span>Strongly ensure customer satisfaction.</span>
                </div>
              </div>
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Quality Forward</p>
                  <span>Outstanding performance and resilience.</span>
                </div>
              </div>
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Innovative Solutions</p>
                  <span>Embed scalability for any change.</span>
                </div>
              </div>
              <div className="hr-line-container">
                <hr />
              </div>
            </div>
            <div className="core-third-container">
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Uncompromised Standard</p>
                  <span>Never missed on compliances.</span>
                </div>
              </div>
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Result Oriented</p>
                  <span>We ensure 100% accomplishments.</span>
                </div>
              </div>
              <div className="our-core-value-text-container">
                <div className="core-icon-container">
                  <img className="corevalueimg" src={CoreIcon} alt="" />
                </div>
                <div className="core-txt-inner-sec">
                  <p>Adaptive Mindset</p>
                  <span>Challenges are our opportunities.</span>
                </div>
              </div>
              <div className="hr-line-container">
                <hr />
              </div>
            </div>
            <img src={dottedBg} alt="" className="about-dotted-bg" />
          </div>
        </section>
        {/* CORE VALUES */}

        {/* CEO MESSAGE SECTION */}
        <section id="aboutUsCEOmessageSection" className="leader-section">
          <div className="section__container">
            <div className="leader-inner-sec">
              <div className="hear-from-sec">
                <div className="hear-from-head">
                  <div className="para-span-sec">
                    <p className="text-container-para">Hear From </p>
                    <span>Our Leaders.</span>
                  </div>
                </div>
                <div className="creating-long-solution-section">
                  <p>Creating long-term solutions for our generation.</p>
                  <span>
                    Our hard work rewards our value and it inspires us to see
                    the real importance of what we do today is preparing better
                    changes for the generations to come.
                  </span>
                </div>
              </div>
              <div className="ceo-section">
                <div className="leader-button-sec">
                  <div className="center-con">
                    <div className="round"></div>
                    <div id="cta">
                      <span className="arrow primera next previouss-lide "></span>
                    </div>
                  </div>
                </div>
                <div className="anoop-lakhera-sec">
                  <div className="annop-lakhera-inner-sec">
                    <p>Anoop Lakhera</p>
                    <span>President, CEO</span>
                  </div>
                  <div className="linkedin-sec">
                    <a
                      href="https://www.linkedin.com/in/anoop-lakhera/"
                      target="_blank"
                    >
                      <img src={linkedIN} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CEO MESSAGE SECTION */}

        {/* ABOUT US CONTACT US SECTION */}
        <section id="aboutUsContactSection1" className="partner-with-us">
          <div className="partner-section-container">
            <div className="partner-with-us-sec">
              <div className="partner_head">
                <p>Partner</p>
                <span>with us</span>
              </div>
              <div className="partner-single-line"></div>
            </div>
            <div className="let-us-build-sec">
              <div className="let-us-head">
                <p>
                  Let us build business synergy <br /> together.
                </p>
              </div>
              <div className="arrow-sec">
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT US CONTACT US SECTION */}
        {/* Update git remote */}

        {/* FOOTER */}
        <FOOTER />
        {/* FOOTER */}
      </div>
    </>
  );
};

export default Aboutus;
