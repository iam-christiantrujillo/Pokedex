(function(){
    function add(num){
        for(var i=0; i<num; i++){
            var container = document.querySelector(".row")
            var card= document.createElement('div')
            card.className = "card"
            var img = document.createElement('img')
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"
            var texto = document.createElement('div')
            texto.className = "texto"
            var nombre = document.createElement('p')
            nombre.className = "nombre"
            nombre.innerHTML = pokemons[i].name.english
            var tipo = document.createElement('p')
            tipo.className = "tipo"
            tipo.innerHTML = "Tipo: " + pokemons[i].type
            var ataque = document.createElement('p')
            ataque.className = "ataque"
            ataque.innerHTML = "Ataque: " + pokemons[i].base.Attack
            var defensa = document.createElement ('p')
            defensa.className = "defensa"
            defensa.innerHTML = "Defensa: " + pokemons[i].base.Defense
            var velocidad = document.createElement ('p')
            velocidad.className = "velocidad"
            velocidad.innerHTML = "Velocidad: " + pokemons[i].base.Speed
            texto.append(nombre, tipo, ataque, defensa, velocidad)
            card.append(texto)
            card.append(img)
            container.append(card)
        }
    }
    add(pokemons.length)

})()


