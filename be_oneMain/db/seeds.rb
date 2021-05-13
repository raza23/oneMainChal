loan1 = Loan.create(funded_amount: 100.0)
loan2 = Loan.create(funded_amount: 200.0)
loan3 = Loan.create(funded_amount: 1050.0)

payment1 = Payment.create(loan: loan1,payment_amount: 20,payment_date: '2021-04-12')
payment2 = Payment.create(loan: loan1,payment_amount: 10,payment_date: '2021-04-13')
payment3 = Payment.create(loan: loan2,payment_amount: 220,payment_date: '2021-05-01')
payment4 = Payment.create(loan: loan3,payment_amount: 120,payment_date: '2021-05-12')
