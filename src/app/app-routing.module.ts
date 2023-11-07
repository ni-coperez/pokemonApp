import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { LocationInfoComponent } from './locations/location-info/location-info.component';
import { ItemInfoComponent } from './items/item-info/item-info.component';
import { RegionComponent } from './locations/region/region.component';
import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonTableComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent, canActivate: [authGuard] },
  { path: 'locations', component: LocationInfoComponent },
  { path: 'region/:id', component: RegionComponent },
  { path: 'items', component: ItemInfoComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pokemons' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
