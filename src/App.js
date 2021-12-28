import React from 'react';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Alert from './Components/Alert/Alert';
import Section1 from './Components/section1/section1';
import Section2 from './Components/section2/section2';
import Section3 from './Components/section3/section3';
import Section4 from './Components/section4/section4';
import Section5 from './Components/section5/section5';
import Section6 from './Components/section6/section6';
import $ from "jquery";
import NewsApi from './Components/NewsApi/NewsApi';
// import ApppleLatestNews from './Components/NewsApi/AppleLetest';
// import {BrowserRouter} from 'react-router-dom';
// import Js from "./apple's-website/js/script";
// import Js from "./apple's-website/js/jquery-3-6-0-min";

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <NewsApi />
      {/* <ApppleLatestNews /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      
      <Footer />
      {/* <Js /> */}
    </div>
  );
}

export default App;