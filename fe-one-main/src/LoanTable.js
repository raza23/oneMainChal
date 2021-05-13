import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function LoanTable(props) {
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState("false");

  useEffect(() => {}, []);
  const makePayment = loan => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount })
    };
    fetch(`http://localhost:3000/loans/${loan}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.message === "invalid") {
          alert("Invalid Amount, can't make payment");
        } else {
          console.log(data.message);
          setEdit("true");
        }
      });
  };

  const loanRows = props.loans.map(loan => {
    return (
      <tr key={loan.id} xs="1" sm="2" md="4">
        <td>
          <Link to={`/${loan.id}`}>{loan.id}</Link>
        </td>

        <td>${loan.funded_amount}</td>
        <td>
          $
          <input
            placeholder="Enter Payment Amount"
            onChange={e => setAmount(e.target.value)}
          ></input>
        </td>
        <td value={loan.id}>
          <button onClick={() => makePayment(loan.id)}>Make Payment</button>
        </td>
      </tr>
    );
  });

  console.log(props.loans);
  return (
    <div>
      <div className="AllLoans">
        <Table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Loan #</th>

              <th>Loan Amount</th>
            </tr>
          </thead>
          <tbody>{loanRows}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default LoanTable;
