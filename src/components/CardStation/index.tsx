import {useEffect, useState} from 'react';

import {
  Card,
  ImageStation,
  StationInformationContainer,
  StationContent,
  StationNameTitle,
  StationName,
  StationLocalTitle,
  StationLocal,
  ButtonFavorite,
} from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Star } from 'phosphor-react-native';

const fatecImg = require("../../assets/images/fatec-sjc.jpg");

import { useNavigation } from "@react-navigation/native";

export default function CardStation() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Details');
  }
  
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    function handleFavorite() {
      setIsFavorite(!isFavorite);
    }
  }, []);

  return ( 
    <>
      <Card onPress={openScreen}>
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
        <ButtonFavorite onPress={() => setIsFavorite(!isFavorite)}>
          {
          isFavorite ?
          <FontAwesomeIcon icon={faStar} size={20} color="#fff" /> 
          :
          <Star color="#fff" weight="fill" size={20}/>
          }
        </ButtonFavorite>
      </Card>
    </>
  );
}
