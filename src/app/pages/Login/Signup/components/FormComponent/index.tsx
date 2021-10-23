import React, { useState, ReactElement } from "react";
import { useHistory } from "react-router";
import { Button, Input } from "src/styles/components";
import Swal from "sweetalert2";
import { StyledLoginPage } from "./styles";

interface Props {
  className?: string;
  setHide: Function;
  hide: boolean;
  setActive: Function;
  active: boolean;
  first: boolean;
  setFirst: Function;
  second: boolean;
  setSecond: Function;
  third: boolean;
  setThird: Function;
}
export default function FormComponent(props: Props): ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const history = useHistory();
  const {
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

  function handleSignup(): void {
    Parse.User.logOut();
    const query = new Parse.Query(Parse.User);
    query.equalTo("username", username);
    query.find().then((res: any) => {
      console.log(res);
      if (res.length === 0) {
        setHide(true);
        setFirst(true);
      } else {
        Swal.fire({
          title: "کاربری با اطلاعات وارد شده وجود دارد",
          text: "لطفا از صحت اطلاعات وارد شده اطمینان حاصل نمایید",
          confirmButtonText: "باشه",
        });
      }
    });
  }

  function loginFunction(): void {
    Parse.User.logIn(username, password).then(() => {
      history.push("users");
    });
  }
  function signupFunction(): void {
    const user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("firstName", firstname);
    user.set("lastName", lastname);
    user.set("email", email);
    user.set("Phonenumber", phoneNum);
    user.signUp().then(() => {
      Swal.fire({
        title: "حساب کاربری شما با موفقیت ایجاد شد",
        text: "از این پس به صفحه داشبورد هدایت می شوید",
        confirmButtonText: "باشه",
        icon: "success",
      });
    });
  }

  return (
    <StyledLoginPage className={hide ? "center" : ""}>
      <div className="tabbar">
        <div
          onClick={() => {
            setActive(true);
            setHide(false);
            setFirst(false);
            setSecond(false);
            setThird(false);
          }}
          className={`tab ${active ? "active" : null}`}
        >
          ورود
        </div>
        <div
          onClick={() => setActive(false)}
          className={active ? "" : "active"}
        >
          ثبت نام
        </div>
      </div>
      {active ? (
        <>
          <div className="form-container">
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
              type="submit"
              onClick={loginFunction}
              style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
            >
              ورود
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="form-container">
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
                    <Button
                      onClick={() => {
                        if (firstname && lastname !== "") {
                          setFirst(false);
                          setSecond(true);
                        }
                      }}
                      style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
                    >
                      بعدی
                    </Button>
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
                    <Button
                      onClick={() => {
                        if (email && phoneNum !== "") {
                          setSecond(false);
                          setThird(true);
                        }
                      }}
                      style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
                    >
                      بعدی
                    </Button>
                  </>
                ) : null}
                {third ? (
                  <>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="رمزعبور"
                    />
                    <Input
                      value={rePassword}
                      onChange={(e) => setRePassword(e.target.value)}
                      placeholder="رمزعبور"
                    />
                    <Button
                      onClick={() => {
                        if (password && rePassword !== "") {
                          signupFunction();
                        }
                      }}
                      style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
                    >
                      بعدی
                    </Button>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="کدملی"
                />
                <Button
                  onClick={handleSignup}
                  style={{ alignSelf: "flex-start", marginLeft: "10.75vh" }}
                >
                  ثبت نام
                </Button>
              </>
            )}
          </div>
        </>
      )}
    </StyledLoginPage>
  );
}
