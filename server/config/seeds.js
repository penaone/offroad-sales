const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dessert' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Ham, Egg & Cheese',
      categoryName: 'Breakfast',
      description:'Breakfast',
      image: 'https://user-images.githubusercontent.com/65309756/104776365-35a8ba00-5737-11eb-86da-1b8b2f524bd4.png',
      category: categories[0]._id,
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Breakfast Italian Sausage',
      categoryName: 'Breakfast',
      description:'Breakfast',
      image: 'https://user-images.githubusercontent.com/65309756/104776095-be732600-5736-11eb-9d67-769f4f3ad289.png',
      category: categories[0]._id,
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Breakfast Chorizo',
      categoryName: 'Breakfast',
      category: categories[0]._id,
      description:'Breakfast',
      image: 'https://user-images.githubusercontent.com/65309756/104776448-57a23c80-5737-11eb-85c3-918ada77a751.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Ground Beef',
      categoryName: 'Lunch',
      category: categories[1]._id,
      description:'Lunch',
      image: 'https://user-images.githubusercontent.com/65309756/104778019-e44dfa00-5739-11eb-953c-85ed3b405ba4.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Chicken',
      categoryName: 'Lunch',
      category: categories[1]._id,
      description:'Lunch',
      image: 'https://user-images.githubusercontent.com/65309756/104778067-fd56ab00-5739-11eb-8c51-c38540081e4e.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Buffalo Chicken',
      categoryName: 'Lunch',
      category: categories[1]._id,
      description:'Lunch',
      image: 'https://user-images.githubusercontent.com/65309756/104778108-119aa800-573a-11eb-853f-cab09f4a1187.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Jalapeño Chicken',
      categoryName: 'Lunch',
      category: categories[1]._id,
      description:'Lunch',
      image: 'https://user-images.githubusercontent.com/65309756/104778338-6ccc9a80-573a-11eb-995e-514952d31aa4.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Vegan',
      categoryName: 'Lunch',
      category: categories[1]._id,
      description:'Lunch',
      image: 'https://user-images.githubusercontent.com/65309756/104778396-853cb500-573a-11eb-8f83-2684530dbc5b.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Baked Cherry',
      categoryName: 'Dessert',
      category: categories[2]._id,
      description:'Dessert',
      image: 'https://user-images.githubusercontent.com/65309756/104778601-dfd61100-573a-11eb-82d9-843ba2fdf024.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Baked Apple',
      categoryName: 'Dessert',
      category: categories[2]._id,
      description:'Dessert',
      image: 'https://user-images.githubusercontent.com/65309756/104778657-f67c6800-573a-11eb-9d99-49a4c2a29a17.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Baked Peach',
      categoryName: 'Dessert',
      category: categories[2]._id,
      description:'Dessert',
      image: 'https://user-images.githubusercontent.com/65309756/104778818-38a5a980-573b-11eb-855c-b7f64e1f3356.png',
      price: 1.00,
      quantity: 100
    },
    {
      name: 'Chocolate Smores',
      categoryName: 'Dessert',
      category: categories[2]._id,
      description:'Dessert',
      image: 'https://user-images.githubusercontent.com/65309756/104778731-157afa00-573b-11eb-8357-2011bf50036b.png',
      price: 1.00,
      quantity: 100
    }
    ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
