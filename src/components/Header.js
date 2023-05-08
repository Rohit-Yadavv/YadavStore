import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="/storelogo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  margin-bottom: 10rem;

  .logo {
    width: 25rem;
    height: 2.5rem;
  }
`;
export default Header;
