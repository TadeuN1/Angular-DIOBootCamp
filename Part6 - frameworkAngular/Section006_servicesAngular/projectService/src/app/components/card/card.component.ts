import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon:PokemonData
  constructor(private service: PokemonService){


    this.pokemon = {
      id:0,
      name:'',
      sprites:{
        front_default: ''
      },
      types:[]
      }
}

ngOnInit():void {
  this.getPokemon("pikachu")
}

getPokemon(searchNamne: string){
  this.service.getPokemon(searchNamne).subscribe({
    next: (res) => {

      this.pokemon={
        id: res.id,
        name: res.name,
        sprites: res.sprites,
        types: res.types
      }
    },
    error: (err) => console.log(err)
  })
}

}
