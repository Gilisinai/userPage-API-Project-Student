// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        const source = $('#first-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( users );
        $(".user-container").append(newHTML);
    }

    _renderFriends(users) {
        const source = $('#third-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( {users} );
        $(".friends-container").append(newHTML);
    }

    _renderQuote(quoteInfo) {
        const source = $('#second-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( quoteInfo );
        $(".quote-container").append(newHTML);
    }

    _renderPokemon(pokemonInfo) {
        const source = $('#fourth-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( pokemonInfo );
        $(".pokemon-container").append(newHTML);
    }
    

    _renderMeat(meatText) {
        const source = $('#fifth-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( meatText );
        $(".meat-container").append(newHTML);
    }

    render(data) {
        //invokes all the individual _render methods
        this._renderUsers(data)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.meat)
    }
}

