import React from "react";
import {
  Showcase,
  HeroSection,
  Circle,
  Example,
  Backgound,
  Text,
} from "src/styles/components";
import image1 from "src/assets/showcase1.png";
import image2 from "src/assets/showcase2.png";
import Header from "src/app/components/Header";

export default function Home() {
  return (
    <>
      <Showcase>
        <Header />
        <Text>
          کلاسور ؛<br />
          به روز ترین تلفیق <br /> ارتباط <br /> و آموزش
        </Text>
        <Backgound />
        <Backgound medium />
        <Backgound big />
        <Example src={image1} primary />
        <Example src={image2} />
      </Showcase>
      <HeroSection light>
        <Circle light big></Circle>
        <Circle light medium></Circle>
        <Circle light></Circle>
      </HeroSection>
      <HeroSection>
        <Circle big></Circle>
        <Circle medium></Circle>
        <Circle></Circle>
      </HeroSection>
      <HeroSection light>
        <Circle light big></Circle>
        <Circle light medium></Circle>
        <Circle light></Circle>
      </HeroSection>
    </>
  );
}
