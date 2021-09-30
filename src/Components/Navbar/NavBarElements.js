import styled from "styled-components";

export const Nav = styled.nav`
  /* display: flex; */
  /* justify-content: space-between; */
`;

export const NavbarContainer = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: flex-end; */
`;

export const NavMenu = styled.ul`
  /* background-color: #ffff; */
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
`;
export const NavItem = styled.li`
  /* background-color: #ffff; */
  /* display: flex; */
  /* align-items: flex-end; */
  /* justify-content: space-between; */
`;

export const NavLinks = styled.li`
  /* background-color: #ffff; */
  /* display: flex; */
  align-items: flex-end;
  /* justify-content: flex-end; */

  /* @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  } */
  &.active {
    border-bottom: 3px solid #1780c7;
  }

  &:hover {
    transition: all 0.4s ease-in-out;
    color: #1780c7;
  }
`;

export const NavLogo = styled.ul`
  display: flex;
  align-items: flex-end;
  /* justify-content: space-between; */
  &:hover {
    transition: all 0.4s ease-in-out;
    color: #99aab5;
  }
  /* @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    justify-content: center;
  } */
`;
