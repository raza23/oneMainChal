class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.string :loan_id
      t.decimal :payment_amount

      t.string :payment_date



      t.timestamps
    end
  end
end
