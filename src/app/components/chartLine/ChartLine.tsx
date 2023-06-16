import { FC } from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseDataApi from '../../hooks/useDataApi';
import "./ChartLine.scss";

const ChartLine: FC = () => {
  
  const [loading, error, dataFormated] = UseDataApi('12', "USER_AVERAGE_SESSIONS")

  if(error || !dataFormated) {
    return <h1>error</h1>
  }
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      console.log(active, payload)
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
              left: 10,
              right: 10,
              bottom: 20,
              top: -15,
            }}
          >
          
            <XAxis dataKey="day" tickMargin={10}/>
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} color='#FFFFF'/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default ChartLine