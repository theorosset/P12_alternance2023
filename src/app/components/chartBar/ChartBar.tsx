import { FC } from "react";
import { BarChart, XAxis, Tooltip, CartesianGrid, YAxis, Legend, Bar, ResponsiveContainer } from "recharts";
import "./ChartBar.scss"
import UseDataApi from "../../hooks/useDataApi";


const ChartBar: FC = () => {
  
  const [loading, error, dataFormated] = UseDataApi('12', "USER_ACTIVITY")

  if(error || !dataFormated) {
    return <h1>error</h1>
  }

  const dataSort = dataFormated.userSessionsKiloAndCalories.sessions.sort((a, b) => (a.day > b.day) ? 1 : -1);

  dataSort.forEach((data, i) => {
    data.dayNumber = i + 1
  })

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      console.log(payload)
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.kilogram}${payload[0].name}`}</p>
          <p className="label">{`${payload[1].payload.calories}${payload[1].name}`}</p>
        </div>
      );
    }
  
    return null;
  };
    return (
        <div className="container__chartBar">
          <div className="container__chartBar__text">
            <p>Activité quotidienne</p>
            <div className="container__chartBar__text__legend">
              <p className="container__chartBar__text__legend--info">Poids (kg)</p>
              <p className="container__chartBar__text__legend--info">Calories brûlées (kCal)</p>
            </div>
          </div>
            <ResponsiveContainer width="90%" height={300}>
                <BarChart  data={dataSort}>
                    <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
                    <XAxis dataKey="dayNumber" axisLine={false} tickLine={false}/>
                    <YAxis orientation="right" axisLine={false} tickLine={false}/>
                    <Tooltip content={<CustomTooltip />}/>
                    <Bar dataKey="kilogram" fill="#282D30" name="kg" barSize={11} radius={[10, 10, 0, 0]}/>
                    <Bar dataKey="calories" fill="#E60000" name="Kcal" barSize={11} radius={[10, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartBar