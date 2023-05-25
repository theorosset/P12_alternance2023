import { FC } from "react"
import './UserName.scss'
interface Props {
    name: String
}

const UserName: FC<Props> = ({name}) => {
    return (
        <div className="container__username">
            <h1>Bonjour <span className="container__username--name">{ name }</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default UserName