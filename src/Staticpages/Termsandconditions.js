import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/utility";

const Termsandconditions = () => {
  useEffect(() => {
    document.title = "DoubtQ - Terms and Conditions";
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper questionAnswerjustify">
        <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h2 className="title">Terms and Conditions</h2>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link to={isLoggedIn() ? "/staticpage" : "/"}>Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right" />
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">
                      Terms and Conditions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start mt--30">
                <h4 className="title">Welcome to DoubtQ!</h4>
              </div>
              <ul className="plan-offer-list mt--30 mb-2">
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  IMPORTANT! These terms of service affect your legal rights and
                  responsibilities, so please read them carefully. Websites,
                  mobile apps, applications, and any other interactive features
                  or services that include a link to these DoubtQ Terms of Use
                  ("Terms of Use") are subject to these DoubtQ Terms of Use
                  (each, a "Service" and collectively, the "Services" or "DoubtQ
                  Websites"). In these Terms of Service, "DoubtQ," "DoubtQ
                  Websites," "we," or "our" refer to DoubtQ, Inc. and its
                  affiliated companies. "You," "your," and "user" mean any
                  individual or organization that accesses or uses the Services.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Whether you access the Services through a computer, mobile
                  device, or some other means; whether you access the Services
                  directly through our Services or through any third-party
                  website that links to them ("Linked Services"); and whether
                  you are a registered user or a guest, these Terms of Use will
                  govern your use of the Services.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  For certain services and products made available via the
                  Services, it may be necessary to agree to additional terms and
                  conditions in addition to those set out in these Terms of
                  Service ("Additional Terms"). When you purchase a Service, you
                  will also be subject to the Additional Terms applicable to
                  that Service. If you make use of such Services, the applicable
                  Additional Terms will be included into the Agreement between
                  You and DoubtQ. Unless otherwise stated in the Additional
                  Terms, the Additional Terms shall take precedence over these
                  Terms of Use in the event of a disagreement.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Account Registration and Termination
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                DoubtQ offers online and offline services to enhance academic
                performance and save money. DoubtQ allows one account per user.
                You may only have one account and cannot share it or the
                Services. Account creation requires correct and full
                information. You cannot assume another person's identity. You
                must maintain your account details. Account creation requires a
                password. You are entirely responsible for password security and
                account usage. You promise not to use another user's account,
                username, or password or share your password. You promise not to
                sell or transfer your membership or privileges. If you suspect
                improper account or password usage, you must tell DoubtQ
                immediately. DoubtQ may cancel your account at any time without
                warning.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Age and Residence Requirements
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                13-year-olds may use the Services. If you are between 13 and the
                age of majority in your country, you must examine these Terms of
                Use with your parent or guardian to make sure you both
                understand and agree to them. Accounts are available worldwide.
                The Services are not intended for distribution or use in any
                jurisdiction or nation where they would violate law or
                regulation or require DoubtQ to register. DoubtQ does not
                guarantee that the Services are suitable for use elsewhere. We
                retain the right to restrict the availability of the Services
                and/or the distribution of any material, program, product,
                service, or other feature to any person, geographic region, or
                jurisdiction, at any time and in our sole discretion, and to
                limit the quantities of such content. Except where needed to
                safeguard our reputation, service integrity, or if you violate
                these Terms of Use, we will warn you before exercising these
                rights
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Proprietary Rights</h5>
              </div>
              <p className="description mt--10 mb-2">
                DoubtQ controls the Services. All materials included in or
                otherwise a part of the Services, including past, present, and
                future versions of questions, as well as the selection,
                assembly, and arrangement thereof and the "look and feel" of the
                Services (collectively, "DoubtQ Content"), are owned,
                controlled, or licensed by DoubtQ or its third-party partners.
                DoubtQ content is protected by copyright, trademark, patent, and
                other laws, rules, regulations, and treaties. The Services'
                pictures of books and other publications are owned by their
                copyright holders. Third-parties provide certain bibliographic
                and citation material in the Services. Unauthorized DoubtQ
                Content usage is forbidden. Unauthorized use of Services content
                may violate copyright, trademark, patent, and other relevant
                laws, rules, regulations, and treaties and result in criminal or
                civil consequences.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Notice to Third-Party Websites
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                Any DoubtQ Content that is made accessible in connection with
                your site or in any other context, through our Widgets,
                third-party widgets or in any other context, is our exclusive
                property, and we do not give any intellectual property rights in
                connection with this content in any way. We reserve the right to
                request that you immediately discontinue any usage of DoubtQ
                Content after providing you with prior notice.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Acceptable Use Policy</h5>
              </div>
              <p className="description mt--10 mb-2">
                If you upload User Content via or in connection with our
                Services, or if you send any material or information to other
                users, and if you engage in any activity with other users, you
                will be fully accountable for the consequences of your conduct.
                You agree to observe these Community Usage Rules when you
                submit, upload, or otherwise distribute User Content through the
                Services. DoubtQ may delete any illegal content, suspend or
                delete the accounts of anyone involved, and/or notify law police
                if necessary.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Service Modifications</h5>
              </div>
              <p className="description mt--10 mb-2">
                At any time and without prior notice, DoubtQ may alter or
                terminate any or all of the Services, as we see fit. Since
                DoubtQ is constantly updating the Services, the Terms of Use may
                not always reflect these updates, so any description of the
                Services provided by DoubtQ is not a representation that the
                Services are working or will always work in that manner.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Email and Text Message Notifications
                </h5>
              </div>
              <p className="description mt--10">
                DoubtQ will send all notifications and receipts to the email
                address you provided at account creation or as updated. DoubtQ
                offers the convenience of sending you text message reminders if
                you so want. Our mobile text message disclaimers are included in
                these Terms of Service and should be read carefully. In order to
                deliver the Services, DoubtQ may use the phone numbers you
                supply to DoubtQ, including your wireless number, to call you,
                including by automated or prerecorded message, to remind you
                that rental books are due back. Whether or whether you get
                reminders by email, text, or any other means, you are still
                responsible for complying with the Terms of Use, including, for
                example, the timely return of your books. DoubtQ will never
                contact you through email or text message to request sensitive
                information such as your login, password, or payment details. If
                you get a suspicious email or text message that seems to be from
                DoubtQ, please delete it immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Account Cancellation</h5>
              </div>
              <p className="description mt--10 mb-2">
                At any point during your use of our Services, you may request
                that your account be terminated. To the extent permitted by law,
                your account will not be revoked and canceled until all books
                leased to you have been returned and all other transactions have
                been executed, including the payment of any fines or the cashing
                of any refund check. For any reason, including but not limited
                to inactivity or abuse, DoubtQ has the right to terminate your
                account. Photos, citation data, comments, likes, friendships,
                and other material you've posted using the Services may continue
                inside the Service even after your account is deactivated (for
                example, if your content has been reshared by others).
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Restriction of Liability and Warranties
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                There may be more than one proper way to solve a given issue; if
                you provide the method(s) you'd want to use, we'll use those; if
                you don't, we'll use our best judgment, which may result in a
                solution that differs from what you had in mind. The fee will be
                discussed after an inquiry has been received. We promise to
                provide the answers by the due date if you pay in advance. You
                may ask a few clarifying questions to ensure that you fully
                grasp the solution's structure. Although we strive to be
                available 24/7, there may be instances when we just cannot. To
                ensure that all of your questions are addressed at your
                scheduled appointment, we recommend making a reservation in
                advance. You may send us readings or videos that are relevant to
                the subjects you'd want us to cover in advance of the meeting
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start mt--30">
                <h4 className="title">Payments and Payment Processing</h4>
              </div>
              <ul className="plan-offer-list mt--30 mb-2">
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Validation: To guarantee users can make payments to DoubtQ,
                  DoubtQ may ask users to present a legitimate means of payment
                  (e.g., credit or debit card, PayPal account, etc.) related to
                  a financial institution when they register for an account or
                  buy items or services. Your DoubtQ account must always have a
                  valid payment method if one is necessary (either the original
                  method of payment or a replacement). DoubtQ may charge your
                  account "pending" to verify your payment method. This charge
                  will not be verified and will vanish from your financial
                  statement (usually within seven days - check with your
                  financial institution for additional information). Please note
                  that this pending charge may be generated if you alter your
                  payment details or make an unprocessed transaction.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Authorization Holds: For book rentals, we may approve expected
                  charges and taxes from your payment method. The transaction
                  and payment method will determine the authorization amount.
                  These money may be on authorization hold. We may automatically
                  request further authorization holds if costs exceed the
                  authorization hold. You agree that we may charge any
                  alternative means of payment we have on file if your payment
                  provider refuses any permission (without notice to you, unless
                  required by applicable law). If the costs do not exceed the
                  amount due after a transaction, your payment method provider
                  will release the authorization for the amount not used. Your
                  bank's authorization hold removal timing will vary. You must
                  ensure that the payment method has adequate money before
                  processing any transaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  Third-Party Links, Content and Applications
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                Links to third-party websites or online features may be included
                in the Services itself or in messages you receive in connection
                with the Services. It is possible that the Services may have
                material created, maintained, or endorsed by parties other than
                us. The Services may also allow interactions with a third-party
                website or online feature, such as via the use of an application
                that links the Services or your profile on the Services to a
                third-party site. Please be aware that we have no influence over
                the content or operation of any linked third-party website. The
                actions of other parties are not the responsibility of DoubtQ or
                its service providers. You understand and agree that we do not
                guarantee, represent, or endorse the completeness, accuracy, or
                availability of any advertising, goods, or other materials on or
                available via third-party websites or online features, and that
                any reliance you put on such materials is at your own risk. All
                correspondence and business dealings that you have with Third
                Parties found on or through the Services, including, without
                limitation, the payment and delivery of Products and Services,
                and all other terms, conditions, warranties and representations
                associated with such dealings, are solely between you and the
                Third Party.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Categories of Users</h5>
              </div>
              <p className="description mt--10 mb-2">
                You have the option of joining DoubtQ as a "Member" or using the
                site as a "Visitor." There may be many tiers of "Members," each
                with its own set of benefits and privileges, and each category
                of "Member" may include both paying customers and those who join
                up for the service at no cost ("Free Members"). Depending on the
                service, only Members will be able to access and utilize
                specific features of the homework assistance services, but
                "Visitors" (those who haven't signed up for an account) will
                have access to those features. Please read the conditions of any
                specific membership level carefully before accepting it, since
                the membership levels, features, and price of each level are
                variable and subject to change at any moment. Unless your
                specific price structure is set in writing for a period in the
                future, such as an annual plan, DoubtQ reserves the right to
                change these levels and benefits at any time, and any such
                change will be effective immediately upon our posting of such
                change on the applicable Services. You should check the
                membership page often to stay abreast of any such changes.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">List Prices</h5>
              </div>
              <p className="description mt--10 mb-2">
                The bibliographic data used to populate the list prices you see
                on the Services is procured from reputable third-party sources
                and publishers. The MSRPs shown are the recommended retail
                prices set by the respective publishers. DoubtQ disclaims any
                liability for mistakes in third-party data, including book
                pricing for sale or purchase (buyback), to the maximum extent
                authorized by law. The Services may not display a list price in
                the online catalog if the book in question does not have a
                publisher's recommended list price. To the fullest extent
                permitted by applicable law, DoubtQ shall have the right to
                refuse or cancel any order (whether or not the order has been
                confirmed and your method of payment charged) if a product is
                listed at an incorrect price due to a typographical error or
                error in pricing information received from our suppliers or for
                any other reason. A refund will be sent to the original payment
                method if the purchase is canceled after it has been processed.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">DoubtQ Credit</h5>
              </div>
              <p className="description mt--10 mb-2">
                Sometimes, DoubtQ may provide credit to you in the form of
                "DoubtQ Credit." To the maximum extent permissible under
                applicable law, DoubtQ may impose restrictions on your use of
                DoubtQ Credit and you may not transfer DoubtQ Credit from one
                DoubtQ Service to another once it has been issued . Your credit
                will never expire if it was issued in compensation for services
                rendered or as a refund, but we reserve the right to convert it
                to cash and give you the proceeds upon notification after a
                certain length of time has passed. You may exchange the credit
                for cash if the original conditions of the credit grant allowed
                for such a redemption. Support credits are not transferable and
                cannot be used to purchase more time with the service.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">
                  DoubtQ Discount Codes, Bonuses, Coupons, Loyalty Programs,
                  Points Programs and Other Promotions
                </h5>
              </div>
              <p className="description mt--10 mb-2">
                DoubtQ may sometimes provide promotional incentives such as
                price reductions, bonuses, coupons, loyalty programs, point
                systems, giveaways, and competitions. It's common for these
                incentives to come with their own set of requirements and limits
                (e.g., limiting when, how often, and under what circumstances
                you may be eligible for the promotion). It is your
                responsibility to familiarize yourself with and abide by any
                such regulations, prohibitions, and limits. You also undertake
                not to cheat or defraud the system in any way by engaging in
                self-dealing, collusion, smurfing (divide big orders or sales
                transactions into several individual transactions to gain
                multiple discounts or payments), or any other similar behavior.
                Your participation in such promotions signifies your acceptance
                of these rules and limits, and your understanding that DoubtQ,
                in its sole discretion, may refuse payment or benefits to the
                maximum extent authorized by law (e.g., when it believes
                improper activity has occurred or when a code has expired). Any
                and all offers are subject to termination without prior
                notification. Rental or purchase discounts only apply to the
                basic price of the item or service, not to taxes, shipping
                costs, late fees, or any other extra charges (e.g., conversion
                to purchase fees).
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Miscellaneous</h5>
              </div>
              <p className="description mt--10 mb-2">
                Without limiting the generality of the foregoing, if any
                provision of these Terms of Use is held to be wholly or
                partially void, invalid, illegal, or unenforceable, such
                provision shall be severed to the extent that it is void,
                invalid, illegal, or unenforceable, and the remaining provisions
                shall remain in full force and effect. A failure on DoubtQ's
                part to assert or enforce any right or provision of the Terms of
                Use shall not constitute a waiver of such right or provision.
                The names of the sections in these Terms of Service are for
                reference purposes only and will not have any legal or
                contractual significance. Any delay or inability to perform on
                the part of either party, other than the failure to make
                necessary payments , due to causes beyond the reasonable control
                of the non-performing party will be forgiven to the extent of
                such delay or inability. This "Miscellaneous" part will remain
                in effect after your agreement with DoubtQ has ended.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Changes</h5>
              </div>
              <p className="description mt--10 mb-2">
                The Terms of Service and any related policies herein are subject
                to change at any moment by DoubtQ ("Updated Terms"). By using
                our Services after we have posted the Updated Terms (or engaging
                in such other conduct as we may reasonably specify), you agree
                to be bound by the then-current version of the Terms of Use,
                including any changes we may have made since the last time you
                used our Services. You acknowledge and agree that we may notify
                you of the Updated Terms by posting them on the DoubtQ Website
                so that they are accessible via a link on the home page. This
                means that you should check the Terms of Use periodically to be
                informed of any modifications. All new provisions of the amended
                Terms of Usage shall apply to your use of the Services as of the
                time of publication or such later date as may be stated in the
                updated Terms of Use.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h5 className="description mt--10">Entire Agreement</h5>
              </div>
              <p className="description mt--10 mb-2">
                You and DoubtQ agree that the then-current Terms of Use,
                including (a) any relevant policies and terms mentioned in the
                Terms of Use and (b) any Additional Terms, constitute the entire
                agreement between you and DoubtQ about the Services. Any
                additional or different terms and conditions that you include
                with any purchase order or other transaction document or
                communication with us are expressly rejected by DoubtQ and will
                not be binding upon us unless agreed to in writing by an
                authorized representative of DoubtQ. This "Entire Agreement"
                clause will remain in effect even after your agreement with
                DoubtQ has ended.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="section-title text-start mt--30">
                <h4 className="title">Contacting DoubtQ</h4>
              </div>
              <ul className="plan-offer-list mt--30">
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Please contact us at
                  <Link to="/contact">https://www.DoubtQ.com/contactus/ </Link>
                  or 3990 Freedom Circle, Santa Clara, CA 95054
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  with any feedback, questions, or issues you may have about the
                  DoubtQ Websites or Services. DoubtQ will treat any and all
                  requests, authorizations, and notifications as received.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Please be aware that the terms and conditions may vary
                  depending on your country of residence.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Please review the provisions of these Terms of Service that
                  apply in your country of residence.
                </li>
                <li>
                  <i className="theme-gradient feather-arrow-right-circle" />
                  Clicking "I Accept" or using the Services indicates that you
                  accept these terms. You are not permitted to use the Services
                  and must immediately discontinue any and all usage if you do
                  not agree to the Terms of Use.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='auto-height' style={{ width: '100%', height: '110px' }}></div>
        {/* <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap py-4 mb--30">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Termsandconditions;
