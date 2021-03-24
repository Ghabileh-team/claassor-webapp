import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../../../components/Header";
import { Button, Input, Showcase, theme } from "../../../Styles";
const Parse = require("parse");

const Tabbar = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
`;

const Tab = styled.div`
  color: #ffffff;
  cursor: pointer;
  margin: 0.5em 1em;
  padding: 0.5em 0.5em;
  &.active {
    border-bottom: solid 2px ${(props) => props.theme.light};
  }
  font-family: "Kalameh-bold";
`;
const Title = styled.h1`
  color: ${(props) => props.theme.light};
  font-size: 12em;
  text-align: right;
  position: absolute;
  right: -35vh;
  top: 50%;
  z-index: 3;
  transition: 1s ease;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 50px black;
  font-family: "Kalameh-Black";
  &.hide {
    right: -100vw;
  }
`;
const Form = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 30vw;
  height: 30vw;
  border-radius: 2vw;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 20%;
  display: flex;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s ease;
  input {
    margin: 2vh;
  }
  &.center {
    left: 50%;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
`;
function FormComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  let {
    setHide,
    hide,
    setActive,
    active,
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
  } = props;

  function handleSignup() {
    const query = new Parse.Query(Parse.User);
    query.equalTo("username", username);
    query.find().then((res) => {
      console.log(res);
      if (res.length === 0) {
        setHide(true);
      } else {
      }
    });
  }

  function loginFunction() {
    Parse.User.logIn(username, password).then((res) => {
      console.log(res);
    });
  }

  function signupFunction() {
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("FirstName", firstname);
    user.set("LastName", lastname);
    user.set("email", email);
    user.set("Phonenumber", phoneNum);
    user.signUp().then((res) => {
      console.log(res);
    });
  }
  return (
    <Form className={hide ? "center" : null}>
      <Tabbar>
        <Tab
          onClick={() => {
            setActive(true);
            setHide(false);
          }}
          className={active ? "active" : null}
        >
          ورود
        </Tab>
        <Tab
          onClick={() => setActive(false)}
          className={active ? null : "active"}
        >
          ثبت نام
        </Tab>
      </Tabbar>
      {active ? (
        <>
          <FormContainer>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="نام کاربری"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
            />
            <Button
              onClick={loginFunction}
              style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
            >
              ورود
            </Button>
          </FormContainer>
        </>
      ) : (
        <>
          <FormContainer>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="کدملی"
            />

            {hide ? (
              <>
                {first ? (
                  <>
                    <Input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="نام"
                    />
                    <Input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="نام خانوادگی"
                    />
                  </>
                ) : null}
                {second ? (
                  <>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ایمیل"
                    />
                    <Input
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      placeholder="شماره تلفن"
                    />
                  </>
                ) : null}
                {third ? (
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمزعبور"
                  />
                ) : null}
              </>
            ) : null}
            <Button
              onClick={hide ? signupFunction : handleSignup}
              style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
            >
              ثبت نام
            </Button>
          </FormContainer>
        </>
      )}
    </Form>
  );
}

export default function Login() {
  const [active, setActive] = useState(true);
  const [hide, setHide] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Showcase>
        <Header />
        <FormComponent
          hide={hide}
          first={first}
          second={second}
          third={third}
          setFirst={setFirst}
          setSecond={setSecond}
          setThird={setThird}
          setHide={setHide}
          active={active}
          setActive={setActive}
        />
        <Title className={hide ? "hide" : null}>
          عضویت در
          <br /> کلاسور
        </Title>
      </Showcase>
    </ThemeProvider>
  );
}
