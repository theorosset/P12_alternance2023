import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UseDataApi from '../../hooks/useDataApi'

const Profil = () => {
    // const [searchParams] = useSearchParams()
    // const userId = searchParams.get("id")

  
        const [loading, error, dataFormated] = UseDataApi('12')
    
    
    return (
        <div>
            <Header />
        </div>
    )
}
export default Profil