import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  margin-top: 20px;
  font-size: 1rem;
  z-index: 10;
  /* background: #dddd; */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 80px;
  padding: 0 24px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.li`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  color: #000;
  padding: 0 1rem;
  height: 100%;
`;

export const NavLogo = styled.ul`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
