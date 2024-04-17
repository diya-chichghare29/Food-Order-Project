import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = []     //add food property in home component

  //inject FoodService in home component
  constructor(private foodsrv: FoodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const searchItems = params.get('searchItems'); // Corrected syntax
      if (searchItems) {
        this.foods = this.foodsrv.getAll().filter(food => food.name.toLowerCase().includes(searchItems.toLowerCase()));
      } else {
        const tag = params.get('tag');
        if (tag !== null) {
          this.foods = this.foodsrv.getAllFoodByTag(tag);
        } else
          this.foods = this.foodsrv.getAll();
      }
    });
  }

  getStarArray(rating: number): number[] {
    return Array.from({ length: Math.floor(rating) }, (v, i) => i + 1);
  }

}
