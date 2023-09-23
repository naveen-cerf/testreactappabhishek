import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const WebDevelop = () => {
  const [activeSection, setActiveSection] = useState("custom-web-design",);
  const [activeBetter,setActiveBetter]= useState("innovative-approach")
  
  // const [activeSection, setActiveSection] = useState('responsive-development');
  // const [activeSection, setActiveSection] = useState('e-commerce-solutions');
  // const [activeSection, setActiveSection] = useState('content-management-systems');
  // const [activeSection, setActiveSection] = useState('performance-optimization');
  // const [activeSection, setActiveSection] = useState('web-application-development');

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
      <section className="back p32">
        <span className="back-button">
          <Link className="v-center" to="/services" target="_self">
            <span className="material-symbols-outlined fc4 mr4">
              <BsArrowLeft />
            </span>
            <span className="fc4 ttu fs14 fw5 ls1">back</span>
          </Link>
        </span>
      </section>
      <section className="stories space-default bg1">
        <div className="container">
          <div className="stories-content-grp df jcsb">
            <div className="stories-content mr48">
              <h2 className="title fs36 fw6 mb32">
                Web Development For Business Process Automation
              </h2>
              <h3 className="stories-title mb16">
                Crafting Digital Experiences: Stunning, Advanced Websites
                Tailored to Your Business
              </h3>
              <p className="fs16 lh28 fc2 mb32">
                At Abhisheka Technologies, web development isn't just about
                coding—it's about creating digital experiences. Our team crafts
                websites tailored to your business's needs, ensuring they're
                both visually stunning and technologically advanced.
              </p>
            </div>
            <div className="service-banner v-center">
              <img src="../images/web-development.jpg" alt="App Image 01" />
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-group stories space-default bg5">
        <div className="container">
          <div className="stories-content-grp df">
            <div className="stories-img">
              <h2 className="title fs36 fw6 mb32">We Provide</h2>
              <ul className="accordion-targets-1">
                <li
                  className={`service-provide-list ${
                    activeSection === "custom-web-design" ? "active" : ""}`}onClick={() => toggleSection("custom-web-design")}data-target="custom-web-design">
                  Custom Web Design
                </li>
                <li
                  className={`service-provide-list cp ${activeSection === "responsive-development" ? "active" : ""}`}onClick={() => toggleSection("responsive-development")}
                  data-target="responsive-development"
                >
                  Responsive Development
                </li>
                <li
                  className={`service-provide-list cp ${activeSection === "e-commerce-solutions" ? "active" : ""}`}onClick={() => toggleSection("e-commerce-solutions")}
                  data-target="ecom"
                >
                  E-commerce Solutions
                </li>
                <li
                  className={`service-provide-list cp ${activeSection === "content-management-systems"? "active": ""}`}onClick={() => toggleSection("content-management-systems")}
                  data-target="content-management-systems"
                >
                  Content Management Systems (CMS)
                </li>
                <li
                  className={`service-provide-list cp ${
                    activeSection === "performance-optimization" ? "active" : ""
                  }`}
                  onClick={() => toggleSection("performance-optimization")}
                  data-target="performance-optimization"
                >
                  Performance Optimization
                </li>
                <li
                  className={`service-provide-list cp ${
                    activeSection === "web-application-development"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => toggleSection("web-application-development")}
                  data-target="web-application-development"
                >
                  Web Application Development
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div
                className={`stories-content mr48 ${activeSection === "custom-web-design" ? "" : "dn"}`}id="custom-web-design">
                <h2 className="title fs30 fw6 mb32">Custom Web Design</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Crafting visually appealing and user-centric designs, we
                  ensure your website resonates with your target audience,
                  creating memorable first impressions.
                </p>
              </div>
              <div
                className={`stories-content mr48 ${activeSection === "responsive-development" ? "" : "dn"}`}id="responsive-development"
              >
                <h2 className="title fs30 fw6 mb32">Responsive Development</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Building websites that perform seamlessly across devices, from
                  desktops to smartphones, ensuring your users always get an
                  optimal experience.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${activeSection === "e-commerce-solutions" ? "" : "dn"}`}id="e-commerce-solutions"
              >
                <h2 className="title fs30 fw6 mb32">E-commerce Solutions</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Enabling businesses to sell online with robust and secure
                  platforms, tailored to meet specific business needs, driving
                  sales and growth.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeSection === "content-management-systems" ? "" : "dn"
                }`}
                id="content-management-systems"
              >
                <h2 className="title fs30 fw6 mb32">
                  Content Management Systems (CMS)
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Providing user-friendly platforms that allow easy content
                  updates, ensuring your website remains fresh, relevant, and
                  engaging.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeSection === "performance-optimization" ? "" : "dn"
                }`}
                id="performance-optimization"
              >
                <h2 className="title fs30 fw6 mb32">
                  Performance Optimization
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Ensuring websites load swiftly and run smoothly, optimizing
                  both backend and frontend components for the best user
                  experience.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeSection === "web-application-development" ? "" : "dn"
                }`}
                id="web-application-development"
              >
                <h2 className="title fs30 fw6 mb32">
                  Web Application Development
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Creating custom web-based applications tailored to solve
                  specific business challenges, enhancing efficiency and
                  productivity.
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
      <section className="stories space-default bg1">
        <div className="container">
          <div className="stories-content-grp df">
            <div className="stories-img">
              <h2 className="title fs30 fw6 mb32">
                Our Stack and
                <br />
                the Projects We
                <br />
                Work On
              </h2>
            </div>
            <div className="stories-content mr48">
              <h2 className="fw6 mb16">Languages &amp; Tools</h2>
              <p className="fs16 lh28 fc2 mb32">
                We harness the power of leading web technologies and languages,
                including HTML, CSS, Java, Kotlin, and Python. This allows us to
                deliver websites that are optimized, responsive, and
                feature-rich.
              </p>
              <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
              <p className="fs16 lh28 fc2 mb32">
                Whether you're looking for dynamic e-commerce platforms with
                integrated payment gateways, informative blogs, or static
                landing pages for product launches, we've got you covered.
              </p>
              {/* <a className="v-center" href="#" target="_self">
          <span className="fc4 ttu fs14 fw5 ls1">Show more</span>
          <span className="material-symbols-outlined fc4 ml4"> add </span>
        </Link> */}
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
                <li className={`service-provide-list cp ${activeBetter === "innovative-approach" ? "active" : ""}`}onClick={() => toggleBetter("innovative-approach")}data-target="innovative-approach">
                    Innovative Approach
                </li>
                <li className={`service-provide-list cp ${
                    activeBetter === "user-centric-design" ? "active" : ""}`}onClick={() => toggleBetter("user-centric-design")}data-target="user-centric-design">
                    User Centric Design
                </li>
                <li className={`service-provide-list cp ${
                    activeBetter === "customization-and-scalability" ? "active" : ""}`}onClick={() => toggleBetter("customization-and-scalability")}data-target="customization-and-scalability">
                    Customization and Scalability
                </li>
                <li className={`service-provide-list cp ${
                    activeBetter === "robust-security-measures" ? "active" : ""}`}onClick={() => toggleBetter("robust-security-measures")}data-target="robust-security-measures">
                    Robust Security Measures
                </li>
                <li className={`service-provide-list cp${
                    activeBetter === "timely-delivery-and-support" ? "active" : ""}`}onClick={() => toggleBetter("timely-delivery-and-support")}data-target="timely-delivery-and-support">
                    Timely Delivery and Support
                </li>
              </ul>
            </div>
            <div className="accordion-data-2 df fdc">
              <div className={`stories-content mr48  ${
                  activeBetter === "innovative-approach" ? "" : "dn"
                }`}
                id="innovative-approach"
              >
                <h2 className="title fs30 fw6 mb32">Innovative Approach</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our technology solution provider for web application
                  development offers an innovative approach to create
                  cutting-edge solutions. We combine the latest technologies and
                  trends to develop unique and engaging web applications that
                  stand out in the digital landscape. Our team of skilled
                  developers and designers are constantly exploring new
                  possibilities to deliver solutions that exceed expectations.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "user-centric-design" ? "" : "dn"
                }`}
                id="user-centric-design"
              >
                <h2 className="title fs30 fw6 mb32">User Centric Design</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We prioritize user experience in our web application
                  development process. Our team understands the importance of
                  intuitive and user-friendly interfaces that enhance engagement
                  and drive conversions. By focusing on user-centric design
                  principles, we ensure that our web applications are not only
                  visually appealing but also highly functional and easy to
                  navigate.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeBetter === "customization-and-scalability" ? "" : "dn"
                }`}
                id="customization-and-scalability"
              >
                <h2 className="title fs30 fw6 mb32">
                  Customization and Scalability
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We recognize that every business has unique requirements. As a
                  technology solution provider, we offer highly customizable web
                  application development services. Our team works closely with
                  clients to understand their specific needs and tailor
                  solutions accordingly. Additionally, we build scalable web
                  applications that can grow and adapt as businesses expand,
                  ensuring long-term success.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeBetter === "robust-security-measures" ? "" : "dn"
                }`}
                id="robust-security-measures"
              >
                <h2 className="title fs30 fw6 mb32">
                  Robust Security Measures
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Security is a top priority in today's digital landscape. Our
                  technology solution provider for web application development
                  implements robust security measures to protect sensitive data
                  and ensure the integrity of our clients' web applications. We
                  follow industry best practices and employ advanced security
                  protocols to safeguard against potential threats and
                  vulnerabilities.
                </p>
              </div>
              <div
                className={`stories-content mr48  ${
                  activeBetter === "timely-delivery-and-support" ? "" : "dn"
                }`}
                id="timely-delivery-and-support"
              >
                <h2 className="title fs30 fw6 mb32">
                  Timely Delivery and Support
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We understand the importance of timely delivery in the
                  fast-paced digital world. Our team is committed to delivering
                  web applications within agreed-upon timelines, without
                  compromising on quality. Additionally, we provide ongoing
                  support and maintenance services to ensure that our clients'
                  web applications continue to perform optimally and stay
                  up-to-date with evolving technologies.
                </p>
              </div>
              {/* <div
                className={`stories-content mr48  ${
                  activeSection === "web-application-development" ? "" : "dn"
                }`}
                id="web-application-development"
              >
                <h2 className="title fs30 fw6 mb32">
                  Web Application Development
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Creating custom web-based applications tailored to solve
                  specific business challenges, enhancing efficiency and
                  productivity.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelop;
