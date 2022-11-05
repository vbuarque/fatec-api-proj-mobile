import { useState } from 'react';

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

import { Star } from 'phosphor-react-native';

const stationImg = require("../../assets/images/fatec-sjc.jpg")

type StationProps = {
  name: string;
  reference: string;
  link: string;
  onPress: () => void;
};

export default function CardStation( {name, reference, link, onPress}: StationProps ) {
  const [isFavoriteIcon, setIsFavoriteIcon] = useState(true);

  const handleChangeIconFav = () => {
    setIsFavoriteIcon(!isFavoriteIcon);
  }

  return ( 
    <>
      <Card onPress={onPress}>
        <ImageStation source={{uri: link}}/>
        <StationInformationContainer>
          <StationContent>
            <StationNameTitle>Nome da estação</StationNameTitle>
            <StationName>{name}</StationName>
          </StationContent>
          <StationContent>
            <StationLocalTitle>Localização</StationLocalTitle>
            <StationLocal>{reference}</StationLocal>
          </StationContent>
        </StationInformationContainer>
        {/* <ButtonFavorite onPress={handleChangeIconFav}>
          <Star size={24} color="#f8f8ff" weight={isFavoriteIcon ? "regular" : "fill"} />
        </ButtonFavorite> */}
      </Card>
    </>
  );
}
