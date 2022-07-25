import React, { useEffect } from "react";
import $ from "jquery";
import { gsap, TweenMax, TimelineMax, Expo } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleType from "circletype";
import { Link } from "react-scroll";

// IMPORT ASSETS
import "../EULA/eula.css";
import "../EULA/eula-responsive.css";

// IMPORT COMPONENTS & PAGES
import NAVIGATION from "../../components/Nav-menu/Nav-menu.js";
import FOOTER from "../../components/Footer/Footer.js";

const Eula = () => {


  
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

        {/* EULA HEADER */}
        <section id="eulaHeaderSection">
          <div className="section__container">
            <div className="eula__header__container">
              <h2 className="ff__gilroy__l white_c">
                LaQuest Philippines Inc.
              </h2>
              <h1 className="ff__gilroy__e white_c">
                End-User License Agreement (EULA).
              </h1>
            </div>
          </div>
        </section>
        {/* EULA HEADER */}

        {/* EULA */}
        <section id="eulaSection">
          <div className="section__container__eula">
            <div className="eula__navlist__container">
              <ul className="eula__list">
                <li>
                  <Link to="eulaImportant" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Important
                  </Link>
                </li>
                <li>
                  <Link to="eulaLicense" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    License Grant
                  </Link>
                </li>
                <li>
                  <Link to="eulaEvaluation" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Evaluation
                  </Link>
                </li>
                <li>
                  <Link to="eulaFees" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Fees
                  </Link>
                </li>
                <li>
                  <Link to="eulaRestrictions" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Restrictions
                  </Link>
                </li>
                <li>
                  <Link to="eulaProtection" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Protection Mechanisms
                  </Link>
                </li>
                <li>
                  <Link to="eulaProprietary" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Proprietary Rights
                  </Link>
                </li>
                <li>
                  <Link to="eulaSupport" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Support and Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="eulaRecords" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Records Retention and Audit
                  </Link>
                </li>
                <li>
                  <Link to="eulaRepresentations" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Representations and Warranties
                  </Link>
                </li>
                <li>
                  <Link to="eulaDisclaimer" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Disclaimer of Warranty
                  </Link>
                </li>
                <li>
                  <Link to="eulaLimitations" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Limitation of Liability
                  </Link>
                </li>
                <li>
                  <Link to="eulaPublicity" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Publicity
                  </Link>
                </li>
                <li>
                  <Link to="eulaAssignment" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Assignment
                  </Link>
                </li>
                <li>
                  <Link to="eulaEntire" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Entire Agreement; Severability
                  </Link>
                </li>
                <li>
                  <Link to="eulaNotification" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Notification
                  </Link>
                </li>
                <li>
                  <Link to="eulaJurisdiction" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Jurisdiction
                  </Link>
                </li>
                <li>
                  <Link to="eulaLicensee" smooth={true} offset={-30}>
                    <FontAwesomeIcon
                      className="eula__page__icon"
                      icon={["fas", "chevron-right"]}
                    />{" "}
                    Licensee’s Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className="eula__content__container">
              <div className="eula__important" id="eulaImportant">
                <h3 className="ff__gilroy__e secondary_c">
                  IMPORTANT - READ CAREFULLY:
                </h3>
                <p className="ff__gilroy__l dark_c">
                  This End-User License Agreement (EULA) is a legal agreement
                  between you, either an individual or a single legal entity,
                  herewith known as “Licensee” and LaQuest Philippines Inc to
                  use the LaQuest Software. This EULA applies after the Licensee
                  has received the LaQuest Software from a Reseller or LaQuest
                  Philippines Inc. The Licensee agrees to be bound by the terms
                  of this EULA by installing, copying, downloading or otherwise
                  using the LaQuest Software or clicking the "I Accept/ Agree"
                  button if acquiring the LaQuest Software on-line.
                </p>
              </div>

              <div className="eula__license__grant" id="eulaLicense">
                <h3 className="ff__gilroy__e secondary_c">License Grant</h3>
                <p className="ff__gilroy__l dark_c">
                  Subject to the Licensee’s compliance with the terms and
                  conditions of this EULA, LaQuest Philippines Inc hereby grants
                  to Licensee a perpetual, non-exclusive, non-transferable,
                  non-sublicensable license to install and use the LaQuest
                  Software only for the Licensee’s own internal production use
                  by Licensed Processes, subject to the condition that the
                  Licensee must ensure the maximum number of processes accessing
                  and using the LaQuest Software is equal to the number of
                  Licensed Processes for which the necessary Fees have been
                  paid, or for Licensee’s own internal non-production use for
                  the purpose of development or testing on an unlimited number
                  of Licensed Processes. The Licensee is otherwise permitted to
                  create copies of the LaQuest Software solely for data
                  protection, archiving and backup purposes.
                </p>
              </div>

              <div className="eula__evaluation" id="eulaEvaluation">
                <h3 className="ff__gilroy__e secondary_c">Evaluation</h3>
                <p className="ff__gilroy__l dark_c">
                  Upon the Licensee’s request, LaQuest Philippines Inc may
                  provide an evaluation mode of the LaQuest Software which may
                  not have full functionality. If the LaQuest Software is only
                  provided or provisioned for evaluation purposes, the rights of
                  the Licensee are limited to this evaluation license which
                  permits the Licensee to download, install, use and operate the
                  LaQuest Software subject to any limitations built into the
                  LaQuest Software for the purpose of evaluation.
                </p>
              </div>

              <div className="eula__fees" id="eulaFees">
                <h3 className="ff__gilroy__e secondary_c">Fees</h3>
                <p className="ff__gilroy__l dark_c">
                  The Licensee must pay all Fees by their due date. Failure to
                  pay Fees by the due date will result in the immediate
                  termination of the licenses granted under this EULA.
                </p>
              </div>

              <div className="eula__restrictions" id="eulaRestrictions">
                <h3 className="ff__gilroy__e secondary_c">Restrictions</h3>
                <p className="ff__gilroy__l dark_c">
                  The Licensee hereby agrees, without the prior written consent
                  of LaQuest Philippines Inc which may be withheld or
                  conditioned at LaQuest’s sole discretion, not to: (a) copy or
                  use the LaQuest Software in any manner except as expressly
                  permitted in this EULA; (b) use or deploy the LaQuest Software
                  on any server in excess of the Licensed Processes for which
                  Licensee has paid the applicable Fee; (c) transfer, sell,
                  rent, lease, lend, distribute, or grant sublicense of the
                  LaQuest Software to any third party; (d) use the LaQuest
                  Software as, or as part of, a service offering primarily
                  designed to offer the functionality of the LaQuest Software;
                  (e) reverse engineer, disassemble, or decompile the LaQuest
                  Software (except to the extent such restrictions are
                  prohibited by law); (f) alter, modify, enhance or prepare any
                  derivative work from or of the LaQuest Software; (g) alter or
                  remove any proprietary notices in the LaQuest Software; (h)
                  make available to any third party the functionality of the
                  LaQuest Software or any license keys used in connection with
                  the LaQuest Software; (i) copy or embed elements of the
                  Accessible Code contained in the LaQuest Software into other
                  applications; (j) publicly display or communicate the results
                  of internal performance testing or other benchmarking or
                  performance evaluation of the LaQuest Software; (k) export the
                  LaQuest Software in violation of the Philippine’s export
                  administration rules, any other export laws or regulations, or
                  any other applicable law or regulation; (l) distribute the
                  LaQuest Software via OEM Distribution without entering into a
                  separate OEM Distribution agreement with LaQuest Philippines
                  Inc. (m) perform or facilitate any act which, directly or
                  indirectly, causes to be transmitted to, uploaded or
                  downloaded by, LaQuest Philippines Inc. or any end user, any
                  LaQuest Software viruses, worms, Trojan horses, time bombs,
                  trap doors or any other computer code, files or programs or
                  repetitive requests for information designed to interrupt,
                  destroy or limit the functionality of any computer LaQuest
                  Software or hardware or telecommunications equipment or to
                  diminish the quality of, interfere with the performance of, or
                  impair the functionality of the LaQuest Software (individually
                  and collectively, a "Virus"); (n) use the LaQuest Software for
                  any illegal purpose; or (o) use with or distribute the LaQuest
                  Software to any person. Any breach or suspected breach of any
                  term or condition set forth in this paragraph will result in
                  the immediate termination of all licenses granted hereunder.
                </p>
              </div>

              <div className="eula__protection" id="eulaProtection">
                <h3 className="ff__gilroy__e secondary_c">
                  Protection Mechanisms
                </h3>
                <p className="ff__gilroy__l dark_c">
                  The LaQuest Software includes license protection mechanisms
                  that are designed to manage and protect the intellectual
                  property rights of LaQuest Philippines Inc. and its third
                  party suppliers. Licensee must not modify or alter those
                  features to try to defeat the LaQuest Software use rules that
                  the license protection mechanisms are designed to enforce. Any
                  such attempt by the Licensee will result in the immediate
                  termination of any license granted under this EULA.
                </p>
              </div>

              <div className="eula__proprietary" id="eulaProprietary">
                <h3 className="ff__gilroy__e secondary_c">
                  Proprietary Rights
                </h3>
                <p className="ff__gilroy__l dark_c">
                  LaQuest Philippines Inc reserves all rights not expressly
                  granted to the Licensee in this EULA. The LaQuest Software and
                  all copies thereof are protected by copyright and other
                  intellectual property laws and treaties. LaQuest Philippines
                  Inc. or relevant third parties, as applicable, own the entire
                  title, copyright, and other intellectual property rights and
                  interests in and to the LaQuest Software and all subsequent
                  copies of the LaQuest Software. The LaQuest Software is
                  licensed, not sold and the Licensee does not acquire any
                  rights of ownership in the LaQuest Software. The Licensee
                  acknowledges the LaQuest Software contains proprietary
                  information and trade secrets of LaQuest Philippines Inc and
                  the Licensee agrees it will not take any actions inconsistent
                  with LaQuest Philippines, Inc’s ownership of such information
                  and trade secrets. Without limiting the generality of the
                  foregoing, the Licensee agrees it will not directly or
                  indirectly access or use the LaQuest Software in order to
                  build a competitive commercial product or service. The
                  Licensee acknowledges the LaQuest Software contains Embedded
                  LaQuest Software and that, in addition to the obligations of
                  this EULA, additional obligations may apply in relation to any
                  use of Embedded LaQuest Software by the Licensee. In such
                  circumstances the Licensee must consult the relevant third
                  party to acquire any necessary licenses and consents in
                  relation to its use of any Embedded LaQuest Software. Any
                  breach or suspected breach of any term or condition set forth
                  in this paragraph will result in the immediate termination of
                  all licenses granted hereunder.
                </p>
              </div>

              <div className="eula__support" id="eulaSupport">
                <h3 className="ff__gilroy__e secondary_c">
                  Support and Maintenance
                </h3>
                <p className="ff__gilroy__l dark_c">
                  Upon the purchase of a full license, support & upgrades are
                  included during the first 3 months only. After that period,
                  the support/upgrades automatically expire. To have access to
                  future upgrades and support of LaQuest Software, Licensee must
                  have a valid purchased service for Support & Upgrades. For
                  more information on the SLA and support options and
                  conditions, customer may refer to{" "}
                  <a
                    href="http://www.laquest.net/support"
                    className="secondary_c"
                  >
                    www.laquest.net/support
                  </a>
                  .
                </p>

                <p className="ff__gilroy__l dark_c">
                  Renewal of support services and Maintenance provided by
                  LaQuest Philippines Inc. will be substantially described in a
                  separate agreement provided by LaQuest Philippines Inc. to the
                  Licensee and may be subject to the payment of additional Fees.
                  The Licensee must be in compliance with the terms of this
                  License and have paid all Fees due hereunder. LaQuest
                  Philippines Inc. may, at its discretion, modify, suspend or
                  terminate support at any time upon notice to Licensee. The
                  terms of this EULA apply to updates, supplements, add-on
                  components, or Internet-based services components, of the
                  LaQuest Software (Supplementary LaQuest Software) that LaQuest
                  Philippines Inc. may provide to the Licensee or make available
                  to the Licensee after the date the Licensee obtains its
                  initial copy of the LaQuest Software, unless LaQuest
                  Philippines Inc. provides other terms and conditions along
                  with any Supplementary LaQuest Software.
                </p>
              </div>

              <div className="eula__records" id="eulaRecords">
                <h3 className="ff__gilroy__e secondary_c">
                  Records Retention and Audit
                </h3>
                <p className="ff__gilroy__l dark_c">
                  If LaQuest Philippines Inc. reasonably suspects the LaQuest
                  Software has been distributed to or obtained by any person or
                  party, without LaQuest Philippines Inc prior written consent,
                  and that the LaQuest Software is being varied or accessed or
                  used independently of the LaQuest Software or that Licensee is
                  otherwise breaching a term of this License, Licensee agrees
                  LaQuest Philippines Inc. has the right to require the Licensee
                  to provide a qualified certificate executed by the Licensee’s
                  auditor verifying compliance with the terms of this EULA. If
                  such an unqualified certificate is not received by LaQuest
                  Philippines Inc. within thirty (30) calendar days of being
                  required, it will be considered a breach of this EULA which
                  gives LaQuest Philippines Inc. the right to terminate the
                  licenses granted under this EULA.
                </p>
              </div>

              <div className="eula__representations" id="eulaRepresentations">
                <h3 className="ff__gilroy__e secondary_c">
                  Representations and Warranties
                </h3>
                <p className="ff__gilroy__l dark_c">
                  The Licensee represents and warrants to LaQuest Philippines
                  Inc that: (a) if an individual, the Licensee is at least
                  eighteen (18) years old; (b) if an entity, the Licensee is
                  duly organized and validly existing in good standing under the
                  laws of the Republic of the Philippines in which it was
                  organized; (c) the Licensee has the full power and authority
                  to enter into this EULA, which constitutes a legal, valid and
                  binding obligation enforceable against the Licensee in
                  accordance with the terms hereof; (d) all information the
                  Licensee provides to LaQuest Philippines Inc during the term
                  of this EULA, is and will be truthful and accurate; (e) the
                  Licensee’s use of the LaQuest Software is and will at all
                  times be in accordance with the terms and conditions set forth
                  in this EULA, and all applicable laws, rules and regulations,
                  and without infringement or misappropriation of any
                  intellectual property right or other right of a third party;
                  and (f) the Licensee will not use the LaQuest Software to
                  store or transmit a Virus. Any breach or suspected breach of
                  any representation or warranty set forth in this paragraph
                  will result in the immediate termination of all licenses
                  granted hereunder.
                </p>
              </div>

              <div className="eula__disclaimer" id="eulaDisclaimer">
                <h3 className="ff__gilroy__e secondary_c">
                  Disclaimer of Warranty
                </h3>
                <p className="ff__gilroy__l dark_c">
                  THE LAQUEST SOFTWARE AND ANY SERVICES AND MAINTENANCE PROVIDED
                  HEREUNDER ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
                  LAQUEST PHILIPPINES INC DOES NOT WARRANT THAT THE LAQUEST
                  SOFTWARE OR THE SERVICES OR MAINTENANCE PROVIDED HEREUNDER
                  WILL MEET LICENSEE’S REQUIREMENTS, THAT THE LAQUEST SOFTWARE
                  WILL OPERATE IN THE COMBINATIONS LICENSEE MAY SELECT FOR USE,
                  THAT THE OPERATION OF THE LAQUEST SOFTWARE WILL BE ERROR-FREE
                  OR UNINTERRUPTED OR THAT ALL LAQUEST SOFTWARE ERRORS WILL BE
                  CORRECTED. LAQUEST PHILIPPINES INC HEREBY DISCLAIMS ALL
                  WARRANTIES, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
                  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                  FOR A PARTICULAR PURPOSE, USE, NON-INFRINGEMENT, TITLE, AND
                  ANY WARRANTIES ARISING OUT OF A COURSE OF DEALING, USAGE OR
                  TRADE.
                </p>
                <p className="ff__gilroy__l dark_c">
                  THE LICENSEE EXPRESSLY ACKNOWLEDGES AND AGREES THE LAQUEST
                  SOFTWARE RELIES UPON THIRD-PARTY LAQUEST SOFTWARE FOR CERTAIN
                  FUNCTIONS AND LAQUEST PHILIPPINES INC MAKES NO REPRESENTATION,
                  WARRANTY, PROMISE OR GUARANTEE TO THE LICENSEE THAT SUCH
                  LAQUEST SOFTWARE WILL BE ERROR FREE, ACCOMPLISH A SPECIFIED
                  PURPOSE OR PERFORM IN ACCORDANCE WITH ANY PARTICULAR STANDARD,
                  LEVEL OR METRIC AND LAQUEST PHILIPPINES INC WILL NOT BE LIABLE
                  FOR ANY FAILURE THEREOF TO THE LICENSEE.
                </p>
                <p className="ff__gilroy__l dark_c">
                  LAQUEST PHILIPPINES INC DOES NOT STORE ANY DATA. THE LICENSEE
                  IS SOLELY RESPONSIBLE FOR THE ACCURACY, QUALITY, INTEGRITY,
                  LEGALITY, RELIABILITY, SECURITY, MAINTENANCE AND STORAGE OF
                  ALL DATA IN ACCORDANCE WITH APPLICABLE LAW. IF THE LICENSEE
                  REQUIRES PERMANENT STORAGE OF ANY DATA USED IN CONNECTION WITH
                  THE LAQUEST SOFTWARE, THE LICENSEE IS SOLELY RESPONSIBLE FOR
                  THE CREATION OF ANY AND ALL BACKUPS OF SUCH DATA BEFORE USING
                  THE LAQUEST SOFTWARE.
                </p>
              </div>

              <div className="eula__limitations" id="eulaLimitations">
                <h3 className="ff__gilroy__e secondary_c">
                  Limitation of Liability
                </h3>
                <p className="ff__gilroy__l dark_c">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                  WILL LAQUEST PHILIPPINES INC OR ITS LICENSORS BE LIABLE TO
                  LICENSEE OR TO ANY THIRD PARTY FOR ANY DAMAGES, INCLUDING
                  DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
                  EXEMPLARY DAMAGES OR FOR THE COST OF PROCURING SUBSTITUTE
                  PRODUCTS OR SERVICES ARISING OUT OF OR IN ANY WAY RELATING TO
                  OR IN CONNECTION WITH THIS EULA OR THE USE OF OR INABILITY TO
                  USE THE LAQUEST SOFTWARE OR THE SERVICES PROVIDED BY LAQUEST
                  PHILIPPINES INC. HEREUNDER INCLUDING, WITHOUT LIMITATION,
                  DAMAGES OR OTHER LOSSES FOR LOSS OF USE, LOSS OF BUSINESS,
                  LOSS OF GOODWILL, WORK STOPPAGE, LOST PROFITS, LOSS OF DATA,
                  COMPUTER FAILURE OR ANY AND ALL OTHER COMMERCIAL DAMAGES OR
                  LOSSES EVEN IF ADVISED OF THE POSSIBILITY THEREOF AND
                  REGARDLESS OF THE LEGAL OR EQUITABLE THEORY (CONTRACT,
                  INDEMNITY, TORT OR OTHERWISE) UPON WHICH THE CLAIM IS BASED.
                  IN NO EVENT WILL LAQUEST INC OR ITS LICENSORS' AGGREGATE
                  LIABILITY TO LICENSEE, FROM ALL CAUSES OF ACTION AND UNDER ALL
                  THEORIES OF LIABILITY, EXCEED FIVE HUNDRED U.S. DOLLARS (USD
                  $500). The parties expressly acknowledge and agree that
                  LaQuest Philippines Inc has set its prices and entered into
                  this EULA in reliance upon the limitations of liability
                  specified herein, which allocate the risk between LaQuest
                  Philippines Inc and the Licensee and form a basis of the
                  bargain between the parties. IF THE LICENSEE IS LOCATED IN ANY
                  COUNTRY, NOTHING SET FORTH IN THIS EULA SHALL EXCLUDE OR LIMIT
                  LIABILITY TO A GREATER EXTENT THAN IS PERMITTED BY APPLICABLE
                  LAW OR SHALL EXCLUDE OR LIMIT LIABILITY FOR FRAUD, FRAUDULENT
                  MISREPRESENTATION OR FOR DEATH OR PERSONAL INJURY CAUSED BY
                  NEGLIGENCE.
                </p>
              </div>

              <div className="eula__publicity" id="eulaPublicity">
                <h3 className="ff__gilroy__e secondary_c">Publicity</h3>
                <p className="ff__gilroy__l dark_c">
                  Neither party will, without the other party’s prior written
                  consent, make any news release, public announcement, denial or
                  confirmation of this EULA, its value, or its terms and
                  conditions, or in any manner advertise or publish the fact of
                  this EULA. Notwithstanding the above, LaQuest Philippines Inc
                  may use the Licensee’s name and logo, consistent with
                  Licensee’s trademark policies, on customer lists so long as
                  such use in no way promotes either endorsement or approval of
                  LaQuest Philippines Inc or any LaQuest Philippines Inc
                  products or services.
                </p>
              </div>

              <div className="eula__assignment" id="eulaAssignment">
                <h3 className="ff__gilroy__e secondary_c">Assignment</h3>
                <p className="ff__gilroy__l dark_c">
                  Licensee may assign this License to: succeeding parties in the
                  case of a merger, acquisition or change of control; or if
                  Licensee is a supplier, to a government agency; provided,
                  however, that in each case, (a) LaQuest Philippines Inc is
                  notified in writing within ninety (90) days of such
                  assignment, (b) the assignee agrees to be bound by the terms
                  and conditions contained in this License and (c) upon such
                  assignment, the Licensee makes no further use of the LaQuest
                  Software. LaQuest Philippines Inc may assign its rights and
                  obligation under this License without the consent of the
                  Licensee. Any assignment in contravention of this paragraph
                  shall be void and of no force or effect and will result in the
                  immediate termination of the licenses granted hereunder.
                </p>
              </div>

              <div className="eula__entire" id="eulaEntire">
                <h3 className="ff__gilroy__e secondary_c">
                  Entire Agreement; Severability
                </h3>
                <p className="ff__gilroy__l dark_c">
                  This EULA (including any addendum or amendment to this EULA
                  which is included with the LaQuest Software) is the entire
                  agreement between the Licensee and LaQuest Philippines Inc
                  relating to the LaQuest Software and supersedes all prior or
                  contemporaneous oral or written communications, proposals and
                  representations with respect to the LaQuest Software or any
                  other subject matter covered by this EULA. If any provision of
                  this License is held to be void, invalid, unenforceable or
                  illegal, the other provisions shall continue in full force and
                  effect.
                </p>
              </div>

              <div className="eula__notification" id="eulaNotification">
                <h3 className="ff__gilroy__e secondary_c">Notification</h3>
                <p className="ff__gilroy__l dark_c">
                  LaQuest Philippines Inc may provide the Licensee with general
                  notice by electronic mail to the Licensee’s e-mail address of
                  record. The Licensee must give notice to LaQuest Philippines
                  Inc (such notice shall be deemed given when received by
                  LaQuest Philippines Inc) by emailing LaQuest Philippines Inc
                  at{" "}
                  <a
                    href="mailto:billing@laquest.net"
                    target="_blank"
                    className="secondary_c"
                  >
                    billing@laquest.net
                  </a>
                  .
                </p>
              </div>

              <div className="eula__jurisdiction" id="eulaJurisdiction">
                <h3 className="ff__gilroy__e secondary_c">Jurisdiction</h3>
                <p className="ff__gilroy__l dark_c">
                  This EULA shall be governed by the laws of the Republic of the
                  Philippines, including its conflicts of law rules. Any legal
                  action or proceeding arising under this EULA will be brought
                  exclusively in the Courts of Taguig. Any amendment or
                  modification to the EULA must be in writing signed by both
                  parties.
                </p>
              </div>

              <div className="eula__licensee" id="eulaLicensee">
                <h3 className="ff__gilroy__e secondary_c">Licensee’s Use</h3>
                <p className="ff__gilroy__l dark_c">
                  The Licensee hereby agrees to defend and hold harmless LaQuest
                  Philippines Inc. and its affiliates, subsidiaries, officers,
                  directors, shareholders, employees, representatives, agents,
                  successors and assigns (collectively, the Indemnitees) in any
                  action or claim, and to indemnify LaQuest Philippines Inc and
                  its Indemnitees from and against any and all losses,
                  liabilities, sums of money, damages, expenses, and costs
                  (including, but not limited to, reasonable attorneys' fees)
                  arising from such action or claim and related to: (a) the
                  Licensee’s breach of any term, condition, representation or
                  warranty set forth in this EULA; (b) the Licensee’s breach of
                  any term or condition set forth in an agreement governing any
                  Embedded LaQuest Software; and/or (c) the Licensee’s violation
                  of any applicable law.
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

export default Eula
