import './App.scss';
import Ticket from './components/Ticket/Ticket';  
import FilterItem from './components/FilterItem/FilterItem';
import React from 'react';
import axios from 'axios';


function App() {

  const [tickets, setTickets] = React.useState([]);

  const baseFilterState = {
    transfer_1: false,
    transfer_2: false,
    transfer_3: false,
    all: true,
    withoutTransfer: false
  }

  const [filterState, setFilter] = React.useState(baseFilterState);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://6272954725fed8fcb5f6a4cf.mockapi.io/tickets');
        setTickets(response.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const getImgSrc = (btnState) => btnState ? '/img/Filter-checked.svg' : '/img/Filter-unchecked.svg';
  const changeFilter = (type) => setFilter({...filterState, [type]: !filterState[type], all: false});
  const clickAll = () => setFilter(baseFilterState);

  return (<>
    <div className='logo'><img src='/img/Logo.svg' width={80} height={80}/></div>
    <div className='wrapper'>
    <div className='filter'>
          <h5>Количество пересадок</h5>
          <div onClick={() => changeFilter('withoutTransfer')}>
            <img src={getImgSrc(filterState.withoutTransfer)} width={20} height={20} />
            <p>Без пересадок</p>
          </div>
          <div onClick={() => changeFilter('transfer_1')}>
            <img src={getImgSrc(filterState.transfer_1)} width={20} height={20} />
            <p>1 пересадка</p>
          </div>
          <div onClick={() => changeFilter('transfer_2')}>
            <img src={getImgSrc(filterState.transfer_2)} width={20} height={20} />
            <p>2 пересадки</p>
          </div>
          <div onClick={() => changeFilter('transfer_3')}>
            <img src={getImgSrc(filterState.transfer_3)} width={20} height={20} />
            <p>3 пересадки</p>
          </div>
        </div>
      <div className='mainSection'>
        <div className='bar'>
          <div className='active'><p>Самый дешевый</p></div>
          <div><p>Самый быстрый</p></div>
          <div><p>Оптимальный</p></div>
        </div>
        {tickets.map((ticket, index) => <Ticket {...ticket} key={index}/>)}
        <div className='showTicketsBtn'><p>Показать еще 5 билетов!</p></div>
      </div>
    </div>
    </>
  );
}

export default App;
