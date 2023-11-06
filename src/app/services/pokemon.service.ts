import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../components/interfaces/PokemonResponse';
import { Observable } from 'rxjs';
import { PokemonDetailsResponse } from '../components/interfaces/PokemonDetailsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonById(id: number): Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(`${baseUrl}pokemon/${id}`);
  }

  getPokemonByQuery(query: string): Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(query);
  }

}

const baseUrl: string = 'https://pokeapi.co/api/v2/';
