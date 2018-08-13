var GistBox = React.createClass({displayName: "GistBox",
    getInitialState: function() {
        return {
            gists: [{username: "server4001", "url": "https://gist.github.com/Server4001/09cb86362b5896fdea5d"}]
        }
    },
    addGist: function(userInput) {
        var url = `https://api.github.com/users/${userInput}/gists`;

        $.get(url, function(data) {
            if (data.length < 1) {
                alert(`No gists found for user: ${userInput}`);

                return false;
            }

            var username = data[0].owner.login;
            var url = data[0].html_url;
            var gists = this.state.gists.concat({username, url});

            this.setState({ gists });
        }.bind(this)).fail(function() { // Calling .bind() make the "this" variable inside the $.get callback the same as outside the callback (the react object). Otherwise, "this" would refer to the ajax callback function.
            alert(`Invalid username: ${userInput}`);
        });
    },
    render: function() {
        var newGist = function(gist) {
            return React.createElement(Gist, {username: gist.username, url: gist.url})
        };

        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "GistBox"), 

                React.createElement(GistAddForm, {onAdd: this.addGist}), 

                 this.state.gists.map(newGist) 
            )
        );
    }
});

React.render(React.createElement(GistBox, null), document.querySelector('#app'));
