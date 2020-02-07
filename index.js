// javascript array methods 


// 1) Array.push()
// Adding element at the end of the array , we can add and removed array can dynamically changes the 
// length 

const items = [1,2,3,4,5];
//before push operation
console.log(items);
items.push(6);
//after push operation
console.log(items);

// before items length was 5 , now one element 6 is added to items array and length is now 6.


/*
2) Array.unshift() adding elements at the front of the array
*/

const kl = [3,4,8,5,6];
//before unshift
console.log(kl);
kl.unshift(3,23);
//after unshift
console.log(kl);


/*

3) Array.pop() remove elements from the end of the array 

*/

const jk = [9,0,6,7,5];
//before pop operation
console.log(jk);
const l = jk.pop();
// after pop operation
console.log(jk);


// function abc() {
//     console.log('called');
// }

// let x =  function(d, callback) {
//     setTimeout(function(){
//        console.log(d, callback);
//     });
// }

// x([], abc());


let y = ["a", "a", "b", "C", "D", "g", "h", "i", "y", "y", "z"];

let ui = [1, 4,6 ,7,10, 4,5,3,9];

var first = 0;
var second = 0;
var third = 0;
for(let i = 0; i < ui.length; i ++) {
    //  if(ui[i] > k) {
    //      k = ui[i];
    //  }


     if (ui[i] > first) 
        { 
            third = second; 
            second = first; 
            first = ui[i]; 
        } 
   
        /* If arr[i] is in between first and second then update second  */
        else if (ui[i] > second) 
        { 
            third = second; 
            second = ui[i]; 
        } 
   
        else if (ui[i] > third) 
            third = ui[i]; 
}
console.log("max integer", first, second, third);

const lastIndex = y.filter((v, i,a) => {
     
    console.log(a.indexOf(v), v, i)

   return a.indexOf(v) !== i 

});

const newArray = [];

for(let i = 0; i < y.length; i++) {
    if(newArray.indexOf(y[i]) !== -1) {
        newArray.push(y[i]);
    } else {

    }
}

console.log(newArray);

const a = { c: 1};
const b = { c: 1};

console.log(a == b);
console.log(a === b);

const duplicateArray = y.filter((item, i, array) => {
    if(array.indexOf(item) !== i) {
        return item;
    }
})

console.log("duplicateArray" , duplicateArray);
//console.log("indexOf LAST DUPLOCATION ELEMENT",lastIndex.lastIndexOf(lastIndex[lastIndex.length -1]))



// console.time('array index');
// for(var i = 0; i < 1000000; i = i + 1) {
//   var array = [1,2,3,4,5,6];
//   var val = array[array.length - 1];
// }
// console.timeEnd('array index');



var links = [1,2,3,4,5];
    for(let i = 0; i < links.length ; i++) {
        console.log(this);
        (function(i) {
              console.log('#' + i + ' ' + this);
        }).call(links[i], i);
    }



function getTotal() {
    const data = [1,2,3,6,7,8,9];
    var total = (data.length * (data.length+1)) / 2;
    for(let i = 0; i < data.length; i++) {
        total -= data[i];
    }
    return total;
}
const r = getTotal();
console.log("total", r);


const d = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];

console.log(d.sort());

if(typeof value === "string") {
   const d = JSON.parse(VALUE);
  abc(d);
} else {
    abc(value);
}


function abc () {
    if(arra) {
        ccdsod
    } else {
        obj
    }
}