import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailsResponse } from '../interfaces/PokemonDetailsResponse.interface';
import { PokemonResponse } from '../interfaces/PokemonResponse';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent implements OnInit, OnDestroy {

  public pokemonNoInfo: any = {};
  public pokemons: PokemonDetailsResponse[] = [];
  public limit: number = 10;
  public offset: number = 0;
  public totalPokemons: number = 0;
  pokemonResults?: Subscription;

  constructor(private pokeService: PokemonService, private router: Router) {

  }

  ngOnDestroy(): void {
    this.pokemonResults?.unsubscribe();
    console.log('Desuscrito')
  }


  ngOnInit(): void {
    this.getPokemonResults();
  }

  getPokemonById(id: number) {
    this.router.navigate(['/pokemon', id]);
  }

  getPokemonResults() {
    this.pokemonResults = this.pokeService.getPokemons(this.limit, this.offset).subscribe((pokemons: PokemonResponse) => {
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

  changePage(n: number) {
    this.offset = (n * 10) - 10;
    this.pokemons = [];
    this.getPokemonResults()
  }

}
