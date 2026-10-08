
var rate=document.getElementById("rate");
var review=document.getElementById("review");
var prepTime=document.getElementById("prepTime");
var cookTime=document.getElementById("cookTime");
var people=document.getElementById("people");
var padgeOne=document.getElementById("padgeOne");
var padgeTwo=document.getElementById("padgeTwo");
var paragraphe=document.getElementById("paragraphe");
var title=document.getElementById("title");
var ingredientsList=document.getElementById("ingredientsList");
var calnumber=document.getElementById("calnumber");
var carb=document.getElementById("carb");
var fiber=document.getElementById("fiber");
var protien=document.getElementById("protien");
var fat=document.getElementById("fat");
var sodium=document.getElementById("sodium");
var tips=document.getElementById("tips");




var meal=[
{
rate:"4.6",
review:"(289 reviews)",
prepTime:"20 min",
cookTime:"30 min",
people:"4 people",
image:"imgs/photo-1509722747041-616f39b57569.jfif",
padgeOne:"Easy",
padgeTwo:"Asian",
title:"Vegetable Curry",
paragraphe:"Hearty vegetarian curry with coconut milk",
ingredientsList:[
"2 potatoes, cubed",
"1 cauliflower, florets",
"2 carrots, sliced",
"1 can chickpeas",
"400ml coconut milk",
"3 tablespoons curry powder",
"1 onion, diced",
"3 cloves garlic, minced",
"Fresh spinach",
],
instructionsList:[
"Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
"Pour in coconut milk and 1 cup water. Bring to simmer.",
"Add potatoes and carrots, cook for 5 minutes.",
"Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
"Stir in fresh spinach and cook until wilted.",
"Serve hot over basmati rice or with naan bread.",
],
calnumber:"380 kcal",
carb:"48g",
fiber:"12g",
Protein:"26g",
Fat:"26g",
Fiber:"5g",
sodium:"17g",
tips:[
    "Add vegetables in order of cooking time needed",
    "Adjust curry powder amount to taste",
    "Use full-fat coconut milk for creamier curry",
    "Add protein like tofu or paneer if desired",
]
},

{

rate:"4.8",
review:"445 (reviews)",
prepTime:"20 min",
cookTime:"15 min",
people:"2 people",
image:"imgs/photo-1559314809-0d155014e29e.avif",
padgeOne:"Intermediate",
padgeTwo:"Asian",
title:"Pad Thai",
paragraphe:"Popular Thai stir-fried noodles with shrimp and peanuts",
ingredientsList:[
"200g rice noodles",
"200g shrimp, peele",
"2 eggs",
"3 tablespoons tamarind paste",
"2 tablespoons fish sauce",
"1 tablespoon palm sugar",
"Bean sprouts",
"Crushed peanuts",
"Lime wedges and cilantro",
],
instructionsList:[
"Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
"Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
"Heat wok over high heat. Scramble eggs and set aside.",
"Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
"Add scrambled eggs and bean sprouts. Toss everything together.",
"Serve topped with crushed peanuts, lime wedges, and cilantro.",
],
calnumber:"540 kcal",
carb:"62g",
fiber:"4g",
Protein:"32g",
Fat:"21g",
Fiber:"1120mg",
sodium:"13g",
tips:[
"Don't oversoak noodles or they'll be mushy",
"Cook on high heat for authentic wok flavor",
"Balance sweet, sour, and salty flavors",
"Prepare all ingredients before starting to cook",
]


},

{

rate:"4.6",
review:"289 (reviews)",
prepTime:"20 min",
cookTime:"40 min",
people:"4 people",
image:"imgs/photo-1585032226651-759b368d7246.avif",
padgeOne:"Easy",
padgeTwo:"Asian",
title:"Vegetable Curry",
paragraphe:"Hearty vegetarian curry with coconut milk",
ingredientsList:[
        "500g ground beef",
      "4 burger buns",
      "4 cheese slices",
      "1 tomato, sliced",
      "4 lettuce leaves",
      "1 onion, sliced",
      "Pickles and burger sauce",
      "Salt and pepper",
],
instructionsList:[
 "Mix chicken with yogurt, shawarma spice, and garlic. Let it marinate for 20 minutes.",
      "Heat a pan over high heat with a little oil.",
      "Cook the chicken for 8-10 minutes until golden and cooked through.",
      "Warm the pita bread for 30 seconds on each side.",
      "Spread garlic sauce on the pita and add the chicken.",
      "Top with cucumber, tomatoes, and pickles, then roll and serve."
],
calnumber:"380 kcal",
carb:"48g",
fiber:"12g",
Protein:"26g",
Fat:"26g",
Fiber:"5g",
sodium:"4g",

tips:[
    "Add vegetables in order of cooking time needed",
    "Adjust curry powder amount to taste",
    "Use full-fat coconut milk for creamier curry",
    "Add protein like tofu or paneer if desired",
]
},

{
    rate: "4.6",
    review: "289 (reviews)",
    prepTime: "20 min",
    cookTime: "40 min",
    people: "4 people",
    image: "imgs/photo-1546069901-ba9599a7e63c.avif",
    padgeOne: "Easy",
    padgeTwo: "Asian",
    title: "Vegetable Curry",
    paragraphe: "Hearty vegetarian curry with coconut milk",
    ingredientsList: [
        "2 salmon fillets",
      "1 1/2 cups cooked rice",
      "3 tablespoons teriyaki sauce",
      "1 tablespoon honey",
      "1 avocado, sliced",
      "1 cucumber, sliced",
      "1 carrot, grated",
      "Sesame seeds"
    ],
    instructionsList: [
          "Mix teriyaki sauce and honey in a small bowl.",
      "Heat a little oil in a pan over medium-high heat.",
      "Cook the salmon for 4 minutes on the first side.",
      "Flip the salmon, pour in the sauce, and cook for 3 more minutes until glazed.",
      "Divide the rice between two bowls.",
      "Top with salmon, avocado, cucumber, carrot, and sesame seeds.",
    ],
    calnumber: "380 kcal",
    carb: "48g",
    fiber: "12g",
    Protein: "26g",
    Fat: "26g",
    Fiber: "5g",
    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
},

{
 rate: "4.8",
    review: "412 (reviews)",
    prepTime: "15 min",
    cookTime: "25 min",
    people: "4 people",
    image: "imgs/photo-1574071318508-1cdbab80d002.avif",
    padgeOne: "Medium",
    padgeTwo: "Italian",
    title: "Spaghetti Carbonara",
    paragraphe: "Classic creamy Roman pasta with crispy pancetta",
    ingredientsList: [
      "400g spaghetti",
      "150g pancetta, diced",
      "3 large eggs",
      "1 cup grated Parmesan",
      "2 cloves garlic",
      "Black pepper",
      "Salt for pasta water",
    ],
    instructionsList: [
      "Boil spaghetti in salted water until al dente, reserve 1 cup of pasta water.",
      "Fry pancetta in a pan until golden and crispy.",
      "Whisk eggs with Parmesan and plenty of black pepper.",
      "Drain pasta and add to the pan with pancetta, off the heat.",
      "Quickly pour in the egg mixture, tossing constantly and adding pasta water to make a creamy sauce.",
      "Serve immediately with extra Parmesan.",
    ],
    calnumber: "620 kcal",
    carb: "72g",
    fiber: "4g",
    Protein: "28g",
    Fat: "24g",
    Fiber: "3g",
    sodium:"108g",
    tips: [
      "Remove the pan from heat before adding eggs to avoid scrambling",
      "Use pasta water to loosen the sauce",
      "Freshly grated Parmesan melts better",
      "Never add cream, the eggs make it creamy",
    ],
},

{
    rate: "4.5",
    review: "198 (reviews)",
    prepTime: "10 min",
    cookTime: "20 min",
    people: "2 people",
    image: "imgs/photo-1547592166-23ac45744acd.avif",
    padgeOne: "Easy",
    padgeTwo: "Healthy",
    title: "Grilled Chicken Salad",
    paragraphe: "Light and fresh salad with juicy grilled chicken",
    ingredientsList: [
      "2 chicken breasts",
      "1 head romaine lettuce",
      "1 cucumber, sliced",
      "10 cherry tomatoes, halved",
      "1 avocado, sliced",
      "3 tablespoons olive oil",
      "Juice of 1 lemon",
      "Salt and pepper",
    ],
    instructionsList: [
      "Season chicken with salt, pepper, and a little olive oil.",
      "Grill chicken for 6-7 minutes per side until cooked through.",
      "Let the chicken rest for 5 minutes, then slice.",
      "Combine lettuce, cucumber, tomatoes, and avocado in a bowl.",
      "Top with chicken and drizzle with olive oil and lemon juice.",
      "Toss gently and serve fresh.",
    ],
    calnumber: "350 kcal",
    carb: "12g",
    fiber: "8g",
    Protein: "38g",
    Fat: "18g",
    Fiber: "6g",
    sodium:"7g",
    tips: [
      "Let the chicken rest so the juices stay inside",
      "Add the avocado last so it doesn't brown",
      "Marinate the chicken for 30 minutes for more flavor",
      "Add feta cheese or nuts for extra crunch",
    ],
},

{
    rate: "4.7",
    review: "356 (reviews)",
    prepTime: "25 min",
    cookTime: "35 min",
    people: "6 people",
    image: "imgs/photo-1574071318508-1cdbab80d002.avif",
    padgeOne: "Medium",
    padgeTwo: "Mexican",
    title: "Beef Tacos",
    paragraphe: "Juicy spiced beef in warm tortillas with fresh toppings",
    ingredientsList: [
      "500g ground beef",
      "12 small tortillas",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "1 cup shredded lettuce",
      "2 tomatoes, diced",
      "1 cup shredded cheese",
      "Sour cream and salsa",
    ],
    instructionsList: [
      "Cook onion in a pan until soft.",
      "Add ground beef and cook until browned, breaking it apart.",
      "Stir in taco seasoning and 1/4 cup water, simmer for 10 minutes.",
      "Warm the tortillas in a dry pan for 30 seconds on each side.",
      "Fill tortillas with beef and top with lettuce, tomatoes, and cheese.",
      "Serve with sour cream and salsa.",
    ],
    calnumber: "450 kcal",
    carb: "35g",
    fiber: "5g",
    Protein: "30g",
    Fat: "22g",
    Fiber: "4g",
    sodium:"10g",
    tips: [
      "Drain excess fat from the beef before adding seasoning",
      "Warm tortillas so they don't crack",
      "Set up a topping bar and let everyone build their own",
      "Add lime juice for a fresh kick",
    ],
},

{
    rate: "4.4",
    review: "175 (reviews)",
    prepTime: "10 min",
    cookTime: "30 min",
    people: "4 people",
    image: "imgs/photo-1603133872878-684f208fb84b.avif",
    padgeOne: "Easy",
    padgeTwo: "Middle Eastern",
    title: "Lentil Soup",
    paragraphe: "Warm and comforting red lentil soup with cumin and lemon",
    ingredientsList: [
      "1 1/2 cups red lentils",
      "1 onion, diced",
      "2 carrots, diced",
      "3 cloves garlic, minced",
      "1 teaspoon cumin",
      "6 cups vegetable broth",
      "2 tablespoons olive oil",
      "Juice of 1 lemon",
    ],
    instructionsList: [
      "Heat olive oil and sauté onion, carrots, and garlic for 5 minutes.",
      "Add cumin and stir for 30 seconds.",
      "Add lentils and vegetable broth, bring to a boil.",
      "Reduce heat and simmer for 20 minutes until lentils are soft.",
      "Blend part of the soup for a creamier texture.",
      "Add lemon juice and serve hot with bread.",
    ],
    calnumber: "290 kcal",
    carb: "42g",
    fiber: "14g",
    Protein: "16g",
    Fat: "6g",
    Fiber: "7g",
    tips: [
      "Rinse the lentils before cooking",
      "Add lemon juice at the end to keep it bright",
      "Top with fried onions or a drizzle of olive oil",
      "The soup thickens as it sits, add water when reheating",
    ],
}
]

