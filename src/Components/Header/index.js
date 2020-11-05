import React, { useEffect, useRef, useState, memo } from "react";
import "./Header.css";
import { Menu, MenuOpen } from "@material-ui/icons";

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarActive = useRef();
  async function toggleSidebar() {
    setSideBar(!sideBar);
  }
  useEffect(() => {
    if (sideBar) {
      sideBarActive.current.classList.add("active");
    } else {
      sideBarActive.current.classList.remove("active");
    }
  }, [sideBar]);

  return (
    <>
      <nav className="nav">
        <div className="nav__contents">
          <div className="nav__logo">
            <h1>Siyahul Haq</h1>
          </div>
          <div className="nav__items">
            <ul className="nav__itemsList">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav__button" onClick={toggleSidebar}>
            {!sideBar ? <Menu /> : <MenuOpen />}
          </div>
        </div>
      </nav>
      <div ref={sideBarActive} className="sidebar">
        <ul className="sidebar__itemsList">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default memo(Header);
