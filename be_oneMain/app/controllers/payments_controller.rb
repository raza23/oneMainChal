class PaymentsController < ActionController::API

    def index
        # byebug
        render json: Payment.all
      end
    
      def show
        render json: Payment.find(params[:id])
      end

end
