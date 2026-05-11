import './Coach.css';

const Coach = ({coach, seats, selectedIndex, selectHandler}) => {
    const placeSelectHandler = (seat, coachId) => {
        if (seat.available) {
            selectHandler(seat.index, coachId)
        }
    }

    if (coach.class_type === "first") {
       return (
            <div className='coach'>
                <div className='coach-type'>Люкс</div>
                <div className='coach-name'>{coach.name}</div>
                <div className='coach-seats-block'>
                    <div className='coach-seats'>
                        {
                            seats.map((seat) => (
                                <div className='coach-seat-column'>
                                    <div className={"coach-seat " + 
                                        (seat.available ? "coach-seat-available " : "") + 
                                        (selectedIndex && selectedIndex === seat.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(seat, coach._id)}>{seat.index}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ) 
    }

    if (coach.class_type === "second") {
        const columns = getColumnData(0, seats);
        return (
            <div className='coach'>
                <div className='coach-type'>Купе</div>
                <div className='coach-name'>{coach.name}</div>
                <div className='coach-seats-block'>
                    <div className='coach-seats'>
                        {
                            columns.map((column) => (
                                <div className='coach-seat-column'>
                                    {column.top && <div className={"coach-seat " + 
                                    (column.top.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.top.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.top, coach._id)}>{column.top.index}</div>}
                                    {column.bottom && <div className={"coach-seat " + 
                                    (column.bottom.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.bottom.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.bottom, coach._id)}>{column.bottom.index}</div>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    if (coach.class_type === "third") {
        const columns = getColumnData(0, seats);
        const sideSeats = getSideData(seats);
        console.log(sideSeats);
        return (
            <div className='coach'>
                <div className='coach-type'>Плацкарт</div>
                <div className='coach-name'>{coach.name}</div>
                <div className='coach-seats-block'>
                    <div className='coach-seats'>
                        {
                            columns.map((column) => (
                                <div className='coach-seat-column'>
                                    {column.top && <div className={"coach-seat " + 
                                    (column.top.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.top.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.top, coach._id)}>{column.top.index}</div>}
                                    {column.bottom && <div className={"coach-seat " + 
                                    (column.bottom.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.bottom.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.bottom, coach._id)}>{column.bottom.index}</div>}
                                </div>
                            ))
                        }
                    </div>
                    <div className='coach-seats'>
                        {
                            sideSeats.map((seat) => (
                                <div className='coach-seat-column'>
                                    <div className={"coach-seat " + 
                                        (seat.available ? "coach-seat-available " : "") + 
                                        (selectedIndex && selectedIndex === seat.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(seat, coach._id)}>{seat.index}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    if (coach.class_type === "fourth") {
        const columns1 = getColumnData(0, seats);
        const columns2 = getColumnData(32, seats);
        return (
            <div className='coach'>
                <div className='coach-type'>Сидячий</div>
                <div className='coach-name'>{coach.name}</div>
                <div className='coach-seats-block'>
                    <div className='coach-seats'>
                        {
                            columns1.map((column) => (
                                <div className='coach-seat-column'>
                                    {column.top && <div className={"coach-seat " + 
                                    (column.top.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.top.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.top, coach._id)}>{column.top.index}</div>}
                                    {column.bottom && <div className={"coach-seat " + 
                                    (column.bottom.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.bottom.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.bottom, coach._id)}>{column.bottom.index}</div>}
                                </div>
                            ))
                        }
                    </div>
                    <div className='coach-seats'>
                        {
                            columns2.map((column) => (
                                <div className='coach-seat-column'>
                                    {column.top && <div className={"coach-seat " + 
                                    (column.top.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.top.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.top, coach._id)}>{column.top.index}</div>}
                                    {column.bottom && <div className={"coach-seat " + 
                                    (column.bottom.available ? "coach-seat-available " : "") + 
                                    (selectedIndex && selectedIndex === column.bottom.index ? "coach-seat-selected" : "")}
                                        onClick={() => placeSelectHandler(column.bottom, coach._id)}>{column.bottom.index}</div>}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Coach;

const getColumnData = (startIndex, items) => {
    const columns = [];
    
    for (let i = startIndex, j = 0; i < items.length && j < 32; i += 2, j+=2) {
      columns.push({
        bottom: items[i],
        top: i < items.length ? items[i + 1] : null,
      });
    }
    
    return columns;
};

const getSideData = (items) => {
    const columns = []
    for (let i = 32; i < items.length; i++) {
        columns.push(items[i]);
    }
    return columns;
}