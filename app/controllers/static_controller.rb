class StaticController < ApplicationController
  
  def index
    @items = Item.all  :conditions => {:category => "home"}
  end
  
  def about_us
    @google_maps = true
  end
  
  def kitesurfing
    
  end
  
  def trips
    
  end
  
  def prices
    
  end
  
  def test
    
  end
  
end