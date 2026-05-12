import './TrainChooser.css';
import Train from './Train';

const TrainChooser = ({totalCount, trains, handleSearchSeats}) => {
    return (
        <div className="train-chooser">
            <div className="trains-list-header">
                <span className="trains-list-header-counter">Найдено {!totalCount ? 0 : totalCount}</span>
            </div>
            <div className="trains-list">
                {!trains || trains.length === 0 ? 
                    (<div className="trains-list-empty">Поездов не найдено</div>)
                    :
                    (
                        trains.map((train) => (
                        <Train
                            key={train.departure._id}
                            departure={train.departure}
                            handleSearchSeats={handleSearchSeats}
                        />
                    ))
                    )
                }
            </div>
        </div>
    )
}

export default TrainChooser;
