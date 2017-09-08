var Index = React.createClass({
    render: function() {
        return (
            <div>

                <div className="container-fluid top">
                    <div className="banner">
                        <div className="banner-top">
                            <div className="banner-text">
                                <h2>Welcome on</h2>
                                <h1>Clash Game</h1>
                                <div className="banner-btn">
                                    <a href="#about">More Information</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="heroes" className="container-fluid">
                    <div className="col-md-12 text-center">
                        <h1>Heroes</h1>
                        <p>Here you will find some heroes description</p>
                        <div className="banner-btn">
                            <a href="#section1">More Information</a>
                        </div>
                    </div>
                </div>
                <div id="about" className="container-fluid">
                    <div className="col-md-12 text-center">
                        <h1>More information</h1>
                        <p>Welcome on Clash Game, are you ready to fight?! Wait you don't know what is it?</p>
                        <p>Let me explain you. You have different player you have to make fight and only one must survive!! </p>
                        <p>You have different items to add to your player weapons, shield and special capacity</p>
                        <p>But be careful even the stronger player can lose.</p>
                        <p>Attack don't make win think the defense too</p>
                    </div>
                </div>
            </div>
        );
    }
});

