import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Showcase,
  theme,
  HeroSection,
  Circle,
  Example,
  Backgound,
  Text,
} from "../../Styles";
import image1 from "../../assets/showcase1.png";
import image2 from "../../assets/showcase2.png";
import Header from "../../components/Header";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Showcase>
        <Backgound />
        <Backgound medium />
        <Backgound big />
        <Example src={image1} primary />
        <Example src={image2} />
        <Header />
        <Text>
          کلاسور ؛<br />
          به روز ترین تلفیق <br /> ارتباط <br /> و آموزش
        </Text>
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
    </ThemeProvider>
  );
}
