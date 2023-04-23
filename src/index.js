const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('./models/productModels');

dotenv.config();

// reading Products File from Data
const products_list = JSON.parse(
  fs.readFileSync(`${__dirname}/./dev-data/products.json`)
);

//inserting data into DB
async function seedWithDummyData() {
  try {
    // CLEAR DB
    await Product.deleteMany({});

    const createdProducts = await Product.insertMany(products_list);

    console.log(`${createdProducts.length} products created.`);
  } catch (error) {
    console.error(`Error seeding data: ${error}`);
    process.exit(1);
  }
}

//connect to DB
mongoose
  .connect(process.env.DATABASE_URL || 'mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('> Connected...'), seedWithDummyData())
  .catch((err) =>
    console.log(`> Error while connecting to mongoDB : ${err.message}`)
  );

app.listen(3000, () => console.log('Server running......'));
