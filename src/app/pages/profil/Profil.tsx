import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UseDataApi from '../../hooks/useDataApi'
import UserName from '../../components/userName/UserName';
import ChartBar from '../../components/chartBar/ChartBar'
import "./Profil.scss"

const Profil = () => {
    // const [searchParams] = useSearchParams()
    // const userId = searchParams.get("id")

  
    const [loading, error, dataFormated] = UseDataApi('12', "USER_MAIN_DATA")

    if(!dataFormated) {
        return (<h1>is Loading</h1>)
    }

    return (
        <div className='container__profil'>
            <Header />
            <div className='container__profil__center'>
                <UserName name={dataFormated.userInfo.userInfos.firstName} />
                <ChartBar />
            </div>
        </div>
    )
}
export default Profil