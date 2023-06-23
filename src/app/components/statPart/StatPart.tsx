import { FC } from "react";
import "./StatPart.scss";
import calories from './calories.svg'
import protein from './protein.svg'
import glucides from './fat.svg'
import lipides from './carbs.svg'

interface Props {
    userStat: number,
    categorie: string
}

const StatPart: FC<Props> = ({ userStat, categorie }) => {
    let img = ''

    switch(categorie) {
        case 'Calories':
			img = calories;
			break;
		case 'Proteines':
			img = protein;
			break;
		case 'Glucides':
			img = glucides;
			break;
		case 'Lipides':
			img = lipides;
			break;
    }

    return (
       <div className="container__statPart">
         <img src={img} alt="icon" />
         <div className="container__statPart__text">
            <p className="container__statPart__text--stat">{userStat}{ categorie === 'Calories' ? 'Kcal' : 'g' }</p>
            <p className="container__statPart__text--category">{categorie}</p>
         </div>
       </div>
    )
}

export default StatPart