import React, { ReactElement } from "react";
import { Icon } from "src/styles/components";
import { ReactComponent as HomeIcon } from "src/assets/icons/Home.svg";
import { ReactComponent as NotificationIcon } from "src/assets/icons/Notification.svg";
import ProfileIcon from "src/assets/icons/profile.png";
import { ReactComponent as ArchiveIcon } from "src/assets/icons/Archive.svg";
import { ReactComponent as BookmarkIcon } from "src/assets/icons/Bookmark.svg";
import { ReactComponent as Logout } from "src/assets/icons/Logout.svg";
import { useHistory } from "react-router-dom";
import { LogoutBtn, NavContainer, NavLink } from "./styles";

const Parse = require("parse");

// const handleClick = (e) => {
//   const listItems = document.querySelector(".selected");
//   listItems.classList.remove("selected");
//   e.target.classList.add("selected");
//   console.log(e.target);
// };

const userLogout = (): void => {
  Parse.User.logOut();
};

interface Props {
  dashboard?: boolean;
  archive?: string;
  bookmarks?: string;
  notifications?: string;
  plans?: string;
}
export default function PanelNav({
  dashboard,
  archive,
  bookmarks,
  notifications,
}: Props): ReactElement {
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <NavContainer>
      <ul>
        <li>
          <NavLink className={path === "/users" ? "selected" : ""} to="/users">
            پنل کاربری
            <HomeIcon stroke={dashboard ? "white" : "#A7A7A7"} width="25" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={path === "/users/notifications" ? "selected" : ""}
            to="/users/notifications"
          >
            اعلانات
            <NotificationIcon
              width="25"
              stroke={notifications ? "white" : "#A7A7A7"}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={path.includes("/users/archive") ? "selected" : ""}
            to="/users/archive"
          >
            آرشیو
            <ArchiveIcon width="25" stroke={archive ? "white" : "#A7A7A7"} />
          </NavLink>
        </li>

        <li>
          <NavLink
            className={path === "/users/bookmarks" ? "selected" : ""}
            to="/users/bookmarks"
          >
            اندوخته
            <BookmarkIcon width="25" stroke={bookmarks ? "white" : "#A7A7A7"} />
          </NavLink>
        </li>

        <li>
          <NavLink
            className={path === "/users/profile" ? "selected" : ""}
            to="/users/profile"
          >
            پروفایل
            <Icon src={ProfileIcon} />
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
