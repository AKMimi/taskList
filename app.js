let val;

const list = document.querySelector('ul');
const listItem = document.querySelector('li');

val = list;
val = listItem;

// get child nodes 
val = list.childNodes;
val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

console.log(val);