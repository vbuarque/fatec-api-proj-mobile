import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from "react-native";
import CardStation from "../../components/CardStation";
import { Container } from "./styles";

export default function Home() {
    return(
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <CardStation />
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}