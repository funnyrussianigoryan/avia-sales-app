import './Ticket.scss';

function Ticket({price, carrier, segments}
) {

  const renderSegments = (segment) => {
    const startTime = new Date(segment.date);
    const endTime = new Date(+startTime + segment.duration * 60 * 1000); //60 * 1000 - кол-во миллисекунд в минуте
    const durationHours = Math.floor(segment.duration / 60);
    const durationMinutes = segment.duration % 60;

    return (
      <div className='track'>
        <div>
          <span className='dsc'>
            {`${segment.origin} - ${segment.destination}`}
            </span>
          <span className='val'>
            {`${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`}
          </span>
        </div>
        <div>
          <span className='dsc'>
            В пути
          </span>
          <span className='val'>
            {`${durationHours}ч ${durationMinutes}м`}
          </span>
        </div>
        <div>
          <span className='dsc'>
            {segment.stops.length >= 1 ? 
            `1 пересадка` :
            `${segment.stops.length} пересадки`}
          </span>
          <span className='dsc'>{segment.stops.join(', ')}</span>
        </div>
      </div>
    )
  }

  return (
        <div className='ticket'>
          <div className='ticketHeader'>
            <span>{`${price} Р`}</span>
            <img src={`/img/${carrier}-logo.png`} />
          </div>

          <div className='info'>
            {segments.map(segment => renderSegments(segment))}
          </div>
        </div>
  );
}

export default Ticket;
