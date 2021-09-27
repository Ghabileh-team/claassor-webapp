import React from "react";
import styled from "styled-components";
import { Icon, PanelBox } from "../../styles/components";
import { ReactComponent as HomeIcon } from "../assets/icons/Home.svg";
import { ReactComponent as NotificationIcon } from "../assets/icons/Notification.svg";
import ProfileIcon from "../assets/icons/profile.png";
import { ReactComponent as ArchiveIcon } from "../assets/icons/Archive.svg";
import { ReactComponent as BookmarkIcon } from "../assets/icons/Bookmark.svg";
import { ReactComponent as Logout } from "../assets/icons/Logout.svg";
import { Link, useHistory } from "react-router-dom";

const Parse = require("parse");
const NavContainer = styled(PanelBox)`
  flex: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 20px;
  height: 74vh;
  margin-top: 3vh;
  ul {
    list-style: none;
    text-align: right;
    font-family: "dana-bold";
    color: #a7a7a7;
    li {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #a7a7a7;
        border-radius: 10px;
        margin-bottom: 1vh;
        padding: 1vh 2vh;
      }
    }

    a.selected {
      background: linear-gradient(94.84deg, #218ca5 13.78%, #1b164a 74.9%),
        #1b164a;
      color: white;
    }
    @media screen and (max-width: 1024px) {
      a {
        font-size: 0.7em;
      }
    }
    @media screen and (max-width: 720px) {
      a {
        font-size: 0.6em;
      }
    }
    @media screen and (max-width: 420px) {
      a {
        font-size: 0.5em;
      }
    }
  }
`;

const LogoutBtn = styled.div`
  display: flex;
  color: #a7a7a7;
  justify-content: flex-end;
  padding: 1vh 2vh;
  cursor: pointer;
  align-items: center;
  p {
    font-family: "Dana-bold";
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const handleClick = (e) => {
  const listItems = document.querySelector(".selected");
  listItems.classList.remove("selected");
  e.target.classList.add("selected");
  console.log(e.target);
};

const userLogout = () => {
  Parse.User.logOut();
};
export default function PanelNav(props) {
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <NavContainer>
      <ul>
        <li>
          <NavLink
            className={path === "/users" ? "selected" : null}
            to="/users"
          >
            پنل کاربری
            <HomeIcon
              stroke={props.dashboard ? "white" : "#A7A7A7"}
              width="25"
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={path === "/users/notifications" ? "selected" : null}
            to="/users/notifications"
          >
            اعلانات{" "}
            <NotificationIcon
              width="25"
              stroke={props.notifications ? "white" : "#A7A7A7"}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={path.includes("/users/archive") ? "selected" : null}
            to="/users/archive"
          >
            آرشیو
            <ArchiveIcon
              width="25"
              stroke={props.archive ? "white" : "#A7A7A7"}
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className={path === "/users/bookmarks" ? "selected" : null}
            to="/users/bookmarks"
          >
            اندوخته
            <BookmarkIcon
              width="25"
              stroke={props.bookmarks ? "white" : "#A7A7A7"}
            />
          </NavLink>
        </li>

        <li>
          <NavLink
            className={path === "/users/profile" ? "selected" : null}
            to="/users/profile"
          >
            پروفایل <Icon src={ProfileIcon} />
          </NavLink>
        </li>
      </ul>
      <LogoutBtn onClick={userLogout}>
        <p>خروج</p>
        <Logout stroke="#a7a7a7" width="25px" style={{ marginLeft: "5px" }} />
      </LogoutBtn>
    </NavContainer>
  );
}
