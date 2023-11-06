import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Ability, Move, PokemonDetailsResponse, Type } from '../interfaces/PokemonDetailsResponse.interface';
import { PokemonMoveSetResponse } from '../interfaces/PokemonMoveSetResponse.interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemon: any = {};
  public abilities: Ability[] = [];
  public moves: Move[] = [];
  public infoMoves: PokemonMoveSetResponse[] = [];
  public types: Type[] = [];

  constructor(private pokeService: PokemonService, private actvRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const id = this.actvRoute.snapshot.params['id'];
    this.getGeneralInfoPokemon(id);
  }

  getGeneralInfoPokemon(id: number) {
    this.pokeService.getPokemonById(id).subscribe((pokemon: PokemonDetailsResponse) => {
      this.pokemon = pokemon;
      this.abilities = pokemon.abilities;
      this.moves = pokemon.moves;
      this.types = pokemon.types;
      this.getPokemonMovesInfo();
    })
  }

  getPokemonMovesInfo() {
    this.moves.forEach(move => {
      this.pokeService.getPokemonByQuery(move.move.url).subscribe((res: any) => {
        this.infoMoves.push(res)
      })
    })
  }

  goBack() {
    this.router.navigate(['pokemons']);
  }

}
