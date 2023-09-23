import React from "react";
import { Link } from "react-router-dom";

const Blog_Three = () => {
const codeOne=`<LinearLayout
android:id="@+id/calendar_week_1"
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:orientation="horizontal"
android:weightSum="7" />

<LinearLayout
android:id="@+id/calendar_week_2"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="horizontal"
android:weightSum="7" />

<LinearLayout
android:id="@+id/calendar_week_3"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="horizontal"
android:weightSum="7" />

<LinearLayout
android:id="@+id/calendar_week_4"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="horizontal"
android:weightSum="7" />

<LinearLayout
android:id="@+id/calendar_week_5"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="horizontal"
android:weightSum="7" />

<LinearLayout
android:id="@+id/calendar_week_6"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="horizontal"
android:weightSum="7" />`;
const codeTwo=`weekOneLayout = (LinearLayout) view.findViewById(R.id.calendar_week_1);
weekTwoLayout = (LinearLayout) view.findViewById(R.id.calendar_week_2);
weekThreeLayout = (LinearLayout) view.findViewById(R.id.calendar_week_3);
weekFourLayout = (LinearLayout) view.findViewById(R.id.calendar_week_4);
weekFiveLayout = (LinearLayout) view.findViewById(R.id.calendar_week_5);
weekSixLayout = (LinearLayout) view.findViewById(R.id.calendar_week_6);
weeks = new LinearLayout[6];
days = new Button[6 * 7];

weeks[0] = firstWeekLayout;
weeks[1] = secondWeekLayout;
weeks[2] = thirdWeekLayout;
weeks[3] = fourthWeekLayout;
weeks[4] = firthWeekLayout;
weeks[5] = sixthWeekLayout;`;
const codeThree=`LinearLayout.LayoutParams buttonParams = new LinearLayout.LayoutParams(
  ViewGroup.LayoutParams.MATCH_PARENT,
  ViewGroup.LayoutParams.MATCH_PARENT);
  buttonParams.weight = 1;`;
const codeFour=`int daysArrayCount = 0;

for (int weekNumber = 0; weekNumber < 6; ++weekNumber) {
    for (int dayInWeek = 0; dayInWeek < 7; ++dayInWeek) {
        final Button day = new Button(context);
        day.setTextColor(Color.parseColor(GREY));
        day.setBackgroundColor(Color.TRANSPARENT);
        day.setLayoutParams(buttonParams);
        day.setTextSize((int) metrics.density * 5);
        day.setSingleLine();

        days[engDaysArrayCount] = day;
        weeks[weekNumber].addView(day);

        ++daysArrayCount;
    }
}`;
const codeFive=`calendar = Calendar.getInstance();
int currentDateDay = chosenDateDay = calendar.get(Calendar.DAY_OF_MONTH);
int currentDateMonth = chosenDateMonth = calendar.get(Calendar.MONTH);
int currentDateYear = chosenDateYear = 
calendar.get(Calendar.YEAR);
int daysInCurrentMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
int firstDayOfCurrentMonth = 
calendar.get(Calendar.DAY_OF_WEEK);`;
const codeSix=`int dayNumber = 1;
int daysLeftInFirstWeek = 0;
int indexOfDayAfterLastDayOfMonth = 0;`;
const codeSevan=`daysLeftInFirstWeek = 8;
indexOfDayAfterLastDayOfMonth = daysLeftInFirstWeek + daysInCurrentMonth;
for (int i = 8; i < 8 + daysInCurrentMonth; ++i) {
    if (currentDateMonth == chosenDateMonth
            &amp;&amp; currentDateYear == chosenDateYear
            &amp;&amp; dayNumber == currentDateDay) {
// To differentiate current days
        days[i].setBackgroundColor(getResources()
        .getColor(R.color.green));
        days[i].setTextColor(Color.WHITE);
    } else {
        days[i].setTextColor(Color.BLACK);
        days[i].setBackgroundColor(Color.TRANSPARENT);
    }
//Create Day Tags
    int[] dateArr = new int[3];
    dateArr[0] = dayNumber;
    dateArr[1] = chosenDateMonth;
    dateArr[2] = chosenDateYear;
    days[i].setTag(dateArr);
    days[i].setText(String.valueOf(dayNumber));

    days[i].setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            onDayClick(v);
        }
    });
    ++dayNumber;
}`;
const codeEight=`if (month > 0)
calendar.set(year, month - 1, 1);
else
calendar.set(year - 1, 11, 1);
int daysInPreviousMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

for (int i = daysLeftInFirstWeek - 1; i >= 0; --i) {
int[] dateArr = new int[3];

if (chosenDateMonth > 0) {
    if (currentDateMonth == chosenDateMonth - 1
            &amp;&amp; currentDateYear == chosenDateYear
            &amp;&amp; daysInPreviousMonth == currentDateDay) {
    } else {
        days[i].setBackgroundColor(Color.TRANSPARENT);
    }

    dateArr[0] = daysInPreviousMonth;
    dateArr[1] = chosenDateMonth - 1;
    dateArr[2] = chosenDateYear;
} else {
    if (currentDateMonth == 11
            &amp;&amp; currentDateYear == chosenDateYear - 1
            &amp;&amp; daysInPreviousMonth == currentDateDay) {
    } else {
        days[i].setBackgroundColor(Color.TRANSPARENT);
    }

    dateArr[0] = daysInPreviousMonth;
    dateArr[1] = 11;
    dateArr[2] = chosenDateYear - 1;
}

days[i].setTag(dateArr);
days[i].setText(String.valueOf(daysInPreviousMonth--));
days[i].setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        onDayClick(v);
    }
});
}`;
const codeNine=`int nextMonthDaysCount = 1;
for (int i = indexOfDayAfterLastDayOfMonth; i < days.length; ++i) {
    int[] dateArr = new int[3];

    if (chosenDateMonth < 11) {
if (currentDateMonth == chosenDateMonth + 1
                &amp;&amp; currentDateYear == chosenDateYear
                &amp;&amp; nextMonthDaysCount == currentDateDay) {
            days[i].setBackgroundColor(getResources()
            .getColor(R.color.green));
        } else {
            days[i].setBackgroundColor(Color.TRANSPARENT);
        }

        dateArr[0] = nextMonthDaysCount;
        dateArr[1] = chosenDateMonth + 1;
        dateArr[2] = chosenDateYear;
    } else {
if (currentDateMonth == 0
                &amp;&amp; currentDateYear == chosenDateYear + 1
                &amp;&amp; nextMonthDaysCount == currentDateDay) {
            days[i].setBackgroundColor(getResources()
            .getColor(R.color.green));
        } else {
            days[i].setBackgroundColor(Color.TRANSPARENT);
        }

        dateArr[0] = nextMonthDaysCount;
        dateArr[1] = 0;
        dateArr[2] = chosenDateYear + 1;
    }

    days[i].setTag(dateArr);
    days[i].setTextColor(Color.parseColor(GREY));
    days[i].setText(String.valueOf(nextMonthDaysCount++));
    days[i].setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            onDayClick(v);
        }
    });
}`;
const codeTen=` int[] taginfo = (int[]) v.getTag();`;


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
                    <div className="blog-writter-time mt8 fs14">4 min read</div>
                  </div>
              </div>
            </div>
            <div className="blog-writter-content mt48">
              <p className="lh28 fs18 mb32">
                Now a days, our designers always wants us to develop their new
                designs. In which one of our big changes are always like how we
                display our days and months in our application’s calendar.
              </p>
              <p className="lh28 fs18 mb32">
                This story is about how we develop a single regular calendar in
                7 steps.
              </p>
              <p className="lh28 fs18 mb32">
                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*G-7OCFDI5ETpNXtXLNXnMA.jpeg" alt=""/>
              </p>
              <p className="lh28 fs18 mb32">
                As single month consists of days with previous month, next month
                and current month so our approach to develop this design is to
                create 7(Days in week)*6 (Weeks in a month) = 42 numbers of day
                views(In this case Button views) and add those views to a
                layout(In this case LinearLayout).
              </p>
              <p className="lh28 fs24 mb32 fw7">1. Create an xml for weeks.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df">                {codeOne}
            </pre>

              <p className="lh28 fs24 mb32 fw7">2. Initialize days and weeks.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16 fww df">  {codeTwo}
                </pre>

              <p className="lh28 fs24 mb32 fw7">
                3. Create parameter for days button.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16"> {codeThree}
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                4. Create each days and add days in weeks.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFour}
              </pre>

              <p className="lh28 fs24 mb32 fw7">
                5. Get values from android’s calendar instance.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeFive}
              </pre>

              <p className="lh28 fs24 mb32 fw7">6. Let’s add numbers in days.</p>
              <p className="lh28 fs24  fw7">
                Creating tags with day number, month and year.
              </p>
              <p className="lh28 fs24">
                - Adding Click listener in each days.
              </p>
              <p className="lh28 fs24 mb32">
                - Adding numbers of current months.
              </p>

              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSix}
              </pre>

              <p className="lh28 fs24 mb32 fw7">
                If first day of current month is not Sunday.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeSevan}
              </pre>
              <p className="lh28 fs24 mb32 fw7">Adding previous month numbers.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeEight}
              </pre>

              <p className="lh28 fs24 mb32 fw7">Adding next month numbers.</p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeNine}
              </pre>
              <p className="lh28 fs24 mb32 fw7">
                7. Do stuff on day click Listener.
              </p>
              <pre className="lh28 fs18 mb32 bg5 pt16">                {codeTen}
              </pre>
              <p className="lh28 fs24 mb32 fw7">That’s it!</p>
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

export default Blog_Three;
