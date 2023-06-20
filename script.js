var itemsArr = [];

function addItems(){
    var Items = {
        itemList: item.value,
        priceList: price.value
    }
    if(item.value && price.value){
        itemsArr.push(Items);
        item.value = ''
        price.value = ''
    console.log("its work");

    }
    else{

        alert("add items")
      //  document.getElementById("addItems").style.display = "block"
    }
    showItems();
}
function deleteItems(Delete){
    itemsArr.splice(Delete);
    showItems();
}
function editItems(edit){
    var Items = {
        itemList: item.value,
        priceList: price.value
    }
    if(item.value && price.value){
    itemsArr.splice(edit, 1, Items)
        item.value = ''
        price.value = ''
    console.log("its work");

    }
    else{

        alert("add items")
      //  document.getElementById("addItems").style.display = "block"
    }
    showItems();
}
function showItems(){
    show.innerHTML = ""
    show.innerHTML = `
    <tr>
    <th>S/N</th>
    <th>Items</th>
    <th>Price</th>
    <th>Action</th>
    </tr>`
    for(i=0; i < itemsArr.length; i++){
        show.innerHTML += `
    <tr>
    <td>${1+i}</td>
    <td>${itemsArr[i].itemList}</td>
    <td>$ ${itemsArr[i].priceList}</td>
    <td>
    <button onclick="editItems(${i})">Edit</button>
    <button onclick="deleteItems(${i})">Delete</button>
    </td>
    </tr>`
    }
    document.getElementById("itemsAdded").style.display = "none"
}