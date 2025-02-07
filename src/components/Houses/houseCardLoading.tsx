import { Card, Image, InfoContainer, Address, DetailText } from "./styles";
import houseLogo from "../../assets/logos/hv.svg"


const HouseCard = () => {
  return (
    <Card>
      <Image src={houseLogo} alt="house" width="100%"/>
      <InfoContainer>
        <Address>---</Address>
        <DetailText>---</DetailText>
        <DetailText>Price: $---</DetailText>
      </InfoContainer>
    </Card>
  );
};

export default HouseCard;
