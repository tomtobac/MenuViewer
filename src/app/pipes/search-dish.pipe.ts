import { Dish } from './../interfaces/dish';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDish'
})
export class SearchDishPipe implements PipeTransform {

  transform(dishes: Dish[], search?: string): any {
    if (search == null || search.trim().length === 0) return dishes;
    return dishes.filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()))
  }

}
