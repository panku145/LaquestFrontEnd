import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

// IMPORT CUSTOM STYLE
import "./BRMIS.css";
import "./BRMIS-responsive.css";

// IMPORT COMPONENTS & PAGES
import FOOTER from "../../components/Footer/Footer.js";
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";

// IMAGES
import barangayHero from "../../assets/images/barangay-hero.png";
import barangayFeatureHero from "../../assets/images/BrIMS-hero.png";

import herFeature from "../../assets/images/her-feature.png";
import bpmFeature from "../../assets/images/bpm-feature.png";
import tkFeature from "../../assets/images/tk-feature.png";
import drFeature from "../../assets/images/dr-feature.png";
import dsmFeature from "../../assets/images/dsm-feature.png";
import dmFeature from "../../assets/images/dm-feature.png";
import vriFeature from "../../assets/images/vri-feature.png";
import smsFeature from "../../assets/images/sms-feature.png";
import ehrFeature from "../../assets/images/ehr-feature.png";
import rpmFeature from "../../assets/images/rpm-feature.png";

SwiperCore.use([Navigation]);

const BRMIS = () => {

  const navigationPrevRef = useRef();
  const navigationNextRef = useRef();

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

        {/* BARANGAY HEADER SECTION */}
        <section id="barangayHeaderSection">
          <div className="section__container">
            <div className="barangay__header_content">
              <h3 className="barangay__header__subtagline ff__gilroy__e light_c">
                (BrMIS)
              </h3>
              <h1 className="barangay__header__tagline ff__gilroy__e dark_c">
                BARANGAY RECORDS MANAGEMENT INFORMATION SYSTEM.
              </h1>

              <p className="barangay__desc__info ff__gilroy__l dark_c">
                BrMIS is a comprehensive software solution developed by LaQuest
                Philippines Inc that is easy to use and allows a{" "}
                <span className="ff__gilroy__e secondary_c">quick access</span>{" "}
                to{" "}
                <span className="ff__gilroy__e secondary_c">
                  resident’s information
                </span>{" "}
                including an{" "}
                <span className="ff__gilroy__e secondary_c">
                  up-to-date report
                </span>{" "}
                of your barangay's{" "}
                <span className="ff__gilroy__e secondary_c">
                  demographics, latest events, incidental reports
                </span>{" "}
                and a{" "}
                <span className="ff__gilroy__e secondary_c">speedy access</span>{" "}
                to public documents.
              </p>
            </div>
            <div className="barangay__header__hero">
              <img src={barangayHero} alt="BrMIS Infographic" />
            </div>
          </div>
        </section>
        {/* BARANGAY HEADER SECTION */}

        {/* BARANGAY SERVICES PROMO SECTION */}
        <section id="barangayServicesPromoSection">
          <div className="section__container">
            <div className="barangay__services__promo__container">
              <div className="barangay__services__promo__thumbnail">
                <div className="barangay__services__promo__thumbnail__title">
                  <h2 className="ff__gilroy__e bsp__days">
                    15 Days
                    <br className="barangay__services__promo__thumbnail__br" />
                    Demo.
                  </h2>
                  {/* <h2 className="ff__gilroy__l dark_c">Demo.</h2> */}
                </div>
                <div className="barangay__services__promo__thumbnail__desc">
                  <p className="ff__gilroy__l dark_c">
                    Is a sample app intended for interested barangay officials
                    in exploring our BrMIS with mock-up database of residents
                    information.
                  </p>
                </div>
              </div>
              <div className="barangay__services__promo__thumbnail">
                <div className="barangay__services__promo__thumbnail__title">
                  <h2 className="ff__gilroy__e bsp__days">
                    30 Days
                    <br className="barangay__services__promo__thumbnail__br" />
                    Trial.
                  </h2>
                  {/* <h2 className="ff__gilroy__l dark_c">Trial.</h2> */}
                </div>
                <div className="barangay__services__promo__thumbnail__desc">
                  <p className="ff__gilroy__l dark_c">
                    Allows you to experience the power of the full version of
                    the BrMIS starting from building your actual list of
                    residents profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BARANGAY SERVICES PROMO SECTION */}

        {/* BARANGAY FEATURES SECTION */}
        <section id="barangayFeatureSection">
          <div className="section__container">
            <div className="barangay__features__container">
              <div className="barangay__features__content">
                <h3 className="ff__gilroy__e light_c">BrMIS</h3>
                <h2 className="ff__gilroy__l dark_c">
                  <span className="ff__gilroy__e">Features</span> and{" "}
                  <span className="ff__gilroy__e">Functions</span>
                </h2>
                <p className="ff__gilroy__l dark_c">
                  The BrMIS is a technology innovation that addresses the
                  challenges <br className="bfs__br" />
                  of Barangay officials in providing easy and efficient services
                  to the public.
                </p>
              </div>
              <div className="barangay__features__hero">
                <div className="barangay__feature__hero__container">
                  <div className="brims__first__bg">
                    <div className="brims__second__bg">
                      <div className="brims__third__bg">
                        <img
                          className="brims__hero"
                          src={barangayFeatureHero}
                          alt="BrIMS Hero"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bpm__container">
                  <div className="bpm__title">
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Businesses Profile
                        <br className="br__title__f" />
                        &nbsp;Management
                      </span>
                    </p>
                    <div className="bpm__line__border">
                      <div className="bpm__line">
                        <div className="bpm__circle__blink"></div>
                        <div className="bpm__circle"></div>
                        <div className="bpm__icon">
                          <img src={bpmFeature} alt="B.P.M Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="her__container">
                  <div className="her__title">
                    <div className="her__line__border">
                      <div className="her__line">
                        <div className="her__circle__blink"></div>
                        <div className="her__circle"></div>
                        <div className="her__icon">
                          <img src={herFeature} alt="H.E.R Icon" />
                        </div>
                      </div>
                    </div>
                    <p className="ff__gilroy__l dark_c">
                      <span>Health Emergency Response</span>
                    </p>
                  </div>
                </div>

                <div className="vri__container">
                  <div className="vri__title">
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Voters Registration
                        <br className="br__title__f" />
                        &nbsp;Information
                      </span>
                    </p>
                    <div className="vri__line__border">
                      <div className="vri__line">
                        <div className="vri__circle__blink"></div>
                        <div className="vri__circle"></div>
                        <div className="vri__icon">
                          <img src={vriFeature} alt="V.R.I Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sms__container">
                  <div className="sms__title">
                    <div className="sms__line__border">
                      <div className="sms__line">
                        <div className="sms__circle__blink"></div>
                        <div className="sms__circle"></div>
                        <div className="sms__icon">
                          <img src={smsFeature} alt="S.M.S Icon" />
                        </div>
                      </div>
                    </div>
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        SMS notifications
                        <br className="br__title__f" />
                        (PREMIUM)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="dsm__container">
                  <div className="dsm__title">
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Dispute & Settlement
                        <br />
                        Management
                      </span>
                    </p>
                    <div className="dsm__line__border">
                      <div className="dsm__line">
                        <div className="dsm__circle__blink"></div>
                        <div className="dsm__circle"></div>
                        <div className="dsm__icon">
                          <img src={dsmFeature} alt="D.S.M Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rpm__container">
                  <div className="rpm__title">
                    <div className="rpm__line__border">
                      <div className="rpm__line">
                        <div className="rpm__circle__blink"></div>
                        <div className="rpm__circle"></div>
                        <div className="rpm__icon">
                          <img src={rpmFeature} alt="R.P.M Icon" />
                        </div>
                      </div>
                    </div>
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Residents Profile
                        <br />
                        Management
                      </span>
                    </p>
                  </div>
                </div>

                <div className="dr__container">
                  <div className="dr__title">
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Demographics
                        <br className="br__title__f" />
                        &nbsp;Report
                      </span>
                    </p>
                    <div className="dr__line__border">
                      <div className="dr__line">
                        <div className="dr__circle__blink"></div>
                        <div className="dr__circle"></div>
                        <div className="dr__icon">
                          <img src={drFeature} alt="D.R Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tk__container">
                  <div className="tk__title">
                    <div className="tk__line__border">
                      <div className="tk__line">
                        <div className="tk__circle__blink"></div>
                        <div className="tk__circle"></div>
                        <div className="tk__icon">
                          <img src={tkFeature} alt="T.K Icon" />
                        </div>
                      </div>
                    </div>
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Transaction
                        <br className="br__title__f" />
                        &nbsp;Keeping
                      </span>
                    </p>
                  </div>
                </div>

                <div className="dm__container">
                  <div className="dm__title">
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Document
                        <br className="br__title__f" />
                        &nbsp;Management
                      </span>
                    </p>
                    <div className="dm__line__border">
                      <div className="dm__line">
                        <div className="dm__circle__blink"></div>
                        <div className="dm__circle"></div>
                        <div className="dm__icon">
                          <img src={dmFeature} alt="D.M Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ehr__container">
                  <div className="ehr__title">
                    <div className="ehr__line__border">
                      <div className="ehr__line">
                        <div className="ehr__circle__blink"></div>
                        <div className="ehr__circle"></div>
                        <div className="ehr__icon">
                          <img src={ehrFeature} alt="E.H.R Icon" />
                        </div>
                      </div>
                    </div>
                    <p className="ff__gilroy__l dark_c">
                      <span>
                        Essential Health
                        <br className="br__title__f" />
                        &nbsp;Records
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="barangay__features__hero__smallview">
                <div className="barangay__features__smallview barangay__features__smallview__mr">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={bpmFeature}
                      alt="B.P.M Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Businesses Profile Management</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__ml">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={herFeature}
                      alt="H.E.R Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Health Emergency Response</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__mr">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={vriFeature}
                      alt="V.R.I Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Voters Registration Information</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__ml">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={smsFeature}
                      alt="S.M.S Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>SMS notifications (optional)</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__mr">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={dsmFeature}
                      alt="D.S.M Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Dispute & Settlement Management</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__ml">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={rpmFeature}
                      alt="R.P.M Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span> Residents Profile Management</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__mr">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={drFeature}
                      alt="D.R Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Demographics Report</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__ml">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={tkFeature}
                      alt="T.K Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Transaction Keeping</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__mr">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={dmFeature}
                      alt="D.M Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Document Management</span>
                    </h3>
                  </div>
                </div>

                <div className="barangay__features__smallview barangay__features__smallview__ml">
                  <div className="barangay__features__smallview__icon">
                    <img
                      src={ehrFeature}
                      alt="E.H.R Icon"
                      className="barangay__features__smallview__icon__her"
                    />
                  </div>
                  <div className="baramgay__features__smallview__title">
                    <h3 className="ff__gilroy__e secondary_c">
                      <span>Essential Health Records</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BARANGAY FEATURES SECTION */}

        {/* BARANGAY FORMS SECTION */}
        <section id="barangayFormSection">
          <div className="section__container">
            <div className="barangay__form_content">
              <h2 className="ff__gilroy__l dark_c">
                Interested in getting access to the most useful{" "}
                <span className="ff__gilroy__e">BrMIS features?</span>
              </h2>
            </div>
            <div className="barangay__form__container">
              <form method="POST">
                <div className="input__size__frame__barangay input__frame__barangay_ml">
                  <div className="text__field">
                    <input type="text" name="fullname" required />
                    <span></span>
                    <label htmlFor="fullname">First Name*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_mr">
                  <div className="text__field">
                    <input type="text" name="fullname" required />
                    <span></span>
                    <label htmlFor="fullname">Last Name*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_ml">
                  <div className="text__field">
                    <input type="email" name="email" required />
                    <span></span>
                    <label htmlFor="email">Email Address*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_mr">
                  <div className="text__field">
                    <input type="tel" name="mobile_number" required />
                    <span></span>
                    <label htmlFor="mobile_number">Mobile Number*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_ml">
                  <div className="text__field">
                    <input type="text" name="b_captain_name" required />
                    <span></span>
                    <label htmlFor="b_captain_name">Barangay Chairman*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_mr">
                  <div className="text__field">
                    <input type="text" name="b_name" required />
                    <span></span>
                    <label htmlFor="b_name">Barangay Name*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_ml">
                  <div className="text__field">
                    <input type="text" name="b_population" required />
                    <span></span>
                    <label htmlFor="b_population">Barangay Population*</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay input__frame__barangay_mr">
                  <div className="text__field">
                    <input type="text" name="b_population" required />
                    <span></span>
                    <label htmlFor="b_population">Barangay Contact No.</label>
                  </div>
                </div>

                <div className="input__size__frame__barangay__textarea">
                  <div className="textarea__field">
                    <textarea name="address" rows="3" required></textarea>
                    <span></span>
                    <label htmlFor="address">Barangay Address*</label>
                  </div>
                </div>

                <div className="eula">
                  <p className="ff__gilroy__l dark_c">
                    By providing this information, you agree that we may process
                    your personal data in accordance with our{" "}
                    <span className="ff__gilroy__e secondary_c">
                      <Link to="/EULA" className="ff__gilroy__e secondary_c">
                        End-User License Agreement (EULA).
                      </Link>
                    </span>
                  </p>
                </div>

                <div className="brmis__checkbox">
                  <input
                    type="checkbox"
                    id="brmis__agree"
                    name="brmis__agree"
                    value="Agree"
                  />
                  <p className="ff__gilroy__l dark_c">
                    Yes, I would like to receive marketing communications
                    regarding BrMIS, products, services, and events.
                  </p>
                </div>

                <div className="submit__btn">
                  <button type="submit" className="ff__gilroy_l">
                    Request Demo{" "}
                    <FontAwesomeIcon
                      className="icon__submit"
                      icon={["fas", "paper-plane"]}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* BARANGAY FORMS SECTION */}

        {/* BARANGAY CLIENT TESTIMONIAL SECTION */}
        <section id="barangayTestiSection">
          <section className="section__container">
            <div className="barangay__testi__content">
              <h2 className="ff__gilroy__l white_c">
                <span className="ff__gilroy__e">BrMIS</span> is{" "}
                <span className="ff__gilroy__e">LaQuest's latest app</span>
                <br className="test__br__dn" /> that delivers breakthrough on
                resident service experiences.
              </h2>
            </div>
            <div className="barangay__testi__list">
              <div className="barangay__arrows__control">
                <div ref={navigationPrevRef} className="swiper__next secondary_c">
                  <FontAwesomeIcon icon={["fas", "chevron-left"]} />
                </div>
                <div ref={navigationNextRef} className="swiper__prev secondary_c">
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
                  1441: {
                    width: 1200,
                    slidesPerVie: 2.5,
                  },
                  1000: {
                    width: 950,
                    slidesPerVie: 3,
                    spaceBetween: 30,
                  },
                  600: {
                    width: 1000,
                    slidesPerVie: 3,
                    spaceBetween: 30,
                  },
                  320: {
                    width: 820,
                    slidesPerVie: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="barangay__testi__thumbnail">
                    <div className="barangay__testi__message">
                      <FontAwesomeIcon
                        icon={["fas", "quote-left"]}
                        className="bt__icon primary_c"
                      />
                      <h5 className="ff__gilroy__l white_c">
                        The BrMIS has helped us a lot in digitally securing our
                        residents information and speedy service to the people.
                      </h5>
                    </div>
                    <div className="barangay__testi__avatar">
                      <div className="bt__avatar white_c ff__gilroy__l">CL</div>
                      <div className="bt__info">
                        <p className="ff__gilroy__l white_c">
                          Ms. Connie S. Leynes
                        </p>
                        <p className="ff__gilroy__l white_c bt__info__position">
                          Secretary
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="barangay__testi__thumbnail">
                    <div className="barangay__testi__message">
                      <FontAwesomeIcon
                        icon={["fas", "quote-left"]}
                        className="bt__icon primary_c"
                      />
                      <h5 className="ff__gilroy__l white_c">
                        The BrMIS has helped us a lot in digitally securing our
                        residents information and speedy service to the people.
                      </h5>
                    </div>
                    <div className="barangay__testi__avatar">
                      <div className="bt__avatar white_c ff__gilroy__l">CL</div>
                      <div className="bt__info">
                        <p className="ff__gilroy__l white_c">
                          Ms. Connie S. Leynes
                        </p>
                        <p className="ff__gilroy__l white_c bt__info__position">
                          Secretary
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="barangay__testi__thumbnail">
                    <div className="barangay__testi__message">
                      <FontAwesomeIcon
                        icon={["fas", "quote-left"]}
                        className="bt__icon primary_c"
                      />
                      <h5 className="ff__gilroy__l white_c">
                        The BrMIS has helped us a lot in digitally securing our
                        residents information and speedy service to the people.
                      </h5>
                    </div>
                    <div className="barangay__testi__avatar">
                      <div className="bt__avatar white_c ff__gilroy__l">CL</div>
                      <div className="bt__info">
                        <p className="ff__gilroy__l white_c">
                          Ms. Connie S. Leynes
                        </p>
                        <p className="ff__gilroy__l white_c bt__info__position">
                          Secretary
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </section>
        {/* BARANGAY CLIENT TESTIMONIAL SECTION */}

        {/* FOOTER */}
        <FOOTER />
        {/* FOOTER */}
      </div>
    </>
  )
}

export default BRMIS
