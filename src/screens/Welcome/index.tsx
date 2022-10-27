import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Container,
    TitlePage,
    ButtonAccess
} from './styles';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Home');
    }
 
    return (
        <SafeAreaView>
            <Container>
                <TitlePage>
                    Obtenha os dados na sua mão
                </TitlePage>
                <ButtonAccess
                title='Acessar'
                onPress={openScreen}
                />
            </Container>
        </SafeAreaView>
    );
}