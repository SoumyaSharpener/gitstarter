//var items =document.querySelector('.list-group-item:nth-child(2)');
//items.style.backgroundColor='green';
//var nextitems =document.querySelector('.list-group-item:nth-child(3)');
//nextitems.style.color='white';

var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}