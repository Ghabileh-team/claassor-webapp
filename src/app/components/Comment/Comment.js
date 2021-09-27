import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Image, TextContainer, Wrapper } from "./Comment.elements";
export default function Comment({ data }) {
  const [day, setDay] = useState(false);
  const [month, setMonth] = useState(false);
  const [hour, setHour] = useState(false);
  const [minute, setMinute] = useState(false);
  var one_day = 1000 * 60 * 60 * 24;
  const date = new Date();
  const secounds = date - data.createdAt;
  const days = secounds / one_day;
  const months = secounds / (one_day * 30);
  const hours = secounds / (1000 * 60 * 60);
  const minutes = secounds / (1000 * 60);

  useEffect(() => {
    if (days >= 1) {
      setDay(true);
    }
    if (months >= 1) {
      setMonth(true);
    }
    if (hours >= 1) {
      setHour(true);
    }
    if (minutes >= 1) {
      setMinute(true);
    }
  }, []);

  console.log(secounds / one_day);
  return (
    <Wrapper>
      <Container>
        <Image src={data.get("sender").get("image").url()} />
        <TextContainer>
          <h4>
            {data.get("sender").get("firstName")}
            <span>
              {month
                ? `${Math.floor(months)}month`
                : day
                ? `${Math.floor(days)}d`
                : hour
                ? `${Math.floor(hours)}h`
                : minute
                ? `${Math.floor(minutes)}m`
                : `${Math.floor(secounds)}s`}
            </span>
          </h4>
          <p>{data.get("message")}</p>
        </TextContainer>
      </Container>
    </Wrapper>
  );
}
