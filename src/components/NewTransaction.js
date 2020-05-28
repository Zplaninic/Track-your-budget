import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState'


export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('food')

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: uuidv4(),
            text, 
            type,
            amount: +amount
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
                <select value={type}  onChange={(e) => setType(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="drink">Drink</option>
                    <option value="hobby">Hobby</option>
                    <option value="salary">Salary</option>
                    <option value="other">Other</option>
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
