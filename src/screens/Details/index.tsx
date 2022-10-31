import { ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";

import { 
    StationContentTop,
    Image,
    StationInformationContainer,
    StationContent,
    StationNameTitle,
    StationName,
    StationLocalTitle,
    StationLocal,
    Divider,
    StationContentData,
    ContentDataTitle,
    ContentDataTitleText
} from './styles';
import StationChart from '../../components/StationChart';

type StationProps = {
    name: string;
    reference: string;
    link: string;
};

export default function Details() {
    const routes = useRoute();
    const {name, reference, link} = routes.params as StationProps;



    return (
        <>
            <ScrollView>
                <StationContentTop>
                    <Image source={{uri: link}}/>
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
                    <Divider />
                </StationContentTop>

                <StationContentData>
                    <ContentDataTitle>
                        <ContentDataTitleText>Dados coletados da estação</ContentDataTitleText>
                    </ContentDataTitle>
                    <StationChart />
                </StationContentData>
            </ScrollView>
        </>
    );
}   