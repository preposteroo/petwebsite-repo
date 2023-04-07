function showTime() {
      let date = new Date();
      document.getElementById("time").innerHTML=date.toString().substring(0,date.toString().indexOf("G"));
      setTimeout(showTime, 1000);
            }
function required() {
    if (document.getElementById("cat").checked==false && document.getElementById("dog").checked==false){
        alert("All fields must be filled");
        return false;
    }
    if (document.getElementById("cat").checked==true && document.getElementById("dog").checked==true){
        alert("You cannot select both Cat and Dog");
        return false;
    }
    if (document.getElementById("dogBreed").value=="Does Not Apply" && document.getElementById("catBreed").value=="Does Not Apply"){
        alert("All fields must be filled");
        return false;
    }
    if (document.getElementById("F").checked==false && document.getElementById("M").checked==false && document.getElementById("DM").checked==false){
        alert("All fields must be filled");  
        return false;
    }
    if (document.getElementById("F").checked==true && document.getElementById("M").checked==true){
        alert("Please select Doesn't Matter for preferred gender");
        return false;
    }
    
    if (document.getElementById("kids").checked==false &&  document.getElementById("cats").checked==false &&  document.getElementById("dogs").checked==false &&  document.getElementById("not").checked==false){
        alert("All fields must be filled");  
        return false;
    }
    return true;
}     

function validate() {
    if (document.getElementById("cat").checked==false && document.getElementById("dog").checked==false){
            alert("All fields must be filled");
            return false;
        }
    if (document.getElementById("cat").checked==true && document.getElementById("dog").checked==true){
        alert("You cannot select Cat and Dog in the same form");
        return false;
    }
    if (document.getElementById("dogBreed").value=="Does Not Apply" && document.getElementById("catBreed").value=="Does Not Apply"){
    alert("All fields must be filled");
    return false;
}
    if (document.getElementById("dogBreed").value!="Does Not Apply" && document.getElementById("catBreed").value!="Does Not Apply"){
    alert("Please only fill out the form for a cat or dog");
    return false;
}
    if (document.getElementById("F").checked==false && document.getElementById("M").checked==false){
        alert("All fields must be filled");  
        return false;
    }
    if (document.getElementById("F").checked==true && document.getElementById("M").checked==true){
    alert("Please only select Male or Female, not both.");  
    return false;
}
    
     if (document.getElementById("kids").checked==false &&  document.getElementById("cats").checked==false &&  document.getElementById("dogs").checked==false &&  document.getElementById("not").checked==false){
        alert("All fields must be filled");  
        return false;
    }
    
     if ((document.getElementById("kids").checked==true ||  document.getElementById("cats").checked==true ||  document.getElementById("dogs").checked==true) &&  document.getElementById("not").checked==true){
        alert("All fields must be filled properly");  
        return false;
    }
    
    if (document.getElementById("comment").value=="" || document.getElementById("ownername").value=="" || document.getElementById("owneremail").value=="" ){
        alert("All fields must be filled properly"); 
        return false;
    }
    

}