menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];
function getmenu(){
    var htmldata1 = "";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata1 = htmldata1 + menu_list_array[i] + '<br>'
    }   
    document.getElementById("display_menu").innerHTML = htmldata1;
}

function add_item(){
    var htmldata2;
    var imgtags='<img id="im1" src="PepperoniPizza.png">'
    var item=document.getElementById("add_item").value;
    htmldata2="";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata2=htmldata2+imgtags+ menu_list_array[i]+'<br>';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata2;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}
