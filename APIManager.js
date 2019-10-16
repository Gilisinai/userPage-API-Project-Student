//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        
        $.ajax({
            url: 'https://randomuser.me/api/?results=1',
            dataType: 'json',
            success: (data1) => {
                this.data.users = data1.results
            }
          });
    }

    loadFriends() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: (data1) => {
                this.data.friends = data1.results  
                
            }
          });
    }

    loadKanye() {
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: (data1) => {
                this.data.quote = data1
                // console.log(this.data)
                // console.log(this.data.quote)
            }
          });
    }

    loadPokemon() {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/110',
            dataType: 'json',
            success: (data1) => {
                this.data.pokemon = data1.sprites.front_default
                console.log(this.data)
            }
          });
    }

    loadMeat() {
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
            dataType: 'json',
            success: (data1) => {
                this.data.meat = data1
                
            }
          });
    }

    loadPageData() {
        this.loadData()
        this.loadFriends()
        this.loadKanye()
        this.loadPokemon()
        this.loadMeat()
    }
}

 
