class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :url
      t.string :title
      t.integer :user_id
      t.timestamps
    end
  end
end
