import './Filter.scss'

function Filter({filterState}) {
  console.log(filterState);

  const getImgSrc = (btnState) => btnState ? '/img/Filter-checked.svg' : '/img/Filter-unchecked.svg';

    return (
        <div className='filter'>
          <h5>Количество пересадок</h5>
          <div onClick={() => console.log('wapwap')}>
            <img src={getImgSrc(filterState.all)} width={20} height={20}/>
            <p>Все</p>
          </div>
          <div>
            <img src={getImgSrc(filterState.withoutTransfer)} width={20} height={20}/>
            <p>Без пересадок</p>
          </div>
          <div>
            <img src={getImgSrc(filterState.transfer_1)} width={20} height={20}/>
            <p>1 пересадка</p>
          </div>
          <div>
            <img src={getImgSrc(filterState.transfer_2)} width={20} height={20}/>
            <p>2 пересадки</p>
          </div>
          <div>
            <img src={getImgSrc(filterState.transfer_3)} width={20} height={20}/>
            <p>3 пересадки</p>
          </div>
        </div>
    );
  }
  
  export default Filter;