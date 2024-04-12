import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const [chartData, setChartData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:4000/api/");
          const transactionData = response.data;
  
          console.log("Transaction Data:", transactionData); // Log fetched data
  
          const chartData = transactionData.reduce((acc, transaction) => {
            acc[transaction.Status] = acc[transaction.Status] || 0;
            acc[transaction.Status] += transaction.Amount;
            return acc;
          }, {});
  
          console.log("Chart Data:", chartData); // Log processed chart data
  
          const labels = Object.keys(chartData);
          const data = Object.values(chartData);
  
          const chartDataFormatted = {
            labels: labels,
            datasets: [
              {
                label: 'Transaction Amount',
                data: data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'
                ]
              }
            ]
          };
  
          console.log("Formatted Chart Data:", chartDataFormatted); // Log formatted chart data
  
          setChartData(chartDataFormatted);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    console.log("Final Chart Data:", chartData); // Log final chart data
  
    return (
      <div className="container">
        <h1>Pie Chart</h1>
        {chartData ? (
          <div style={{ height: '400px', width: '600px' }}>
            <Pie data={chartData} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  
export default Chart