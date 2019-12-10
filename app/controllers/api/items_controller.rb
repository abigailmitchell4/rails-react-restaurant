class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    # @items = Item.includes(:menus)
    # respond_to do |item|†
    #   item.html
    #   item.json { render json: @sites }
    # end
    render json: @menu.items.all
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item 
    else
      render json: { errors: item.errors }
    end
  end

  def update
    @item.update(complete: !@item.complete)
    render json: @item
  end

  def destroy
    @item.destroy
    render json: { message: "item deleted" }
  end

private

  def set_item
    @item = Item.find(params[:id])
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def item_params
    params.require(:item).permit(:name, :description)
  end
end
