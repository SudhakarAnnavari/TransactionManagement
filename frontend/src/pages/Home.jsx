import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/")
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };


  const deleteData = (id) =>{
    axios.delete(`http://localhost:4000/api/${id}`)
    .then(res => {console.log(res)
      window.location.reload()})
    .catch(err => console.log(err))
  }

  return (
    <div className="container">
     <Link to='/add'> <button className="btn btn-primary">Add transaction</button></Link>
     <Link to='/chart'> <button className="btn btn-warning mx-5">chart</button></Link>
      <table className="table mt-5">
        <thead className="table-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">CustomerName</th>
            <th scope="col">TransactionDate</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((each, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{each.CustomerName}</td>
                    <td>{formatDate(each.TranscationDate)}</td>
                    <td>{each.Amount}</td>
                    <td>{each.Status}</td>
                    <td>
                       <Link to={`/update/${each._id}`}> <button  className="btn btn-primary" >update</button></Link>
                        <button onClick={(e)=>deleteData(each._id)}  className="btn btn-danger mx-2" >Delete</button>
                    </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
