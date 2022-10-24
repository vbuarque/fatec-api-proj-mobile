
import { ScrollView } from "react-native";
import CardStation from "../../components/CardStation";
import { Container } from "./styles";

export default function Home() {
    return(
        <ScrollView>
        <Container>
            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />

            <CardStation />
        </Container>
        </ScrollView>
    );
}