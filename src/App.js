// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main.js";
import Contact from "./components/contact.js";
import Services from "./components/services.js";
import Company from "./components/company";
import Sucess from "./components/sucess";
import Blog from "./components/Blog";
import Experties from "./components/experties";
import WebDevelop from "./components/webDevelop";
import MobileAppDevelopment from "./components/MobileAppDevelopment";
import ITConsultingServices from "./components/ITConsultingServices";
import BusinessAnalysis from "./components/BusinessAnalysis";
import QualityAssuranceService from "./components/QualityAssuranceService";
import DesignSolutions from "./components/DesignSolutions";
import DigitalMarketingServices from "./components/DigitalMarketingServices";
import Blog_One from "./components/Blog_One";
import Blog_Two from "./components/Blog_Two";
import Blog_Three from "./components/Blog_Three";
import BlogFour from "./components/BlogFour";
import BlogFive from "./components/BlogFive";
import BlogSix from "./components/BlogSix";
import ContactUs from "./components/contactUs";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/web-development' element={<WebDevelop />} />
        <Route
          path='/services/mobile-app-development'
          element={<MobileAppDevelopment />}/>
        <Route path='/services/it-consulting' element={<ITConsultingServices />} />
        <Route path='/services/business-analysis' element={<BusinessAnalysis />} />
        <Route path='/services/quality-assurance-service' element={<QualityAssuranceService />} />
        <Route path='/services/design-solutions' element={<DesignSolutions />} />
        <Route path='/services/digital-marketing-services' element={<DigitalMarketingServices />} />
        <Route path='/blogs/create-light-waving-layout-in-android-with-in-7-steps' element={<Blog_One />} />
        <Route path='/blogs/uses-of-interfaces-in-android-development' element={<Blog_Two />} />
        <Route path='/blogs/creating-a-simple-android-calendar-in-7-steps' element={<Blog_Three />} />
        <Route path='/blogs/creating-a-simple-android-drawing-view-in-5-steps' element={<BlogFour />} />
        <Route path='/blogs/getting-started-with-bottom-sheets' element={<BlogFive />} />
        <Route path='/blogs/material-design' element={<BlogSix />} />
        <Route path='/contact-us' element={<ContactUs />} />

        <Route path='/company' element={<Company />} />
        <Route path='/success-stories' element={<Sucess />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/experties' element={<Experties />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
