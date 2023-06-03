import React from "react";
import "./Header.scss";
import fbLogoHeader from "../../assets/picture/facebook.png";
import searchIconHeader from "../../assets/picture/search-interface-symbol.png";
import logoGroupHeader from "../../assets/picture/logoGroup.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={fbLogoHeader} alt="" className="logoFB" />
      <div className="search">
        <img className="iconSearch" src={searchIconHeader} alt="" />
        <input
          className="inputSearch"
          type="text"
          placeholder="Tìm kiếm trên facebook"
        />
      </div>

      <div className="header_center">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-tv"></i>
        <i class="fa-solid fa-store"></i>
        <img className="groupPeopleIconHeader" src={logoGroupHeader} alt="" />
        <i class="fa-solid fa-gamepad"></i>
      </div>

      <div className="header_right">
        <i class="fa-solid fa-plus"></i>
        <i class="fa-brands fa-facebook-messenger"></i>
        <i class="fa-solid fa-bell"></i>
      </div>
    </div>
  );
}
