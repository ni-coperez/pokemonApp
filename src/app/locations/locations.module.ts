import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from './location-info/location-info.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { RegionComponent } from './region/region.component';



@NgModule({
  declarations: [
    LocationInfoComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class LocationsModule { }
