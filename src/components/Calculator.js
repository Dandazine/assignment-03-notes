import {useState} from 'react';
import './style.css';

function Calculator () {
    const operators = ['.', '-', '+', '*', '/'];
    const [calculate, setCalculate] = useState("");
    const [answer, setAnswer] = useState("");

    const updatedCalculations = value => {
        if (operators.includes(value) && calculate === '') {
        return;
        } else if(operators.includes(value) && operators.includes(calculate.slice(-1))) {
        return;
        }

        setCalculate(calculate + value);

        if(!operators.includes(value)) {
        setAnswer(eval(calculate + value).toString())
        }
    }

    function keyCreate (){
        let numArray = [];
        for (let i =0; i < 10; i++){
        numArray.push(<button onClick={() => updatedCalculations(i.toString())} key={i}>{i}</button>)
        }
        return(
        numArray
        )
    }

    function giveAnswer (){
        setCalculate(eval(calculate).toString());
    }

    function deleteNumber (){
        if (calculate === '') {
        return;
        } 

        const value = calculate.slice(0, -1)

        setCalculate(value);
    }

    function deleteFullCalculation (){
        if (calculate === '') {
        return;
        } 

        const value = calculate.slice(0, 0)

        setAnswer(value);
        setCalculate(value);
    }

    return (
        <section className="calculator">
      <div className="display">
        {answer ? <span>({answer})</span> : '(0)'} 
        {calculate || "0"}
      </div>
        
      {/* Make this entire thing a grid ??  */}
      <div className="op-buttons">
        <button onClick={() => updatedCalculations('*')}>*</button>
        <button onClick={() => updatedCalculations('/')}>/</button>
        <button onClick={() => updatedCalculations('+')}>+</button>
        <button onClick={() => updatedCalculations('-')}>-</button>
        <button onClick={() => updatedCalculations('%')}>%</button>
        <button onClick={() => updatedCalculations('√')}>√</button>
        <button onClick={deleteNumber}>C</button>
        <button onClick={deleteFullCalculation}>AC</button>
      </div>

      <div className="nums">
        {keyCreate()}
        <button onClick={() => updatedCalculations('.')}>.</button>
        <button onClick={giveAnswer}>=</button>
      </div>
    </section>
    )
}

export default Calculator;