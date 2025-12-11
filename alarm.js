const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute')
const ampm=document.querySelector('.ampm')
if(!localStorage.getItem('alarmList')){
let alarmList=[];
localStorage.setItem('alarmList',JSON.stringify(alarmList))
}
const save=document.querySelector('.save');

const alarms=document.querySelector('.alarms')

document.addEventListener('DOMContentLoaded',()=>{
 let list=  JSON.parse(localStorage.getItem('alarmList'))
//  console.log(list)
for(let i=0;i<list.length;i++){
// console.log("hi")
  const h1=document.createElement('h1');
    h1.innerText=list[i].hour+' : '+ list[i].minute+' : '+list[i].ampm;
    const button=document.createElement('button')
    button.innerText="Delete Alarm";
    alarms.appendChild(h1)
    alarms.appendChild(button)
  
}})

let userHour;
let userMinute;
let userPmAm;
hour.addEventListener('change',(e)=>{
userHour=e.target.value;
console.log(userHour)
})

minute.addEventListener('change',(e)=>{
userMinute=e.target.value;
console.log(userMinute)
})

ampm.addEventListener('change',(e)=>{
userPmAm=e.target.value;
console.log(userPmAm)
})

save.addEventListener('click',()=>{
  let list=  JSON.parse(localStorage.getItem('alarmList'))

    const newAlarmObject={};
    newAlarmObject.id=new Date();
    newAlarmObject.hour=userHour;
    newAlarmObject.minute=userMinute;
    newAlarmObject.ampm=userPmAm;
    list.push(newAlarmObject);
    localStorage.setItem('alarmList',JSON.stringify(list))
    // userHour="";
// console.log(list)
 window.location.reload();
})


// setInterval(function() {
//   window.location.reload();
// }, 1000);