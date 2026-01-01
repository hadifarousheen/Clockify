
const getTime=document.querySelector('.getTime');
const result=document.querySelector('.result')
const selectOptions=document.querySelector('.selectOptions')
let userSearch;
const baseURL="https://timeapi.io/api/TimeZone/AvailableTimeZones";

let timezones;
let timezonesJson;
window.addEventListener("load",async()=>{
   timezones=await fetch(baseURL);
    timezonesJson=await timezones.json();
    console.log(timezonesJson)
 
   
    for(let i=0;i<timezonesJson.length;i++){
        const option=document.createElement('option');
        option.innerText=timezonesJson[i];
        option.value=timezonesJson[i];
        selectOptions.addEventListener('change',(e)=>{
        userSearch=e.target.value;
        console.log(userSearch)
        })
        selectOptions.appendChild(option);
    }
   
})

getTime.addEventListener('click',async()=>{
const res=await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${userSearch}`);
const resJson=await res.json();
console.log(resJson);
prevResult=resJson;
const time=resJson.time;
const date=resJson.date;
const day=resJson.dayOfWeek;
const timeZone=resJson.timeZone;



const timeTag=document.createElement("p");
timeTag.innerText="Time : "+time;
const dateTag=document.createElement('p');
dateTag.innerText="Date : "+date;
const dayTag=document.createElement('p');
dayTag.innerText="Day : "+day;
const timezoneTag=document.createElement('p');
timezoneTag.innerText="Time Zone : "+timeZone;

result.append(timezoneTag,dateTag,dayTag,timeTag)


})