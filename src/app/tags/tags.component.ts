import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodPagetags?:string[];
 tags?:Tag[] = [];
  constructor(private foodSrv:FoodService){}

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.foodSrv.getAllTag()
  }
}
