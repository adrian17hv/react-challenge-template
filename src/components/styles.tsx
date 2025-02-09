import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--card-bg, #1a1a2e);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin: 0;
`;

export const Logo = styled.img`
  height: 48px;
  width: auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--text-primary, #e0e0e0);
  font-weight: bold;
  font-family: Inter, sans-serif;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: var(--text-secondary, #b0b0b0);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent, #5865f3);
  }
`;

export const FooterContainer = styled.footer`
  background: var(--card-bg, #1a1a2e);
  text-align: center;
  padding: 15px 0;
  color: var(--text-secondary, #b0b0b0);
  font-size: 0.9rem;
  position: sticky;
  bottom: 0;
  width: 100vw; /* Full width of the viewport */
  margin: 0; /* No margin so it spans the full width */
  z-index: 100;
  margin-top: 20px;
`;