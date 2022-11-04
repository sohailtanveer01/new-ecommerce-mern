import React from "react";
import { ReactNavbar } from "overlay-navbar";
// import logo from "../../Images/logo.png";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="#F8C471"
      burgerColorHover="#F8C471"
      //   logo={logo}
      logoWidth="250px"
      logoHoverColor="#F8C471"
      link1Text="Home"
      link2Text="About"
      link3Text="Products"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/products"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="#F8C471"
      link1Size="1.5rem"
      link1Padding="3vmax"
      nav1justifyContent="flex-end"
      nav1Padding="2vmax"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      profileIcon={true}
      ProfileIconElement={MdAccountCircle}
      profileIconMargin = "1vmax"
      profileIconColor="#F8C471"
      profileIconUrl="/login"
      profileIconColorHover="white"
      searchIcon={true}
      searchIconMargin = "1vmax"
      SearchIconElement={MdSearch}
      searchIconColor="#F8C471"
      searchIconColorHover="white"
      cartIcon={true}
      cartIconColor="#F8C471"
      cartIconMargin = "1vmax"
      cartIconColorHover="white"
      CartIconElement={MdAddShoppingCart}
    />
  );
};

export default Header;
