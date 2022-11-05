import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { Skeleton, VStack, Center } from 'native-base';


import CardStation from "../../components/CardStation";
import { Container } from "./styles";

import api from '../../services/api';
import { URI } from '../../services/uri';
import { useNavigation } from '@react-navigation/native';

type StationProps = {
    id: number;
    name: string;
    reference: string;
    link: string;
};

export default function Home() {
    const navigation = useNavigation();
    const [stations, setStations] = useState<StationProps[]>([]);;
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStations() {
            setLoading(true);
            const response = await api.get(URI.STATIONS);
            setStations(response.data);
            setLoading(false);
        }
        loadStations();
    }, [setLoading]);

    return (
        <>
            <ScrollView>
                {isLoading ? (
                    <Center w="100%" padding={8}>
                        {stations.map(station => (
                            <Skeleton h="130" rounded="md" startColor="#00C667" m="1" />
                        ))}
                    </Center>
                    )
                    :
                    (
                        <Container>
                            {stations.map((station: any) => (
                                <CardStation
                                    key={station.id}
                                    name={station.name}
                                    reference={station.reference}
                                    link={station.link}
                                    onPress={
                                        () => navigation.navigate('Details',
                                            {
                                                id: station.id,
                                                name: station.name,
                                                reference: station.reference,
                                                link: station.link,
                                            })}
                                />
                            ))}
                        </Container>
                    )}
            </ScrollView>
        </>
    );
}