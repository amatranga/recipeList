import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('BBQ Kitten', 
      'Turn Fluffy into Smokey!',
      'https://static1.squarespace.com/static/54e8ba93e4b07c3f655b452e/t/56c2a04520c64707756f4267/1493764650017/'),
    new Recipe(
      'Baked Bunny', 
      'There is plenty of hop to this recipe', 
      'data:image/jpeg;base64,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')
  ];
  recipeName: 'newRecipe';
  recipeDescription: 'newRecipe Description';
  imagePath: 'An Image';

  addRecipe(e) {
    this.recipes.push(new Recipe(e.target.name, e.target.description, e.target.imagePath));
  }

  // onAddRecipe(event: Event) {
  //   this.recipeName = (<HTMLInputElement>event.target).value;
  //   this.recipeDescription = (<HTMLInputElement>event.target).value;
  //   this.imagePath = (<HTMLInputElement>event.target).value;
  // }

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
