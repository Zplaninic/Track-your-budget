import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState'


export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('food')
    const [color, setColor] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: uuidv4(),
            text, 
            type,
            amount: +amount,
            color
        } 

        addTransaction(newTransaction)
    }
    return (
        <div>
        <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Pick type of transaction
                </label>
                <select value={type}  onChange={(e) => { 
                    setColor(e.target[e.target.selectedIndex].getAttribute('data-color')); 
                    setType(e.target.value);
                    }}>
                    <option value="food" data-color="#f94144">Food</option>
                    <option value="drink" data-color="#f3722c">Drink</option>
                    <option value="hobby" data-color="#90be6d">Hobby</option>
                    <option value="salary" data-color="#f9c74f">Salary</option>
                    <option value="other" data-color="#577590">Other</option>
                </select>
            </div>
            <div className="form-control">
                <label >Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label
                >Amount <br />
                (negative - expense, positive - income)</label
                > 
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
