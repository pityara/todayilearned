class ChangeDefaultStatusOfUser < ActiveRecord::Migration[5.1]
  def up
    change_column(:users, :status, :integer, default: 0)
  end
end
