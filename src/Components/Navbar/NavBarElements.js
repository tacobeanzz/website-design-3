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
  background: #2c2f33;
  /* background: #dddd; */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 80px;
  padding: 0 24px;
  background: #2c2f33;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  background: #2c2f33;
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.li`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  color: #99aab5;
  padding: 0 1rem;
  height: 100%;
  justify-content: flex-end;
  background: #2c2f33;

  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
  &.active {
    border-bottom: 3px solid #1780c7;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    color: #1780c7;
  }
`;

export const NavLogo = styled.ul`
  color: #1780c7;
  justify-self: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  /* height: 100%; */

  &:hover {
    transition: all 0.4s ease-in-out;
    color: #99aab5;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    justify-content: center;
  }
`;
