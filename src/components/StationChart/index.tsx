import React from "react";
import { VictoryChart, VictoryLine } from "victory-native";

import { ContainerChart, TitleChart } from "./styles";
import { data } from '../../services/dataMock';

type Props = {
    title: string;
}

export default function StationChart({ title }: Props) {
    return (
        <ContainerChart>
            <TitleChart>{title}</TitleChart>
            <VictoryChart>
                <VictoryLine
                    data={data}
                    x="x"
                    y="y"
                    style={{
                        data: { stroke: "#00C667" },
                        parent: { border: "1px solid #ccc" },
                        labels: { fontSize: 10, fill: "#00C667" }
                    }}
                />
            </VictoryChart>
        </ContainerChart>
    );
}