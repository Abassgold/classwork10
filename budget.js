var itemsArr = [];

function addItem(){
    var Items = {
        itemList: item.value,
        priceList: price.value
    }
    if(item.value && price.value){
        itemsArr.push(Items);
        document.getElementById("Success").style.display = "block"
        document.getElementById("UpdateSuccesful").style.display = "none"
        document.getElementById("UpdateUnsuccesful").style.display = "none"
        document.getElementById("FillUpSpace").style.display = "none"
        item.value = ''
        price.value = ''
        console.log("its work");

    }
    else{
        document.getElementById("Success").style.display = "none"
        document.getElementById("UpdateSuccesful").style.display = "none"
        document.getElementById("UpdateUnsuccesful").style.display = "none"
        document.getElementById("FillUpSpace").style.display = "block"
    }
    showItems();
}
function deleteItems(Delete){
    itemsArr.splice(Delete);
    document.getElementById("Success").style.display = "none"
    document.getElementById("UpdateSuccesful").style.display = "none"
    document.getElementById("UpdateUnsuccesful").style.display = "none"
    document.getElementById("FillUpSpace").style.display = "none"
    showItems();
}
function editItems(edit){
    var Items = {
        itemList: item.value,
        priceList: price.value
    }
    if(item.value && price.value){
    itemsArr.splice(edit, 1, Items);
    document.getElementById("Success").style.display = "none"
    document.getElementById("UpdateSuccesful").style.display = "block"
    document.getElementById("UpdateUnsuccesful").style.display = "none"
    document.getElementById("FillUpSpace").style.display = "none"
        item.value = ''
        price.value = ''
    console.log("its work");

    }
    else{
        document.getElementById("Success").style.display = "none"
        document.getElementById("UpdateSuccesful").style.display = "none"
        document.getElementById("UpdateUnsuccesful").style.display = "block"
        document.getElementById("FillUpSpace").style.display = "none"
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