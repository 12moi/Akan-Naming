


var validate=function(){

    var day=document.getElementById("day").value;
    
    var dd=parseInt(day);
    var cc= Math.ceil(year = 100)
    
    
    var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var month=document.getElementById("month").value;
    var mm=parseInt(month);
    var year=document.getElementById("year").value;
    var yy=parseInt(year);
    
    var femaleName=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    var maleName=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var birthday=new Date(dd +"/" +mm+"/"+yy);
    
    // var dayOfweek=birthday.getDay();

    var results=(cc/4-2*cc-1+(5*yy)/4+(26*(mm+1))/10+dd)%7;
   
    if(document.getElementById("gender").checked){
        
        var gender="female";
        
    }else{
        var gender="male";
        
    }


     if(mm<1 || mm>12 && mm==2 || dd>29){
        alert("Invalid month!");

     }else if(dd<1 || dd>31){
         alert("invalid date");

     }else if(Math.round(results)==0 && gender==="female"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"Your Akan name is" +femaleName[0];
       
     }else if(Math.round(results)==1 && gender==="female"){

         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[1];
     }else if(Math.roond(results)==2 && gender==="female"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[2];
     }else if(Math.round(results)==3 && gender==="female"){
        document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[3];
     }else if(Math.round(results)==4 && gender==="female"){
          document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[4];
     }else if(Math.round(results)==5 && gender==="female"){
          document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[5];
     }else if(Math.round(results)==6 && gender==="female"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +femaleName[6];
     }else if(Math.round(results)==0 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[0];
     }else if(Math.round(results)==1 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[1];
     }else if(Math.round(results)==2 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[2];
     }else if(Math.round(results)==3 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[3];
     }else if(Math.round(results)==4 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[4];
     }else if(Math.round(results)==5 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[5];
     }else if(Math.round(results)==6 && gender==="male"){
         document.getElementById("display").innerHTML="You were born" +days[dayOfweek] +"your Akan name is" +maleName[6];
     }else{
         alert("Fill in all the required fields");
     }
     document.getElementById("myForm").reset()
}






           
    