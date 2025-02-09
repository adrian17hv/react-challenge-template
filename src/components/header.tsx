import logo from "../assets/logos/hv.svg";
import { HeaderContainer, Logo, Nav, NavLink, Title } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="HomeVision Logo" />
      <Title>RealEstate</Title>
      <Nav>
        <NavLink href="#">Real estate properties</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
