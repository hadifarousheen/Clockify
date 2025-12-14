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
let defaultSecondCount=60;
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
   
  hourDisplay.innerText=hourCount
    minuteDisplay.innerText=minuteCount;
    secondDisplay.innerText=secondCount;
    if(secondCount!=0){
    let secondIntervalId=setInterval(()=>{
      if(secondCount==1){
        clearInterval(secondIntervalId)
      }
    secondCount--;
    secondDisplay.innerText=secondCount
   }
   ,1000)
  }
 let minuteIntervalId= setInterval(()=>{
    secondDisplay.innerText=defaultSecondCount;
    defaultSecondCount--;
    if(defaultSecondCount==0){
      minuteCount--;
           minuteCount.innerText=minuteCount;
      defaultSecondCount=60;
    }
      if(minuteCount==0){
        clearInterval(minuteIntervalId)
      }
 
    
    secondDisplay.innerHTML=defaultSecondCount;
    
  },1000)

    
    
})