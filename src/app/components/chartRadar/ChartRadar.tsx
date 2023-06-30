import { FC } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./ChartRadar.scss"
import UseDataApi from '../../hooks/useDataApi';

const ChartRadar: FC = () => {
  
  const [loading, error, dataFormated] = UseDataApi('12', "USER_PERFORMANCE")

  if(error || !dataFormated) {
    return <h1>error</h1>
  }

  return (
    <div className='container__chartRadar'>
      <ResponsiveContainer width="120%" height={205} minWidth={300}>
          <RadarChart cx="48%" cy="50%" outerRadius="80%" data={dataFormated.userPerformance.performance}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" dy={4} tickSize={15} dx={-2} fill='#FFFFFF'/>
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRadar