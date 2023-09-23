import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const QualityAssuranceService = () => {
  const [activeSection, setActiveSection] = useState("manual-testing",);
  const [activeBetter,setActiveBetter]= useState("comprehensive-test-coverage")

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
              <h2 className="title fs36 fw6 mb32">Quality Assurance Service</h2>
              <h3 className="stories-title mb16">
                Quality at Every Step: Partner with Us for Reliable and
                Effective Quality Assurance Solutions
              </h3>
              <p className="fs16 lh28 fc2 mb32">
                In the fast-paced digital world, even the smallest glitch can
                have significant consequences. That's why our meticulous quality
                assurance processes are in place to safeguard your software's
                performance. We leave no stone unturned in testing and
                validating every aspect, ensuring that your software stands tall
                against challenges and delivers seamless performances
                consistently. Our team of experienced quality assurance
                professionals meticulously analyze and identify any potential
                issues, allowing for timely resolution and a flawless user
                experience. With our commitment to excellence, you can trust
                that your software will meet the highest standards of quality,
                reliability, and performance, minimizing risks and maximizing
                success
              </p>
            </div>
            <div className="service-banner v-center">
              <img src="../images/quality-assurance.jpg" alt="App Image 01"/>
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
                    activeSection === "manual-testing" ? "active" : ""}`}onClick={() => toggleSection("manual-testing")}data-target="manual-testing">Manual Testing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "automated-testing" ? "active" : ""}`}onClick={() => toggleSection("automated-testing")}data-target="automated-testing">Automated Testing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "performance-testing" ? "active" : ""}`}onClick={() => toggleSection("performance-testing")}data-target="performance-testing">Performance Testing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "security-testing" ? "active" : ""}`}onClick={() => toggleSection("security-testing")}data-target="security-testing">Security Testing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "usability-testing" ? "active" : ""}`}onClick={() => toggleSection("usability-testing")}data-target="usability-testing">Usability Testing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "compatibility-testing" ? "active" : ""}`}onClick={() => toggleSection("compatibility-testing")}data-target="compatibility-testing">Compatibility Testing
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div className={`stories-content mr48 ${activeSection === "manual-testing" ? "" : "dn"}`}id="manual-testing"
                  >
                <h2 className="title fs36 fw6 mb32">Manual Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our dedicated QA specialists conduct hands-on assessments,
                  meticulously executing test cases and scenarios to identify
                  defects and ensure the functional accuracy of your software.
                  With their expertise and attention to detail, they leave no
                  stone unturned in ensuring that your software meets the
                  highest quality standards
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "automated-testing" ? "" : "dn"}`}id="automated-testing">
                <h2 className="title fs36 fw6 mb32">Automated Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Leveraging advanced tools and scripts, we perform automated
                  tests that are repetitive and large-scale. This approach not
                  only saves time but also ensures software reliability and
                  faster feedback loops. By automating the testing process, we
                  can thoroughly assess your software's functionality and
                  performance, providing you with efficient and accurate
                  results.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "performance-testing" ? "" : "dn"}`}id="performance-testing"
                  >
                <h2 className="title fs36 fw6 mb32">Performance Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We simulate various scenarios to gauge your software's
                  responsiveness, stability, and speed under different loads. By
                  subjecting your software to realistic conditions, we ensure
                  optimal performance in real-world situations. Our performance
                  testing helps identify bottlenecks, optimize resource
                  utilization, and enhance the overall user experience.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "security-testing" ? "" : "dn"}`}id="security-testing"
                  >
                <h2 className="title fs36 fw6 mb32">Security Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our team conducts comprehensive security testing to probe your
                  applications for vulnerabilities and weaknesses. By
                  identifying potential threats and risks, we ensure that your
                  software is robustly protected against security breaches and
                  data compromises. Our rigorous security testing helps
                  safeguard your sensitive information and instills confidence
                  in your software's security measures.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "usability-testing" ? "" : "dn"}`}id="usability-testing"
                  >
                <h2 className="title fs36 fw6 mb32">Usability Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We engage real users to evaluate your software's
                  user-friendliness, interface intuitiveness, and overall user
                  experience. By gathering feedback from actual users, we gain
                  valuable insights into how your software performs in
                  real-world scenarios. This usability testing ensures a
                  frictionless end-user journey, enhancing user satisfaction and
                  driving positive engagement.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "compatibility-testing" ? "" : "dn"}`}id="compatibility-testing"
                  >
                <h2 className="title fs36 fw6 mb32">Compatibility Testing</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We conduct thorough compatibility testing to ensure that your
                  software functions seamlessly across different devices,
                  operating systems, and browsers. By testing compatibility, we
                  guarantee a consistent user experience regardless of the
                  platform or environment. Our compatibility testing helps you
                  reach a wider audience and ensures that your software performs
                  optimally across various configurations.
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
            <Link to="/contact-us" className="fc1">Contact Us</Link>
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
                Using tools like Selenium for web testing, Appium for mobile,
                and JUnit for unit testing, we ensure comprehensive coverage and
                rigorous testing.
              </p>
              <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
              <p className="fs16 lh28 fc2 mb32">
                From testing complex e-commerce sites with thousands of
                concurrent users to ensuring a mobile app works seamlessly
                across different devices and OS versions, our QA covers a broad
                spectrum.
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
                <li className={`service-provide-list cp ${activeBetter === "comprehensive-test-coverage" ? "active" : ""}`}onClick={() => toggleBetter("comprehensive-test-coverage")}data-target="comprehensive-test-coverage">Comprehensive Test Coverage
                </li>
                <li className={`service-provide-list cp ${activeBetter === "testing-tools-technologies" ? "active" : ""}`}onClick={() => toggleBetter("testing-tools-technologies")}data-target="testing-tools-technologies">Advanced Testing Tools and Technologies
                </li>
                <li className={`service-provide-list cp ${activeBetter === "skilled-qa-team" ? "active" : ""}`}onClick={() => toggleBetter("skilled-qa-team")}data-target="skilled-qa-team">Dedicated and Skilled QA Team
                </li>
                <li className={`service-provide-list cp ${activeBetter === "collaborative-approach" ? "active" : ""}`}onClick={() => toggleBetter("collaborative-approach")}data-target="collaborative-approach">Collaborative Approach
                </li>
                <li className={`service-provide-list cp ${activeBetter === "support-maintenance" ? "active" : ""}`}onClick={() => toggleBetter("support-maintenance")}data-target="support-maintenance">Continuous Support and Maintenance
                </li>
              </ul>
            </div>
            <div className="accordion-data-2 df fdc">
              <div className={`stories-content mr48  ${
                  activeBetter === "comprehensive-test-coverage" ? "" : "dn"
                }`}
                id="comprehensive-test-coverage"
              >
                <h2 className="title fs48 fw6 mb32">Comprehensive Test Coverage</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our quality assurance services go beyond functional testing.
                  We offer comprehensive test coverage, including usability
                  testing, compatibility testing, security testing, and
                  performance testing. This ensures that your software not only
                  functions correctly but also provides a seamless user
                  experience, is compatible with various platforms, is secure
                  from potential threats, and performs optimally under different
                  conditions.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "testing-tools-technologies" ? "" : "dn"
                }`}
                id="testing-tools-technologies"
              >
                <h2 className="title fs48 fw6 mb32">
                  Advanced Testing Tools and Technologies
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  We leverage advanced testing tools and technologies to enhance
                  the efficiency and effectiveness of our quality assurance
                  processes. From test automation frameworks to performance
                  testing tools, we stay up-to-date with the latest advancements
                  in the industry. This allows us to deliver faster feedback,
                  identify defects early, and streamline the testing process,
                  ultimately saving you time and resources.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "skilled-qa-team" ? "" : "dn"
                }`}
                id="skilled-qa-team"
              >
                <h2 className="title fs48 fw6 mb32">
                  Dedicated and Skilled QA Team
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our quality assurance team comprises dedicated and skilled
                  professionals who are passionate about ensuring the highest
                  quality standards for your software. With their expertise and
                  attention to detail, they meticulously execute test cases,
                  identify defects, and provide valuable insights for
                  improvement. Their commitment to excellence guarantees that
                  your software meets and exceeds expectations.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "collaborative-approach" ? "" : "dn"
                }`}
                id="collaborative-approach"
              >
                <h2 className="title fs48 fw6 mb32">Collaborative Approach</h2>
                <p className="fs16 lh28 fc2 mb32">
                  We believe in fostering a collaborative approach throughout
                  the quality assurance process. We actively engage with your
                  development team, project stakeholders, and end-users to
                  gather insights, align expectations, and address any concerns.
                  By working closely together, we ensure that the quality
                  assurance efforts are aligned with your business goals and
                  deliver the desired outcomes.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "support-maintenance" ? "" : "dn"
                }`}
                id="support-maintenance"
              >
                <h2 className="title fs48 fw6 mb32">
                  Continuous Support and Maintenance
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our commitment to quality assurance extends beyond the initial
                  testing phase. We provide continuous support and maintenance
                  services to address any issues that may arise post-deployment.
                  Whether it's bug fixes, performance optimizations, or security
                  updates, our team is there to ensure that your software
                  remains reliable, secure, and performs at its best over time.
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

export default QualityAssuranceService;
