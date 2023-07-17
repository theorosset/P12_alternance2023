import { FC } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import UseDataApi from '../../hooks/useDataApi';
import "./ChartLine.scss";

const ChartLine: FC = () => {
  
  const [loading, error, dataFormated] = UseDataApi('12', "USER_AVERAGE_SESSIONS")
  
  if(error) {
    return <h1>{ error }</h1>
  }
  if(loading || !dataFormated) {
    return <h1>{ error }</h1>
  }
  
    //sort userSession by day
    dataFormated?.userSessionsLength.sessions.sort((a,b) => a.day - b.day)
    const day = ["L", "M", "M", "J", "V", "S", "D"]


  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.sessionLength}min`}</p>
        </div>
      );
    }
  
    return null;
  };
  return(
      <div className='container__chartLine'>
        <p className='container__chartLine--text'>Durée moyenne des sessions</p>
        <ResponsiveContainer width="40%" height={250} minWidth={300}>
          <LineChart
            data={dataFormated.userSessionsLength.sessions}
            margin={{
              left: 5,
              bottom: 20,
              top: -15,
            }}
          >
          
            <XAxis dataKey="day" tickMargin={10} tickFormatter={(value) => day[value - 1]}/>
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} strokeOpacity={0.7} dot={false} color='#FFFFF'/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default ChartLine