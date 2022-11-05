import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 130px;

  padding: 16px;

  border-radius: 8px;
  background: #00c667;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const ImageStation = styled.Image`
  border-radius: 8px;
  width: 110px;
  height: 100px;

  border: 1px solid #fff;
`;

export const StationInformationContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 24px;
`;

export const StationContent = styled.View`
  
`;

export const StationNameTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #f8f8ff;
`;

export const StationName = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #f8f8ff;
`;

export const StationLocalTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #f8f8ff;
`;

export const StationLocal = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: #f8f8ff;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonFavorite = styled.TouchableOpacity``;
