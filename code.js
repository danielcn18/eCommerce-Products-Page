// array - cart
var cart = [];
count = 0;

// function - add to cart
function add(e){
    var value = e.value;
    var object = {value, count};
    cart.push(object);
    console.log(cart);
    var mySrc = e.parentNode.childNodes[1].src;
    /* var myValue = e.parentNode.childNodes[1].value; */
    var display = document.getElementById('contain-cart');
    var myDiv = `
    <div>
        <img src="${mySrc}" class="display-cart-item">
        <button class="delete-btn" onclick="remove(this)" value="${count}">Delete</button>
    </div>`;
    display.innerHTML += myDiv;
    count++;
}

function remove(e){ 
    /* cart.forEach(function(obj){
        if(obj.count == e.count){

        } 
    }); */
    
    console.log(cart);

    var parent = e.parentNode;
    parent.remove();
}


/* const deleteButtons = document.getElementsByClassName('delete-btn');
for (let i = 0; i < deleteButtons.length; i++) {
deleteButtons[i].addEventListener('click', function() {
    const item = this.parentNode;
    const text = item.firstChild.nodeValue.trim();
    const index = Array.from(item.parentNode.children).indexOf(item);
    // assume items is an array containing the text of each list item
    const items=[]
    items.splice(index, 1);
    item.remove();
    console.log(`Item "${text}" deleted`);
    console.log(cart);
});
} */

/* console.log(cart); */