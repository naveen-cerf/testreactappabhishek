import React from "react";
import { Link } from "react-router-dom";

const BlogFive = () => {
const codeOne=`
dependencies {  
  compile 'com.android.support:appcompat-v7:25.0.1'
  compile 'com.android.support:design:25.0.1'
}`;
const codeTwo=`
<android.support.design.widget.CoordinatorLayout
.......
<include
    android:id="@+id/bottom_sheet_container"
    layout="@layout/bottom_sheets_main" />
</android.support.design.widget.CoordinatorLayout>`;
const codeThree=`
//Bottom Sheet View Mapping 
 @Bind(R.id.item_description) View bottomSheetView;
 BottomSheetBehavior sheetBehavior =   
 BottomSheetBehavior.from(bottomSheetView);`;
const codeFour=`
The callback to notify when bottom sheet events occur.
  sheetBehavior.setBottomSheetCallback(
  new BottomSheetBehavior.BottomSheetCallback() {
  @Override
  public void onStateChanged(
  @NonNull View bottomSheet, int newState) {
  }
  @Override
  public void onSlide(
  @NonNull View bottomSheet, float slideOffset) {

  }
  }`;
const codeFive=`
sheetBehavior.setState(BottomSheetBehavior.STATE_EXPANDED);
sheetBehavior.setState(BottomSheetBehavior.STATE_COLLAPSED);`;
const codeSix=`
public class BottomFragmentSheet extends BottomSheetDialogFragment {
  @Bind(R.id.item_description) TextView itemDescription;
  String msg;
@Override
 public View onCreateView(LayoutInflater inflater, 
  ViewGroup container, Bundle savedInstanceState) {
  View view = inflater.inflate(R.layout.modal_layout, container, false);
  ButterKnife.bind(this, view);
 msg = getArguments().getString("msg");
  itemDescription.setText(msg);
   return view;
        }
    }`;
const codeSevan=`
BottomFragmentSheet fragmentSheet = new BottomFragmentSheet();
fragmentSheet.show(getSupportFragmentManager(), BottomFragmentSheet.TAG);`;



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
                    Getting started with Bottom Sheets
                  </h2>
              <div className="df">
                <div className="blog-write-image mr16">
                    <img src="https://miro.medium.com/v2/resize:fill:88:88/0*_62sE-n7ct5DBSVt.jpg" alt=""/>
                  </div>
                  <div className="blog-writter-name-time">
                    <div className="blog-writter-name fs16">Abhishek Kumar</div>
                    <div className="blog-writter-time mt8 fs14">2 min read</div>
                  </div>
              </div>
            </div>
            <div className="blog-writter-content mt48">
              <p className="lh28 fs18 mb32">
                Bottom sheet is a rectangular view, covered with or wrapped with
                different views at bottom. Slides up from the bottom of screen
                to bring out unknown or more information.
              </p>
              <p className="lh28 fs18 mb32 fw7">Persistent bottom sheets</p>
              <p className="lh28 fs18 mb32">
                Combine with other layouts to form a single unit or substance to
                display supporting contents.
              </p>
              <p className="lh28 fs18 mb32 fw7">Modal bottom sheets</p>
              <p className="lh28 fs18 mb32">
                Alternatives to menus or simple dialogs. They appear above other
                UI elements. When a modal bottom sheet slides into the screen,
                the rest of the screen dims, giving focus to the bottom sheet.
              </p>
              <p className="lh28 fs18 mb32 fw7">How it works ?</p>
              <p className="lh28 fs18 mb32">
                Add latest appcompact and design libraries in app build.gradle
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df">                {codeOne}
            </pre>

              <p className="lh28 fs24 mb32 fw7">
                Bottom sheet behaviour performs as a child of a
                CoordinatorLayout.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16"> {codeTwo}
            </pre>
              <p className="lh28 fs24 mb32 fw7">
                app:layout_behavior="@string/bottom_sheet_behavior"
              </p>
              <p className="lh28 fs24 mb32">
                This allow our view to appear as a bottom sheet
              </p>
              <p className="lh28 fs24 mb32 fw7">app:behavior_peekHeight="xxxdp"</p>
              <p className="lh28 fs24 mb32">
                This allow us to set default height of the bottom sheet.
              </p>
              <p className="lh28 fs24 mb32 fw7">Set Bottom Sheet Beha viour</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">   {codeThree}
              </pre>

              <p className="lh28 fs24 mb32 fw7">
                Behaviour plugin to make it work as a bottom sheet
              </p>
              <p className="lh28 fs24 mb32 fw7">
                Utility function to get the associated view.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFour}
              </pre>

              <p className="lh28 fs24 mb32">
                On State Changed is called when it changes it state
              </p>
              <p className="lh28 fs18 fw7 mb24">
                STATE_DRAGGING, STATE_SETTLING, STATE_EXPANDED, STATE_COLLAPSED,
                STATE_HIDDEN
              </p>
              <p className="lh28 fs18 mb24">
                On Slide is called when it is being dragged
              </p>
              <p className="lh28 fs18 mb32">Expand and Collapse</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFive}
              </pre>

              <p className="lh28 fs24 mb24 fw7">Modal Bottom Sheet</p>
              <p className="lh28 fs24 mb24 ">Bottom Sheet Fragment</p>
              <p className="lh28 fs24 mb24 ">Create Class extending BottomSheetDialogFragment</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSix}
              </pre>
              <p className="lh28 fs24 mb32 fw7">Finally Show() on instance of Fragment</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSevan}
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

export default BlogFive;
