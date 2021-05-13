import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import LoanTable from "./LoanTable.js";
import LoanPayment from "./LoanPayment.js";
import "./App.css";
const LOANS_URL = "http://localhost:3000/loans/";
const PAYMENTS_URL = "http://localhost:3000/payments";

function App() {
  const [loans, setLoans] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getLoans();
    getPayments();
  }, []);

  const getLoans = () => {
    fetch(LOANS_URL)
      .then(res => res.json())
      .then(data => setLoans(data));
  };

  const getPayments = () => {
    fetch(PAYMENTS_URL)
      .then(res => res.json())
      .then(data => setPayments(data));
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <LoanTable loans={loans} />} />
          <Route
            exact
            path="/:loanId"
            render={props => {
              let selectedLoan = loans.find(
                loan =>
                  parseInt(loan.id) === parseInt(props.match.params.loanId)
              );

              let selectedPayments = payments.filter(
                payment =>
                  parseInt(payment.loan_id) === parseInt(selectedLoan.id)
              );
              return (
                <LoanPayment payments={selectedPayments} loan={selectedLoan} />
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
