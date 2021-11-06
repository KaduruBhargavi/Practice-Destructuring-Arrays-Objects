"use strict";

//Retrieve elements from array without destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//Retrieve elements from array with destructuring
const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

//sending a single object to orderDelivery method by destructuring the object with multiple prameters
restaurant.orderDelivery({
  time: "10:30",
  address: "mulapeta",
  starterIndex: 2,
  mainIndex: 2,
});

//to skip a element add space
let [first, , second] = restaurant.categories; //italian vegetarian
console.log(first, second);

/*
//swapping the elements without destructuring
const temp = first;
first = second;
second = temp;
console.log(first, second);
*/

//swapping the elements with destructuring
let [main, secondary] = restaurant.starterMenu;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//calling order method
console.log(restaurant.order(0, 2));
const [firstItem, secondItem] = restaurant.order(0, 2);
console.log(firstItem, secondItem);

//nested destructuring
const nested = [2, 3, [4, 5]];

const [i, , j] = nested;
console.log(i, j); // 2,[4,5]

const [k, , [l, m]] = nested;
console.log(k, l, m); //as individual values--2,4,5.

//default values
const [p, q, r = 1] = [3, 4];
//console.log(p, q, r); // => return 3,4,undefined
console.log(p, q, r); // => returns  3,4,1

//Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //retrieve by exact property names

//Re-assigning property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //gives the same result as above

//assigning default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
//mutating variables
let e = 222;
let f = 111;
const obj = { e: 23, f: 11, g: 10 };
({ f, e } = obj);
console.log(e, f);
//nested objects
const {
  fri: { open: o, close: s },
} = restaurant.openingHours;
console.log(o, s);
