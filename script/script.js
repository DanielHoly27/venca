let input = document.getElementById("input");

//console.log("prvek v inputu je: ", input)

function Add(element){
    input.value += element;
}

function sum(){
    výsledek = eval(input.value);
    input.value += " = " + výsledek;
}

function del(){
    input.value = "";
}