import {
    Container,
    TitlePage,
    ButtonAccess,
    ButtonAccessText,
    ImageBG,
    Content
} from './styles';

const bgImage = require("../../assets/images/bginicio.png");

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Home');
    }
 
    return (
        <Container>
            <ImageBG source={bgImage}>
                <Content>
                    <TitlePage>Obtenha os dados na sua mão</TitlePage>
                    <ButtonAccess onPress={openScreen}>
                        <ButtonAccessText>Acessar</ButtonAccessText>
                    </ButtonAccess>
                </Content>
            </ImageBG>
        </Container>
    );
}
  