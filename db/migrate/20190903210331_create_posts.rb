class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.date :post_date
      t.string :navigation

      t.timestamps
    end
  end
end