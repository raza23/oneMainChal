import React, { useState, useEffect } from "react";
import LoanTable from "./LoanTable.js";
import "./App.css";
const LOANS_URL = "http://localhost:3000/loans/";

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getLoans();
  }, []);

  const getLoans = () => {
    fetch(LOANS_URL)
      .then(res => res.json())
      .then(data => setLoans(data));
  };

  return (
    <div className="App">
      <LoanTable loans={loans} />
    </div>
  );
}

export default App;
