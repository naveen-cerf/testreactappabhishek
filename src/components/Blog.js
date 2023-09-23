import React from "react";
import Healthcare from "../assets/healthcare.jpg";
import Finance from "../assets/finance-banking.jpg";
import Education from "../assets/education.jpg";
import Media from "../assets/media-advertising.jpg";
import Retail from "../assets/retail.jpg";
import Travel from "../assets/travel-transportation.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
     <div
        className="hero pr zi1 v-center aft inside"
        style={{ backgroundImage: "url(../images/blog-hero.jpg)" }}
      >
        <div className="hero-grp hero-wrapper zi2">
          <div className="hero-content">
            <div className="hero-title-wrapper mb40">
              <h1 className="hero-title">
              Our Blogs
              </h1>
            </div>
            <p className="hero-subtitle mb40">
              <span>
              Innovation in Action : Real Results Achieved with Our Software Solutions
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
      <section className='our-industry space-default bg5'>
        <div className='container'>
          <div className='cards df fww w100'>
            <article className='card bg1 br16 ofh transit1 mr24 mb24'>
              <Link to='/blogs/create-light-waving-layout-in-android-with-in-7-steps'>
                <div className='card-img w100 ofh'>
                  <img src={Healthcare} alt='Health Care' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; TECHNOLOGY
                    </p>
                    <h3 className='card-title'>
                      Create Light Waving Layout or Loader in android in 7 Steps
                    </h3>
                    <p className='card-time fs14 mt16'>4 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    A robust Blockchain-based entertainment ecosystem aimed to
                    provide a wide range of gaming industry services for
                    players, promoters, and developers. The Blockchain gaming
                    platform covers all of the customers’ needs: from playing
                    and streaming online games to marketing and distribution
                  </p>
                </div>
              </Link>
            </article>
            <article className='card bg1 br16 ofh transit1 mr24 mb24'>
              <Link to='/blogs/uses-of-interfaces-in-android-development'>
                <div className='card-img w100 ofh'>
                  <img src={Finance} alt='Finance & Banking' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; TECHNOLOGY
                    </p>
                    <h3 className='card-title'>
                      Uses of Interfaces in android Development.
                    </h3>
                    <p className='card-time fs14 mt16'>1 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    It is a collection of constants, methods(abstract, static
                    and default) and nested types.All the methods of the
                    interface needs to be defined in the class.Interface is like
                    a Class
                  </p>
                </div>
              </Link>
            </article>
            <article className='card bg1 br16 ofh transit1 mb24'>
              <Link to='/blogs/creating-a-simple-android-calendar-in-7-steps'>
                <div className='card-img w100 ofh'>
                  <img src={Education} alt='Education' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; Technology
                    </p>
                    <h3 className='card-title'>
                      Creating A Simple Android Calendar in 7 Steps
                    </h3>
                    <p className='card-time fs14 mt16'>4 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    An extensive end-to-end solution, custom all-in-one CRM for
                    brokers. A powerful all-in-one fintech CRM simplifies the
                    client management process and gives the user control
                    throughout all stages: from onboarding to monetization.
                  </p>
                </div>
              </Link>
            </article>
            <article className='card bg1 br16 ofh transit1 mr24 mb24'>
              <Link to='/blogs/creating-a-simple-android-drawing-view-in-5-steps'>
                <div className='card-img w100 ofh'>
                  <img src={Media} alt='Media & Advertising' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; Technology
                    </p>
                    <h3 className='card-title'>
                      Creating A Simple Custom Drawing View In Android within 5
                      Steps.
                    </h3>
                    <p className='card-time fs14 mt16'>3 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    This story shows how to create a simple canvas view which
                    influence drawing.Android structure has huge view classes
                    for communicating with user and performing various tasks but
                    sometime our application has needs that are not covered by
                    the build-in views.
                  </p>
                </div>
              </Link>
            </article>
            <article className='card bg1 br16 ofh transit1 mr24 mb24'>
              <Link to='/blogs/getting-started-with-bottom-sheets'>
                <div className='card-img w100 ofh'>
                  <img src={Retail} alt='Retail' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; TECHNOLOGY
                    </p>
                    <h3 className='card-title fs20'>
                      Getting started with Bottom Sheets
                    </h3>
                    <p className='card-time fs14 mt16'>2 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    Bottom sheet is a rectangular view, covered with or wrapped
                    with different views at bottom. Slides up from the bottom of
                    screen to bring out unknown or more information.
                  </p>
                </div>
              </Link>
            </article>
            <article className='card bg1 br16 ofh transit1 mb24'>
              <Link to='/blogs/material-design'>
                <div className='card-img w100 ofh'>
                  <img src={Travel} alt='Travel & Transportation' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <p className='card-credit fs12 fc4 mb16'>
                      INFORMATION &amp; TECHNOLOGY
                    </p>
                    <h3 className='card-title fs20'>Material Design</h3>
                    <p className='card-time fs14 mt16'>3 min read</p>
                  </div>
                  <p className='card-text fs16 lh28 fc2'>
                    Nowadays it’s being around everywhere but what do it
                    actually mean? This story goes around what I think about it.
                    Before 2014 Google IO, their Designers were working on
                    designs to support cross platform from smaller watches to
                    bigger TVs and to support 3rd party developers to express
                    their functionality and branding in a consistent way” that
                    results in material design.
                  </p>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
