class ChangeDataTitleToContents < ActiveRecord::Migration[6.1]
  def change
    change_column :contents, :title, :text
    change_column :contents, :description, :text
    change_column :contents, :content_thumbnail, :text
    change_column :contents, :account, :text
    change_column :contents, :account_thumbnail, :text
    change_column :contents, :title, :text
    change_column :contents, :date, 'date USING CAST(date AS date)'
    change_column :contents, :href, :text
  end
end
