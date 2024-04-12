import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTransaction = () => {
  const {id} = useParams()
  const nav = useNavigate()
  const [CustomerName, setCustomerName] = useState("");

  const [Amount, setAmount] = useState("");

  const [Status, setStatus] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/${id}`)
    .then(result => {
      const { CustomerName, Amount, Status } = result.data
      setCustomerName(CustomerName)
      setAmount(Amount)
      setStatus(Status)
    })
    .catch(err => console.log(err))

  },[])

  const updateForm = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/api/${id}`, { CustomerName, Amount, Status })
      .then((result) => {console.log(result)
        window.location.reload()})
      .catch((err) => console.log(err));
    setCustomerName("");
    setAmount("");
    setStatus("");
    nav('/')
  };
  return (
    <div>
      <div className="form">
        <div className="container ">
          <h1 className="my-4 text-center">update Transcation</h1>
          <form onSubmit={updateForm}>
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
    </div>
  );
};

export default UpdateTransaction;
