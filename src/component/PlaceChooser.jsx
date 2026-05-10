import './PlaceChooser.css';

const PlaceChooser = ({seats, departure, handleSelectPlace}) => {
    console.log(departure);
    console.log(departure.train);
    return (
        <div className="place-chooser">
            <div className='place-chooser-header'>
                Выбор места
            </div>
            <div className='place-chooser-main'>
                <div className='place-chooser-main-top'>
                    <img className='place-chooser-main-top-icon' src={`${process.env.PUBLIC_URL}/img/right-arrow-fill.png`} alt="" />
                    <button className='place-chooser-main-top-button'>Выбрать другой поезд</button>
                </div>
                <div className='train-info'>
                    <div className='train-info-header'>
                        <img className='train-info-icon' src={`${process.env.PUBLIC_URL}/img/yellow-train-icon.png`} alt="" />
                    </div>
                    <div className='departure'>
                        <div className='departure-from'>
                            <div className='departure-time'>{secondsToHoursMinutes(departure.from.datetime)}</div>
                            <div className='departure-city'>{departure.from.city.name}</div>
                            <div className='departure-station'>{departure.from.railway_station_name}</div>
                        </div>
                        
                        <div className='departure-array'>
                            <img className="train-arrow-icon" src={`${process.env.PUBLIC_URL}/img/right-arrow.png`} alt="Стрелка вправо"/>
                        </div>
                        
                        <div className='departure-to'>
                            <div className='departure-time'>{secondsToHoursMinutes(departure.to.datetime)}</div>
                            <div className='departure-city'>{departure.to.city.name}</div>
                            <div className='departure-station'>{departure.to.railway_station_name}</div>
                        </div>
                    </div>
                    <div className='duration'>
                        <div className='duration-icon'>
                            <img src={`${process.env.PUBLIC_URL}/img/yellow-clock.png`} alt="" />
                        </div>
                        <div className='duration-time'>
                            {secondsToDuration(departure.to.datetime-departure.from.datetime)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceChooser;

function secondsToHoursMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${(hours % 24).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function secondsToDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} часов ${minutes} минут`;
}
