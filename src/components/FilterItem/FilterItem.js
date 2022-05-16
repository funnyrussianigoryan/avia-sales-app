import './FilterItem.scss'
import React from 'react';

function FilterItem({title, type, click}) {

    const [isActive, setButton] = React.useState(false);
    const getImgSrc = (btnState) => btnState ? '/img/Filter-checked.svg' : '/img/Filter-unchecked.svg';
    const forClick = () => {
        setButton(! isActive);
        click({transfer_1: ! isActive});
    }
    return (
        <div onClick={forClick}>
            <img src={getImgSrc(isActive)} width={20} height={20}/>
            <p>{title}</p>
        </div>
    );
  }
  
  export default FilterItem;