import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweenMax, Expo } from "gsap";

// IMPORT ASSETS
import "../Nav-menu/Nav-menu.css";
import "../Nav-menu/Nav-menu-responsive.css";

// IMAGES
import logo from "../../assets/images/logo.png";
import headerBanner from "../../assets/images/home/menu-home-banner.jpg";
import logofullpage from "../../assets/images/laquest_logo_b.png";
import navAbout1 from "../../assets/images/nav-menu/nav-about-1.jpg";
import navAbout2 from "../../assets/images/nav-menu/nav-about-2.jpg";
import navAbout3 from "../../assets/images/nav-menu/nav-about-3.jpg";
import navService from "../../assets/images/nav-menu/nav-service.jpg";
import googleCloud from "../../assets/images/nav-menu/nav-google-cloud.jpg";
import navProduct from "../../assets/images/nav-menu/nav-product.jpg";
import navTraining from "../../assets/images/nav-menu/nav-training.jpg";
import navCarees from "../../assets/images/nav-menu/nav-careers.jpg";

import trainingsHero from "../../assets/images/trainings_hero@2x.jpg";
import googlePartner from "../../assets/images/google-partner.png";

function Nav() {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    // GSAP ANIMATION OPEN
    $(".navi__menu__icon").click(function() {
      TweenMax.to(".navigation__menu__fullpage", 1, {
        display: "block",
        opacity: 1,
        ease: Expo.easeInOut,
      });
      // TweenMax.from(".anim1", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.1,
      // });
      // TweenMax.from(".anim2", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.2,
      // });
      // TweenMax.from(".anim3", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.3,
      // });
      // TweenMax.from(".anim3_1", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.4,
      // });
      // TweenMax.from(".anim4", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.5,
      // });
      // TweenMax.from(".anim4_1", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.6,
      // });
      // TweenMax.from(".anim6", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.7,
      // });
      // TweenMax.from(".anim6_1", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.8,
      // });
      // TweenMax.from(".anim5", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 0.9,
      // });
      // TweenMax.from(".anim5_1", 1, {
      //   opacity: 0,
      //   y: 10,
      //   ease: Expo.easeInOut,
      //   delay: 1,
      // });

      // TweenMax.from(".others__menu", 1, {
      //   opacity: 0,
      //   y: 10,
      //   delay: 1.1,
      // });

      // TweenMax.from(".hovered__anim", 1, {
      //   opacity: 0,
      //   y: 10,
      //   delay: 1.4,
      // });
      // TweenMax.from(".contact__info__anim", 1, {
      //   opacity: 0,
      //   y: 10,
      //   delay: 1.4,
      // });
    });

    $(".navi__menu__icon__c").click(function() {
      TweenMax.to(".navigation__menu__fullpage", 1, {
        display: "none",
        opacity: 0,
        ease: Expo.easeInOut,
      });
    });
    // GSAP ANIMATION OPEN

    // Global declaration
    var hoveredSubmenuNone = ".hovered__submenu__none",
      activeHoveredNone = ".active__hovered__none";
    // home
    var home = ".home",
      hoveredHome = ".hovered__thumbnail__home",
      hoveredHomeActive = ".navi__home__li",
      hoveredHomeSubIcon = ".submenu__icon__hovered__home";

    $(home).hover(function() {
      $(hoveredHome).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredHomeActive + "," + hoveredHomeSubIcon).addClass("active");

      $(
        hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // home

    // success Story
    var SuccessStory = ".SuccessStory",
      hoveredSuccessStory = ".hovered__thumbnail__SuccessStory",
      hoveredSuccessStoryActive = ".navi__SuccessStory__li",
      hoveredSuccessStorySubIcon = ".submenu__icon__hovered__SuccessStory";

    $(SuccessStory).hover(function() {
      $(hoveredSuccessStory).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredAboutUs +
          "," +
          hoveredHome +
          "," +
          hoveredTrainings +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredSuccessStoryActive + "," + hoveredSuccessStorySubIcon).addClass(
        "active"
      );

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // success Story

    // about us
    var aboutUs = ".aboutUs",
      hoveredAboutUs = ".hovered__thumbnail__about",
      hoveredAboutusActive = ".navi__aboutus__li",
      hoveredAboutusSubIcon = ".submenu__icon__hovered__aboutus";

    $(aboutUs).hover(function() {
      $(hoveredAboutUs).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredTrainings +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredAboutusActive + "," + hoveredAboutusSubIcon).addClass("active");

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // about us

    // Services
    var services = ".navi__services__list",
      hoveredServices = ".hovered__thumbnail__services",
      hoveredServicesActive = ".navi__services__li",
      hoveredServicesSubIcon = ".submenu__icon__hovered__services",
      clickServicesDropdown = $(".sub__menu__list__services");

    $(services).hover(function() {
      $(hoveredServices).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredAboutUs +
          "," +
          hoveredTrainings +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredServicesCBS +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredServicesActive + "," + hoveredServicesSubIcon).addClass(
        "active"
      );
      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });

    $(services).click(function() {
      clickServicesDropdown.slideToggle("slow");
      clickProductsDropdown.slideUp("slow");
      clickTrainingsDropdown.slideUp("slow");
      clickGoogleProductsDropdown.slideUp("slow");
    });

    // Services sub list
    // CBS
    var servicesCBS = ".services__cbs",
      hoveredServicesCBS = ".hovered__services__cds";

    $(servicesCBS).hover(function() {
      $(hoveredServicesCBS).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredCareers +
          "," +
          hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServicesMMI +
          "," +
          hoveredServicesSAI +
          "," +
          hoveredServicesMS
      ).css({
        display: "none",
        transition: "2",
      });

      $(servicesCBS).addClass("active");

      $(servicesMMI + "," + servicesSAI + "," + servicesMS).removeClass(
        "active"
      );
    });
    // CBS

    // MMI
    var servicesMMI = ".services__mmi",
      hoveredServicesMMI = ".hovered__services__mmi";

    $(servicesMMI).hover(function() {
      $(hoveredServicesMMI).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServicesCBS +
          "," +
          hoveredServicesSAI +
          "," +
          hoveredServicesMS
      ).css({
        display: "none",
        transition: "2",
      });

      $(servicesMMI).addClass("active");

      $(servicesCBS + "," + servicesSAI + "," + servicesMS).removeClass(
        "active"
      );
    });
    // MMI

    // SAI
    var servicesSAI = ".services__sai",
      hoveredServicesSAI = ".hovered__services__sai";

    $(servicesSAI).hover(function() {
      $(hoveredServicesSAI).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServicesCBS +
          "," +
          hoveredServicesMMI +
          "," +
          hoveredServicesMS
      ).css({
        display: "none",
        transition: "2",
      });

      $(servicesSAI).addClass("active");

      $(servicesCBS + "," + servicesMMI + "," + servicesMS).removeClass(
        "active"
      );
    });
    // SAI

    // MS
    var servicesMS = ".services__ms",
      hoveredServicesMS = ".hovered__services__ms";

    $(servicesMS).hover(function() {
      $(hoveredServicesMS).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredCareers +
          "," +
          hoveredHome +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServicesCBS +
          "," +
          hoveredServicesMMI +
          "," +
          hoveredServicesSAI
      ).css({
        display: "none",
        transition: "2",
      });

      $(servicesMS).addClass("active");

      $(servicesCBS + "," + servicesMMI + "," + servicesSAI).removeClass(
        "active"
      );
    });
    // MS
    // Services sub list
    // Services

    // Products
    var products = ".navi__products__list",
      hoveredProducts = ".hovered__thumbnail__products",
      hoveredProductsActive = ".navi__products__li",
      hoveredProductsSubIcon = ".submenu__icon__hovered__products",
      clickProductsDropdown = $(".sub__menu__list__products");

    $(products).hover(function() {
      $(hoveredProducts).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredHome +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServices +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredProductsActive + "," + hoveredProductsSubIcon).addClass(
        "active"
      );

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });

    $(products).click(function() {
      clickProductsDropdown.slideToggle("slow");
      clickServicesDropdown.slideUp("slow");
      clickTrainingsDropdown.slideUp("slow");
      clickGoogleProductsDropdown.slideUp("slow");
    });

    // Product sub list
    // Quobex
    var productQuobex = ".products__Quobex",
      hoveredProductQuobex = ".hovered__services__quobex";

    $(productQuobex).hover(function() {
      $(hoveredProductQuobex).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredProductMedriQs +
          "," +
          hoveredProductClinQ +
          "," +
          hoveredProductBrMIS +
          "," +
          hoveredProductIOMys +
          "," +
          hoveredProductGW
      ).css({
        display: "none",
        transition: "2",
      });

      $(productQuobex).addClass("active");

      $(
        productMedriQs +
          "," +
          productClinQ +
          "," +
          productBrMIS +
          "," +
          productIOMys +
          "," +
          productGW
      ).removeClass("active");
    });
    // Quobex

    // MedriQs
    var productMedriQs = ".products__MedriQs",
      hoveredProductMedriQs = ".hovered__services__medriqs";

    $(productMedriQs).hover(function() {
      $(hoveredProductMedriQs).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredProductQuobex +
          "," +
          hoveredProductClinQ +
          "," +
          hoveredProductBrMIS +
          "," +
          hoveredProductIOMys +
          "," +
          hoveredProductGW
      ).css({
        display: "none",
        transition: "2",
      });

      $(productMedriQs).addClass("active");

      $(
        productQuobex +
          "," +
          productClinQ +
          "," +
          productBrMIS +
          "," +
          productIOMys +
          "," +
          productGW
      ).removeClass("active");
    });
    // MedriQs

    // BrMIS
    var productBrMIS = ".products__BrMIS",
      hoveredProductBrMIS = ".hovered__services__brmis";

    $(productBrMIS).hover(function() {
      $(hoveredProductBrMIS).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredCareers +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredProductQuobex +
          "," +
          hoveredProductClinQ +
          "," +
          hoveredProductMedriQs +
          "," +
          hoveredProductIOMys +
          "," +
          hoveredProductGW
      ).css({
        display: "none",
        transition: "2",
      });

      $(productBrMIS).addClass("active");

      $(
        productQuobex +
          "," +
          productClinQ +
          "," +
          productMedriQs +
          "," +
          productIOMys +
          "," +
          productGW
      ).removeClass("active");
    });
    // BrMIS

    // ClinQ
    var productClinQ = ".products__ClinQ",
      hoveredProductClinQ = ".hovered__services__clinq";

    $(productClinQ).hover(function() {
      $(hoveredProductClinQ).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredProductQuobex +
          "," +
          hoveredProductBrMIS +
          "," +
          hoveredProductMedriQs +
          "," +
          hoveredProductIOMys +
          "," +
          hoveredProductGW
      ).css({
        display: "none",
        transition: "2",
      });

      $(productClinQ).addClass("active");

      $(
        productQuobex +
          "," +
          productBrMIS +
          "," +
          productMedriQs +
          "," +
          productIOMys +
          "," +
          productGW
      ).removeClass("active");
    });
    // ClinQ

    // IOMys
    var productIOMys = ".products__IOMys",
      hoveredProductIOMys = ".hovered__services__iomys";

    $(productIOMys).hover(function() {
      $(hoveredProductIOMys).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredProductQuobex +
          "," +
          hoveredProductBrMIS +
          "," +
          hoveredProductMedriQs +
          "," +
          hoveredProductClinQ +
          "," +
          hoveredProductGW
      ).css({
        display: "none",
        transition: "2",
      });

      $(productIOMys).addClass("active");

      $(
        productQuobex +
          "," +
          productBrMIS +
          "," +
          productMedriQs +
          "," +
          productClinQ +
          "," +
          productGW
      ).removeClass("active");
    });
    // IOMys

    // GW
    var productGW = ".products__GW",
      hoveredProductGW = ".hovered__services__gw";

    $(productGW).hover(function() {
      $(hoveredProductGW).css({
        display: "inline-block",
        transition: "2s ease-in-out",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredProductQuobex +
          "," +
          hoveredProductBrMIS +
          "," +
          hoveredProductMedriQs +
          "," +
          hoveredProductClinQ +
          "," +
          hoveredProductIOMys
      ).css({
        display: "none",
        transition: "2",
      });

      $(productGW).addClass("active");

      $(
        productQuobex +
          "," +
          productBrMIS +
          "," +
          productMedriQs +
          "," +
          productClinQ +
          "," +
          productIOMys
      ).removeClass("active");
    });
    // GW
    // Product sub list
    // Products

    // Google Products
    var googleProducts = ".navi__google__list",
      hoveredGoogleProducts = ".hovered__thumbnail__google",
      hoveredGoogleProductsActive = ".navi__google__li",
      hoveredGoogleProductsSubIcon =
        ".submenu__icon__hovered__google__products",
      clickGoogleProductsDropdown = $(".sub__menu__list__google__products");

    $(googleProducts).hover(function() {
      $(hoveredGoogleProducts).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredHome +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(
        hoveredGoogleProductsActive + "," + hoveredGoogleProductsSubIcon
      ).addClass("active");

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          hoveredArticlesActive +
          "," +
          hoveredArticlesSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });

    $(googleProducts).click(function() {
      clickGoogleProductsDropdown.slideToggle("slow");
      clickServicesDropdown.slideUp("slow");
      clickProductsDropdown.slideUp("slow");
      clickTrainingsDropdown.slideUp("slow");
    });
    // Google Products Sub Menu
    // GW
    var GoogleGW = ".google__gw",
      hoveredGoogleGW = ".hovered__services__gw";

    $(GoogleGW).hover(function() {
      $(hoveredGoogleGW).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredGoogleGS +
          "," +
          hoveredGoogleGC +
          "," +
          hoveredGoogleGEDUC
      ).css({
        display: "none",
        transition: "2",
      });

      $(GoogleGW).addClass("active");

      $(GoogleGS + "," + GoogleGC + "," + GoogleGEDUC).removeClass("active");
    });
    // GW

    // GC
    var GoogleGC = ".google__gc",
      hoveredGoogleGC = ".hovered__services__gc";

    $(GoogleGC).hover(function() {
      $(hoveredGoogleGC).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredGoogleGS +
          "," +
          hoveredGoogleGW +
          "," +
          hoveredGoogleGEDUC
      ).css({
        display: "none",
        transition: "2",
      });

      $(GoogleGC).addClass("active");

      $(GoogleGS + "," + GoogleGW + "," + GoogleGEDUC).removeClass("active");
    });
    // GC

    // GC
    var GoogleGEDUC = ".google__gedu",
      hoveredGoogleGEDUC = ".hovered__services__geduc";

    $(GoogleGEDUC).hover(function() {
      $(hoveredGoogleGEDUC).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredGoogleGS +
          "," +
          hoveredGoogleGW +
          "," +
          hoveredGoogleGC
      ).css({
        display: "none",
        transition: "2",
      });

      $(GoogleGEDUC).addClass("active");

      $(GoogleGS + "," + GoogleGW + "," + GoogleGC).removeClass("active");
    });
    // GC

    // GS
    var GoogleGS = ".google__gs",
      hoveredGoogleGS = ".hovered__services__gs";

    $(GoogleGS).hover(function() {
      $(hoveredGoogleGS).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredGoogleGW +
          "," +
          hoveredGoogleGEDUC +
          "," +
          hoveredGoogleGC
      ).css({
        display: "none",
        transition: "2",
      });

      $(GoogleGS).addClass("active");

      $(GoogleGEDUC + "," + GoogleGW + "," + GoogleGC).removeClass("active");
    });
    // GS
    // Google Products Sub Menu
    // Google Products

    // Trainings
    var trainings = ".navi__trainings__list",
      hoveredTrainings = ".hovered__thumbnail__trainings",
      hoveredTrainingsActive = ".navi__trainings__li",
      hoveredTrainingsSubIcon = ".submenu__icon__hovered__trainings",
      clickTrainingsDropdown = $(".sub__menu__list__trainings");

    $(trainings).hover(function() {
      $(hoveredTrainings).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredHome +
          "," +
          hoveredSuccessStory +
          "," +
          hoveredCareers +
          "," +
          hoveredAboutUs +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredTrainingsActive + "," + hoveredTrainingsSubIcon).addClass(
        "active"
      );

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });

    $(trainings).click(function() {
      clickTrainingsDropdown.slideToggle("slow");
      clickServicesDropdown.slideUp("slow");
      clickProductsDropdown.slideUp("slow");
      clickGoogleProductsDropdown.slideUp("slow");
    });
    // Training Sub Menu
    // GT
    var TrainingGT = ".trainings__gt",
      hoveredTrainingGT = ".hovered__services__gt";

    $(TrainingGT).hover(function() {
      $(hoveredTrainingGT).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredTrainingMAD +
          "," +
          hoveredTrainingITCB
      ).css({
        display: "none",
        transition: "2",
      });

      $(TrainingGT).addClass("active");

      $(TrainingMAD + "," + TrainingITCB).removeClass("active");
    });
    // GT

    // ITCB
    var TrainingITCB = ".trainings__itcb",
      hoveredTrainingITCB = ".hovered__services__itcb";

    $(TrainingITCB).hover(function() {
      $(hoveredTrainingITCB).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredTrainingMAD +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredTrainingGT
      ).css({
        display: "none",
        transition: "2",
      });

      $(TrainingITCB).addClass("active");

      $(TrainingMAD + "," + TrainingGT).removeClass("active");
    });
    // ITCB

    // MAD
    var TrainingMAD = ".trainings__mad",
      hoveredTrainingMAD = ".hovered__services__mad";

    $(TrainingMAD).hover(function() {
      $(hoveredTrainingMAD).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredServices +
          "," +
          hoveredHome +
          "," +
          hoveredProducts +
          "," +
          hoveredTrainings +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredTrainingITCB +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredTrainingGT
      ).css({
        display: "none",
        transition: "2",
      });

      $(TrainingMAD).addClass("active");

      $(TrainingITCB + "," + TrainingGT).removeClass("active");
    });
    // MAD
    // Training Sub Menu
    // Trainings

    // Careers
    var Careers = ".Careers",
      hoveredCareers = ".hovered__thumbnail__Careers",
      hoveredCareersActive = ".navi__Careers__li",
      hoveredCareersSubIcon = ".submenu__icon__hovered__Careers";

    $(Careers).hover(function() {
      $(hoveredCareers).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredAboutUs +
          "," +
          hoveredTrainings +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredSupport +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredCareersActive + "," + hoveredCareersSubIcon).addClass("active");

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredAboutusActive +
          "," +
          hoveredAboutusSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // Careers

    // Support
    var Support = ".Support",
      hoveredSupport = ".hovered__thumbnail__Support",
      hoveredSupportActive = ".navi__Support__li",
      hoveredSupportSubIcon = ".submenu__icon__hovered__Support";

    $(Support).hover(function() {
      $(hoveredSupport).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredTrainings +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredArticles +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredSupportActive + "," + hoveredSupportSubIcon).addClass("active");

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // Support

    // Articles
    var Articles = ".Articles",
      hoveredArticles = ".hovered__thumbnail__Articles",
      hoveredArticlesActive = ".navi__Articles__li",
      hoveredArticlesSubIcon = ".submenu__icon__hovered__Articles";

    $(Articles).hover(function() {
      $(hoveredArticles).css({
        display: "inline-block",
        transition: "2",
      });
      $(
        hoveredSuccessStory +
          "," +
          hoveredHome +
          "," +
          hoveredTrainings +
          "," +
          hoveredServices +
          "," +
          hoveredProducts +
          "," +
          hoveredGoogleProducts +
          "," +
          hoveredCareers +
          "," +
          hoveredSupport +
          "," +
          hoveredSubmenuNone
      ).css({
        display: "none",
        transition: "2",
      });

      $(hoveredArticlesActive + "," + hoveredArticlesSubIcon).addClass(
        "active"
      );

      $(
        hoveredHomeActive +
          "," +
          hoveredHomeSubIcon +
          "," +
          hoveredTrainingsActive +
          "," +
          hoveredTrainingsSubIcon +
          "," +
          hoveredServicesActive +
          "," +
          hoveredServicesSubIcon +
          "," +
          hoveredProductsActive +
          "," +
          hoveredProductsSubIcon +
          "," +
          hoveredGoogleProductsActive +
          "," +
          hoveredGoogleProductsSubIcon +
          "," +
          hoveredSuccessStoryActive +
          "," +
          hoveredSuccessStorySubIcon +
          "," +
          hoveredCareersActive +
          "," +
          hoveredCareersSubIcon +
          "," +
          hoveredSupportActive +
          "," +
          hoveredSupportSubIcon +
          "," +
          activeHoveredNone
      ).removeClass("active");
    });
    // Articles
  });

  return (
    <>
      <nav>
        {/* Brand Logo */}
        <div className="brand-icon-container">
          <div className={`brand__icon ${show && "nav__blue"}`}>
            <Link to="/">
              <img src={logo} alt="LaQuest Inc. Logo" />
            </Link>
          </div>
        </div>
        {/* Brand Logo */}

        {/* Navigation Menu Icon */}
        <div className="navi__menu__icon secondary_bg">
          <div className="line__menu__bar__c">
            <div className="line__one white_bg"></div>
            <div className="line__two white_bg"></div>
            <div className="line__three white_bg"></div>
          </div>
        </div>
        {/* Navigation Menu Icon */}
      </nav>

      {/* NAVIGATION MENU */}
      <div className="navigation__menu__fullpage">
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
        <div className="navigation__menu__header">
          {/* Brand Logo */}
          <div className="brand__icon">
            <Link to="/">
              <img src={logo} alt="LaQuest Inc. Logo" />
            </Link>
          </div>
          {/* Brand Logo */}
          {/* Navigation Menu Icon */}
          <div className="navi__menu__icon__c secondary_bg">
            <div className="line__menu__bar__c">
              <div className="line__c__one white_bg"></div>
              <div className="line__c__two white_bg"></div>
            </div>
          </div>
          {/* Navigation Menu Icon */}
        </div>

        <div className="navigation__contianer">
          <div className="navigation-bg"></div>
          {/* NAVIGATION LIST MENU */}
          <div className="navigation__menu">
            <ul className="others__menu above-others-menu">
              <li>
                <a
                  href="javascript:void(0)"
                  className="SuccessStory navi__SuccessStory__li anim2"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="aboutUs navi__aboutus__li anim2"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="main__menu">
              <li className="main-menu-list-item">
                <Link to="/" className="home navi__home__li anim1">
                  {/* <FontAwesomeIcon
                    className="submenu__icon__hovered__home"
                    icon={["fas", "chevron-right"]}
                  /> */}
                  Home
                </Link>
              </li>
              {/* <li className="main-menu-list-item">
                <Link
                  to="/about-us"
                  className="aboutUs navi__aboutus__li anim2"
                >
                  <FontAwesomeIcon
                    className="submenu__icon__hovered__aboutus"
                    icon={["fas", "chevron-right"]}
                  />
                  About Us
                </Link>
              </li> */}
              <li className="main-menu-list-item">
                <a
                  href="javascript:void(0)"
                  className="navi__services__list navi__services__li anim3"
                >
                  {/* <FontAwesomeIcon
                    className="submenu__icon__hovered__services"
                    icon={["fas", "chevron-right"]}
                  /> */}
                  Services
                  <FontAwesomeIcon
                    className="submenu__icon"
                    icon={["fas", "plus"]}
                  />
                </a>

                <ul className="sub__menu__list sub__menu__list__services anim3_1">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="services__cbs active__hovered__none"
                    >
                      Custom Designed
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="services__mmi active__hovered__none"
                    >
                      Medical Machines Data Consolidation
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="services__sai active__hovered__none"
                    >
                      System Automation & Integration
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="services__ms active__hovered__none"
                    >
                      Maintenance & Support
                    </a>
                  </li>
                </ul>
              </li>
              <li className="main-menu-list-item">
                <a
                  href="javascript:void(0)"
                  className="navi__google__list navi__google__li anim6"
                >
                  {/* <FontAwesomeIcon
                    className="submenu__icon__hovered__google__products"
                    icon={["fas", "chevron-right"]}
                  /> */}
                  Google Cloud
                  <FontAwesomeIcon
                    className="submenu__icon"
                    icon={["fas", "plus"]}
                  />
                </a>

                <ul className="sub__menu__list sub__menu__list__google__products anim6_1">
                  <li>
                    <Link
                      to="/google-workspace"
                      className="google__gw active__hovered__none"
                    >
                      Google Workspace
                    </Link>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="google__gc active__hovered__none"
                    >
                      Google Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="google__gedu active__hovered__none"
                    >
                      Google for Education
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/google-workspace/support"
                      className="google__gs active__hovered__none"
                    >
                      Google Support
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="main-menu-list-item">
                <a
                  href="javascript:void(0)"
                  className="navi__products__list navi__products__li anim4"
                >
                  {/* <FontAwesomeIcon
                    className="submenu__icon__hovered__products"
                    icon={["fas", "chevron-right"]}
                  /> */}
                  Products
                  <FontAwesomeIcon
                    className="submenu__icon"
                    icon={["fas", "plus"]}
                  />
                </a>

                <ul className="sub__menu__list sub__menu__list__products anim4_1">
                  <li>
                    <Link
                      to="/barangay"
                      className="products__BrMIS active__hovered__none"
                    >
                      Barangay Records Management Information System
                    </Link>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="products__Quobex active__hovered__none"
                    >
                      Laboratory Information Management System
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="products__MedriQs active__hovered__none"
                    >
                      Electronic Medical and Health Records System
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="products__ClinQ active__hovered__none"
                    >
                      Patient Management System
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="products__IOMys active__hovered__none"
                    >
                      Inventory and Ordering Management System
                    </a>
                  </li>
                </ul>
              </li>
              <li className="main-menu-list-item">
                <a
                  href="javascript:void(0)"
                  className="navi__trainings__list navi__trainings__li anim5"
                >
                  {/* <FontAwesomeIcon
                    className="submenu__icon__hovered__trainings"
                    icon={["fas", "chevron-right"]}
                  /> */}
                  Training
                  <FontAwesomeIcon
                    className="submenu__icon"
                    icon={["fas", "plus"]}
                  />
                </a>

                <ul className="sub__menu__list sub__menu__list__trainings anim5_1">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="trainings__gt active__hovered__none"
                    >
                      Google Product Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="trainings__itcb active__hovered__none"
                    >
                      IT Corporate Bootcamp
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="trainings__mad active__hovered__none"
                    >
                      Mobile and Web Apps Development
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="others__menu">
              <li>
                <a
                  href="javascript:void(0)"
                  className="Careers navi__Careers__li anim2"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="Support navi__Support__li anim2"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="Articles navi__Articles__li anim2"
                >
                  Articles
                </a>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              {/* <li>
                <Link to="/EULA">EULA</Link>
              </li>

              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
               */}
            </ul>
          </div>
          {/* NAVIGATION LIST MENU */}

          {/* SUB LIST MENU */}
          <div className="navi__info__container">
            {/* HOME */}
            <div className="hovered__thumbnail__home hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={headerBanner} alt="Hovered Menu List" />
                {/* <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Laquest<span className="primary_c">.</span>
                  </h1>
                </div> */}
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  WE TRANSFORM BUSINESSES BEYOND IMAGINATION.
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  LaQuest is a versatile Independent Software Vendor, a digital
                  and Information Technology company that offers a great deal of
                  technological reinforcement and vital services that supports
                  business operations across the world.
                </p>
              </div>
            </div>
            {/* HOME */}

            {/* Success Stroy */}
            <div className="hovered__thumbnail__SuccessStory hovered__anim">
              <div className="latest-event-button-section nav-view-all-btn-sec">
                <span>View All</span>
                <div className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next previouss-lide "></span>
                  </div>
                </div>
              </div>
              <div className="nav-menu-grid-container">
                <div className="nav-grid-items">
                  <img src={navAbout1} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    How PCHRD is Leveraging the Power of Online Learning with
                    OpenEdx Learning Management System
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout2} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    How PCHRD is Leveraging the Power of Online Learning with
                    OpenEdx Learning Management System
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout3} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    How PCHRD is Leveraging the Power of Online Learning with
                    OpenEdx Learning Management System
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Success Stroy */}

            {/* ABOUT US */}
            <div className="hovered__thumbnail__about hovered__anim">
              <div className="nav-menu-grid-container">
                <div className="nav-grid-items">
                  <img src={navAbout1} alt="" />
                  <p className="about-sub-menu-head">Overview</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout2} alt="" />
                  <p className="about-sub-menu-head">Leadership Team</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout3} alt="" />
                  <p className="about-sub-menu-head">Partner With Us</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    About us<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  WE BRING TECHNOLOGICAL ADVANCEMENT TO YOUR BUSINESS.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  LaQuest is a versatile Information Technology and business
                  consulting company that offers a great deal of technological
                  reinforcement and vital services that supports business
                  operations across the world. It is a dynamic international
                  company that focuses on helping many industries in achieving
                  the goal of productivity, efficiency, and ease for every
                  organization.
                </p>
              </div> */}
            </div>
            {/* ABOUT US */}

            {/* SERVICES */}
            {/* SERVICES MAIN LIST */}
            <div className="hovered__thumbnail__services hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={navService} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Services<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  CROSS-PLATFORM DEVELOPMENT.
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  We offer a full spectrum of software development to help
                  organizations stay up with the technological trends and allow
                  flexibility to manage the increased demand of business
                  operations.
                </p>
              </div>
            </div>
            {/* SERVICES MAIN LIST */}
            {/* SERVICES SUB LIST */}
            {/* CDS */}
            <div className="hovered__services__cds hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Services<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">CUSTOM DESIGNED.</h4>
                <p className="ff__gilroy__l dark_c">
                  Off-the-shelf applications may not always have the right
                  features and functions you want. This is why we offer
                  solutions that are meticulously tailor fitted to address your
                  specific needs.
                </p>
              </div>
            </div>
            {/* CDS */}
            {/* MMI */}
            <div className="hovered__services__mmi hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Services<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  MEDICAL MACHINES DATA CONSOLIDATION.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Help you consolidate all necessary data and capture all
                  essential activities; ability to accurately identify values,
                  counter check results and achieve flawless reports with just a
                  few clicks.
                </p>
              </div>
            </div>
            {/* MMI */}
            {/* SAI */}
            <div className="hovered__services__sai hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Services<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  SYSTEMS AUTOMATION & INTEGRATION.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Automation happens when data is centralized. We can help you
                  automate your system and integrate applications from different
                  machines into a single tool to increase your operation's
                  processing power.
                </p>
              </div>
            </div>
            {/* SAI */}
            {/* MS */}
            <div className="hovered__services__ms hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Services<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  MAINTENANCE & SUPPORT.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Be at ease. We can take care of anything, from fine tuning
                  your operations to your technological business transformation,
                  whether it be an upkeeping of our own products of supporting a
                  3rd party provider of your business.
                </p>
              </div>
            </div>
            {/* MS */}
            {/* SERVICES SUB LIST */}
            {/* SERVICES */}

            {/* PRODUCTS */}
            {/* PRODUCT MAIN LIST */}
            <div className="hovered__thumbnail__products">
              <div className="hovered__thumbnail__img">
                <img src={navProduct} alt="Hovered Menu List" />
                {/* <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div> */}
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  SIMPLIFIED SOLUTIONS AT YOUR FINGERTIPS.
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  As a <strong>Google Cloud Partner</strong>, LaQuest initiates
                  on-the-ground experiences to ensure that our insights are
                  credible to support sensible solutions scalable enough to
                  support substantial pillars of future technologies.
                </p>
              </div>
            </div>
            {/* PRODUCT MAIN LIST */}
            {/* PRODUCT SUB LIST */}
            {/* QUOBEX */}
            <div className="hovered__services__quobex hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  LABORATORY INFORMATION MANAGEMENT SYSTEM.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  A comprehensive user-friendly software designed to automate
                  workflow processes and achieve seamless integration of medical
                  machines in optimizing laboratory management for hospital
                  laboratories & other diagnostic laboratories.
                </p>
              </div>
            </div>
            {/* QUOBEX */}
            {/* MEDRIQS */}
            <div className="hovered__services__medriqs hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  ELECTRONIC MEDICAL AND HEALTH RECORDS SYSTEMS.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Specially designed to support medical practitioners in
                  coordinating treatments efficiently through automated
                  documentation, storage and retrieval features with graphs and
                  notification features to easily identify critical cases.
                </p>
              </div>
            </div>
            {/* MEDRIQS */}
            {/* CLINQ */}
            <div className="hovered__services__clinq hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  PATIENT MANAGEMENT SYSTEM.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  An approach to organizing physician's consultation schedules
                  and monitoring patient follow-ups with a systematic data flow
                  for easy assessment and administration of patient care. Manage
                  patients from different clinics with a single tool.
                </p>
              </div>
            </div>
            {/* CLINQ */}
            {/* BRMIS */}
            <div className="hovered__services__brmis hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  BARANGAY RECORDS MANAGEMENT INFORMATION SYSTEM.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Get quick access to your residents' information including an
                  up-to-date analytics report of your barangay's demographics,
                  SMS blasts, incidental reports, registered businesses, your
                  list of talents and a speedy access to public documents.
                </p>
              </div>
            </div>
            {/* BRMIS */}
            {/* IOMYS */}
            <div className="hovered__services__iomys hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  INVENTORY AND ORDERING MANAGEMENT SYSTEM.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Your handy monitoring system that enables management and
                  auditing of stocks; shows a quick view of your sales and
                  costing reports as well as inventory of consumables to help
                  you organize your daily management of supplies.
                </p>
              </div>
            </div>
            {/* IOMYS */}
            {/* PRODUCT SUB LIST */}
            {/* PRODUCTS */}

            {/* TRAININGS */}
            {/* TRAININGS MAIN LIST */}
            <div className="hovered__thumbnail__trainings hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={navTraining} alt="Hovered Menu List" />
                {/* <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Trainings<span className="primary_c">.</span>
                  </h1>
                </div> */}
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  WE BRING TECHNOLOGICAL ADVANCEMENT TO YOUR BUSINESS.
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  As a <strong>Google Cloud Partner</strong>, LaQuest initiates
                  on-the-ground experiences to ensure that our insights are
                  credible to support sensible solutions scalable enough to
                  support substantial pillars of future technologies.
                </p>
              </div>
            </div>
            {/* TRAININGS MAIN LIST */}
            {/* TRAININGS SUB LIST */}
            {/* GT */}
            <div className="hovered__services__gt hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Trainings<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  GOOGLE PRODUCT TRAINING
                </h4>
                <p className="ff__gilroy__l dark_c">
                  We provide advanced technical training for administrators and
                  users that are using various Google products. The courses are
                  customized based on the customer's intended training path.
                </p>
              </div>
            </div>
            {/* GT */}
            {/* ITCB */}
            <div className="hovered__services__itcb hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Trainings<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  IT CORPORATE BOOTCAMPS.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  LaQuest offers various upskills training programs designed
                  according to the needs of your IT personnel or your
                  administrators. All training sessions include hands-on
                  practice and demonstrations.
                </p>
              </div>
            </div>
            {/* ITCB */}
            {/* MAD */}
            <div className="hovered__services__mad hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Trainings<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  MOBILE AND WEB APPS DEVELOPMENT.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  Our courses are Google based mobile apps development where you
                  can learn multiple techniques with the use of various
                  programming languages through our certified Google trainers.
                </p>
              </div>
            </div>
            {/* MAD */}
            {/* TRAININGS SUB LIST */}
            {/* TRAININGS */}

            {/* GOOGLE PRODUCTS */}
            {/* GOOGLE PRODUCTS MAIN LIST */}
            <div className="hovered__thumbnail__google hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={googleCloud} alt="Hovered Menu List" />
                {/* <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Google<span className="primary_c">.</span>
                  </h1>
                </div> */}
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  INTERNET-RELATED SERVICES FOR EVERYONE
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  Google is more than just a search engine, internet products,
                  and services provider it is actually everyone’s best friend.
                  From finding answers to self-education, Google makes
                  everything available for everyone to connect and communicate
                  securely.
                </p>
              </div>
            </div>
            {/* GOOGLE PRODUCTS MAIN LIST */}
            {/* GOOGLE PRODUCTS SUB LIST */}
            {/* GW */}
            <div className="hovered__services__gw hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Google<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">GOOGLE WORKSPACE.</h4>
                <p className="ff__gilroy__l dark_c">
                  LaQuest, is an authorized and certified partner of Google that
                  implements various and powerful office productivity solutions
                  in more than 144 countries. We offer the following Google
                  products alongside our fool-proof systems to support seamless
                  stability of your daily business activities.
                </p>
              </div>
            </div>
            {/* GW */}

            {/* GC */}
            <div className="hovered__services__gc hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Google<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">GOOGLE CLOUD.</h4>
                <p className="ff__gilroy__l dark_c">
                  Use the world's best industry-leading infrastructure, powerful
                  data analytics and machine learning with full security
                  features as you grow your prototypes to a full grown system
                  without worrying about servers capacity, reliability, or
                  performance.
                </p>
              </div>
            </div>
            {/* GC */}

            {/* GEDUC */}
            <div className="hovered__services__geduc hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Google<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">
                  GOOGLE FOR EDUCATION.
                </h4>
                <p className="ff__gilroy__l dark_c">
                  A solution built for faculty and students to seamlessly
                  interact with each other and improve advanced learning through
                  the use and development of technology. We inspire creativity,
                  encourage hands-on learning, and equip students with digital
                  skills.
                </p>
              </div>
            </div>
            {/* GEDUC */}
            {/* GS*/}
            <div className="hovered__services__gs hovered__submenu__none hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={trainingsHero} alt="Hovered Menu List" />
                <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Google Products<span className="primary_c">.</span>
                  </h1>
                </div>
              </div>
              <div className="hovered__thumbnail__info">
                <h4 className="ff__gilroy__e secondary_c">GOOGLE SUPPORT</h4>
                <p className="ff__gilroy__l dark_c">
                  LaQuest is your first point of contact to fully equip you with
                  Google's product knowledge. From admins to users, we provide
                  professional services to your organization that will guide you
                  in every step to get things done right with Google.
                </p>
              </div>
            </div>
            {/* GS*/}
            {/* GOOGLE PRODUCTS SUB LIST */}

            {/* Careers */}
            <div className="hovered__thumbnail__Careers hovered__anim">
              <div className="hovered__thumbnail__img">
                <img src={navCarees} alt="Hovered Menu List" />
                {/* <div className="hovered__header">
                  <h1 className="ff__gilroy__e">
                    Laquest<span className="primary_c">.</span>
                  </h1>
                </div> */}
              </div>
              <div className="hovered__thumbnail__info">
                {/* <h4 className="ff__gilroy__e secondary_c">
                  WE TRANSFORM BUSINESSES BEYOND IMAGINATION.
                </h4> */}
                <p className="ff__gilroy__l dark_c">
                  As a <strong>Google Cloud Partner</strong>, LaQuest initiates
                  on-the-ground experiences to ensure that our insights are
                  credible to support sensible solutions scalable enough to
                  support substantial pillars of future technologies.
                </p>
              </div>
            </div>
            {/* Careers */}

            {/* Support */}
            <div className="hovered__thumbnail__Support hovered__anim">
              <div className="nav-menu-grid-container">
                <div className="nav-grid-items">
                  <img src={navAbout1} alt="" />
                  <p className="about-sub-menu-head">Google Support</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout2} alt="" />
                  <p className="about-sub-menu-head">Product Support</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout3} alt="" />
                  <p className="about-sub-menu-head">Other Support</p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Support */}

            {/* Articles */}
            <div className="hovered__thumbnail__Articles hovered__anim">
              <div className="latest-event-button-section nav-view-all-btn-sec">
                <span>View All</span>
                <div className="center-con">
                  <div className="round"></div>
                  <div id="cta">
                    <span className="arrow primera next previouss-lide "></span>
                  </div>
                </div>
              </div>
              <div className="nav-menu-grid-container">
                <div className="nav-grid-items">
                  <img src={navAbout1} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    LaQuest expands and ventures to the NA region
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout2} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    Cross-platform mobile apps for PCHRD-DOST
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
                <div className="nav-grid-items">
                  <img src={navAbout3} alt="" />
                  <p className="SuccessStory-sub-menu-head">
                    Learning Management System using OpenEdx.
                  </p>
                  <div className="nav-about-read-more">
                    <div className="readmore-arrowicon-sec">
                      <button className="hover-underline-animation">
                        Read More
                      </button>
                      <i className="fa-solid fa-play read-more-icon "></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Articles */}

            {/* CONTACT INFORMATION */}
            <div className="contact__info__container contact__info__anim">
              {/* <div className="contact__connect__container">
                <h3 className="ff__gilroy__e light_c">Get in touch</h3>
                <div>
                  <a
                    target="_blank"
                    href="https://cloud.withgoogle.com/partners/detail/?id=laquest-inc&hl=en-US&fbclid=IwAR16CzLCXDjM9_KkMzPyu4_Py3QwodQYr9UGJ3jN-YcuoyH44HTzmdjSeP8"
                  >
                    <FontAwesomeIcon
                      className="connect__sm"
                      icon={["fas", "envelope"]}
                    />
                    info@laquest.net
                  </a>
                </div>
                <div>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon
                      className="connect__sm"
                      icon={["fas", "phone-square"]}
                    />
                    +(63)-946-012-9717 (Philippines)
                  </a>
                </div>

                <div>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon
                      className="connect__sm"
                      icon={["fas", "phone-square"]}
                    />
                    +(63)-956-490-4130 (Philippines)
                  </a>
                </div>
              </div> */}

              <div className="contact__social__container">
                <h3 className="ff__gilroy__e light_c">Social Media</h3>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/laquestinc"
                      title="LinkedIn"
                    >
                      <FontAwesomeIcon
                        className="navi__sm__icon"
                        icon={["fab", "linkedin-in"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://medium.com/laquest"
                      title="Medium"
                    >
                      <FontAwesomeIcon
                        className="navi__sm__icon"
                        icon={["fab", "medium-m"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/laquestinc"
                      title="Twitter"
                    >
                      <FontAwesomeIcon
                        className="navi__sm__icon"
                        icon={["fab", "twitter"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/LaQuestinc/"
                      title="Facebook"
                    >
                      <FontAwesomeIcon
                        className="navi__sm__icon"
                        icon={["fab", "facebook-f"]}
                      />
                    </a>
                  </li>
                </ul>
                <div className="google__partner__logo">
                  <a
                    href="https://cloud.withgoogle.com/partners/detail/?id=laquest-inc&hl=en-US"
                    target="_blank"
                  >
                    {/* <img src={googlePartner} alt="Google Partner" /> */}
                  </a>
                </div>
              </div>
            </div>
            {/* CONTACT INFORMATION */}
          </div>
          {/* SUB LIST MENU */}
        </div>
      </div>
      {/* NAVIGATION MENU */}
    </>
  );
}

export default Nav;
