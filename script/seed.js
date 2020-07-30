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
        'https://hebbarskitchen.com/wp-content/uploads/2017/05/paneer-tikka-recipe-recipe-of-paneer-tikka-on-tawa-dry-paneer-tikka-2-1068x1423.jpeg',
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
