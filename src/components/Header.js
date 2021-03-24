import React from "react";
import { Link } from "react-router-dom";
import { Button, List, Navbar } from "../Styles";

export default function Header() {
  return (
    <Navbar>
      <List>
        <li>
          <Link to="/schools">بخش مدارس</Link>
        </li>
        <li>
          <Link>درباره کلاسور</Link>
        </li>
        <li>
          <Link to="/login">
            <Button onClick={() => console.log("1")} li>
              ورود| ثبت نام
            </Button>
          </Link>
        </li>
      </List>
    </Navbar>
  );
}
