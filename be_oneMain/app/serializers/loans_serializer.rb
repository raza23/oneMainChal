class LoansSerializer < ActiveModel::Serializer
  attributes :id, :funded_amount,:payments

  # has_many :payments
end
