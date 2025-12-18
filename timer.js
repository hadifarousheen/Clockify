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
    minuteCount=e.target.value-1;
})

second.addEventListener('change',(e)=>{
    secondCount=e.target.value;
})

start.addEventListener('click',()=>{
   
  hourDisplay.innerText=hourCount
    minuteDisplay.innerText=minuteCount;
    secondDisplay.innerText=secondCount;
    if(secondCount!=0 && minuteCount==0 && hourCount==0){
    let secondIntervalId=setInterval(()=>{
      if(secondCount==1){
        clearInterval(secondIntervalId)
      }
    secondCount--;
    secondDisplay.innerText=secondCount
   }
   ,1000)
  }

if(secondCount==0 && hourCount==0){

  let minuteId;


 minuteId= setInterval(()=>{
defaultSecondCount--;
secondDisplay.innerText=defaultSecondCount;
if(defaultSecondCount==0){
    minuteCount--;
     if(minuteCount<0){
    clearInterval(minuteId)
  }
   if(minuteCount>=0){
    minuteDisplay.innerText=minuteCount;
   }


 
  defaultSecondCount=60;
}

  },1000)

}



    
    
})