import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTransaction = () => {
   const nav = useNavigate()
    const [CustomerName,setCustomerName] = useState('')

    const [Amount,setAmount] = useState('')

    const [Status,setStatus] = useState('')


    const submitForm = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/',{CustomerName,Amount,Status})
        .then(result => {console.log(result)
          window.location.reload()})
        .catch(err => console.log(err))
        setCustomerName('')
        setAmount('')
        setStatus('')
        nav('/')
    }




  return (
    <div className="form">
    <div className="container ">
      <h1 className="my-4 text-center">Add Transcation</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            CustomerName
          </label>
          <input
            type="text"
            className="form-control"
            value={CustomerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Amount
          </label>
          <input
            type="text"
            className="form-control"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default AddTransaction