document.onkeypress = function (eventKeyName) {
    eventKeyName = eventKeyName || window.event;
    if(eventKeyName.keyCode==13){
       console.log('You have pressed enter key');
       google();
    } else {
       console.log(String.fromCharCode(eventKeyName.keyCode));
 }
};

function google(){
    let kgf = document.getElementById("search").value;
    window.open("https://www.google.com/search?q="+kgf,"_self");
}