var copyOfArray=meal.slice();

var mealRandom


function rotate() {
    if(copyOfArray.length===0){
    copyOfArray=meal.slice();
    
}

   mealRandom = Math.floor(Math.random() * copyOfArray.length);

document.getElementById("image").src=copyOfArray[mealRandom].image;
document.getElementById("rate").innerHTML=copyOfArray[mealRandom].rate;
document.getElementById("review").innerHTML=copyOfArray[mealRandom].review;
document.getElementById("prepTime").innerHTML=copyOfArray[mealRandom].prepTime;
document.getElementById("cookTime").innerHTML=copyOfArray[mealRandom].cookTime;
document.getElementById("people").innerHTML=copyOfArray[mealRandom].people;
document.getElementById("padgeOne").innerHTML=copyOfArray[mealRandom].padgeOne;
document.getElementById("padgeTwo").innerHTML=copyOfArray[mealRandom].padgeTwo;
document.getElementById("paragraphe").innerHTML=copyOfArray[mealRandom].paragraphe;
document.getElementById("title").innerHTML=copyOfArray[mealRandom].title;
document.getElementById("calnumber").innerHTML=copyOfArray[mealRandom].calnumber;
document.getElementById("carb").innerHTML=copyOfArray[mealRandom].carb;
document.getElementById("fiber").innerHTML=copyOfArray[mealRandom].Fiber;
document.getElementById("protien").innerHTML=copyOfArray[mealRandom].Protein;
document.getElementById("fat").innerHTML=copyOfArray[mealRandom]. Fat;
document.getElementById("sodium").innerHTML=copyOfArray[mealRandom].sodium;




  var total = parseInt(copyOfArray[mealRandom].prepTime) + parseInt(copyOfArray[mealRandom].cookTime);
    console.log(meal.title, total);

    if (total > 45) {
        document.getElementById("longPrepAlert").classList.remove("d-none");
    } else {
        document.getElementById("longPrepAlert").classList.add("d-none");
    }

copyOfArray.splice(mealRandom,1)

 displayIngredientsList()


  displayInstructionList()


  displayTipsCheif()
}




