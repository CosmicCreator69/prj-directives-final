import { Component, EventEmitter, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  property: any;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients();
    this.slService.ingredientsChanged;
      .subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients= ingredients;

      }
    );
  }
}


