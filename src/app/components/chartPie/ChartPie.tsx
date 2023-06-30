import { FC } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import './ChartPie.scss'

interface Props {
    scoreDay: number
}

const ChartPie: FC<Props> = ({ scoreDay }) => {
    
    return (
        <div className="container__chartPie">
             <p className="container__chartPie--title">Score</p>
            <ResponsiveContainer width="100%" height={225} minWidth={300} id="spin">
                    <PieChart>
                        <Pie
                            data={ [{ value: scoreDay }] }
                            cx="50%"
                            cy="50%"
                            startAngle={70}
                            endAngle={430 * scoreDay + 70}
                            innerRadius={"60%"}
                            outerRadius={"70%"}
                            dataKey="value"
                            cornerRadius={10}
                        >
                            <Cell stroke="" fill="red" />
                            
                        </Pie>
                    </PieChart>
            </ResponsiveContainer>
            <div className="container__chartPie__center">
                <h2>{scoreDay * 100}%</h2>
                <p>de votre</p>
                <p>objectif</p>
            </div>
        </div>
    )
}

export default ChartPie