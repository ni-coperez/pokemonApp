import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './no-image.pipe';
import { CarouselImagePipe } from './carousel-image.pipe';



@NgModule({
  declarations: [NoImagePipe, CarouselImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NoImagePipe,
    CarouselImagePipe
  ]
})
export class PipesModule { }
