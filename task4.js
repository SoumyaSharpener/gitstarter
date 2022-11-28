var items=document.getElementsByClassName('list-group-item');
items[1].textContent='hello';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
items[i].style.fontWeight='bold';
}