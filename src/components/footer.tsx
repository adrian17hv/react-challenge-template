import { FooterContainer } from "./styles";


const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} RealStateProperties. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
