class LoansController < ActionController::API

  rescue_from ActiveRecord::RecordNotFound do |exception|
    render json: 'not_found', status: :not_found
  end

  def index
    # byebug
    render json: Loan.all
  end

  def show
    # byebug
    loan = Loan.find(params[:id])
    render json: {loan: LoansSerializer.new(loan)}
  end

  def update
    loan = Loan.find(params[:id])
    loanAmount = loan.funded_amount.to_i
    amount = params[:amount].to_i
  
    if amount <= loanAmount && amount > 0

    newAmount = loanAmount - amount
    payment = Payment.create(loan:loan,payment_amount: params[:amount].to_i, payment_date: Date.today)

    loan.update(funded_amount: newAmount)
    render json: {
      message: 'success',
      status: :created
    }

  else 
    
    render json: {
      message: 'invalid'
    }
  end
end
end
