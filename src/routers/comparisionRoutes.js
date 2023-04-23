//eq,gt,gte,lt,lte,in
// $eq=Matches values that are equal to a specified value.
// $gt=Matches values that are greater than a specified value.
// $gte=Matches values that are greater than or equal to a specified value.
// $lt=Matches values that are less than a specified value.
// $lte=Matches values that are less than or equal to a specified value.
// $in=Matches any of the values specified in an array.

const router = require('express').Router();
const Product = require('../models/productModels');

//  Will give a price which is qual to 19.99
router.get('/eq', async (req, res) => {
  try {
    //Write a code here for eq operator
  } catch (error) {
    res.status(404).send(error);
  }
});
// Will give a value which has a price greater than 19.99
// Greater Than Symbol="$gt"
router.get('/gt', async (req, res) => {
  try {
    // write a code here for gt operator
  } catch (error) {
    res.status(404).send(error);
  }
});

// will give a price which is greater than or equal to 100
// Greater Than or equal to Symbol="$gte"
router.get('/gte', async (req, res) => {
  try {
    // Write a code here for gte operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//will give a price which is less than 100
// Less Than Symbol="$lt"
router.get('/lt', async (req, res) => {
  try {
    // Write a code here for lt operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//will give a price which is less than or equal to 100
// Less Than Equal To Symbol="$lte"
router.get('/lte', async (req, res) => {
  try {
    // Write a code here for lte operator
  } catch (error) {
    res.status(404).send(error);
  }
});

//will return price which includes 100,200
//in symbol="$in"
router.get('/in', async (req, res) => {
  try {
    // Write a code here for in operator
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;
