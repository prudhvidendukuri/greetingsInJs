var name = prompt("Welcome to My Website, May I know your Name");
var date = new Date();
var time = date.getHours();

if (time < 12) {
    alert( "Very Good Morning " + name +" Enjoy your Day");
    
}else if (time < 15 ){ 
    alert("Good Afternoon " + name);

}else if (time < 18 ){
    alert("Good Evening " + name);
}else {
    alert("Good Nigth" + name );
}
