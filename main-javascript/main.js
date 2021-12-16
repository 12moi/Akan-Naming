


function birthDay(e){
   e.preventDefault();
   var maleName=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kofi", "kwame"];
   var femaleName=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   var BIRTHDAY=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let gender=document.querySelector(".main").value;
    
    let form=document.querySelector(".My-Form");
    let DOB=document.querySelector(".Birth");

   let cc=year.split("")[0]+year.split("")[1];
   let yy=year.split("")[2]+year.split("")[3];
    let mm=month;
   let dd=day;
   let akanName;

   if(gender=="male"){
    akanName=maleName[BIRTHDAY];
   }else if(gender=="female"){
    akanName=femaleName[BIRTHDAY1];
  }else{
     akanName=null;
  }

  let displayName=document.createElement("h1");

  displayName=apendChild(Text);

  document.querySelector(".gender").appendChild(displayName);

  Text=document.createTextNode(`Your Akan name is, ${akanName}`);

}
let Form=document.querySelector(".My-Form");
Form.addEventListener("submit", (e)=>{
    e.preventDefault;
})






    