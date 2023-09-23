import React from "react";
import { Link } from "react-router-dom";

const BlogSix = () => {

  return (
    <>
      <main>
      <section className="accordion-group stories space-default bg1">
        <div className="container df">
          <div className="blog-social">
            <div className="mb8"><img src="../images/facebook.png" alt=""/></div>
            <div className="mb8"><img src="../images/twitter.png" alt=""/></div>
            <div className="mb8"><img src="../images/linkedin.png" alt=""/></div>
          </div>
          <div className="blog-content">
            <div className="blog-writter df fdc">
                <h2 className="title fs28 fw6 mb32">
                    Material Design
                  </h2>
              <div className="df">
                <div className="blog-write-image mr16">
                    <img src="https://miro.medium.com/v2/resize:fill:88:88/0*_62sE-n7ct5DBSVt.jpg" alt=""/>
                  </div>
                  <div className="blog-writter-name-time">
                    <div className="blog-writter-name fs16">Abhishek Kumar</div>
                    <div className="blog-writter-time mt8 fs14">3 min read</div>
                  </div>
              </div>
            </div>
            <div className="blog-writter-content mt48">
              <p className="lh28 fs18 mb32">
                Nowadays it’s being around everywhere but what do it actually
                mean? This story goes around what I think about it.
              </p>
              <p className="lh28 fs18 mb32">
                Before 2014 Google IO, their Designers were working on designs
                to support cross platform from smaller watches to bigger TVs and
                to support 3rd party developers to express their functionality
                and branding in a consistent way” that results in material
                design.
              </p>
              <p className="lh28 fs18 mb32 tac">
                <img src="https://miro.medium.com/v2/resize:fit:640/1*z6S7HNHd5n6M1eq7Qdhxyg.gif" alt=""/>
              </p>
              <p className="lh28 fs18 mb16">
                But, what actually Google’s material design means and why do we
                use it? There are many perceptions, like
              </p>
              <p className="lh28 fs18 mb16">
                It’s a design philosophy that really trying to acknowledge
                technologies behind the interface.
              </p>
              <p className="lh28 fs18 mb16">
                It’s a Visual language for creating bold and graphic interfaces
                driven by typography, scale, color and position, and the list
                goes on.
              </p>
              <p className="lh28 fs18 mb32">
                “It’s a cross platform framework designing theory based on
                quantum paper to create user interfaces. Surface and shadow
                provides a visual cues in experiences of reality. Motion gives
                contacts to scene changes or encourages simple gesture and
                navigation”
              </p>
              <p className="lh28 fs24 mb32">
                Their idea comes from a physical device, inside a device there
                is a bit space so they can take an advantage to create a
                meaningful structure that goes underneath it. It’s almost like
                skeleton filling out its body from inside out.
              </p>
              <p className="lh28 fs18 fw6">But why do we follow these rules?</p>
              <p className="lh28 fs18 mb32">
                To develop a single underlying system that allows for a unified
                experience across platforms and device sizes.
              </p>
              <p className="lh28 fs18 fw6">Principles:</p>
              <p className="lh28 fs18 fw6">Material is the metaphor</p>
              <p className="lh28 fs18">
                It is inspired by the study of paper and the ink.
              </p>
              <p className="lh28 fs18">
                Surfaces and edges of the material provide visual cues that are
                grounded in reality. The fundamentals of light, surface, and
                movement are the keys to conveying how objects move, interact,
                and exist in space and in relation to each other.
              </p>
              <p className="lh28 fs18 mb32">
                Note: Realistic lighting shows seams, divides space, and
                indicates moving parts.
              </p>
              <p className="lh28 fs18 fw6">Bold, Graphic, Intentional</p>
              <p className="lh28 fs18 mb32">
                The basic elements in paper/ink design are typography, grids,
                space, scale, color, and use of imagery as they create
                hierarchy, meaning, and focus.
              </p>
              <p className="lh28 fs24 mb32 fw7">For Example,</p>
              <p className="lh28 fs18 mb32">
                Intentional white space create a bold and graphic interface that
                immerse the user in the experience.
              </p>
              <p className="lh28 fs18 mb32">
                Accent color used throughout the app to get an attention to its
                key elements. It gives bold and overwhelming looking.
              </p>
              <p className="lh28 fs24 mb32 fw7">Motion provides meaning</p>
              <p className="lh28 fs24 mb32">
                Motion is meaningful and appropriate, serving to focus attention
                and maintain continuity. Objects are presented to the user
                without breaking the continuity of experience even as they
                transform and re-organize.
              </p>
              <p className="lh28 fs18 mb32 tac mw680">
                <img src="https://miro.medium.com/v2/resize:fit:828/1*qW64dkKtAtAQOPTgg6Oekg.gif" alt=""/>
              </p>
              <p className="lh28 fs18 mb32 tac mw680">
                <img src="https://miro.medium.com/v2/resize:fit:828/1*ID9G4sfJe1GFkhDo7xcDYw.gif" alt=""/>
              </p>
              <p className="lh28 fs18 fw6">Z-depth with motion</p>
              <p className="lh28 fs18 mb32">
                When a paper cast a shadow with in z-axis on touch it can
                responds in couple of ways, paper may rise to meet them is sense
                of ripple motion like water show ripple circular motion when
                user touches it.
              </p>
              <p className="lh28 fs18 fw6">Layout</p>
              <p className="lh28 fs18 mb32">
                It can be of any width and height. They don’t have to be
                symmetrical, they can be asymmetric. Margins and key lines are
                the main aspects. We can arrange layouts in 2 ways:
              </p>

              <p className="lh28 fs18 mb32 tac mw680">
                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*zy8qBmVM-iv6pjUe1ZC2_w.png" alt=""/>
              </p>

              <p className="lh28 fs18 fw6">seam</p>
              <p className="lh28 fs18 mb32">
                * Layouts have Relationship with each other and they move with
                each other respectively.
              </p>
              <p className="lh28 fs18 mb32 tac mw680">
                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*MCvj-vDKWPOrSRFyoqC_Og.png" alt=""/>
              </p>

              <p className="lh28 fs18 fw6">step</p>
              <p className="lh28 fs18 mb32">
                * Layouts have Z-position which get overlapped with shadows and
                they don’t have relationship with each other.
              </p>

              <p className="lh28 fs18 fw6">Consolation</p>
              <p className="lh28 fs18 mb32">
                What I finally imagine it as a pictorial language that combine standard rules or methods of good design with something new and possibility of its technology. A value on user actions makes core functionality instantly visible and provides a stopping place for the user.
              </p>
              <p className="lh28 fs18">
                So this is what I think…
              </p>
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
    </main>

    </>
  );
};

export default BlogSix;