rotate(); 




var ingredientsElement = document.getElementById("ingredientsList");

function displayIngredientsList() {
    var ingredientsArray = copyOfArray[mealRandom].ingredientsList;

    var cartona = "";
    for (var i = 0; i < ingredientsArray.length; i++) {
        cartona += `
      <li class="mb-3 align-items-start d-flex gap-2 pt-0">
  <span>
${ingredientsArray[i]}
  </span>
</li>
        `
      
      }
      ingredientsList.innerHTML = cartona;      


}
function displayInstructionList() {
    var instructionArray = copyOfArray[mealRandom]. instructionsList;

    var cartona = "";
    for (var i = 0; i < instructionArray.length; i++) {
        cartona += `
      <li class="mb-3 align-items-start d-flex gap-2 pt-0">
${instructionArray[i]}
</li>
        `
      
      }
      instructionsList.innerHTML = cartona;      


}




function displayTipsCheif(){
var tipsArray=copyOfArray[mealRandom].tips;
var cartona="";
for(var i=0 ; i<tipsArray.length ; i++){
  cartona+=`
   <div class="tip-card back mb-2 rounded-3 py-3">
   <i class="fa-solid fa-circle-check fs-5" style="color: #FFB900;"></i>
    <span>${tipsArray[i]}</span>
  </div>
  
  
  `
}

    tips.innerHTML = cartona;      


}

