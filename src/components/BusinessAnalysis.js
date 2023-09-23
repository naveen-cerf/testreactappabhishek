import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BusinessAnalysis = () => {
  const [activeSection, setActiveSection] = useState("requirement-gathering",);
  const [activeBetter,setActiveBetter]= useState("data-driven-decision-making")

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
              <h2 className="title fs36 fw6 mb32">Business Analysis</h2>
              <h3 className="stories-title mb16">
                Navigating Complexity, Delivering Clarity: Empowering Businesses
                through Expert Business Analysis
              </h3>
              <p className="fs16 lh28 fc2 mb32">
                At our company, we understand that every decision made by a
                business has the power to shape its future. That's why our
                business analysis services are designed to ensure that these
                decisions are not only well-informed but also strategic and
                impactful. Our team of experts dives deep into your business
                operations, analyzing data, identifying trends, and uncovering
                insights that drive meaningful change. With our comprehensive
                approach, we provide you with the knowledge and guidance needed
                to make confident decisions that propel your business forward.
                Trust us to be your partner in shaping a successful future for
                your organization through informed and strategic business
                analysis
              </p>
            </div>
            <div className="service-banner v-center">
              <img src="../images/business-analysis.jpg" alt="App Image 01"/>
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
                    activeSection === "requirement-gathering" ? "active" : ""}`}onClick={() => toggleSection("requirement-gathering")}data-target="requirement-gathering">Requirement Gathering
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "process-modelling" ? "active" : ""}`}onClick={() => toggleSection("process-modelling")}data-target="process-modelling">Process Modelling
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "feasibility-analysis" ? "active" : ""}`}onClick={() => toggleSection("feasibility-analysis")}data-target="feasibility-analysis">Feasibility Analysis
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "data-analysis-reporting" ? "active" : ""}`}onClick={() => toggleSection("data-analysis-reporting")}data-target="data-analysis-reporting">Data Analysis & Reporting
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "stakeholder-management" ? "active" : ""}`}onClick={() => toggleSection("stakeholder-management")}data-target="stakeholder-management">Stakeholder Management
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "solution-evaluation-validation" ? "active" : ""}`}onClick={() => toggleSection("solution-evaluation-validation")}data-target="solution-evaluation-validation">Solution Evaluation & Validation
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div className={`stories-content mr48 ${activeSection === "requirement-gathering" ? "" : "dn"}`}id="requirement-gathering"
                  >
                <h2 className="title fs36 fw6 mb32">Requirement Gathering</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our dedicated team collaborates closely with stakeholders to
                  thoroughly understand and document their specific needs. By
                  fostering open communication and active listening, we ensure
                  project clarity and alignment from the very beginning. This
                  meticulous approach allows us to capture all requirements
                  accurately, setting the stage for a successful project outcome
                  that meets and exceeds expectations.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "process-modelling" ? "" : "dn"}`}id="process-modelling"
                  >
                <h2 className="title fs36 fw6 mb32">Process Modelling</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Leveraging industry-leading tools and methodologies such as
                  flowcharts and UML diagrams, we meticulously map out your
                  current and desired business processes. This comprehensive
                  process modeling enables us to identify areas for improvement
                  and innovation, streamlining operations and driving efficiency
                  throughout your organization. By visualizing the entire
                  process, we empower you to make informed decisions and
                  implement strategic changes that optimize your business
                  performance.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "feasibility-analysis" ? "" : "dn"}`}id="feasibility-analysis"
                  >
                <h2 className="title fs36 fw6 mb32">Feasibility Analysis</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our experienced team conducts a thorough feasibility analysis
                  of proposed projects or solutions. We carefully evaluate the
                  technical, economic, and operational aspects to determine
                  their practicality and viability. This rigorous assessment
                  ensures that you invest in initiatives that align with your
                  goals and have a high probability of success. By providing you
                  with a clear understanding of the potential risks and
                  benefits, we enable you to make well-informed decisions that
                  drive your business forward.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "data-analysis-reporting" ? "" : "dn"}`}id="data-analysis-reporting"
                  >
                <h2 className="title fs36 fw6 mb32">Data Analysis & Reporting</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Our data analysis expertise allows us to extract, analyze, and
                  interpret data to uncover valuable insights, trends, and
                  patterns. By transforming raw data into meaningful
                  information, we empower you to make data-driven decisions and
                  engage in strategic planning. Our comprehensive reporting
                  provides clear and concise visualizations, enabling you to
                  understand complex data and take actions that optimize your
                  business performance and stay ahead in a rapidly evolving
                  market.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "stakeholder-management" ? "" : "dn"}`}id="stakeholder-management"
                  >
                <h2 className="title fs36 fw6 mb32">Stakeholder Management</h2>
                <p className="fs16 lh28 fc2 mb32">
                  Effective stakeholder management is crucial for project
                  success. Our skilled team excels in facilitating communication
                  between project teams and stakeholders, ensuring alignment,
                  mitigating conflicts, and fostering collaborative
                  environments. By actively engaging with all stakeholders, we
                  create a shared understanding of project goals and
                  expectations. This collaborative approach promotes
                  transparency, builds trust, and ensures that everyone is
                  working towards a common vision, resulting in successful
                  project execution and stakeholder satisfaction.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "solution-evaluation-validation" ? "" : "dn"}`}id="solution-evaluation-validation"
                  >
                <h2 className="title fs36 fw6 mb32">
                  Solution Evaluation & Validation
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                  After implementation, we conduct a comprehensive evaluation of
                  the solution's effectiveness against initial requirements and
                  business objectives. This validation process ensures that
                  desired outcomes are achieved and provides valuable insights
                  for future adjustments. By analyzing the solution's
                  performance, gathering user feedback, and measuring key
                  metrics, we identify areas for improvement and recommend
                  necessary refinements. This iterative approach guarantees
                  continuous improvement, maximizes the value of your
                  investment, and ensures long-term success for your business
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
                We employ data analytics tools, business process modelling, and industry benchmarking to gain comprehensive insights into your operations.
              </p>
              <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
              <p className="fs16 lh28 fc2 mb32">
                Whether analysing consumer behaviour for a new product launch, gauging market dynamics before expansion, or reviewing internal processes for optimization, our analyses are thorough and actionable
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
                <li className={`service-provide-list cp ${activeBetter === "data-driven-decision-making" ? "active" : ""}`}onClick={() => toggleBetter("data-driven-decision-making")}data-target="data-driven-decision-making">Data-Driven Decision Making
                </li>
                <li className={`service-provide-list cp ${activeBetter === "stakeholder-engagement" ? "active" : ""}`}onClick={() => toggleBetter("stakeholder-engagement")}data-target="stakeholder-engagement">Stakeholder Engagement
                </li>
                <li className={`service-provide-list cp ${activeBetter === "risk-mitigation" ? "active" : ""}`}onClick={() => toggleBetter("risk-mitigation")}data-target="risk-mitigation">Risk Mitigation
                </li>
                <li className={`service-provide-list cp ${activeBetter === "scalability-flexibility" ? "active" : ""}`}onClick={() => toggleBetter("scalability-flexibility")}data-target="scalability-flexibility">Scalability and Flexibility
                </li>
                <li className={`service-provide-list cp ${activeBetter === "knowledge-transfer" ? "active" : ""}`}onClick={() => toggleBetter("knowledge-transfer")}data-target="knowledge-transfer">Knowledge Transfer
                </li>
                <li className={`service-provide-list cp ${activeBetter === "industry-best-practices" ? "active" : ""}`}onClick={() => toggleBetter("industry-best-practices")}data-target="industry-best-practices">Industry Best Practices
                </li>
              </ul>
              
            </div>
            <div className="accordion-data-2 df fdc">
              <div className={`stories-content mr48  ${
                    activeBetter === "data-driven-decision-making" ? "" : "dn"
                  }`}
                  id="data-driven-decision-making"
                >
                <h2 className="title fs48 fw6 mb32">Data-Driven Decision Making</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Our business analysis services are rooted in data-driven decision making. By leveraging advanced analytics and data visualization techniques, we help you make informed decisions based on accurate and reliable data. This empowers you to identify trends, uncover insights, and drive strategic initiatives that lead to business growth and success.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                    activeBetter === "stakeholder-engagement" ? "" : "dn"
                  }`}
                  id="stakeholder-engagement"
                >
                <h2 className="title fs48 fw6 mb32">
                  Stakeholder Engagement
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                    We prioritize stakeholder engagement throughout the business analysis process. By involving key stakeholders from the start, we ensure that their perspectives and requirements are considered, fostering a sense of ownership and buy-in. This collaborative approach leads to solutions that are not only technically sound but also aligned with the needs and expectations of all stakeholders.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                    activeBetter === "risk-mitigation" ? "" : "dn"
                  }`}
                  id="risk-mitigation"
                >
                <h2 className="title fs48 fw6 mb32">
                  Risk Mitigation
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                    Our business analysis services include a thorough assessment of potential risks and challenges. By identifying and analyzing risks early on, we help you develop mitigation strategies and contingency plans. This proactive approach minimizes the impact of potential disruptions and ensures the smooth execution of your business initiatives.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                    activeBetter === "scalability-flexibility" ? "" : "dn"
                  }`}
                  id="scalability-flexibility"
                >
                <h2 className="title fs48 fw6 mb32">Scalability and Flexibility</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Our business analysis services are designed to be scalable and flexible, allowing you to adapt to changing business needs and market dynamics. Whether you are a small startup or a large enterprise, our solutions can be tailored to your specific requirements, ensuring that they grow and evolve with your business.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                    activeBetter === "knowledge-transfer" ? "" : "dn"
                  }`}
                  id="knowledge-transfer"
                >
                <h2 className="title fs48 fw6 mb32">
                  Knowledge Transfer
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                    We believe in empowering our clients with the knowledge and skills needed to sustain and build upon our business analysis efforts. Through training and knowledge transfer sessions, we ensure that your team is equipped with the tools and techniques to continue driving business success long after our engagement is complete.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                    activeBetter === "industry-best-practices" ? "" : "dn"
                  }`}
                  id="industry-best-practices"
                >
                <h2 className="title fs48 fw6 mb32">
                    Industry Best Practices
                </h2>
                <p className="fs16 lh28 fc2 mb32">
                    Our business analysis services are grounded in industry best practices and standards. We stay up-to-date with the latest trends and methodologies, ensuring that our solutions are aligned with industry standards and deliver optimal results. This commitment to excellence sets us apart and ensures that you receive the highest quality of service.
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

export default BusinessAnalysis;
