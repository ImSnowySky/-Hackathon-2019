class User < ApplicationRecord
  validates :email, presence: true, uniqueness: {case_sensitive: false}, length: {maximum: 255}
  validates :password_digest, presence: true
  validates :name, length: {maximum: 30}
  validates :phone, length: {maximum: 15}
  validates :contacts, length: {maximum: 1_000}

  has_many :events
  has_many :subscriptions
  has_many :subscribed_events, through: :subscriptions, source: :event

  scope :select_auth, -> do
    select(:id, :password_digest, :email)
  end
end
