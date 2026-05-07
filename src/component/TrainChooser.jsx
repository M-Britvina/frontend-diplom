import { NavLink } from "react-router";

const TrainChooser = () => {
    return (
        <div className="main">
            TrainChooser
            <NavLink to="/place-chooser" end>choose place</NavLink>
        </div>
    )
}

export default TrainChooser;
