import logo from "../assets/logos/hv.svg";
import { HeaderContainer, Logo, Nav, NavLink, Title } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="HomeVision Logo" />
      <Title>RealState</Title>
      <Nav>
        <NavLink href="#">Real state properties</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
