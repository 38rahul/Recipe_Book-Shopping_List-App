
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] =[
    new Recipe('test1 Recipe',' desert1','https://assets.kraftfoods.com/recipe_images/opendeploy/199939_640x428.jpg'),
    new Recipe( ' test2 Recipe',' desert2','https://static.kidspot.com.au/recipe_asset/1385/img-4962.jpg-20150505010814~q75,dx720y432u1r1gg,c--.jpg')
  ];
  
 

  constructor() { }

  ngOnInit() {
  }

}
