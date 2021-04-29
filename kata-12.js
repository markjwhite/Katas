
//Helper function to check if bakery has ingredient from recipe.
const ingredientCheck = (bakery, recipes) => {
  let availableRecipe = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let r = 0; r < recipes.length; r++) {
      for (let ing = 0; ing < recipes[r]['ingredients'].length; ing++) {
        if (bakery[i] === recipes[r]['ingredients'][ing]) {
          availableRecipe.push(recipes[r]['name']);
        }
      }
    }
  }
  return availableRecipe;
};


//Function that determines which recipes match the ingredients that the bakeries have in stock.

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let bakeryAA = ingredientCheck(bakeryA, recipes);
  let bakeryBB = ingredientCheck(bakeryB, recipes);

  for (let i = 0; i < bakeryAA.length; i++) {
    for (let x = 0; x < bakeryBB.length; x++) {
      if (bakeryAA[i] === bakeryBB[x]) {
        return bakeryAA[i];
      }
    }
  }
};


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


