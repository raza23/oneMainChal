import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function LoanPayment(props) {
  const paymentTable = props.payments.map(onePay => {
    console.log(onePay);

    return (
      <tr key={onePay.id}>
        <td className="column1">${onePay.payment_amount}</td>
        <td>{onePay.payment_date}</td>
      </tr>
    );
  });

  console.log(props);
  return (
    <div>
      <Link to={`/`}>All Loans</Link>
      <div className="LoanPayments">
        <Table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Payment Amount</th>

              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>{paymentTable}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default LoanPayment;
