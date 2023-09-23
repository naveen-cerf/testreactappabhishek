import React,{useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { BsArrowDownCircleFill } from 'react-icons/bs';


const Services = () => {

  const [showDigital, setShowDigital]=useState(false);
  const [showless, setShowLess]=useState(false);
  const [showmore, setShowMore]=useState(true);
  const handleSeeMoreClick = () => {
    setShowDigital(true);
    setShowLess(true);
    setShowMore(false);
  }
  const handleSeeLessClick = () => {
    setShowDigital(false);
    setShowLess(false);
    setShowMore(true);
  }
 
  return (
    <>
      <div
        className='hero pr zi1 v-center aft inside'
        style={{ backgroundImage: "url(../images/services-hero.jpg)" }}
      >
        <div className='hero-grp hero-wrapper zi2'>
          <div className='hero-content'>
            <div className='hero-title-wrapper mb40'>
              <h1 className='hero-title'>IT Services</h1>
            </div>
            <p className='hero-subtitle mb40'>
              <span>
              Company that provides a single window for all IT services Sub Heading : Unlock Your Digital Potential with Our Comprehensive IT Solutions
              </span>
            </p>
            <p className='hero-subtitle mb40'>
              <span>
              As an IT company, we offer a wide range of consulting, development, and quality testing services. For more than 10 years in the field of web and mobile development, our team has created hundreds of websites, mobile applications, different kinds of software and individual components, and more.
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
      <section className='services space-default bg1'>
        <div className='container'>
          <h2 className='section-title'>Services we provide</h2>
          <div className='cards df fww w100'>
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
                  to='/services/web-development'
                  className='v-center'
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
                  Navigate the digital realm with expert guidance, ensuring your
                  IT strategies are aligned with your business objectives
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
            
             
            {showmore &&  <div className=""><Link to="/services" className="v-center fs14 fc4 " onClick={handleSeeMoreClick}>
              See more
              <span className="material-symbols-outlined ml4 transit1">
                <BsArrowDownCircleFill/>
              </span>
            </Link></div>}
              {showDigital &&
              <article className='card bg1 br16 ofh transit1 p32 mb24'>
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
          {showless && <div className=""><Link to="/services" className="v-center fs14 fc4 " onClick={handleSeeLessClick}>
              Show less
              <span className="material-symbols-outlined ml4 transit1">
                <BsArrowUpCircleFill/>
              </span>
            </Link></div>}
        </div>
      </section>
    </>
  );
};

export default Services;
