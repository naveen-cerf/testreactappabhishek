import React from "react";
import Healthcare from "../assets/healthcare.jpg";
import Finance from "../assets/finance-banking.jpg";
import Education from "../assets/education.jpg";
import Media from "../assets/media-advertising.jpg";
import Retail from "../assets/retail.jpg";
import Travel from "../assets/travel-transportation.jpg";
import { Link } from "react-router-dom";

const sucess = () => {
  return (
    <>
      {" "}
      <div
        className="hero pr zi1 v-center aft inside"
        style={{ backgroundImage: "url(../images/success-stories-hero.jpg)" }}
      >
        <div className="hero-grp hero-wrapper zi2">
          <div className="hero-content">
            <div className="hero-title-wrapper mb40">
              <h1 className="hero-title">
              Success Stories
              </h1>
            </div>
            <p className="hero-subtitle mb40">
              <span>
              Innovation in Action:
Real Results Achieved with Our Software Solutions
              </span>
            </p>
          </div>
          <div className="hero-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1">
            <Link to="/contact-us" className="fc1">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
      <section className="our-industry space-default bg5">
        <div className="container">
          <div className="cards df fww w100">
            <article className="card bg1 br16 ofh transit1 mr24 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-cliflyer-shoppers.gif" alt="success-stories-cliflyer-shoppers" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">ClicFlyer</p>
                  <h3 className="card-title">
                    The Ultimate Shopping Companion for Smart Shoppers
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  ClicFlyer is an app that has transformed the shopping
                  experience for millions of people in KSA, Kuwait, UAE,
                  Bahrain, Qatar, Oman, Egypt, Jordan, and South Africa. The app
                  provides a single platform with easy access to weekly offers
                  from all the leading retailers. ClicFlyer was developed by a
                  team of experienced software engineers using Kotlin, a modern
                  programming language that is well-suited for mobile app
                  development. The app is available on both Android and iOS
                  devices.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mr24 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-cliflyer-retail.gif" alt="success-stories-cliflyer-retail" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">ClicFlyer Retail</p>
                  <h3 className="card-title">
                    Helping Retailers Sell More and Manage Inventory with Kotlin
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  ClicFlyer's retailer selling module is a powerful tool that
                  helps retailers sell more and manage inventory more
                  effectively. The module is built on Kotlin, a modern
                  programming language that is well-suited for mobile app
                  development. Retailers using ClicFlyer's retailer selling
                  module have seen increased sales, improved inventory
                  management, reduced costs, and improved customer satisfaction.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-cliflyer-Scrubber.jpg" alt="success-stories-cliflyer-scrubber" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">VMock Scrubber</p>
                  <h3 className="card-title">
                    A Powerful Tool for Data Cleansing
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  VMock Scrubber is a powerful tool that helps users to cleanse
                  data from resumes and resume books. The tool is built on
                  Flutter Desktop, a modern cross-platform development
                  framework. VMock Scrubber can help users to protect their
                  privacy, improve the accuracy of their resumes, and save time
                  and effort.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mr24 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-vmock-events.gif" alt="success-stories-vmock-events" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">VMock Events</p>
                  <h3 className="card-title">
                    A Convenient Way to Find and Attend Events
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  VMock Events is a mobile app that helps students discover and
                  attend popular events near their college. The app uses audio
                  QR code technology to mark attendance at events, making it a
                  convenient and contactless way to attend events. With VMock
                  Events, students can easily browse events by category, date,
                  or location. They can also share events with their friends and
                  classmates using the app's social media integration.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mr24 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-vmock-jobs.gif" alt="success-stories-vmock-jobs" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">VMock Jobs</p>
                  <h3 className="card-title fs20">Intelligent Job Search</h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  VMock Jobs is an AI-powered job search platform that helps job
                  seekers find their dream jobs. VMock Jobs matches users with
                  relevant jobs based on their skills, experience, and
                  interests. The platform also provides personalized
                  recommendations and has a user-friendly interface. VMock Jobs
                  offers 24/7 support to help job seekers with any questions or
                  problems.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-vmock-resume.gif" alt="success-stories-vmock-resume" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">VMock Resume</p>
                  <h3 className="card-title fs20">
                    Get Personalized Feedback to Improve Your Resume
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  VMock Resume is a resume builder and feedback platform that
                  helps users improve their resumes. The platform provides users
                  with detailed feedback and personalized suggestions to help
                  them create a resume that is tailored to their specific needs.
                  With VMock Resume, users can get the help they need to create
                  a resume that will help them land the job they want.
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mr16 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-parking.gif" alt="success-stories-parking" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">
                    Easy Parking India
                  </p>
                  <h3 className="card-title">
                    Optimizing Entry Exit Time Efficiencies
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  Easy Parking India is a parking solutions provider that uses
                  NFC cards and single-use COSU devices to optimize entry and
                  exit time efficiencies. The company's solutions have been
                  implemented in a number of high-traffic areas, including
                  airports, malls, and hospitals. Easy Parking India's solutions
                  have helped to reduce entry and exit time, improve security,
                  and improve the customer experience
                </p>
              </div>
            </article>
            <article className="card bg1 br16 ofh transit1 mr24 mb24">
              <div className="card-img w100 ofh">
                <img src="../images/success-stories-jobhunt.gif" alt="success-stories-jobhunt" />
              </div>
              <div className="card-content p32">
                <div className="card-header mb16">
                  <p className="card-credit fs12 fc4 mb16">First Job</p>
                  <h3 className="card-title fs20">
                    A Unique Platform for Sourcing, Screening, and Selecting
                    Freshers
                  </h3>
                </div>
                <p className="card-text fs16 lh22 fc2">
                  First Job is a unique platform that helps companies to source,
                  screen, and select the best freshers for their open positions.
                  First Job has access to a large pool of freshers from all over
                  India, and its screening and selection process is streamlined
                  and efficient. This helps companies to save time and resources
                  when hiring freshers, and to make better hiring decisions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default sucess;
