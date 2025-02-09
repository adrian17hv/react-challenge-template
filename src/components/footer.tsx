import { FooterContainer } from "./styles";


const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} RealEstateProperties. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
