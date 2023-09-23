import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ITConsultingServices = () => {
  const [activeSection, setActiveSection] = useState("digital-transformation",);
  const [activeBetter,setActiveBetter]= useState("expertise-and-experience")
  
  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
    console.log(sectionId);
  };
  const toggleBetter = (section) => {
    setActiveBetter(section);
    console.log(section)
  };



  return (
    <>
    <section class="back p32">
      <span class="back-button">
        <Link  class="v-center" to="/services" target="_self">
        <span className='material-symbols-outlined fc4 mr4'>
                    <BsArrowLeft />
                  </span>
          <span class="fc4 ttu fs14 fw5 ls1">back</span>
        </Link>
      </span>
    </section>
    <main>
      <section className="stories space-default bg1">
        <div className="container">
          <div className="stories-content-grp df jcsb">
            <div className="stories-content mr48">
              <h2 className="title fs36 fw6 mb32">IT Consulting Services</h2>
              <h3 className="stories-title mb16">
                Transforming Businesses with Cutting-Edge IT Services and
                Strategic Technology Partnerships
              </h3>
              <p className="fs16 lh28 fc2 mb32">
                With a decade of industry expertise, Abhisheka Technologies
                offers IT consulting services that guide businesses towards
                technological excellence. Our services are grounded in a deep
                understanding of the industry, allowing us to provide tailored
                solutions that address your unique challenges and goals. We
                leverage our expertise to help you navigate the ever-evolving
                technology landscape, ensuring that your business stays ahead of
                the curve and achieves optimal results.
              </p>
            </div>
            <div className="service-banner v-center">
              <img src="../images/it-consulting.jpg" alt="App Image 01"/>
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-group stories space-default bg5">
        <div className="container">
          <div className="stories-content-grp df">
            <div className="stories-img">
              <h2 className="title fs48 fw6 mb32">We Provide</h2>
              <ul className="accordion-targets-1">
                <li className={`service-provide-list cp ${
                    activeSection === "digital-transformation" ? "active" : ""}`}onClick={() => toggleSection("digital-transformation")}data-target="digital-transformation">Digital Transformation Consulting
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "it-strategy-roadmap" ? "active" : ""}`}onClick={() => toggleSection("it-strategy-roadmap")}data-target="it-strategy-roadmap">IT Strategy & Roadmap
                </li>
                <li className={`service-provide-list cp${
                    activeSection === "business-process-reengineering" ? "active" : ""}`}onClick={() => toggleSection("business-process-reengineering")}data-target="business-process-reengineering">Business Process Reengineering
                </li>
                <li className={`service-provide-list cp${
                    activeSection === "cloud-consultin-migration" ? "active" : ""}`}onClick={() => toggleSection("cloud-consultin-migration")}data-target="cloud-consultin-migration">Cloud Consulting & Migration
                </li>
                <li className={`service-provide-list cp${
                    activeSection === "cybersecurity-consulting" ? "active" : ""}`}onClick={() => toggleSection("cybersecurity-consulting")}data-target="cybersecurity-consulting">Cybersecurity Consulting
                </li>
                <li className={`service-provide-list cp${
                    activeSection === "enterprise-architecture-integration" ? "active" : ""}`}onClick={() => toggleSection("enterprise-architecture-integration")}data-target="enterprise-architecture-integration">Enterprise Architecture & Integration
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div className={`stories-content mr48 ${activeSection === "digital-transformation" ? "" : "dn"}`}id="digital-transformation">
                <h2 className="title fs36 fw6 mb32">
                  Digital Transformation Consulting
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We specialize in guiding businesses as they embrace the
                  digital age, helping them seamlessly integrate digital
                  technologies into every aspect of their operations. Our
                  expertise lies in redefining how value is created and
                  delivered in this new era, ensuring that our clients stay
                  ahead of the curve and thrive in the ever-evolving digital
                  landscape.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "it-strategy-roadmap" ? "" : "dn"}`}id="it-strategy-roadmap">
                <h2 className="title fs36 fw6 mb32">IT Strategy &amp; Roadmap</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We specialize in creating customized IT strategies that align
                  with your business goals. Our team will work closely with you
                  to craft comprehensive plans that drive technology-driven
                  growth and optimization. By delineating actionable roadmaps,
                  we ensure that your business can effectively leverage
                  technology to achieve its objectives. With our expertise, you
                  can stay ahead in today's fast-paced digital landscape and
                  maximize the potential of your IT investments. Trust us to
                  deliver tailored solutions that propel your business forward.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "business-process-reengineering" ? "" : "dn"}`}id="business-process-reengineering">
                <h2 className="title fs36 fw6 mb32">
                  Business Process Reengineering
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We specialize in analyzing and redesigning core business
                  processes, harnessing the power of technology to enhance
                  efficiency, streamline operations, and deliver greater value
                  to customers. Our team of experts will work closely with you
                  to identify areas for improvement and implement innovative
                  solutions that optimize your business operations. By
                  leveraging technology strategically, we help you stay ahead of
                  the competition and provide an exceptional customer
                  experience. Trust us to transform your processes and drive
                  sustainable growth for your business.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "cloud-consultin-migration" ? "" : "dn"}`}id="cloud-consultin-migration">
                <h2 className="title fs36 fw6 mb32">
                  Cloud Consulting & Migration
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We specialize in assisting businesses with their transition to
                  cloud infrastructures, guiding them in selecting the most
                  suitable platforms, and ensuring seamless migrations for
                  enhanced scalability and efficiency. Our team of experts will
                  work closely with you to understand your unique requirements
                  and design a cloud strategy that aligns with your business
                  goals. With our expertise, you can confidently embrace the
                  cloud, optimize your operations, and unlock the full potential
                  of scalable and efficient technology solutions.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "cybersecurity-consulting" ? "" : "dn"}`}id="cybersecurity-consulting">
                <h2 className="title fs36 fw6 mb32">Cybersecurity Consulting</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We offer expert insights into security threats, providing
                  businesses with the knowledge and strategies needed to protect
                  their valuable data. Our team specializes in crafting robust
                  protection strategies that ensure the highest levels of data
                  integrity and safety. With our expertise, you can confidently
                  navigate the complex landscape of cybersecurity and safeguard
                  your business against potential threats. Trust us to provide
                  the guidance and solutions necessary to maintain a secure and
                  resilient environment for your data and operations.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "enterprise-architecture-integration" ? "" : "dn"}`}id="enterprise-architecture-integration">
                <h2 className="title fs36 fw6 mb32">
                  Enterprise Architecture & Integration
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We specialize in designing and implementing cohesive IT
                  environments that enable seamless data flow and optimize
                  communication between different systems and software. Our team
                  of experts will work closely with you to understand your
                  unique requirements and create a tailored solution that
                  integrates your systems effectively. By streamlining your IT
                  infrastructure, we enhance efficiency and productivity,
                  allowing for smoother operations and improved collaboration.
                  Trust us to deliver a cohesive IT environment that maximizes
                  the potential of your technology investments.
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
            <Link  to="/contact-us" className="fc1">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="stories space-default bg1">
        <div className="container">
          <div className="stories-content-grp df">
            <div className="stories-img">
              <h2 className="title fs36 fw6 mb32">
                Our Stack and<br/>the Projects We<br/>Work On
              </h2>
            </div>
            <div className="stories-content mr48">
              <h2 className="fw6 mb16">Languages &amp; Tools</h2>
              <p className="fs16 lh28 fc2 mb32">
                While the essence of consulting is strategy and insight, we
                leverage tools like SWOT analysis, IT audits, and cloud
                computing solutions to deliver tangible results.
              </p>
              <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
              <p className="fs16 lh28 fc2 mb32">
                From strategizing IT infrastructure overhauls for startups to
                guiding established businesses through digital transformations,
                we've steered various projects towards success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-group stories space-default bg1">
        <div className="container">
          <div className="stories-content-grp df">
            <div className="stories-img">
              <h2 className="title fs36 fw6 mb32">Why We Are Better</h2>
              <ul className="accordion-targets-2">
                <li className={`service-provide-list cp ${activeBetter === "expertise-and-experience" ? "active" : ""}`}onClick={() => toggleBetter("expertise-and-experience")}data-target="expertise-and-experience">Expertise and Experience
                </li>
                <li className={`service-provide-list cp ${activeBetter === "customized-solutions" ? "active" : ""}`}onClick={() => toggleBetter("customized-solutions")}data-target="customized-solutions">Customized Solutions
                </li>
                <li className={`service-provide-list cp ${activeBetter === "proven-track-record" ? "active" : ""}`}onClick={() => toggleBetter("proven-track-record")}data-target="proven-track-record">Proven Track Record
                </li>
                <li className={`service-provide-list cp ${activeBetter === "holistic-approach" ? "active" : ""}`}onClick={() => toggleBetter("holistic-approach")}data-target="holistic-approach">Holistic Approach
                </li>
                <li className={`service-provide-list cp ${activeBetter === "exceptional-customer-service" ? "active" : ""}`}onClick={() => toggleBetter("exceptional-customer-service")}data-target="exceptional-customer-service">Exceptional Customer Service
                </li>
              </ul>
              
            </div>
            <div className="accordion-data-2 df fdc">
              <div className={`stories-content mr48  ${
                  activeBetter === "expertise-and-experience" ? "" : "dn"
                }`}
                id="expertise-and-experience"
              >
                <h2 className="title fs48 fw6 mb32">Expertise and Experience</h2>
                <p className="fs16 lh28 fc2 mb32">
                  With years of experience in the industry, our team of IT
                  consultants brings a wealth of expertise to the table. We have
                  successfully tackled a wide range of IT challenges, making us
                  well-equipped to handle any project or issue that comes our
                  way.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "customized-solutions" ? "" : "dn"
                }`}
                id="customized-solutions"
              >
                <h2 className="title fs48 fw6 mb32">Customized Solutions</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We understand that every business is unique, which is why we
                  take a tailored approach to our consulting services. We
                  carefully analyze your specific needs and goals, and then
                  design customized solutions that address your challenges and
                  drive your success.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "proven-track-record" ? "" : "dn"
                }`}
                id="proven-track-record"
              >
                <h2 className="title fs48 fw6 mb32">Proven Track Record</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our track record speaks for itself. We have a long list of
                  satisfied clients who have benefited from our consulting
                  services. From small businesses to large enterprises, we have
                  consistently delivered results, helping our clients achieve
                  their IT objectives and overcome obstacles.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "holistic-approach" ? "" : "dn"
                }`}
                id="holistic-approach"
              >
                <h2 className="title fs48 fw6 mb32">Holistic Approach</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We take a holistic approach to IT consulting, considering not
                  only the technical aspects but also the broader business
                  implications. We understand that technology is just one piece
                  of the puzzle, and we strive to align our solutions with your
                  overall business strategy for maximum impact.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "exceptional-customer-service" ? "" : "dn"
                }`}
                id="exceptional-customer-service"
              >
                <h2 className="title fs48 fw6 mb32">
                  Exceptional Customer Service
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We pride ourselves on providing exceptional customer service.
                  We believe in building strong relationships with our clients,
                  and we go above and beyond to ensure their satisfaction. Our
                  team is responsive, communicative, and dedicated to delivering
                  the highest level of service throughout the entire consulting
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default ITConsultingServices;
