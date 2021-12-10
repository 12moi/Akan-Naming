let btnSubmit=document.getElementById("btn");

let inputMonth=document.getElementById("#month");
let inputDate=document.getElementByI("#date");
let inputYear=document.getElementById("#year");


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let month=inputMonth.Value;
    let year=inputYear.value;
    let date=inputDate.value;

    results.innerText =moment(`${month}/${date}/${year}`,`DD/MM/YYYY`, true).Value()
});