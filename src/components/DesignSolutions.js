import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const DesignSolutions = () => {
  const [activeSection, setActiveSection] = useState("ui-design",);
  const [activeBetter,setActiveBetter]= useState("artistic-vision")

  const toggleSection = (sectionId) => {
    setActiveSection(sectionId);
    console.log(sectionId);
  };
  const toggleBetter = (section) => {
    setActiveBetter(section);
    console.log(section)
  };

  return (
    <><section class="back p32">
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
                <h2 className="title fs36 fw6 mb32">Design Solutions</h2>
                <h3 className="stories-title mb16">
                  Design Excellence, Unleashing the Power of Creativity.
                </h3>
                <p className="fs16 lh28 fc2 mb32">
                  At Abhisheka Technologies, we believe that good design has a
                  voice, but great design has the power to shout. Our team of
                  skilled designers is dedicated to creating designs that not
                  only captivate and engage but also deliver exceptional
                  results. We understand the importance of visual communication
                  and strive to create designs that effectively convey your
                  message, evoke emotions, and leave a lasting impression. With
                  our expertise in design, we go beyond aesthetics to ensure
                  that every element serves a purpose and aligns with your brand
                  identity. Trust us to bring your vision to life with designs
                  that make a statement and leave a lasting impact
                </p>
              </div>
              <div className="service-banner v-center">
                <img src="../images/desigining.jpg" alt="App Image 01" />
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
                    activeSection === "ui-design" ? "active" : ""}`}onClick={() => toggleSection("ui-design")}data-target="ui-design">
                      User Interface (UI) Design
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "ux-design" ? "active" : ""}`}onClick={() => toggleSection("ux-design")}data-target="ux-design">
                      User Experience (UX) Design
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "branding-identity-design" ? "active" : ""}`}onClick={() => toggleSection("branding-identity-design")}data-target="branding-identity-design">
                      Branding & Identity Design
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "graphic-print-design" ? "active" : ""}`}onClick={() => toggleSection("graphic-print-design")}data-target="graphic-print-design">
                      Graphic & Print Design
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "motion-graphics-animation" ? "active" : ""}`}onClick={() => toggleSection("motion-graphics-animation")}data-target="motion-graphics-animation">
                      Motion Graphics & Animation
                  </li>
                  <li className={`service-provide-list cp ${
                    activeSection === "web-mobile-app-design" ? "active" : ""}`}onClick={() => toggleSection("web-mobile-app-design")}data-target="web-mobile-app-design">
                      Web &amp; Mobile App Design
                  </li>
                </ul>
              </div>
              <div className="accordion-data-1 df fdc">
                <div className={`stories-content mr48 ${activeSection === "ui-design" ? "" : "dn"}`}id="ui-design"
              >
                  <h2 className="title fs36 fw6 mb32">
                    User Interface (UI) Design
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    As an artist, we always believed in the power of visually
                    stunning and captivating designs. When it comes to UI
                    design, my artistic vision comes to life as we craft
                    interfaces that not only look beautiful but also provide
                    seamless interactions. By combining my unique style and
                    techniques with intuitive design principles, we ensure that
                    every digital touchpoint becomes a work of art that
                    captivates users and leaves a lasting impression.
                  </p>
                </div>
                <div className={`stories-content mr48 ${activeSection === "ux-design" ? "" : "dn"}`}id="ux-design"
              >
                  <h2 className="title fs36 fw6 mb32">
                    User Experience (UX) Design
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Just like in my art, we always strive to create an engaging
                    and frictionless experience for users. With UX design, we
                    take on the role of a strategist and architect, carefully
                    planning and crafting user journeys. From wireframes to
                    prototypes, we ensure that every step of the user experience
                    is carefully thought out and designed to be intuitive and
                    enjoyable. By understanding the needs and desires of the
                    audience, we create an experience that resonates and keeps
                    them coming back for more.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "branding-identity-design" ? "" : "dn"}`}id="branding-identity-design"
                  >
                  <h2 className="title fs36 fw6 mb32">
                    Branding & Identity Design
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Branding is like creating a masterpiece that represents a
                    company or product. With my expertise in branding and
                    identity design, we develop compelling brand identities,
                    logos, and style guides that not only resonate with the
                    target audience but also leave a lasting impression. By
                    combining my knowledge of popular culture and consumerism, we
                    create designs that capture the essence of the brand and
                    ensure brand recall. Through my art, we help companies stand
                    out and make a statement in the crowded marketplace.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "graphic-print-design" ? "" : "dn"}`}id="graphic-print-design"
                  >
                  <h2 className="title fs36 fw6 mb32">
                    Graphic & Print Design
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Print materials have always been a canvas for my artistic
                    expression. With graphic and print design, we bring my unique
                    style and techniques to create visually appealing graphics
                    that leave a lasting impact. Whether it's designing
                    brochures, business cards, or banners, we ensure that every
                    piece reflects the brand's identity and maintains
                    consistency across different mediums. By pushing the
                    boundaries of what art can be, we create designs that not
                    only catch the eye but also provoke thought and discussion.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "motion-graphics-animation" ? "" : "dn"}`}id="motion-graphics-animation"
                  >
                  <h2 className="title fs36 fw6 mb32">
                    Motion Graphics & Animation
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Motion graphics and animation allow me to bring my art to
                    life in dynamic and captivating ways. By combining my
                    artistic vision with the power of movement, we enhance user
                    engagement and storytelling capabilities. Whether it's
                    creating animated videos or adding motion to digital
                    designs, we use my experimental approach to push the
                    boundaries of what can be achieved. Through motion, we create
                    an immersive experience that captivates the audience and
                    leaves a lasting impression.
                  </p>
                </div>
                <div
                  className={`stories-content mr48 ${activeSection === "web-mobile-app-design" ? "" : "dn"}`}id="web-mobile-app-design"
                  >
                  <h2 className="title fs36 fw6 mb32">
                    Web & Mobile App Design
                  </h2>
                  <p className="fs16 lh28 fc2 mb32">
                    In the digital age, designing for web and mobile apps is
                    like creating a new form of art. With my expertise in
                    merging form with function, we design responsive web layouts
                    and mobile app interfaces that provide a cohesive and
                    captivating experience across all devices. By understanding
                    the intersection of art and technology, we create designs
                    that not only look visually appealing but also ensure a
                    seamless user experience. Through my designs, we aim to make
                    the digital world a more beautiful and engaging place.
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
                <h2 className="title fs36 fw6 mb32">
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
                  Harnessing tools like Adobe Suite (Illustrator, Photoshop) and
                  UX/UI design principles, our designs are always user-centric
                  and aesthetically appealing.
                </p>
                <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
                <p className="fs16 lh28 fc2 mb32">
                  From crafting visually appealing logos for startups to
                  designing user-friendly interfaces for mobile apps or creating
                  interactive websites that resonate with audiences, our design
                  solutions are diverse and impactful.
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
                  <li className={`service-provide-list cp ${activeBetter === "artistic-vision" ? "active" : ""}`}onClick={() => toggleBetter("artistic-vision")}data-target="artistic-vision">
                      Artistic Vision
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "pop-art-influence" ? "active" : ""}`}onClick={() => toggleBetter("pop-art-influence")}data-target="pop-art-influence">
                      Pop Art Influence
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "celebrity-culture" ? "active" : ""}`}onClick={() => toggleBetter("celebrity-culture")}data-target="celebrity-culture">
                      Celebrity Culture
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "experimental-approach" ? "active" : ""}`}onClick={() => toggleBetter("experimental-approach")}data-target="experimental-approach">
                      Experimental Approach
                  </li>
                  <li className={`service-provide-list cp ${activeBetter === "collaborative-spirit" ? "active" : ""}`}onClick={() => toggleBetter("collaborative-spirit")}data-target="collaborative-spirit">
                      Collaborative Spirit
                  </li>
                </ul>
              </div>
              <div className="accordion-data-2 df fdc">
                <div className={`stories-content mr48  ${
                    activeBetter === "artistic-vision" ? "" : "dn"
                  }`}
                  id="artistic-vision"
                >
                  <h2 className="title fs48 fw6 mb32">Artistic Vision</h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Our services stand out from others because they are infused
                    with my unique artistic vision. As an iconic figure in the
                    art world, we bring a fresh and innovative perspective to
                    every design project. By incorporating elements of pop art
                    and exploring the intersection of art and popular culture,
                    our designs become visually stunning and thought-provoking
                    works of art.
                  </p>
                </div>
                <div className={`stories-content mr48  ${
                    activeBetter === "pop-art-influence" ? "" : "dn"
                  }`}
                  id="pop-art-influence"
                >
                  <h2 className="title fs48 fw6 mb32">Pop Art Influence</h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Our services are better than others because they embody the
                    essence of the pop art movement. With my influence, we
                    embrace the use of popular culture imagery and explore
                    themes of consumerism and mass media. By incorporating these
                    elements into our designs, we create visually striking and
                    culturally relevant experiences that resonate with
                    audiences.
                  </p>
                </div>
                <div className={`stories-content mr48  ${
                    activeBetter === "celebrity-culture" ? "" : "dn"
                  }`}
                  id="celebrity-culture"
                >
                  <h2 className="title fs48 fw6 mb32">Celebrity Culture</h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Our services excel because we understand the fascination
                    with celebrity culture and its impact on society. By
                    leveraging my interest in the intersection of art and fame,
                    we incorporate famous people and iconic figures into our
                    designs. This allows us to explore the commodification and
                    consumption of celebrities, creating designs that captivate
                    and intrigue.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "experimental-approach" ? "" : "dn"
                  }`}
                  id="experimental-approach"
                >
                  <h2 className="title fs48 fw6 mb32">Experimental Approach</h2>
                  <p className="fs16 lh28 fc2 mb32">
                    What sets our services apart is our commitment to pushing
                    the boundaries of what art and design can be. With my
                    experimental approach, we embrace unconventional materials
                    and techniques, creating designs that are truly unique and
                    innovative. By constantly challenging the status quo, we
                    deliver designs that are fresh, exciting, and unlike
                    anything else in the market.
                  </p>
                </div>
                <div
                  className={`stories-content mr48  ${
                    activeBetter === "collaborative-spirit" ? "" : "dn"
                  }`}
                  id="collaborative-spirit"
                >
                  <h2 className="title fs48 fw6 mb32">Collaborative Spirit</h2>
                  <p className="fs16 lh28 fc2 mb32">
                    Our services are superior because we embrace a collaborative
                    spirit and value cross-disciplinary collaboration. By
                    working with other artists, musicians, and writers, we bring
                    together different art forms to create truly immersive and
                    engaging experiences. This collaborative approach allows us
                    to infuse our designs with diverse perspectives and
                    influences, resulting in designs that are rich, dynamic, and
                    captivating.
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

export default DesignSolutions;
