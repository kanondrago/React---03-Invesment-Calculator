
import { useActionState } from "react"
import { useState } from "react"

export default function Calculator({onHandleChange1, onHandleChange2, onHandleChange3, onHandleChange4}) {
    
    const [initialInvestment, setInitialInvestment] = useState('');
    const [anualInvestment, setAnualInvestment] = useState('');
    const [expextedReturn, setExpextedReturn] = useState('');
    const [duration, setDuration] = useState('');

    function handleChange1(event) {
        const value = event.target.value
        setInitialInvestment(value)
        onHandleChange1(value);
    }
    function handleChange2(event) {
        const value = event.target.value
        setAnualInvestment(value)
        onHandleChange2(value);
    }
    function handleChange3(event) {
        const value = event.target.value
        setExpextedReturn(value)
        onHandleChange3(value);
    }
    function handleChange4(event) {
        const value = event.target.value
        setDuration(value)
        onHandleChange4(value);
    }
    

    return (
        <div id="user-input">
            <div className="input-group">
            <div>
                <label>INITIAL INVESTMENT</label>
                <input type="number" value={initialInvestment} onChange={handleChange1}/>
            </div>
            <div>
                <label>ANUAL INVESTMENT</label>
                <input type="number" value={anualInvestment} onChange={handleChange2}/>
            </div>
            </div>
            <div className="input-group">
            <div>
                <label>EXPECTED RETURN</label>
                <input type="number" value={expextedReturn} onChange={handleChange3}/>
            </div>
            <div>
                <label>DURATION</label>
                <input type="number" value={duration} onChange={handleChange4}/>
            </div>
            </div>
        </div>
    )
}