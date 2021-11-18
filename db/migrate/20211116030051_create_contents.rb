class CreateContents < ActiveRecord::Migration[6.1]
  def change
    create_table :contents do |t|
      t.string :title,              null: false
      t.string :description
      t.string :content_thumbnail
      t.string :account
      t.string :account_thumbnail
      t.string :date
      t.string :href,               null: false

      t.timestamps
    end
  end
end
