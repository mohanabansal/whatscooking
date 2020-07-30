'use strict'

const db = require('../server/db')
const {User, Recipe, Course, Cuisine} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'cody',
      lastName: 'cody',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      password: '1234'
    }),
    User.create({
      firstName: 'mohana',
      lastName: 'bansal',
      email: 'mohana@test.com',
      password: '1234'
    })
  ])

  const course = await Promise.all([
    Course.create({
      id: 1,
      name: 'Breakfast'
    }),
    Course.create({
      id: 2,
      name: 'Lunch'
    }),
    Course.create({
      id: 3,
      name: 'Dinner'
    }),
    Course.create({
      id: 4,
      name: 'Main'
    })
  ])

  const cuisine = await Promise.all([
    Cuisine.create({
      id: 1,
      name: 'Indian'
    }),
    Cuisine.create({
      id: 2,
      name: 'Italian'
    }),
    Cuisine.create({
      id: 3,
      name: 'Chinese'
    }),
    Cuisine.create({
      id: 4,
      name: 'Japanese'
    }),
    Cuisine.create({
      id: 5,
      name: 'Thai'
    })
  ])

  const recipe = await Promise.all([
    Recipe.create({
      name: 'Paneer Tikka',
      description:
        'A popular paneer recipe prepared from marinating paneer chunks with spices and yogurt and grilled in a tandoor or tawa. It is an adapted recipe from the popular chicken tikka recipe for non meat eaters or paneer lovers.',
      img:
        'https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Paneer-Tikka-Recipe.jpg',
      video: 'https://www.youtube.com/watch?v=BwIJHI4KdIE',
      prepTime: 30,
      cookTime: 10,
      serving: 3,
      cuisine: 'Indian',
      ingredients: [
        '½ cup curd / yogurt thick',
        '½ tsp turmeric / haldi',
        '1 tsp kashmiri red chilli powder / lal mirch powder',
        '½ tsp coriander powder / daniya powder',
        '¼ tsp cumin powder / jeera powder',
        '½ tsp garam masala',
        '½ tsp kasuri methi / dry crushed fenugreek leaves',
        '½ tsp chaat masala, 1 tsp ginger - garlic paste',
        '¼ tsp ajwain / carom seeds',
        '2 tsp besan / gram flour - dry roasted',
        '1 tbsp lemon juice',
        'salt to taste',
        '3 tsp oil',
        '½ onions',
        '½ capsicum, red & green cubed',
        '5 cubes paneer / cottage cheese'
      ],
      instructions:
        'Firstly, take ½ cup thick curd / yogurt.Further add in all the spices along with salt. Mix till all the spices are combined well with curd. Now add ½ onion petals, ½ cubed capsicum (red & green) and 5 cubes paneer. Also add 1 tsp of oil. Mix gently till all the vegetables are coated well. Furthermore, to marinate, cover and refrigerate for 30 minutes. After marination, insert the marinated paneer, capsicum and onions into wooden skewers. Further, roast it on a hot tawa or grill in oven or tandoor. Finally, sprinkle some chaat masala and serve paneer tikka immediately.',
      specialInstructions:
        'Firstly, make sure to marinate at-least 30 minutes or extend till overnight, for perfect restaurant style tikka taste. Also, adding a drop of red food colour, gives bright red colour. Additionally, add vegetables of your choice like broccoli, baby corn, mushroom or potato. Finally, serve panner tikka immediately, else it doesn’t taste great.',
      cuisineId: 1,
      courseId: 1
    }),
    Recipe.create({
      name: 'Veggie Pizza',
      description:
        'Pizza is a flat bread which is prepared with all purpose flour and fermented with yeast. It is typically topped with mozzarella cheese, pizza tomato sauce and other vegetarian pizza toppings. Pizza can be consumed as snack, but not limited for lunch and dinner too.',
      img:
        'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg',
      video: 'https://www.youtube.com/watch?v=kSb62MGJSI4',
      prepTime: 180,
      cookTime: 15,
      serving: 4,
      ingredients: [
        '½ cup warm water',
        '1 tsp sugar',
        '1 tsp dry yeast',
        '2 cups maida / plain flour / all-purpose flour',
        'salt to taste',
        '3 tbsp olive oil',
        'water as required, to knead',
        '3 tbsp pizza sauce',
        '5 mushrooms, thinly sliced',
        '3 tbsp onion, roughly chopped',
        '¼ cup capsicum, roughly chopped',
        '9 pickled jalapeños, based on spice level',
        '¼ cup black olives, chopped',
        '½ cup mozzarella cheese, grated',
        ' ½ tsp oregano / italian seasonings / mixed herbs'
      ],
      instructions:
        'Firstly, in a large mixing bowl take warm water, sugar and dry yeast and give a quick mix. Allow it to rest for 5 minutes. Now add maida, salt and olive oil. Knead the dough adding water as required. Tuck the dough and form to a ball. place in a large mixing bowl. Cover rest and rise in a warm place for about 2 hours. Punch the dough with fist to release down the air. Place the dough on dusted pizza plate or tray. Flatten the dough by stretching with both hands. Further, leaving a cm or more and create a dent. Then prick with centre of dough with the help of fork. Furthermore, spread pizza sauce generously leaving the sides slightly. Also top with topping of choice. Then spread grated cheese and sprinkle italian seasonings. Further, bake at 500 degrees fahrenheit for about 12 - 15 minutes. Finally, slice and serve pizza hot.',
      specialInstructions: '',
      courseId: 4,
      cuisineId: 2
    }),
    Recipe.create({
      name: 'Vegetarian Thai Curry',
      description:
        'The Vegetarian Thai Green Curry is close to authentic Thai made from home made Thai green curry paste with the vibrant fresh hot chilli peppers and green coriander leaves, ground with lemon grass, I like to load it with the choicest vegetables making it simply delectable and spicy.',
      img:
        'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Vegetarian_Thai_Green_Curry_Recipe-2-2_1600.jpg',
      video: 'https://www.youtube.com/watch?v=BGGr2ty2-BM',
      prepTime: 15,
      cookTime: 40,
      serving: 4,
      ingredients: [
        '5 Stalks Lemongrass',
        '3 Green Chillies',
        'fresh green thai bird chilies',
        'stemmed and chopped',
        '1/4 cup Coriander (Dhania) Leaves',
        'chopped 3 sprig Basil leaves',
        '1 tablespoon Coriander (Dhania) Seeds',
        'whole roasted 1 teaspoon Cumin seeds (Jeera)',
        'roasted 1 teaspoon Whole Black Peppercorns',
        '1 Onion , roughly chopped',
        '1/4 cup Spring Onion (Bulb & Greens) , roughly chopped',
        '3 cloves Garlic',
        '1 inch Ginger',
        'Salt , to taste',
        '400 ml Coconut milk , unsweetened',
        '3 tablespoons Thai Green Curry paste',
        '1 cup Broccoli , florets',
        '1 Carrot (Gajjar)',
        'sliced 1 Red Yellow or Green Bell Pepper (Capsicum) ',
        'diced 1/2 Green zucchini , quartered or thickly sliced 1 cup Water , or vegetable stock',
        '1 tablespoon Brown Sugar (Demerara Sugar)',
        '1 sprig Basil leaves , or kaffir lime leaves',
        'Salt , to taste',
        '1 teaspoon Sunflower Oil'
      ],
      instructions:
        "To begin making the Vegetarian Thai Green Curry recipe, we will first make the Thai Curry paste.To do that, we will first have to prepare the lemongrass.  We will first have to trim away and discard any root section below the bulb base. We will also now remove the dried part of the root until we reach a stage we know that the root cuts easily and is tender. We don't use the leaf part of the lemon grass for the curry paste, you can use it for flavouring a tea or a soup. Continue the same procedure for the remaining lemon grass stalks. Add all the ingredients for the paste into a blender and a little bit of water. Cover the blender and grind the mixture to make a smooth paste. After a few seconds of grinding, open the blender and stir to combine the rest of the ingredients that are required to make the paste - green chillies, coriander leaves, basil leaves, coriander seeds, cumin seeds, peppercorns, onions, spring onions, garlic, ginger and salt. If required add a little more water to grind into a smooth paste. Transfer the Thai curry paste and store it in a glass jar. You only need to use 3 tablespoons of the paste for a single recipe of Thai curry. So with this paste you will be able to make Thai curry at least 3 times over. Next we will proceed to make the Vegetarian Thai Curry with this paste. Heat a teaspoon of oil in a heavy wok. Add in the vegetables like carrots, zucchini, broccoli and bell peppers. Add in some salt and stir fry the vegetables on high heat until lightly tender. Once tender turn off the heat and keep aside. Add a teaspoon of oil into the hot wok, next add in 2 to 3 tablespoons of the Thai curry paste and saute for a few seconds in the oil. Next add in a cup of water and stir to combine into the curry. Next we will add in a tablespoon of brown sugar and finally 400 ml of the coconut milk. Stir to combine all the ingredients. Once combined, add in the salt, stir and allow the mixture to thicken a little and come to a boil. Once the mixture comes to a boil, add in some torn basil leaves and the stir fried vegetables. Stir the mixture, give it a light boil and the Vegetarian Thai curry is ready to be served.Serve the Vegetarian Thai Green Curry Recipe with a bowl of Steamed Rice or Jasmine Rice to enjoy your Thai style Meal.",
      courseId: 4,
      cuisineId: 5
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${course.length} courses`)
  console.log(`seeded ${cuisine.length} cuisines`)
  console.log(`seeded ${recipe.length} recipe`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
