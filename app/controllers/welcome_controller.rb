class WelcomeController < ApplicationController
  def index
    # TODO replace by the two with the best experience
    @players = Player.all.last(2)
    render component: 'Index', props: { players: @players }
  end
end
