import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
import {data} from '../../services/dataMock';
export default function StationChart() {
    return (
        <VictoryChart>
            <VictoryLine
            name="Temperatura"
                data={data}
                x="x"
                y="y"
                style={{
                    data: { stroke: "#00C667" },
                    parent: { border: "1px solid #ccc"},
                    labels: { fontSize: 10, fill: "#00C667" }
                }}
            />
        </VictoryChart>
    );
}