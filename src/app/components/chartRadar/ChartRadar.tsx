import React, { FC, PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./ChartRadar.scss"
import UseDataApi from '../../hooks/useDataApi';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const ChartRadar: FC = () => {
  
  const [loading, error, dataFormated] = UseDataApi('12', "USER_PERFORMANCE")

  if(error || !dataFormated) {
    return <h1>error</h1>
  }

  return (
    <div className='container__chartRadar'>
      <ResponsiveContainer width="120%" height={225} minWidth={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataFormated.userPerformance.performance}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" dy={4} tickSize={15} dx={-2} fill='#FFFFFF'/>
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRadar