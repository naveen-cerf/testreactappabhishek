import React from "react";
import { Link } from "react-router-dom";

const BlogFour = () => {
const codeOne=`
private ArrayList<Path> pathLists = new ArrayList<>();
private ArrayList<Paint> paintLists = new ArrayList<>();
private float startX = 0F;
private float startY = 0F;

private void init() {
    pathLists.add(new Path());
    paintLists.add(createPaint());
    pathIndex++;
}`;
const codeTwo=`
Paint paint = new Paint();
paint.setStyle(Paint.Style.STROKE);
paint.setStrokeWidth(3F);`;
const codeThree=`
Path path = new Path();
startX = event.getX();
startY = event.getY();

path.moveTo(startX, startY);`;
const codeFour=`
@Override
protected void onDraw(Canvas canvas) {
    super.onDraw(canvas);
    canvas.drawColor(Color.WHITE);

    for (int index = 0; i < pathIndex; index++) {
        Path path = pathLists.get(index);
        Paint paint = paintLists.get(index);

        canvas.drawPath(path, paint);
    }
}`;
const codeFive=`
@Override
public boolean onTouchEvent(MotionEvent event) {
    switch (event.getAction()) {
        case MotionEvent.ACTION_DOWN:
            ----
            break;
        case MotionEvent.ACTION_MOVE:
            ----
            break;
        default:
            break;
    }
    // Invalidate the whole view. If the view is visible.
    invalidate();
    return true;
}`;
const codeSix=`
float x = event.getX();
float y = event.getY();
Path path = pathLists.get(pathIndex - 1);;
path.lineTo(x, y);`;
const codeSevan=` 
updateIndex(createPath(event));`;
const codeEight=`
pathIndex == pathLists.size())
pathLists.add(path);
paintLists.add(createPaint());
pathIndex++;`;

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
                    Creating A Simple Custom Drawing View In Android within 5 Steps
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
              <p className="lh28 fs18 mb32 tac">
                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZgoA1fno9vIy6zi3UlCIqA.jpeg" alt=""/>
              </p>
              <p className="lh28 fs18 mb32">
                This story shows how to create a simple canvas view which
                influence drawing.
              </p>
              <p className="lh28 fs18 mb32 tac">
                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*UewdHBIfjrfxds7Esvlozw.jpeg" alt=""/>
              </p>
              <p className="lh28 fs18 mb32">
                Android structure has huge view classes for communicating with
                user and performing various tasks but sometime our application
                has needs that are not covered by the build-in views.
              </p>
              <p className="lh28 fs18 mb32 tac">
                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*kVVReia6LbiVhFa2eCw_jg.jpeg" alt=""/>
              </p>
              <p className="lh28 fs24 mb32">
                To build a view we need 4 ingredient that are Bitmap, Canvas,
                Drawing primitive(Path) &amp; Paint.
              </p>

              <p className="lh28 fs24 mb24 fw7">Lets get started!</p>
              <p className="lh28 fs24 mb32">
                First we have to Extend View class with our class and implement
                constructor methods
              </p>
              <p className="lh28 fs24 mb24 fw7">
                1. Initialize drawing primitive and paint in all the
                constructors.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df">                {codeOne}
            </pre>

              <p className="lh28 fs24 mb32 fw7">Create instance of Paint.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeTwo}
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                Create instance of Path and moving current position.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeThree}
              </pre>

              <p className="lh28 fs24 mb32 fw7">
                2. Override the onDraw method and update Canvas to draw the
                Path.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFour}
              </pre>

              <p className="lh28 fs24 mb32 fw7">
                3. Override the onTouchEvent and set event listener for drawing
              </p>
              <p className="lh28 fs18">
                A view is not only responsible for drawing but also to handle
                events.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFive}
              </pre>

              <p className="lh28 fs24 mb32 fw7">Action on Move Motion Event.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSix}
              </pre>
              <p className="lh28 fs24 mb32 fw7">Action on Down Motion Event.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSevan}
              </pre>

              <p className="lh28 fs24 mb32 fw7">4. Handle Path Index for ”Undo” and “Redo” method.</p>
              <p className="lh28 fs18 mb32">Update instances of Path and Paint</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeEight}
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                On Final step 5. Add the custom class in xml.
              </p>
              <p className="lh28 fs24 mb32">
                See the magic!
              </p>
              <p className="lh28 fs24 mb32 fw7"><img src="https://miro.medium.com/v2/resize:fit:640/1*O2zxsPhxLI75EKBoxFHr7g.gif" alt=""/></p>
              <p className="lh28 fs24 mb32">What to you think about this 5 steps to create canvas view?</p>
              <p className="lh28 fs24 mb32">If I missed something. Let me know in the comments and I will look into it!</p>
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

export default BlogFour;
