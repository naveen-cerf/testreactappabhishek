import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const DigitalMarketingServices = () => {
  const [activeSection, setActiveSection] = useState("search-engine-optimization",);
  const [activeBetter,setActiveBetter]= useState("unique-artistic-vision")

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
              <h2 className="title fs36 fw6 mb32">Digital Marketing Services</h2>
              <h3 className="stories-title mb16">
                Where technology meets marketing brilliance - your brand's digital success starts here!              </h3>
              <p className="fs16 lh28 fc2 mb32">
                In this modern era of digital connectivity, the importance of visibility cannot be overstated. It is not enough for a brand to merely exist; it must also capture the attention and interest of its target audience. Our digital marketing services are designed to achieve just that. We go beyond simply reaching your audience; we strive to create a meaningful connection between your brand and its consumers. By leveraging the power of digital platforms, we ensure that your brand resonates with its audience, leaving a lasting impression. In this fast-paced and ever-evolving digital landscape, our services are tailored to help your brand thrive and stand out amidst the noise
              </p>
            </div>
            <div className="service-banner v-center">
              <img src="../images/digital-marketing.jpg" alt="App Image 01"/>
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
                    activeSection === "search-engine-optimization" ? "active" : ""}`}onClick={() => toggleSection("search-engine-optimization")}data-target="search-engine-optimization">Search Engine Optimization (SEO)
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "pay-per-click" ? "active" : ""}`}onClick={() => toggleSection("pay-per-click")}data-target="pay-per-click">Pay-Per-Click (PPC) Advertising
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "social-media-marketing" ? "active" : ""}`}onClick={() => toggleSection("social-media-marketing")}data-target="social-media-marketing">Social Media Marketing (SMM)
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "content-marketing" ? "active" : ""}`}onClick={() => toggleSection("content-marketing")}data-target="content-marketing">Content Marketing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "email-marketing" ? "active" : ""}`}onClick={() => toggleSection("email-marketing")}data-target="email-marketing">Email Marketing
                </li>
                <li className={`service-provide-list cp ${
                    activeSection === "online-reputation-management" ? "active" : ""}`}onClick={() => toggleSection("online-reputation-management")}data-target="online-reputation-management">Online Reputation Management (ORM)
                </li>
              </ul>
            </div>
            <div className="accordion-data-1 df fdc">
              <div className={`stories-content mr48 ${activeSection === "search-engine-optimization" ? "" : "dn"}`}id="search-engine-optimization"
              >
                <h2 className="title fs36 fw6 mb32">Search Engine Optimization (SEO)</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Enhance your online presence and increase visibility by optimizing your website's content and structure. By strategically incorporating relevant keywords and improving the overall user experience, your website can achieve higher rankings on popular search engines. This organic approach to driving traffic ensures that your target audience can easily find you, leading to increased brand exposure and potential conversions. Our team of experts will work diligently to ensure that your website stands out in the digital landscape.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "pay-per-click" ? "" : "dn"}`}id="pay-per-click"
              >
                <h2 className="title fs36 fw6 mb32">Pay-Per-Click (PPC) Advertising</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Experience immediate results and maximize your return on investment with our targeted ad campaigns on platforms such as Google Ads and Bing Ads. By carefully selecting keywords and demographics, we can create compelling advertisements that drive relevant traffic to your website. With our expertise in managing PPC campaigns, we will continuously monitor and optimize your ads to ensure optimal performance and cost-effectiveness. Let us help you reach your target audience and achieve your marketing goals efficiently.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "social-media-marketing" ? "" : "dn"}`}id="social-media-marketing"
              >
                <h2 className="title fs36 fw6 mb32">Social Media Marketing (SMM)</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Engage and connect with your audience on popular social media platforms like Facebook, Instagram, and LinkedIn through our captivating content and campaigns. Our team of creative professionals will craft compelling posts, stories, and videos that resonate with your target audience, fostering brand-customer relationships and driving conversions. By leveraging the power of social media, we can amplify your brand's reach, increase brand awareness, and ultimately boost your business's growth in the digital realm.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "content-marketing" ? "" : "dn"}`}id="content-marketing"
              >
                <h2 className="title fs36 fw6 mb32">Content Marketing</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Attract and engage your target audience by developing and distributing valuable, relevant, and consistent content. Our content marketing strategies go beyond traditional advertising, focusing on providing informative and entertaining content that establishes your brand as a thought leader in your industry. By creating blog posts, articles, videos, and other forms of content, we can nurture brand loyalty, increase website traffic, and position your business as a trusted source of information. Let us help you tell your brand's story and connect with your audience on a deeper level.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "email-marketing" ? "" : "dn"}`}id="email-marketing"
              >
                <h2 className="title fs36 fw6 mb32">Email Marketing</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Harness the power of personalized email campaigns to nurture leads, engage existing customers, and drive sales. Our team will design visually appealing and impactful emails that deliver tailored messaging to your target audience. By segmenting your email list and crafting compelling content, we can ensure that your emails resonate with recipients, leading to higher open rates, click-through rates, and conversions. Let us help you build strong relationships with your customers and keep them engaged with your brand.
                </p>
              </div>
              <div className={`stories-content mr48 ${activeSection === "online-reputation-management" ? "" : "dn"}`}id="online-reputation-management"
              >
                <h2 className="title fs36 fw6 mb32">Online Reputation Management (ORM)</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Protect and enhance your brand's digital reputation with our comprehensive online reputation management services. Our team will monitor and manage your brand's online presence, addressing any negative feedback or reviews promptly and professionally. We will also amplify positive testimonials and reviews, showcasing your brand's strengths and building trust with potential customers. By actively managing your online reputation, we can ensure that your brand maintains a positive image and stands out in the competitive digital landscape. Trust us to safeguard your brand's reputation and drive business growth.
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
                Utilizing platforms like Google Ads, SEO tools, and social media analytics, our campaigns are data-driven and results-oriented.
              </p>
              <h2 className="fw6 mb16">Sample Scenarios/Project Types</h2>
              <p className="fs16 lh28 fc2 mb32">
                Whether launching a product through a targeted PPC campaign, building brand presence with organic SEO, or engaging audiences through social media strategies, our approach is always holistic and tailored.
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
                <li className={`service-provide-list cp ${activeBetter === "unique-artistic-vision" ? "active" : ""}`}onClick={() => toggleBetter("unique-artistic-vision")}data-target="unique-artistic-vision">Unique Artistic Vision
                </li>
                <li className={`service-provide-list cp ${activeBetter === "celebrity-culture-expertise" ? "active" : ""}`}onClick={() => toggleBetter("celebrity-culture-expertise")}data-target="celebrity-culture-expertise">Celebrity Culture Expertise
                </li>
                <li className={`service-provide-list cp ${activeBetter === "experimental-approach-digital-marketing" ? "active" : ""}`}onClick={() => toggleBetter("experimental-approach-digital-marketing")}data-target="experimental-approach-digital-marketing">Experimental Approach to Digital Marketing
                </li>
                <li className={`service-provide-list cp ${activeBetter === "cross-disciplinary-collaboration" ? "active" : ""}`}onClick={() => toggleBetter("cross-disciplinary-collaboration")}data-target="cross-disciplinary-collaboration">Cross-Disciplinary Collaboration
                </li>
                <li className={`service-provide-list cp ${activeBetter === "thought-provoking-social-commentary" ? "active" : ""}`}onClick={() => toggleBetter("thought-provoking-social-commentary")}data-target="thought-provoking-social-commentary">Thought-Provoking Social Commentary
                </li>
              </ul>
            </div>
            <div className="accordion-data-2 df fdc">
              <div className={`stories-content mr48  ${
                  activeBetter === "unique-artistic-vision" ? "" : "dn"
                }`}
                id="unique-artistic-vision"
              >
                <h2 className="title fs48 fw6 mb32">Unique Artistic Vision</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Our team of experts understands the importance of incorporating artistic vision into every aspect of your online presence. Inspired by the iconic pop art movement, we infuse your website, ads, and social media content with vibrant colors, bold imagery, and a touch of Andy Warhol's signature style. By combining art and marketing, we create a visually captivating experience that sets you apart from the competition.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "celebrity-culture-expertise" ? "" : "dn"
                }`}
                id="celebrity-culture-expertise"
              >
                <h2 className="title fs48 fw6 mb32">Celebrity Culture Expertise</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Just as Andy Warhol was fascinated by celebrity culture, we recognize the power of leveraging famous personalities to enhance your brand's visibility. Our team has a deep understanding of the intersection between art and fame, and we know how to strategically incorporate celebrity endorsements and collaborations into your marketing campaigns. By tapping into the allure of celebrity, we can help your brand shine in the spotlight.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "experimental-approach-digital-marketing" ? "" : "dn"
                }`}
                id="experimental-approach-digital-marketing"
              >
                <h2 className="title fs48 fw6 mb32">Experimental Approach to Digital Marketing</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Like Andy Warhol, we believe in pushing the boundaries and exploring new possibilities. Our team embraces an experimental approach to digital marketing, constantly seeking innovative techniques and unconventional strategies to captivate your audience. From interactive website features to immersive social media campaigns, we strive to create a unique and memorable digital experience that leaves a lasting impression.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "cross-disciplinary-collaboration" ? "" : "dn"
                }`}
                id="cross-disciplinary-collaboration"
              >
                <h2 className="title fs48 fw6 mb32">Cross-Disciplinary Collaboration</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Collaboration is at the heart of our approach, just as it was for Andy Warhol. We understand the power of bringing together different creative minds to achieve extraordinary results. Our team collaborates with artists, designers, writers, and musicians to infuse your brand with a multidimensional artistic essence. By embracing cross-disciplinary collaboration, we create a cohesive and impactful brand narrative that resonates with your audience.
                </p>
              </div>
              <div className={`stories-content mr48  ${
                  activeBetter === "thought-provoking-social-commentary" ? "" : "dn"
                }`}
                id="thought-provoking-social-commentary"
              >
                <h2 className="title fs48 fw6 mb32">Thought-Provoking Social Commentary</h2>
                <p className="fs16 lh28 fc2 mb32">
                    Andy Warhol used art as a form of social commentary, challenging societal norms and sparking conversations. Similarly, we believe in the power of thought-provoking content to engage your audience on a deeper level. Our content marketing strategies go beyond surface-level promotion, aiming to provide valuable insights, raise awareness, and inspire meaningful discussions. By incorporating social commentary into your digital presence, we help your brand become a catalyst for change.
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

export default DigitalMarketingServices;
