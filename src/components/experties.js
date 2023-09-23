import React, { useState } from "react";
import { Link } from "react-router-dom";

const Experties = () => {
  const [activeSection, setActiveSection] = useState("custom-web-design",);

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
    console.log(sectionId);
  };

  return (
    <>
       <div
        className='hero pr zi1 v-center aft inside'
        style={{ backgroundImage: "url(../images/expertise-hero.jpg)" }}
      >
        <div className='hero-grp hero-wrapper zi2'>
          <div className='hero-content'>
            <div className='hero-title-wrapper mb40'>
              <h1 className='hero-title'>Leading Technologies for Effective Solutions</h1>
            </div>
            <p className='hero-subtitle mb40'>
              <span>
              We want to be the best ones at what we do, and it is only logical that we use advanced technologies when working on our projects. The Light IT Global team understands that without professional knowledge and skills in cutting-edge technologies implementation, it would be difficult to provide a wide range of solutions. That is why, we try new technologies once they appear and continue using them if they bring a better perspective on problem-solving.
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
      <section className="accordion-group stories space-default bg1">
        <div className="container">
          <h2 className="title fs30 fw6 mb48 tac">
            Our Expertise at Abhisheka Technologies
          </h2>
          <div className="stories-content-grp df">
            <div className="stories-img">
              <ul className="accordion-targets-1">
                <li className={`service-provide-list cp ${
                    activeSection === "custom-web-design" ? "active" : ""}`}onClick={() => toggleSection("custom-web-design")}data-target="custom-web-design">
                    Custom Software Solutions
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "responsive-development" ? "active" : ""}`}onClick={() => toggleSection("responsive-development")}data-target="responsive-development">
                    Web & Mobile Development
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "e-commerce-solutions" ? "active" : ""}`}onClick={() => toggleSection("e-commerce-solutions")}data-target="e-commerce-solutions">
                    IT & Business Consulting
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "content-management-systems" ? "active" : ""}`}onClick={() => toggleSection("content-management-systems")}data-target="content-management-systems">
                    Quality & Performance
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "performance-optimization" ? "active" : ""}`}onClick={() => toggleSection("performance-optimization")}data-target="performance-optimization">
                    Design & Branding
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "web-application-development" ? "active" : ""}`}onClick={() => toggleSection("web-application-development")}data-target="web-application-development">
                    Digital Marketing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "continuous-learning" ? "active" : ""}`}onClick={() => toggleSection("continuous-learning")}data-target="continuous-learning">
                    Continuous Learning
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div className={`stories-content mr48 ${activeSection === "custom-web-design" ? "" : "dn"}`}id="custom-web-design"
              >
                <h2 className="title fs28 fw6 mb32">
                  Custom Software Solutions
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">A Decade of Leadership :</span> With a
                  founder having 10 years of industry-leading experience, we're
                  equipped with a deep understanding of software requirements
                  and innovations.
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "responsive-development" ? "" : "dn"}`}id="responsive-development"
                >
                <h2 className="title fs28 fw6 mb32">
                  Web & Mobile Development
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Versatile Development:</span> Our
                  proficiency in web and mobile platforms ensures that clients
                  get cutting-edge solutions.
                </p>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Languages & Frameworks:</span>{" "}
                  Expertise in Java, Kotlin, Swift, Python, HTML, and CSS
                  guarantees robust and efficient applications. Additionally,
                  our experience with Flutter allows us to deliver top-tier
                  hybrid applications
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "e-commerce-solutions" ? "" : "dn"}`}id="e-commerce-solutions"
                >
                <h2 className="title fs28 fw6 mb32">
                  IT & Business Consulting
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Strategic Guidance:</span> With our IT
                  consulting services, businesses can navigate the complex
                  digital landscape with confidence.
                </p>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">In-depth Business Analysis:</span> Our
                  analytic process helps businesses understand their market
                  dynamics, making decision-making more efficient and impactful.
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "content-management-systems" ? "" : "dn"}`}id="content-management-systems"
                >
                <h2 className="title fs28 fw6 mb32">
                  Quality & Performance
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Rigorous Quality Assurance:</span> Our
                  commitment to perfection means that every product undergoes
                  meticulous testing, ensuring bug-free and optimized
                  performance.
                </p>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Tools & Techniques:</span> Utilizing
                  advanced QA tools and methodologies, we pre-empt issues,
                  ensuring software readiness for real-world challenges.
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "performance-optimization" ? "" : "dn"}`}id="performance-optimization"
                >
                <h2 className="title fs28 fw6 mb32">Design & Branding</h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Design Thinking:</span> Our design
                  solutions prioritize user experience, blending functionality
                  with aesthetics.
                </p>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Branding Insights:</span> In a crowded
                  digital space, our designs ensure brands stand out, captivate,
                  and engage their audience effectively.
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "web-application-development" ? "" : "dn"}`}id="web-application-development"
                >
                <h2 className="title fs28 fw6 mb32">Digital Marketing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Holistic Approach:</span> Our digital
                  marketing services are comprehensive, from SEO to SEM, content
                  marketing, and beyond.
                </p>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Data-driven Strategies:</span> Combining
                  creativity with analytics ensures our campaigns are not just
                  imaginative but also result-oriented.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "continuous-learning" ? "" : "dn"}`}id="continuous-learning"
              >
                <h2 className="title fs28 fw6 mb32">Continuous Learning</h2>
                <p className="fs16 lh28 fc2 mb32">
                  <span className="fw6">Adapting to Trends:</span> In a rapidly
                  evolving tech landscape, we prioritize continuous learning,
                  ensuring we're always ahead of the curve, offering clients the
                  latest and most efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="phylospy space-default bg1 pr aft">
        <div className="container pr zi1 df fdc aic">
          <h2 className="section-title">Discover our recent projects</h2>
          <div className="contact-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1">
            <Link to="/contact-us" className="fc1">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experties;
