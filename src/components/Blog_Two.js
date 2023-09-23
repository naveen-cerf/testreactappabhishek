import React from "react";
import { Link } from "react-router-dom";

const Blog_Two = () => {
const codeOne=`public interface AdapterCallBackListener {
  void onRowClick(String searchText);
}
public interface OnFragmentInteractionListener {
  void onFragmentInteraction();
}`;
const codeTwo=`public class CustomActivity extends AppCompatActivity
implements CustomAdapter.AdapterCallBackListener,
    CustomFragment.OnFragmentInteractionListener{
void onRowClick(String searchText {
System.out.println("Today’s SearchText" + searchText);
}
void onFragmentInteraction() {
System.out.println("On Fragment Interact");
}
}`;
const codeThree=`adapter.setCallBackListner(new CustomAdapter.AdapterCallBackListener() {
  @Override
  public void onRowClick(String searchText) {
      Toast.makeText(CustomActivity.this,
              searchText, Toast.LENGTH_SHORT).show();

  }
});
//setCallBackListner method declared in CustomAdapter.`;
const codeFour=`public class CustomAdapter {

  private AdapterCallBackListener callBackListener;
  ................
  ................

  public void setCallBackListner(AdapterCallBackListener callBackListener) {
      this.callBackListener = callBackListener;
  }
  searchRow.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
              callBackListener.onRowClick(searchText);
          }
      });

  public interface AdapterCallBackListener{
      void onRowClick(String searchText);
  }
}`;
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
                    Uses of Interfaces in android Development
                  </h2>
              <div className="df">
                <div className="blog-write-image mr16">
                    <img src="https://miro.medium.com/v2/resize:fill:88:88/0*_62sE-n7ct5DBSVt.jpg" alt=""/>
                  </div>
                  <div className="blog-writter-name-time">
                    <div className="blog-writter-name fs16">Abhishek Kumar</div>
                    <div className="blog-writter-time mt8 fs14">1 min read</div>
                  </div>
              </div>
            </div>
            <div className="blog-writter-content mt48">
              <p className="lh28 fs18 mb32 fw7">
                It is a collection of constants, methods(abstract, static and
                default) and nested types.
              </p>
              <ul className="accordion-targets-1">
                <li className="service-provide-list fw7">
                  All the methods of the interface needs to be defined in the
                  class.
                </li>
                <li className="service-provide-list fw7">
                  Interface is like a Class.
                </li>
                <li className="service-provide-list">
                  Class describes the behaviors of implements.
                </li>
              </ul>
              <p className="lh28 fs18 mb32 fw7">Difference From Class</p>
              <ul className="accordion-targets-1">
                <li className="service-provide-list fw7">
                  Can not instantiate an interface and can't contain instance
                  fields.
                </li>
                <li className="service-provide-list fw7">
                  An interface has no constructors.
                </li>
                <li className="service-provide-list">
                  All of the methods in an interface are abstract.
                </li>
                <li className="service-provide-list">
                  All the fields that can appear in an interface must be
                  declared both static and final.
                </li>
                <li className="service-provide-list">
                  An interface can extend multiple interfaces.
                </li>
              </ul>
              <p className="lh28 fs24 mb32 fw7">
                The interface keyword is used to declare an interface.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">  
              {codeOne}              
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                A class uses the implements keyword to implement an interface
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df"> 
              {codeTwo}               
                </pre>

              <p className="lh28 fs24 mb32 fw7">
                Class uses Interface as function.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">  
              {codeThree}              
              </pre>
              <p className="lh28 fs24 mb32 fw7">Insert value in interfaces.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">               
              {codeFour}
              </pre>
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

export default Blog_Two;
