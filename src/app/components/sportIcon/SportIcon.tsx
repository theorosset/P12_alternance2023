import { FC } from "react";
import "./SportIcon.scss" 
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    icon: PropTypes.string,
}

const SportIcon: FC<InferProps<typeof propTypes>> = ({icon}) => {

    if(!icon) {
        return <h1>Erreur lors du chargement des icons</h1>
    }

    return (
        <div className="container__sport">
            <img className="container__sport--img" src={icon} alt="" />
        </div>
    )
}

export default SportIcon