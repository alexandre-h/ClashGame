var Player = React.createClass({

    render: function() {
        players = this.props.players;
        return (
            <div id="heroes" className="container-fluid">
                <div className="col-md-12 text-center">
                    <h1>Heroes</h1>
                    <p>All the heroes are here</p>
                    <div className="row">
                        {players.map(function(player, index){
                            return <div key={ player.id } className="col-md-6">
                                <p>name : { player.name } </p>
                                <p>Life : { player.defense } </p>
                                <p>Attack : { player.attack } </p>
                                <p>XP: { player.experience } </p>
                            </div>;
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
});

