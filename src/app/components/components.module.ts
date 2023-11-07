import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SliderImagesPokemonComponent } from './slider-images-pokemon/slider-images-pokemon.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from '../pipes/pipes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonTableComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    SliderImagesPokemonComponent,
    PokemonMovesComponent,
    PokemonDetailsCardComponent,
    LoadingComponent,
    PageNotFoundComponent,
  ],
  exports: [LoadingComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
