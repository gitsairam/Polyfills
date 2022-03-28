// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

Array.prototype.myMap = function (cb) {
  let modified_arr = [];
  for (let i = 0; i < this.length; i++) {
    modified_arr.push(cb(this[i], i, this));
  }
  return modified_arr;
};

let myArr = [1, 2, 3, 4, 5, 6];
let newmyArr = myArr.myMap((el) => {
  return el * 2;
});
console.log(newmyArr);

Array.prototype.myFilter = function (cb) {
  let modified_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      modified_arr.push(this[i]);
    }
  }
  return modified_arr;
};
console.log(
  myArr.myFilter((el) => {
    return el > 2;
  })
);

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

var arr = [
  { shape: 'square', color: 'red', used: 1, instances: 1 },
  { shape: 'square', color: 'red', used: 2, instances: 1 },
  { shape: 'circle', color: 'blue', used: 0, instances: 0 },
  { shape: 'square', color: 'blue', used: 4, instances: 4 },
  { shape: 'circle', color: 'red', used: 1, instances: 1 },
  { shape: 'circle', color: 'red', used: 1, instances: 0 },
  { shape: 'square', color: 'blue', used: 4, instances: 5 },
  { shape: 'square', color: 'red', used: 2, instances: 1 },
];

var obj = {};

var helper = {};
var result = arr.reduce(function (r, o) {
  var key = o.shape + '-' + o.color;

  if (!helper[key]) {
    helper[key] = Object.assign({}, o); // create a copy of o
    r.push(helper[key]);
  } else {
    helper[key].used += o.used;
    helper[key].instances += o.instances;
  }

  return r;
}, []);

console.log(result);
