import { Pipe, PipeTransform } from '@angular/core';
import { Sprites } from '../components/interfaces/PokemonDetailsResponse.interface';

@Pipe({
  name: 'carouselImage'
})
export class CarouselImagePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return value;
    } else {
      return '../../assets/no-image.PNG';
    }
  }

}
