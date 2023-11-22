import React from 'react'
import { CounterButtonContainerStyled, CounterContainerStyled, CounterSpanStyled } from './CounterStyles';
import Add from '../add/Add';
import Reset from '../reset/Reset';
import { useSelector } from 'react-redux'
import Substract from '../substratc/Substract';


const Counter = () => {

    const count = useSelector((state) => state.count);

    return (
        <CounterContainerStyled>
           <CounterButtonContainerStyled>
          
             <Substract/>
              <CounterSpanStyled>{count}</CounterSpanStyled>
              <Add/>

           </CounterButtonContainerStyled>
           <Reset />
        </CounterContainerStyled>
    )
}

export default Counter