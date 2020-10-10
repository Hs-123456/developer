var arr = 0;
function myFunction() {
 if(arr == 0){
      document.getElementById("bd").style.backgroundColor = "blue";
        change("blue");
     console.log(arr);
     arr++;
    
 }
    else if(arr == 1){
         document.getElementById("bd").style.backgroundColor = "green";
        change("green")
        console.log(arr);
        arr++;
    
    }
    
    else if(arr == 2){
         document.getElementById("bd").style.backgroundColor = "orange";
            change("orange")
        console.log(arr);
         arr = 0;
    
    }else {
        
        console.log("Happy");
    }
    
}

function change(color){
    document.getElementById("demo").style.backgroundColor = color;
    
}



