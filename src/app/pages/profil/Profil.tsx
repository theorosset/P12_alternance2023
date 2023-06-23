import Header from '../../components/header/Header'
import UseDataApi from '../../hooks/useDataApi'
import UserName from '../../components/userName/UserName'
import ChartBar from '../../components/chartBar/ChartBar'
import ChartLine from '../../components/chartLine/ChartLine'
import ChartRadar from '../../components/chartRadar/ChartRadar'
import ChartPie from '../../components/chartPie/ChartPie'
import StatPart from '../../components/statPart/StatPart'
import './Profil.scss'
import Aside from '../../components/aside/Aside'

const Profil = () => {
  // const [searchParams] = useSearchParams()
  // const userId = searchParams.get("id")

  const [loading, error, dataFormated] = UseDataApi('12', 'USER_MAIN_DATA')

  if (!dataFormated) {
    return <h1>is Loading</h1>
  }
  return (
    <div className="container__profil">
      <Header />
      <div className="container__profil__main">
        <Aside />
        <div className='container__profil__main__all'>
          <UserName name={dataFormated.userInfo.userInfos.firstName} />
          <div className="container__profil__main__center">
            <div className="container__profil__main__center__graphique">
              <ChartBar />
              <div className="container__profil__bottom">
                <ChartLine />
                <ChartRadar />
                <ChartPie scoreDay={dataFormated.userInfo.todayScore} />
              </div>
            </div>
            <div className="container__profil__right">
                <StatPart userStat={dataFormated.userInfo.keyData.calorieCount} categorie='Calories'/>
                <StatPart userStat={dataFormated.userInfo.keyData.proteinCount} categorie='Proteines'/>
                <StatPart userStat={dataFormated.userInfo.keyData.carbohydrateCount} categorie='Glucides'/>
                <StatPart userStat={dataFormated.userInfo.keyData.lipidCount} categorie='Lipides'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profil
