import { House } from "../../types/houseTypes";
import { Card, Image, InfoContainer, Address, DetailText } from "./styles";

interface HouseCardProps {
  house: House;
}

const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  return (
    <Card>
      <Image src={house.photoURL} alt={house.address} loading="lazy" />
      <InfoContainer>
        <Address>{house.address}</Address>
        <DetailText>Owner: {house.homeowner}</DetailText>
        <DetailText>Price: ${house.price.toLocaleString()}</DetailText>
      </InfoContainer>
    </Card>
  );
};

export default HouseCard;
