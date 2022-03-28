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
