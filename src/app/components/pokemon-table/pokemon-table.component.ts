import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailsResponse } from '../interfaces/PokemonDetailsResponse.interface';
import { PokemonResponse } from '../interfaces/PokemonResponse';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit {

  public pokemonNoInfo: any = {};
  public pokemons: PokemonDetailsResponse[] = [];
  public limit: number = 10;
  public offset: number = 0;
  public totalPokemons: number = 0;

  constructor(private pokeService: PokemonService, private router: Router) {

  }


  ngOnInit(): void {
    this.getPokemonResults();
  }

  getPokemonById(id: number) {
    this.router.navigate(['/pokemon', id]);
  }

  getPokemonResults() {
    this.pokeService.getPokemons(this.limit, this.offset).subscribe((pokemons: PokemonResponse) => {
      this.pokemonNoInfo = pokemons
      this.totalPokemons = this.pokemonNoInfo.count
      this.getPokemonsInfo();
      console.log(this.pokemons)
    })
  }

  getPokemonsInfo() {
    this.pokemonNoInfo.results.forEach((pokemon: any) => {
      this.pokeService.getPokemonByQuery(pokemon.url).subscribe((resp: PokemonDetailsResponse) => {
        this.pokemons.push(resp);
        this.pokemons.sort((a, b) => a.id - b.id);
      })
    })
  }

  changePage(n : number){
    this.offset = (n*10) - 10;
    this.pokemons = [];
    this.getPokemonResults()
  }

}
