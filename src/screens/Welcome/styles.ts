import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
`;

export const ImageBG = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const TitlePage = styled.Text`
    font-size: 80px;
    font-weight: 400;
    color: #f8f8ff;
`;

export const ButtonAccess = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 48px;

    background-color: #00C667;
    border-radius: 4px;
`;

export const ButtonAccessText = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: #f8f8ff;
`;
