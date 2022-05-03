import './App.scss';

function App() {
  return (<>
    <div className='logo'><img src='/img/Logo.svg' width={80} height={80}/></div>
    <div className='wrapper'>
      <div className='filter'>
        <h5>Количество пересадок</h5>
        <div><img src='/img/Filter-unchecked.svg' width={20} height={20}/><p>Все</p></div>
        <div><img src='/img/Filter-unchecked.svg' width={20} height={20}/><p>Без пересадок</p></div>
        <div><img src='/img/Filter-checked.svg' width={20} height={20}/><p>1 пересадка</p></div>
        <div><img src='/img/Filter-checked.svg' width={20} height={20}/><p>2 пересадки</p></div>
        <div><img src='/img/Filter-unchecked.svg' width={20} height={20}/><p>3 пересадки</p></div>
      </div>

      <div className='mainSection'>
        <div className='bar'>
          <div className='active'><p>Самый дешевый</p></div>
          <div><p>Самый быстрый</p></div>
          <div><p>Оптимальный</p></div>
        </div>

        <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>

        <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>

                <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>

                <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>

                <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>

                <div className='ticket'>
          <div className='ticketHeader'>
            <span>13 400 Р</span>
            <img src='/img/S7-logo.png' />
          </div>

          <div className='info'>
            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>10:45 – 08:00</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>21ч 15м</span>
              </div>
              <div>
                <span className='dsc'>2 пересадки</span>
                <span className='val'>HKG, JNB</span>
              </div>
            </div>

            <div className='track'>
              <div>
                <span className='dsc'>MOW – HKT</span>
                <span className='val'>11:20 – 00:50</span>
              </div>
              <div>
                <span className='dsc'>В пути</span>
                <span className='val'>13ч 30м</span>
              </div>
              <div>
                <span className='dsc'>1 пересадка</span>
                <span className='val'>HKG</span>
              </div> 
            </div>                            
          </div>
        </div>        

        <div className='showTicketsBtn'><p>Показать еще 5 билетов!</p></div>
      </div>
    </div>
    </>
  );
}

export default App;
