const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute')
const second=document.querySelector('.second')
const start=document.querySelector('.start')
const pause=document.querySelector('.pause')
const resume=document.querySelector('.resume')
const stop=document.querySelector('.stop')
const hourDisplay=document.querySelector('.hourDisplay')
const minuteDisplay=document.querySelector('.minuteDisplay')
const secondDisplay=document.querySelector('.secondDisplay')

let hourCount=0;
let minuteCount=0;
let secondCount=0;
hour.addEventListener('change',(e)=>{
  hourCount=e.target.value;
})

minute.addEventListener('change',(e)=>{
    minuteCount=e.target.value;
})

second.addEventListener('change',(e)=>{
    secondCount=e.target.value;
})

start.addEventListener('click',()=>{
    // while(hourCount>0){
    // hourDisplay.innerText=hourCount;
    // hourCount--;
    //     hourDisplay.innerText=hourCount;
  hourDisplay.innerText=hourCount
    minuteDisplay.innerText=minuteCount;
    secondDisplay.innerText=secondCount;
    // }
//   let hourId=  setInterval(()=>{
//        hourDisplay.innerText=hourCount;
       
//     hourCount--; 
//     if(hourCount <0)
//        {
//         clearInterval(hourId)
//        }
//     },1000)

let secondId=setInterval(()=>{
  secondCount--;
  secondDisplay.innerText=secondCount;
  if(secondCount==0){
    minuteCount--;
    minuteDisplay.innerText=minuteCount
    clearInterval(secondCount)
  }
},1000)
    
})