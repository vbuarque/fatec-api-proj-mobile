import {
  Card,
  ImageStation,
  StationInformationContainer,
  StationContent,
  StationNameTitle,
  StationName,
  StationLocalTitle,
  StationLocal,
} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const fatecImg = require("../../assets/images/fatec-sjc.jpg");

export default function CardStation() {
    const navigate = useNavigation();

  return (
    <>
      <Card>
        <ImageStation source={fatecImg}/>
        <StationInformationContainer>
          <StationContent>
            <StationNameTitle>Nome da estação</StationNameTitle>
            <StationName>Estação Fatec</StationName>
          </StationContent>
          <StationContent>
            <StationLocalTitle>Localização</StationLocalTitle>
            <StationLocal>PQ. Tecnilógico</StationLocal>
          </StationContent>
        </StationInformationContainer>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faStar} size={20} color="#fff" />
        </TouchableOpacity>
        
      </Card>
    </>
  );
}
