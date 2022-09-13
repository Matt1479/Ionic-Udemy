import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredients: ['Spaghetti', 'Meat Balls', 'Tomato Sauce'],
    },
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    // find - if returns true - that means this is the object we're looking for
    // compare the id of the recipe I'm looking at with the recipeId I got as an argument
    // if these are equal - I have the recipe I want to return
    // wrap into object, copy everything with spread operator
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    // filter: true - keep element, false - discard
    // keep all the elements but the element of id - recipeId
    // so if they are not equal - return true, otherwise false - discard object
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
