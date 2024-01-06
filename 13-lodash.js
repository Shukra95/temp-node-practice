//lodash 

const _=require('lodash');

const items= [1,[2,[3,[4,[5,[6]]]]]];
const newItems=_.flattenDeep(items);    //flattens the items in the list to a single list

console.log(newItems);