class PlayerController < ApplicationController
  def index
    @players = Player.all
    render component: 'Player', props: { players: @players }
  end

  def create

  end

  def update

  end

  def delete

  end
end
