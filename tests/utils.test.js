const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

// Imagine you just got a job with a MeasureIt.com. They want to create an app that measures everything. You'll need some methods that can return measurements.

// * Area should return the area of a rectangle.
// * Perimeter should return the perimeter of a rectangle.
// * Should return the area of a circle with radius.
// * Stretch: Test that any negative widths, breadths, or radii return null

// You'll start by writing pending tests for these methods. Then write functions that make the tests pass.

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================


it("area should equal w * h", function() {
  const width = 10, height = 50, area = utils.area(width, height)
  expect(width).to.be.a("number")
  expect(height).to.be.a("number")
  expect(area).to.be.a("number")
  expect(area).to.equal(width * height)
})

it("should return perimeter", function() {
  const width = 10, height = 50, perimeter= utils.perimeter(width, height)
  expect(width).to.be.a("number")
  expect(height).to.be.a("number")
  expect(perimeter).to.be.a("number")
  expect(perimeter).to.equal((width*2)+(height*2))
})

it("should return circle area", function() {
  const radius = 10, circle_area = utils.circleArea(radius)
  expect(radius).to.be.a("number")
  expect(circle_area).to.equal(Math.PI * Math.pow(radius, 2))
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart.length).to.equal(0)
})


it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart.length).to.equal(1)
  expect(cart).to.be.a("array")

})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  expect(utils.getNumItemsInCart()).to.equal(1)
})

it("Should remove items from cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart()
  let cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart.length).to.equal(1)
  utils.removeItemFromCart(item)
  cart = utils.getShoppingCart()
  expect(cart.length).to.equal(0)

})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
