import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UseDataApi from '../../hooks/useDataApi'
import UserName from '../../components/userName/UserName';

const Profil = () => {
    // const [searchParams] = useSearchParams()
    // const userId = searchParams.get("id")

  
    const [loading, error, dataFormated] = UseDataApi('12')
    
    return (
        <div>
            <Header />
            {/* <UserName name={dataFormated.name} /> */}
        </div>
    )
}
export default Profil