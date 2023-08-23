"use client";
import React from "react";
import Header from "./component/header/header";
import Content from "./content/content";
import Card from "./card/card";
import SectionFour from "./section-4/section-4";
import SectionFive from "./section-5/section-5";
import SectionSix from "./section-6/section-6";
import SectionSeven from "./section-7/section-7";
import SectionEight from "./section-8/section-8";
import SectionNine from "./section-9/section-9";
import SectionTen from "./section-10/section-10";
import SectionEleven from "./section-11/section-11";
import Footer from "./footer/footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Content />
      <Card />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen/>
      <SectionEleven/>
      <Footer/>
    </div>
  );
}
export default HomePage;
