import React from "react";
import { Link } from "react-router-dom";

const Blog_One = () => {
  const codeOne = `
  public class LightWaverLayout extends FrameLayout {
  
    public LightWaverLayout(Context context) {
        this(context, null);
        
    }
  
    public LightWaverLayout(Context context, AttributeSet attrs) {
        this(context, attrs, 0);
    }
  
    public LightWaverLayout(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
    }
  
  }
    `;
  const codeTwo =`// Local Variable.
  private Paint coverPaint;
  private int lightWaverColor;
  private int lightWaverAnimationDuration;
  
  // Code inside constructor.
  setWillNotDraw(false);
  
  

  coverPaint = new Paint();
  coverPaint.setAntiAlias(true);
  coverPaint.setDither(true);
  coverPaint.setFilterBitmap(true);
  coverPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));

  

  TypedArray a = context.getTheme().obtainStyledAttributes(
          attrs,
          R.styleable.LightWaverLayout,
          0, 0);
  // Light waving duration and its color-wise attrs.XML
  try {
      lightWaverAnimationDuration = a.getInteger(
          R.styleable.LightWaverLayout_light_waver_animation_duration, 1500
          );
      lightWaverColor = a.getColor(
          R.styleable.LightWaverLayout_light_waver_color, getColor(R.color.light_waver_color)
          );
  } finally {
      a.recycle();
  }


  
  // Function for getting color code.
  private int getColor(int id) {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
          return getContext().getColor(id);
      } else {
          //noinspection deprecation
          return getResources().getColor(id);
      }
  }`;
  const codeThree=`<?xml version="1.0" encoding="utf-8"?>
  <resources>
      <declare-styleable name="LightWaverLayout">
          <attr name="light_waver_color" format="color|reference" />
          <attr name="light_waver_animation_duration" format="integer|reference" />
      </declare-styleable>
  </resources>`;
  const codeFour=`// Local Variables.
  private int coverOffsetX;
  private Canvas canvasForRendering;
  private boolean isAnimationStarted;
  
  @Override
  protected void dispatchDraw(Canvas canvas) {
      // Checking Exceptions.
      if (!isAnimationStarted || getWidth() <= 0 || getHeight() <= 0) {
          super.dispatchDraw(canvas);
      } else {
          dispatchDrawUsingBitmap(canvas);
      }
  }`;
  const codeFive=`private void dispatchDrawUsingBitmap(Canvas canvas) {
    super.dispatchDraw(canvas);

    Bitmap localAvailableBitmap = getDestinationBitmap();
    if (localAvailableBitmap == null) {
        return;
    }

    if (canvasForRendering == null) {
        canvasForRendering = new Canvas(localAvailableBitmap);
    }

    drawCover(canvasForRendering);
    canvas.save();
    canvas.clipRect(coverOffsetX, 0, coverOffsetX + getWidth() / 2, getHeight());
    canvas.drawBitmap(localAvailableBitmap, 0, 0, null);
    canvas.restore();

    localAvailableBitmap = null;
}`;
const codeSix=`private void drawCover(Canvas renderCanvas) {
  Bitmap localCoverBitmap = getSourceCoverBitmap();
  if (localCoverBitmap == null) {
      return;
  }

  renderCanvas.save();
  renderCanvas.clipRect(coverOffsetX, 0,
          coverOffsetX + localCoverBitmap.getWidth(),
          getHeight());

  super.dispatchDraw(renderCanvas);
  renderCanvas.drawBitmap(localCoverBitmap, coverOffsetX, 0, coverPaint);

  renderCanvas.restore();

  localCoverBitmap = null;
}`;
const codeSeven=`/**
* This function return destination Bitmap
* */
private Bitmap getDestinationBitmap() {
   if (destinationBitmap == null) {
       destinationBitmap = createBitmap(getWidth(), getHeight());
   }

   return destinationBitmap;
}`;
const codeEight=`/**
* This function return Bitmap Source for cover
* */
private Bitmap getSourceCoverBitmap() {
    if (sourceCoverBitmap != null) {
        return sourceCoverBitmap;
    }

    int width = getWidth() / 2;
    int height = getHeight();

    //Create bitmap for source of cover
    sourceCoverBitmap = createBitmap(width, height);
    Canvas canvas = new Canvas(sourceCoverBitmap);
    //Creating light Waving Gradient.
    LinearGradient gradient = new LinearGradient(
            0, 0,
            width, 0,
            new int[]{Color.TRANSPARENT, lightWaverColor, lightWaverColor, Color.TRANSPARENT},
            new float[]{0.25F, 0.5F, 0.5F, 0.75F},
            Shader.TileMode.CLAMP);

    canvas.rotate(20, width / 2, height / 2);
    //This Object holds the styling information for cover bitmap.
    Paint paint = new Paint();
    paint.setShader(gradient);
    int padding = (int) (Math.sqrt(2) * Math.max(width, height)) / 2;
    canvas.drawRect(0, -padding, width, height + padding, paint);

    return sourceCoverBitmap;
}`;
const codeNine=`/**
* This fun creates new bitmap
* */
private Bitmap createBitmap(int width, int height) {
   try {
       return Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
   } catch (OutOfMemoryError e) {
       System.gc();
       return Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
   }
}`;
const codeTen=`@Override
protected void onDetachedFromWindow() {
    resetLightWaver();
    super.onDetachedFromWindow();
}`;
const codeEleven=`//Local Variables. 
private ValueAnimator coverAnimator;
private void resetLightWaver() {
    if (coverAnimator != null) {
        coverAnimator.end();
        coverAnimator.removeAllUpdateListeners();
    }

    coverAnimator = null;
    isAnimationStarted = false;

    releaseBitMaps();
}`;
const codeTwelve=`private void releaseBitMaps() {
  if (sourceCoverBitmap != null) {
      sourceCoverBitmap.recycle();
      sourceCoverBitmap = null;
  }

  if (destinationBitmap != null) {
      destinationBitmap.recycle();
      destinationBitmap = null;
  }

  canvasForRendering = null;
}`;
const codeThirteen=`public void startLightWaverAnimation() {
  if (isAnimationStarted) {
      return;
  }

  if (getWidth() == 0) {
      getViewTreeObserver().addOnGlobalLayoutListener(
          new ViewTreeObserver.OnGlobalLayoutListener() {
          @Override
          public void onGlobalLayout() {
              LightWaverLayout.this.getViewTreeObserver().removeOnGlobalLayoutListener(this);
              startLightWaverAnimation();
          }
      });

      return;
  }

  Animator animator = getLightWaverAnimation();
  animator.start();
  isAnimationStarted = true;
}`;
const codeFourteen=`/**
* This fun return cover animation.
* */
private Animator getLightWaverAnimation() {
    if (coverAnimator != null) {
        return coverAnimator;
    }

    final int animationToX = getWidth();
    final int animationFromX = -animationToX;
    final int lightWaverBitmapWidth = getWidth() / 2;
    final int lightWaverAnimationFullLength = animationToX - animationFromX;

    coverAnimator = ValueAnimator.ofFloat(0.0F, 1.0F);
    coverAnimator.setDuration(lightWaverAnimationDuration);
    coverAnimator.setRepeatCount(ObjectAnimator.INFINITE);

    final float[] value = new float[1];
    coverAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
        @Override
        public void onAnimationUpdate(ValueAnimator animation) {
            value[0] = (Float) animation.getAnimatedValue();
            coverOffsetX = ((int) (animationFromX + lightWaverAnimationFullLength * value[0]));

            if (coverOffsetX + lightWaverBitmapWidth >= 0) {
                invalidate();
            }
        }
    });

    return coverAnimator;
}`;
const codeFifteen=`<com.abhishek.LightWaverLayout
android:id="@+id/light_waver"
android:layout_width="wrap_content"
android:layout_height="wrap_content">

// Layout Container
.....................
.....................

</com.abhishek.LightWaverLayout>
`;
const codeSixteen=`LightWaverLayout lightWaverLayout = (LightWaverLayout) findViewById(R.id.light_waver);
lightWaverLayout.startLightWaverAnimation();`;
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
                Create Light Waving Layout or Loader in android in 7 Steps
                </h2>
            <div className="df">
              <div className="blog-write-image mr16">
                  <img src="https://miro.medium.com/v2/resize:fill:88:88/0*_62sE-n7ct5DBSVt.jpg" alt=""/>
                </div>
                <div className="blog-writter-name-time">
                  <div className="blog-writter-name fs16">Abhishek Kumar</div>
                  <div className="blog-writter-time mt8 fs14">4 min read</div>
                </div>
            </div>
          </div>
            <div className="blog-writter-content mt48">
              <p className="lh28 fs18 mb32">
                Now a days, watching a light wave above empty layouts are in
                trend, while contents are being fetched in background. So, I
                thought of sharing some code snippets which will help us in
                reducing time &amp; efforts.
              </p>
              <p className="lh28 fs18 mb32">
                Here I will be sharing the required code to create a custom
                light waving layout.
              </p>
              <p className="lh28 fs18 mb32">
                For basic knowledge to draw in android we need following 4
                elements:
              </p>
              <ul className="accordion-targets-1">
                <li className="service-provide-list">
                  1- Bitmap :- For holding pixels
                </li>
                <li className="service-provide-list">
                  2- Canvas :- For hosting drawing cells (Writing into the
                  bitmap)
                </li>
                <li className="service-provide-list">
                  3- Drawing primitive (Eg. Rect, Path, Text, Bitmap.)
                </li>
                <li className="service-provide-list">
                  4- Paint :- For describing colours and styles
                </li>
              </ul>
              <p className="lh28 fs18 mb32">
                Here is the code, broken into 7 simple steps. The code includes
                all the 4 elements discussed above.
              </p>
              <p className="lh28 fs24 mb32 fw7">
                1- Create a Custom(light Waver) Layout which extends
                FrameLayout.
              </p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>                
                {codeOne}
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                2- Create a paint object inside a constructor.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df" style={{position:"relative"}} >           
                {codeTwo}
                
                </pre>

              <p className="lh28 fs24 mb32 fw7">A: Attrs.xml class</p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}} >
                {codeThree}            
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                3: Tell the inherited child classes of the ViewGroup to be drawn
                by overriding dispatchDraw method.
              </p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeFour}</pre>
              <pre className="lh28 fs18 mb32 bg5 pt16" style={{position:"relative"}}>                
              {codeFive}</pre>
              <p className="lh28 fs24 mb32 fw7">Function for drawing Cover</p>
              <pre className="lh28 fs18 mb32 bg5 pt16" style={{position:"relative"}}>               
              {codeSix}</pre>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeSeven}</pre>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>                
              {codeEight}</pre>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeNine}</pre>
              <p className="lh28 fs24 mb32 fw7">4: Reset Custom layout</p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>              
              {codeTen}</pre>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeEleven}</pre>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeTwelve}</pre>
              <p className="lh28 fs24 mb32 fw7">5: Function to start animation</p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeThirteen}</pre> 
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeFourteen}</pre> 
              <p className="lh28 fs24 mb32 fw7">6: Add Custom layout in your required XML layout</p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeFifteen}</pre> 
              
              <p className="lh28 fs24 mb32 fw7">7: Call start function from activity or fragment class.</p>
              <pre className="lh28 fs18 mb32  bg5 pt16" style={{position:"relative"}}>               
              {codeSixteen}</pre>  
            </div>
          </div>
        </div>
      </section>
      {/* <section className="phylospy space-default bg1 pr aft">
        <div className="container pr zi1 df fdc aic">
          <h2 className="section-title">Discover our recent projects</h2>
          <div className="contact-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1">
            <Link to="/contact-us" className="fc1">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="home-enquiry space-default bg5">
        <div className="container">
          <h2 className="section-title">Have a project in mind?</h2>
          <h3 className="stories-title mb48 tac">
            Book a free consultation with tech experts
          </h3>
          <div className="home-enquiry-content df jcsb ais">
            <form className="home-enquiry-form mr24 df jcsb fww flx1">
              <div className="input-box">
                <label for="userName">First Name*</label>
                <input className="input" placeholder="First Name*" type="text" id="home-enquiry-fname" name="userName"/>
              </div>
              <div className="input-box">
                <label for="lastName">Last Name*</label>
                <input className="input" placeholder="Last Name*" type="text" id="home-enquiry-lname" name="lastName"/>
              </div>
              <div className="input-box">
                <label for="email">Email*</label>
                <input className="input" placeholder="Email*" type="email" id="home-enquiry-email" name="email"/>
              </div>
              <div className="input-box">
                <label for="phone">Phone</label>
                <input className="input" placeholder="Phone" type="phone" id="home-enquiry-phone" name="phone"/>
              </div>
              <div className="input-box">
                <label for="company">Company</label>
                <input className="input" placeholder="Company" type="text" id="home-enquiry-company" name="company"/>
              </div>
              <div className="input-box">
                <label for="message">Message</label>
                <textarea className="textarea" placeholder="Write a messane" id="home-enquiry-message" name="message"></textarea>
              </div>
              <div className="input-box not-fdc flx100 aic">
                <input className="checkbox mr8 mb8" type="checkbox" id="home-enquiry-tnc" name="tnc"/>
                <label for="tnc">I agree to the
                  <Link to="/" className="fw6">Terms and Conditions</Link></label>
              </div>
              <div className="all-industry-btn md-btn bg4 fs14 fw5 box-center h48 br4 ttu ls1">
                <Link to="/" className="fc1">Send</Link>
              </div>
            </form>
            <div className="home-enquiry-img v-center">
              <img src="images/contact-us.jpg" alt="Enquiry 01" className="w100 br16"/>
            </div>
          </div>
        </div>
      </section> */}
    </main>

    </>
  );
};

export default Blog_One;
