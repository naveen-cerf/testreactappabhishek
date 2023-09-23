import React,{useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import appone from "../assets/app-image-01.png";
import apptwo from "../assets/app-image-01.png";
import Healthcare from "../assets/healthcare.jpg";
import Finance from "../assets/finance-banking.jpg";
import Education from "../assets/education.jpg";
import Media from "../assets/media-advertising.jpg";
import Retail from "../assets/retail.jpg";
import Travel from "../assets/travel-transportation.jpg";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Main = () => {
  const [showDigital, setShowDigital]=useState(false);
  
  return (
    <>
      <div className='hero pr zi1 v-center aft'>
        <div className='hero-grp hero-wrapper zi2'>
          <div className='hero-content'>
            <div className='hero-title-wrapper mb40'>
              <h1 className='hero-title'>Welcome to Abhisheka Technologies</h1>
            </div>
            <p className='hero-subtitle mb40'>
              <span>
                At Abhisheka Technologies, while our journey as a company has
                just begun, our commitment to excellence is deep-rooted. Our
                founder brings a decade of invaluable experience in the IT
                domain, setting a benchmark for our operations and vision.
              </span>
            </p>
          </div>
          <div className='hero-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1'>
            <Link to='/contact-us' className='fc1'>
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
      <main>
        <section className='services space-default bg5'>
          <div className='container'>
            <h2 className='section-title'>Services we provide</h2>
            <div className='cards df fww w100 aic jcc'>
              <article className='card bg1 br16 ofh transit1 p32 mr24 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Web
                      <br />
                      Development
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Create robust, scalable, and user-friendly websites tailored
                    to your business goals.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/web-development'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 p32 mr24 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Mobile
                      <br />
                      Development
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Experience bespoke mobile solutions, delivering seamless
                    functionality across platforms.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/mobile-app-development'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 p32 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      IT
                      <br />
                      Consulting
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Navigate the digital realm with expert guidance, ensuring
                    your IT strategies are aligned with your business objectives
                  </p>
                  <Link
                    className='v-center'
                    to='/services/it-consulting'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 p32 mr24 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Business
                      <br />
                      Analysis
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Drive efficient decision-making with comprehensive insights
                    into your operations and market dynamics.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/business-analysis'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 p32 mr24 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Quality
                      <br />
                      Assurance
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Ensure the impeccable performance of your software with our
                    rigorous testing methods.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/quality-assurance-service'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 p32 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Design
                      <br />
                      Solutions
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Marry functionality with aesthetics to deliver captivating
                    user experiences.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/design-solutions'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>
              <div className=""><Link to="/services" className="v-center fs14 fc4 ">
              See more
              <span className="material-symbols-outlined ml4 transit1">
                <BsArrowRightCircleFill/>
              </span>
            </Link></div>
              {showDigital &&<article className='card bg1 br16 ofh transit1 p32 mb24'>
                <div className='card-content'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>
                      Digital Marketing <br />
                      Services
                    </h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2 mb16'>
                    Elevate your brand's online presence and engage your target
                    audience with our tailored marketing strategies.
                  </p>
                  <Link
                    className='v-center'
                    to='/services/digital-marketing-services'
                    target='_self'
                  >
                    <span className='fc4 ttu fs14 fw5 ls1'>Learn more</span>
                    <span className='material-symbols-outlined fc4 ml4'>
                      <BsArrowRight />
                    </span>
                  </Link>
                </div>
              </article>}
            </div>
          </div>
        </section>
        <section className='phylospy space-default bg1 pr aft'>
          <div className='container pr zi1'>
            <h2 class='section-title'>Our Philosophy</h2>
            <p class='fc1 fs20 tac'>
              <span>
                Driving digital transformation with reliable IT services and
                strategic partnerships.
              </span>
            </p>
          </div>
        </section>
        <section className='our-industry space-default bg5'>
          <div className='container'>
            <h2 className='section-title'>Our Industries</h2>
            <div className='cards df fww w100'>
              <article className='card bg1 br16 ofh transit1 mr24 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/healtcare.png" alt='Health Care' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Healthcare</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    Telemedicine, pharma &amp; biotechnology solutions, hospital
                    management, patient database, EHRs, and more!
                  </p>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 mr24 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/finance.png" alt='Finance & Banking' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Finance &amp; Banking</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    Digital banking, decentralized finance, cryptocurrencies
                    &amp; trading platforms, insurtech, loan &amp; tax
                    management software.
                  </p>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/education.png" alt='Education' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Education</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    Learning Management System, virtual clasrooms, AI/ML-based
                    interactive solutions, special needs education services.
                  </p>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 mr24 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/media.png" alt='Media & Advertising' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Media &amp; Advertising</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    Marketing campaigns automation, real-time visualizatins,
                    trade promotion management, sales forecasting.
                  </p>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 mr24 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/retail.png" alt='Retail' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Retail</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    eCommerce plarforms &amp; marketplaces, AI-powered
                    analytics, Big data-driven lead enrichment.
                  </p>
                </div>
              </article>
              <article className='card bg1 br16 ofh transit1 mb24'>
                <div className='card-img w100 ofh'>
                  <img src="../images/travel.png" alt='Travel & Transportation' />
                </div>
                <div className='card-content p32'>
                  <div className='card-header mb16'>
                    <h3 className='card-title'>Travel &amp; Transportation</h3>
                  </div>
                  <p className='card-text fs18 lh28 fc2'>
                    Peer-to-peer delivery, transportation management, geospatial
                    engineering, &amp; navigation system.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className='stories space-default bg1'>
          <div className='container'>
            <h2 className='section-title'>Success Stories</h2>
            <div className='stories-content-grp df'>
              <div className='stories-content mr48'>
                <h3 className='stories-title mb16'>
                  Empowering Experts: Unleashing their Online Presence with a
                  Dynamic Platform
                </h3>
                <div className='chips dark v-center fww mb32'>
                  <div className='chip'>Expert Connect</div>
                </div>
                <p className='fs18 lh28 fc2 mb32'>
                  Empowers experts to create a strong online presence.
                  Personalized profiles, networking, and SEO techniques maximize
                  visibility. Elevate your career and connect with a wider
                  audience. Unlock professional opportunities with a
                  user-friendly app designed for experts from all fields.
                  Revolutionize your online presence with ExpertConnect.
                </p>
                <div className='chips light v-center fww mb32'>
                  <div className='chip'>Mobile App</div>
                  <div className='chip'>IT Consulting</div>
                  <div className='chip'>Software Services</div>
                  <div className='chip'>Dev Ops</div>
                  <div className='chip'>Design</div>
                </div>
              </div>
              <div className='stories-img v-center'>
                <img src={appone} alt='App Image 01' />
                <img src="..//images/app-image-02.png" alt='App Image 02' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
