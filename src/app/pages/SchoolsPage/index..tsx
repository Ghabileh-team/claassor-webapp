import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import {
  Showcase,
  Text,
  Form,
  HeroSection,
  Input,
  Button,
} from "src/styles/components";
import { Triangle, Wrapper } from "./styles";

export default function Schools() {
  return (
    <>
      <Showcase>
        <Header />
        <Text>
          بخش
          <br />
          مدارس
        </Text>
        <Form>
          <h2>ورود به پنل ادمین</h2>
          <Input placeholder="نام کاربری" />
          <Input placeholder="رمزعبور" />
          <Button>ورود</Button>
        </Form>
      </Showcase>
      <HeroSection light>
        <Wrapper big>
          <Triangle big></Triangle>
        </Wrapper>
        <Wrapper medium>
          <Triangle medium></Triangle>
        </Wrapper>
        <Wrapper>
          <Triangle></Triangle>
        </Wrapper>
      </HeroSection>
      <HeroSection>
        <Wrapper light big>
          <Triangle light big></Triangle>
        </Wrapper>
        <Wrapper light medium>
          <Triangle light medium></Triangle>
        </Wrapper>
        <Wrapper light>
          <Triangle light></Triangle>
        </Wrapper>
      </HeroSection>
      <HeroSection light>
        <Wrapper big>
          <Triangle big></Triangle>
        </Wrapper>
        <Wrapper medium>
          <Triangle medium></Triangle>
        </Wrapper>
        <Wrapper>
          <Triangle></Triangle>
        </Wrapper>
      </HeroSection>
    </>
  );
}
