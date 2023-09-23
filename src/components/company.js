import React, { useState } from "react";
import appone from "../assets/app-image-01.png"
import apptwo from "../assets/app-image-01.png"
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Company = () => {
  const [isVisible, setVisible] = useState('flexibility');
  const toggleVisibility = (section) => {
    setVisible(section);};

  // const toggleFlexibility = () => {
  //   setFlexibilityVisible(!isFlexibilityVisible);
  //   setTransparencyVisible(false); 
  // };

  // const toggleTransparency = () => {
  //   setTransparencyVisible(!isTransparencyVisible);
  //   setFlexibilityVisible(false); 
  // };
  return (
    <>
      <><div
        className='hero pr zi1 v-center aft inside'
        style={{ backgroundImage: "url(../images/company-hero.jpg)" }}
      >
        <div className='hero-grp hero-wrapper zi2'>
          <div className='hero-content'>
            <div className='hero-title-wrapper mb40'>
              <h1 className='hero-title'>Who We Are</h1>
            </div>
            <p className='hero-subtitle mb40'>
              <span>
              At Abhisheka Technologies, we're not just an IT company; we're a collective of passionate individuals driven by one singular mission: to deliver unparalleled technology solutions to our partners. Founded on a decade of experience and industry expertise, our journey is a testament to commitment, innovation, and the relentless pursuit of excellence.
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
  <section className="services space-default bg5">
    <div className="container">
      <h2 className="section-title">Our Working Culture</h2>
      <p className="fs16 lh28 fc2 mb32">
        Abhisheka Technologies thrives on a culture of collaboration and
        creativity. Our open-office environment encourages seamless
        communication, fostering an atmosphere where ideas flow freely. Every
        team member, irrespective of their role, is a pivotal part of our
        creative process. This inclusive approach ensures that we always tap
        into a plethora of perspectives, guaranteeing solutions that are both
        innovative and holistic. Our team's professional growth is paramount.
        Through continuous learning programs, workshops, and hands-on projects,
        we ensure that our employees are always at the forefront of
        technological trends, equipped to handle the ever-evolving challenges of
        the IT landscape
      </p>
    </div>
  </section>
  <section className="accordion-group stories space-default bg1">
    <div className="container">
      <div className="stories-content-grp df">
        <div className="stories-img">
          <h2 className="title fs36 fw6 mb32">Our Working Culture</h2>
          <ul className="accordion-targets-1">
            <li className={`service-provide-list cp ${isVisible === 'flexibility' ? 'active' : ''}`} onClick={() => toggleVisibility('flexibility')}>
                Flexibility
            </li>
            <li className={`service-provide-list cp ${isVisible === 'transparency' ? 'active' : ''}`} onClick={() => toggleVisibility('transparency')}>
                Transparency
            </li>
          </ul>
        </div>
        <div className="accordion-data-1 df fdc">
        <div className={`stories-content mr48 ${isVisible === 'flexibility' ? '' : 'dn'}`}>
            <h2 className="title fs36 fw6 mb32">Flexibility</h2>
            <p className="fs16 lh22 fc2 mb32">
              In the world of IT, change is the only constant. At Abhisheka
              Technologies, flexibility isn't just an attribute—it's a core
              tenet. We pride ourselves on our adaptive approach, be it in terms
              of project management, solution development, or team
              collaboration. Our agile methodologies ensure that we're always
              ready to pivot as per project demands, ensuring timely and
              efficient results. For our clients, this flexibility translates
              into custom solutions tailored to their unique requirements. We
              don't believe in one-size-fits-all; with Abhisheka Technologies,
              you get solutions that are as dynamic as your challenges.
            </p>
          </div>
          <div className={`stories-content mr48 ${isVisible === 'transparency' ? '' : 'dn'}`}>

            <h2 className="title fs36 fw6 mb32">Transparency</h2>
            <p className="fs16 lh22 fc2 mb32">
              Trust is the foundation of every lasting relationship, and
              transparency is how we nurture it. Every step of our
              collaboration—from project inception to completion—is marked by
              clear communication, regular updates, and an open-door policy.
              Clients have complete visibility into the progress, challenges,
              and milestones, ensuring they're always in the loop. Moreover, our
              transparency extends internally. Teams have access to all the
              information they need, fostering a sense of ownership and
              responsibility. This transparent ethos ensures that everyone is on
              the same page, driving toward a unified vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="our-industry space-default bg5">
    <div className="container">
      <h2 className="section-title">Join Us in Crafting the Future</h2>
      <p className="fs16 lh22 fc2 mb32 mw720 mlra">
        At Abhisheka Technologies, we're more than just technologists; we're
        dreamers, innovators, and pioneers. Join us on this exhilarating journey
        as we shape the digital future, one solution at a time.
      </p>
      <div className="all-industry-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1 mlra mt24">
        <Link to="/contact-us" className="fc1">
        CONTACT US
        </Link>
      </div>
    </div>
  </section>
  <section className="stories space-default bg1">
    <div className="container">
      <div className="stories-content-grp df">
        <div className="stories-content mr48">
          <h2 className="title fs36 fw6 mb32">
            "Navigating the Digital <br />
            Landscape: Your Partner <br />
            in Holistic IT Solutions"
          </h2>
          <p className="fs18 lh28 fc2 mb32">
            At our IT service company, we understand that success in the digital
            age requires a strategic and holistic approach. That's why we offer
            a wide range of services, including web development, mobile app
            development, IT consulting, quality assurance, design solutions, and
            digital marketing. Our commitment to affordability, reliability, and
            vast experience sets us apart from the competition. We believe in a
            custom approach, tailored to your unique needs, and our timely
            delivery ensures that your business stays ahead of the curve. With
            you at the center of our approach, we strive to exceed your
            expectations and help you achieve your goals. Join us on this
            transformative journey and experience the power of technology like
            never before!
          </p>
        </div>
        <div className="stories-img v-center">
          <img src="..//images/app-image-01.png" alt="App Images 01" />
          <img src="..//images/app-image-02.png" alt="App Images 02" />
        </div>
      </div>
    </div>
  </section>
</>

    </>
  );
};

export default Company;
