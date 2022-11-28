//var itemlist=document.querySelector('#items');
//parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='blue';
// console.log(itemlist.parentNode.parentNode);
//parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='blue';
// console.log(itemlist.parentElement.parentElement);

//childnodes
//console.log(itemlist.childNodes);

//console.log(itemlist.children);
//itemlist.children[0].style.backgroundColor='blue';
//firstchild
//console.log(itemlist.firstChild);
//firstelementchild
//console.log(itemlist.children);
//lastchild
//console.log(itemlist.lastChild);
//lastelementchild
//console.log(itemlist.lastElementChild);
//nextsibling
//console.log(itemlist.nextSibling);
//nextelementsibling
//console.log(itemlist.nextElementSibling);
//previoussibling
//console.log(itemlist.previousSibling);
//previouselementsibling
//console.log(itemlist.previousElementSibling);

//createelement

//create new div
var newdiv=document.createElement('div');
//add classname
newdiv.className='hello';
//add id
newdiv.id='hello1';
//set attribute
newdiv.setAttribute('title','hello div');
//create textnode
var newdivtext=document.createTextNode('Hello World');
//add text to div
newdiv.appendChild(newdivtext);
console.log(newdiv);
var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');
container.insertBefore(newdiv, h1);
newdiv.style.fontSize='30px';

var parentnode=document.getElementById('items');
parentnode.innerHTML='<li>Hello World</li>'+parentnode.innerHTML;