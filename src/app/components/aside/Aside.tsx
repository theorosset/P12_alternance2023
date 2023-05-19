import { FC } from "react";
import SportIcon from "../sportIcon/SportIcon";
import bodybuilding from "../../assets/icon/bodybuilding.svg"
import cycle from "../../assets/icon/cycle.svg"
import meditation from "../../assets/icon/mediatation.svg"
import swim from "../../assets/icon/swim.svg"

import "./Aside.scss" 

const Aside: FC = () => {
    const icons = [ meditation, swim, cycle, bodybuilding]
    return (
        <section className="container__aside">
            {
                icons.map((icon, i) => (
                    <SportIcon icon={icon} key={i}/>
                ))
            }
            <small className="container__aside--text">Copiryght, SportSee 2020</small>
        </section>
    )
}

export default Aside