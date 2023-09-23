import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const MobileAppDevelopment = () => {
  const [activeSection, setActiveSection] = useState("native-app-development",);
  const [activeBetter,setActiveBetter]= useState("expertise-in-user-centric-design")

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
        <section className='stories space-default bg1'>
          <div className='container'>
            <div className='stories-content-grp df jcsb'>
              <div className='stories-content mr48'>
                <h2 className='title fs36 fw6 mb32'>Mobile App Development</h2>
                <h3 className='stories-title mb16'>
                  Unleash your digital dreams with our cutting-edge mobile app
                  creations. Revolutionize your world!
                </h3>
                <p className='fs16 lh28 fc2 mb32'>
                  In the ever-evolving realm of technology, mobile application
                  development plays a pivotal role in connecting businesses with
                  their customers. With our expertise in this field, we excel at
                  transforming mobile platforms into robust and efficient
                  business tools. Our team of skilled software engineers
                  harnesses cutting-edge technologies and employs agile
                  methodologies to craft seamless and user-friendly mobile
                  applications. From conceptualization to deployment, we ensure
                  that every aspect of the development process is meticulously
                  executed, adhering to industry standards and best practices.
                  With our mobile app development services, businesses can
                  unlock new opportunities, enhance customer engagement, and
                  stay ahead in the dynamic digital landscape.
                </p>
              </div>
              <div className='service-banner v-center'>
                <img
                  src='../images/mobile-development.jpg'
                  alt='App Image 01'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='accordion-group stories space-default bg5'>
          <div className='container'>
            <div className='stories-content-grp df'>
              <div className='stories-img'>
                <h2 className='title fs48 fw6 mb32'>We Provide</h2>
                <ul className='accordion-targets-1'>
                  <li className={`service-provide-list cp ${
                    activeSection === "native-app-development" ? "active" : ""}`}onClick={() => toggleSection("native-app-development")}data-target="native-app-development">
                      Native App Development
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "hybrid-app-development" ? "active" : ""}`}onClick={() => toggleSection("hybrid-app-development")}data-target="hybrid-app-development">
                      Hybrid App Development
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "user-interface" ? "active" : ""}`}onClick={() => toggleSection("user-interface")}data-target="user-interface">
                      User Interface (UI) & User Experience (UX) Design
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "app-maintenance" ? "active" : ""}`}onClick={() => toggleSection("app-maintenance")}data-target="app-maintenance">
                      App Maintenance & Support
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "app-performance" ? "active" : ""}`}onClick={() => toggleSection("app-performance")}data-target="app-performance">
                      App Performance Optimization
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "app-intergration" ? "active" : ""}`}onClick={() => toggleSection("app-intergration")}data-target="app-intergration">
                      App Integration & API Development
                  </li>
                </ul>
              </div>
              <div className='accordion-data-1 df fdc'>
                <div className={`stories-content mr48 ${activeSection === "native-app-development" ? "" : "dn"}`}id="native-app-development"
              >
                  <h2 className='title fs36 fw6 mb32'>
                    Native App Development
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    Creating powerful and efficient applications designed
                    specifically for platforms like Android, iOS, or Windows,
                    utilizing the full range of capabilities offered by each
                    device. These native apps are meticulously crafted to
                    deliver optimal performance and take advantage of the unique
                    features and functionalities of each platform, providing
                    users with a seamless and immersive experience.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "hybrid-app-development" ? "" : "dn"}`}id="hybrid-app-development"
                  >
                  <h2 className='title fs36 fw6 mb32'>
                    Hybrid App Development
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    Using frameworks like Flutter, we can create applications
                    that work seamlessly across multiple platforms with a single
                    codebase. This approach ensures consistency and greatly
                    reduces development time. By leveraging Flutter's
                    capabilities, developers can build apps that are compatible
                    with both iOS and Android, providing a unified user
                    experience. This efficient and time-saving method allows for
                    faster development and deployment of applications, making it
                    a valuable tool for modern app development.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "user-interface" ? "" : "dn"}`}id="user-interface"
                  >
                  <h2 className='title fs36 fw6 mb32'>
                    User Interface (UI) & User Experience (UX) Design
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    Creating app interfaces that are both intuitive and engaging
                    is crucial in providing users with a seamless and enjoyable
                    experience. By carefully designing the layout, navigation,
                    and visual elements, we can ensure that users can easily
                    navigate through the app and find what they need.
                    Additionally, incorporating interactive and visually
                    appealing features can enhance user engagement and make the
                    overall experience more enjoyable. Our goal is to create
                    interfaces that captivate users from the moment they start
                    using the app until the very end.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "app-maintenance" ? "" : "dn"}`}id="app-maintenance"
                  >
                  <h2 className='title fs36 fw6 mb32'>
                    App Maintenance & Support
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    We provide extensive post-launch support to ensure that your
                    app remains up-to-date and competitive in the market. Our
                    team is dedicated to addressing any bugs or issues that may
                    arise, ensuring a smooth user experience. Additionally, we
                    offer regular feature updates to keep your app fresh and
                    relevant, incorporating new functionalities and
                    enhancements. With our comprehensive support, you can be
                    confident that your app will continue to meet the evolving
                    needs of your users and stay ahead of the competition.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "app-performance" ? "" : "dn"}`}id="app-performance"
                  >
                  <h2 className='title fs36 fw6 mb32'>
                    App Performance Optimization
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    We specialize in optimizing app responsiveness, minimizing
                    load times, and ensuring seamless transitions to provide
                    users with an uninterrupted and efficient experience. By
                    fine-tuning the app's performance, we enhance its
                    responsiveness, allowing users to interact with it smoothly
                    and effortlessly. Our focus on reducing load times ensures
                    that users can access content quickly, without any
                    frustrating delays. With our expertise, we guarantee a
                    seamless user experience that is both efficient and
                    enjoyable.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "app-intergration" ? "" : "dn"}`}id="app-intergration"
                  >
                  <h2 className='title fs36 fw6 mb32'>
                    App Integration & API Development
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    We excel in facilitating the seamless integration of apps
                    with external systems or data sources, enabling enhanced
                    functionality and efficient data exchange. Our team
                    specializes in crafting robust APIs that ensure smooth
                    communication between different platforms, allowing for
                    seamless integration and data synchronization. By leveraging
                    our expertise, we empower your app to connect with external
                    systems and access valuable data, expanding its capabilities
                    and providing users with a more comprehensive and dynamic
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='phylospy space-default bg1 pr aft'>
          <div className='container pr zi1 df fdc aic'>
            <h2 className='section-title'>Discover our recent projects</h2>
            <div className='contact-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1'>
              <Link to='/contact-us' className='fc1'>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section className='stories space-default bg1'>
          <div className='container'>
            <div className='stories-content-grp df'>
              <div className='stories-img'>
                <h2 className='title fs36 fw6 mb32'>
                  Our Stack and
                  <br />
                  the Projects We
                  <br />
                  Work On
                </h2>
              </div>
              <div className='stories-content mr48'>
                <h2 className='fw6 mb16'>Languages & Tools</h2>
                <p className='fs16 lh28 fc2 mb32'>
                  Our mobile apps are crafted using the latest languages like
                  Java, Kotlin for Android, and Swift for iOS. For those seeking
                  a uniform experience across platforms, we offer hybrid
                  solutions with Flutter.
                </p>
                <h2 className='fw6 mb16'>Sample Scenarios/Project Types</h2>
                <p className='fs16 lh28 fc2 mb32'>
                  Be it an interactive gaming application, an e-commerce mobile
                  platform, a productivity tool for businesses, or a social
                  networking app, our team crafts solutions that resonate with
                  your target audience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='accordion-group stories space-default bg1'>
          <div className='container'>
            <div className='stories-content-grp df'>
              <div className='stories-img'>
                <h2 className='title fs36 fw6 mb32'>Why We Are Better</h2>
                <ul className='accordion-targets-2'>
                  <li className={`service-provide-list cp ${activeBetter === "expertise-in-user-centric-design" ? "active" : ""}`}onClick={() => toggleBetter("expertise-in-user-centric-design")}data-target="expertise-in-user-centric-design">
                      Expertise in User-Centric Design
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "robust-technical-proficiency" ? "active" : ""}`}onClick={() => toggleBetter("robust-technical-proficiency")}data-target="robust-technical-proficiency">
                      Robust Technical Proficiency
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "seamless-integration-capabilities" ? "active" : ""}`}onClick={() => toggleBetter("seamless-integration-capabilities")}data-target="seamless-integration-capabilities">
                      Seamless Integration Capabilities
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "agile-development-methodology" ? "active" : ""}`}onClick={() => toggleBetter("agile-development-methodology")}data-target="agile-development-methodology">
                      Agile Development Methodology
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "comprehensive-post-launch-support" ? "active" : ""}`}onClick={() => toggleBetter("comprehensive-post-launch-support")}data-target="comprehensive-post-launch-support">
                      Comprehensive Post-Launch Support
                  </li>
                </ul>
              </div>
              <div className='accordion-data-2 df fdc'>
                <div
                  className={`stories-content mr48  ${
                  activeBetter === "expertise-in-user-centric-design" ? "" : "dn"
                }`}
                id="expertise-in-user-centric-design"
              >
                  <h2 className='title fs48 fw6 mb32'>
                    Expertise in User-Centric Design
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    Our team excels in creating mobile apps with a strong focus
                    on user-centric design. We prioritize intuitive interfaces,
                    seamless navigation, and engaging user experiences, ensuring
                    that your app stands out from the competition and captivates
                    your target audience.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "robust-technical-proficiency" ? "" : "dn"
                  }`}
                  id="robust-technical-proficiency"
                >
                  <h2 className='title fs48 fw6 mb32'>
                    Robust Technical Proficiency
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    With our deep technical expertise, we develop mobile apps
                    that are built on a solid foundation. We leverage the latest
                    technologies and frameworks to create robust and scalable
                    solutions, ensuring that your app performs flawlessly across
                    different devices and platforms.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "seamless-integration-capabilities" ? "" : "dn"
                  }`}
                  id="seamless-integration-capabilities"
                >
                  <h2 className='title fs48 fw6 mb32'>
                    Seamless Integration Capabilities
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    We specialize in seamlessly integrating mobile apps with
                    external systems and APIs. Whether it's integrating with
                    third-party services, databases, or IoT devices, we ensure
                    smooth data exchange and enhanced functionality, allowing
                    your app to leverage the power of interconnected systems.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "agile-development-methodology" ? "" : "dn"
                  }`}
                  id="agile-development-methodology"
                >
                  <h2 className='title fs48 fw6 mb32'>
                    Agile Development Methodology
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    Our agile development approach ensures efficient project
                    management and rapid iterations. We prioritize
                    collaboration, flexibility, and adaptability, allowing us to
                    deliver high-quality mobile apps within tight timelines
                    while accommodating changes and feedback throughout the
                    development process.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "comprehensive-post-launch-support" ? "" : "dn"
                  }`}
                  id="comprehensive-post-launch-support"
                >
                  <h2 className='title fs48 fw6 mb32'>
                    Comprehensive Post-Launch Support
                  </h2>
                  <p className='fs16 lh28 fc2 mb32'>
                    We go beyond just development by providing comprehensive
                    post-launch support. From bug fixes to feature updates, we
                    ensure that your app remains current, competitive, and
                    bug-free. Our dedicated support team is always available to
                    address any issues and ensure a seamless user experience
                    even after the app is live.
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

export default MobileAppDevelopment;
