class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :c_title
      t.integer :question_id
      t.timestamps
    end
  end
end
