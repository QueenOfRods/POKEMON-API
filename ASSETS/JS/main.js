
function apipokemon(url ="https://pokeapi.co/api/v2/pokemon"){
    document.querySelector("#pokemoncard").innerHTML= ""

        let consumoapi=fetch(url)
       consumoapi.then(res => res.json())
       .then(infoapi1 => {
        for(const pokemon of infoapi1.results){
            fetch(pokemon.url)
            .then(res2 => res2.json())
            .then (infoapi2 => {
                for(const StatsPokemon of infoapi2.stats) {
                    fetch (StatsPokemon.stat.url)
                    .then (res3 => res3.json())
                    .then (statsdata => {
                        for (const LangStats of statsdata.names){
                            let vl = (LangStats.name == "velocidad") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                            if (LangStats.language.name == "es" && LangStats.name == "velocidad"){
                                document.querySelector("#pokemoncard").innerHTML += `
                                <div class="container mt-5">
                                <div class="fondotarjetas" style="width: 18rem;">
                                    <img src= "${infoapi2.sprites.other['oficial-artwork'].front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${pokemon.name}</h5>
                                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                      <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                  </div>
                                </div>`
                            }     
                        }
                    })
                }
            })
        }

       })
    }
    apipokemon()