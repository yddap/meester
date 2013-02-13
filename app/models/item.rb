class Item < ActiveRecord::Base
  CATEGORIES = ["gallery", "home"]
  
  
  has_attached_file :image, 
                    :styles => { :normal => "x400", :thumb => "x100", :small  => "400x400>" },
                    :storage => :s3,
                    :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
                    :path => "/:style/:id/:filename"
                 
end
