class ReanameTableImagesToItem < ActiveRecord::Migration
  def self.up
    rename_table :images, :items
  end

  def self.down
    rename_table :items, :images
  end
end
